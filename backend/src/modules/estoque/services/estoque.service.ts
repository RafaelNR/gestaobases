import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, TipoMovimentacaoEstoque } from '@generated/prisma/client';
import { EstoqueRepository } from '../repository/estoque.repository';
import {
  buildChaveLote,
  classificarValidade,
  StatusValidadeEstoque,
} from './estoque-validade.service';
import { CreateLoteDto, EstoqueQueryDto } from '../dto/estoque.dto';
import { IUser } from '@/src/common/decorator/user.decorator';
import { TypeSetor } from '@/src/infra/guard/roles.decorator';

const TIPOS_ENTRADA = new Set<TipoMovimentacaoEstoque>([
  TipoMovimentacaoEstoque.Entrada,
  TipoMovimentacaoEstoque.AjusteEntrada,
  TipoMovimentacaoEstoque.TransferenciaEntrada,
]);

const TIPOS_SAIDA_BLOQUEADA = new Set<TipoMovimentacaoEstoque>([
  TipoMovimentacaoEstoque.Saida,
  TipoMovimentacaoEstoque.TransferenciaSaida,
]);

@Injectable()
export class EstoqueService {
  constructor(private readonly repository: EstoqueRepository) {}

  async createEstoque(data: {
    baseId: string;
    produtoId?: string;
    medicamentoId?: string;
    quantidadeMinima: number;
  }) {
    return this.repository.prisma.estoque.create({ data });
  }

  async createLote(data: CreateLoteDto, userId: string) {
    const existeEstoque = await this.repository.prisma.estoque.count({
      where: { id: data.estoqueId },
    });
    if (existeEstoque !== 1)
      throw new NotFoundException('Estoque não encontrado.');

    const chaveLote = buildChaveLote(data.lote, data.validade);
    return this.repository.prisma.$transaction(async (tx) => {
      const lote = await tx.estoqueLote.upsert({
        where: {
          estoqueId_chaveLote: { estoqueId: data.estoqueId, chaveLote },
        },
        update: { quantidade: { increment: data.quantidade }, active: true },
        create: { ...data, chaveLote },
      });
      await tx.estoqueMovimentacao.create({
        data: {
          loteId: lote.id,
          userId,
          tipo: 'Entrada',
          quantidade: data.quantidade,
          saldoAnterior: lote.quantidade - data.quantidade,
          saldoPosterior: lote.quantidade,
          observacao: 'Entrada via abertura de lote.',
        },
      });
      return lote;
    });
  }

  async movimentar(
    loteId: string,
    user: IUser,
    data: {
      tipo: TipoMovimentacaoEstoque;
      quantidade: number;
      observacao?: string;
    }
  ) {
    return this.repository.prisma.$transaction(
      async (tx) => {
        const lote = await tx.estoqueLote.findUnique({
          where: { id: loteId },
          include: { Estoque: { select: { baseId: true } } },
        });
        if (!lote)
          throw new NotFoundException('Lote de estoque não encontrado.');

        // Verifica se o usuário é da base e se o lote pertence a essa base
        if (user.setor === TypeSetor.Base) {
          if (user.baseId !== lote.Estoque.baseId) {
            throw new BadRequestException(
              'Você não tem permissão para movimentar estoque nesta base.'
            );
          }
        }

        const status = classificarValidade(lote.validade).status;
        if (
          TIPOS_SAIDA_BLOQUEADA.has(data.tipo) &&
          (lote.bloqueado || status === StatusValidadeEstoque.Vencido)
        ) {
          throw new ConflictException(
            'Lote bloqueado ou vencido não permite saída.'
          );
        }

        const entrada = TIPOS_ENTRADA.has(data.tipo);
        if (!entrada) {
          const debitado = await tx.estoqueLote.updateMany({
            where: { id: loteId, quantidade: { gte: data.quantidade } },
            data: { quantidade: { decrement: data.quantidade } },
          });
          if (debitado.count !== 1)
            throw new ConflictException(
              'Saldo insuficiente para a movimentação.'
            );
        } else {
          await tx.estoqueLote.update({
            where: { id: loteId },
            data: { quantidade: { increment: data.quantidade } },
          });
        }

        const atualizado = await tx.estoqueLote.findUniqueOrThrow({
          where: { id: loteId },
        });
        const saldoAnterior = entrada
          ? atualizado.quantidade - data.quantidade
          : atualizado.quantidade + data.quantidade;

        const movimentacao = await tx.estoqueMovimentacao.create({
          data: {
            loteId,
            userId: user.id,
            tipo: data.tipo,
            quantidade: data.quantidade,
            saldoAnterior,
            saldoPosterior: atualizado.quantidade,
            observacao: data.observacao,
          },
        });
        return { lote: atualizado, movimentacao };
      },
      { isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted }
    );
  }

  async bloquear(loteId: string, bloqueado: boolean, motivoBloqueio?: string) {
    try {
      return await this.repository.prisma.estoqueLote.update({
        where: { id: loteId },
        data: { bloqueado, motivoBloqueio: bloqueado ? motivoBloqueio : null },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Lote de estoque não encontrado.');
      }
      throw error;
    }
  }

  async softDelete(loteId: string, userId: string) {
    try {
      return await this.repository.prisma.$transaction(async (tx) => {
        const lote = await tx.estoqueLote.findUnique({ where: { id: loteId } });

        if (!lote)
          throw new NotFoundException('Lote de estoque não encontrado.');

        if (lote.quantidade !== 0)
          throw new ConflictException(
            'Lote com quantidade não pode ser desabilitado.'
          );

        await tx.estoqueMovimentacao.create({
          data: {
            loteId,
            userId,
            tipo: TipoMovimentacaoEstoque.Desabilitado,
            quantidade: lote.quantidade,
            saldoAnterior: lote.quantidade,
            saldoPosterior: 0,
            observacao: 'Lote desabilitado.',
          },
        });

        return await tx.estoqueLote.update({
          where: { id: loteId },
          data: { active: false },
        });
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Lote de estoque não encontrado.');
      }
      throw error;
    }
  }

  async findAll(user: IUser, page = 1, limit = 20, filters: EstoqueQueryDto) {
    let where: Prisma.EstoqueWhereInput = {};

    where = this.buildWhere(user, filters, where);

    const [total, items] = await Promise.all([
      this.repository.prisma.estoque.count({ where }),
      this.repository.prisma.estoque.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { updated_at: 'desc' },
        select: {
          id: true,
          baseId: true,
          quantidadeMinima: true,
          ativo: true,
          Produto: { select: { id: true, nome: true, codigo: true } },
          Medicamento: {
            select: { id: true, nome: true, codigo: true, especificacao: true },
          },
          Base: { select: { nome: true } },
        },
      }),
    ]);

    const resumo = new Map<
      string,
      {
        quantidadeTotal: number;
        proximaValidade: Date | null;
        proximaValidadeStatus: StatusValidadeEstoque | null;
        validadeResumo: Record<StatusValidadeEstoque, number>;
      }
    >();
    const estoqueIds = items.map((item) => item.id);
    if (estoqueIds.length > 0) {
      const lotes = await this.repository.prisma.estoqueLote.groupBy({
        by: ['estoqueId', 'validade'],
        where: { estoqueId: { in: estoqueIds }, active: true },
        _sum: { quantidade: true },
        _count: { _all: true },
      });
      for (const lote of lotes) {
        const status = classificarValidade(lote.validade).status;
        const atual = resumo.get(lote.estoqueId) ?? {
          quantidadeTotal: 0,
          proximaValidade: null,
          proximaValidadeStatus: null,
          validadeResumo: {
            SemValidade: 0,
            Regular: 0,
            Atencao: 0,
            Alerta: 0,
            Vencido: 0,
          },
        };
        atual.quantidadeTotal += lote._sum.quantidade ?? 0;
        atual.validadeResumo[status] += lote._count._all;
        if (
          lote.validade &&
          (!atual.proximaValidade || lote.validade < atual.proximaValidade)
        ) {
          atual.proximaValidade = lote.validade;
          atual.proximaValidadeStatus = status;
        }
        resumo.set(lote.estoqueId, atual);
      }
    }

    return {
      items: items.map((item) => ({
        ...item,
        ...(resumo.get(item.id) ?? {
          quantidadeTotal: 0,
          proximaValidade: null,
          proximaValidadeStatus: null,
          validadeResumo: {
            SemValidade: 0,
            Regular: 0,
            Atencao: 0,
            Alerta: 0,
            Vencido: 0,
          },
        }),
      })),
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    };
  }

  async findLotes(estoqueId: string, user: IUser) {
    const lotes = await this.repository.prisma.estoqueLote.findMany({
      where: {
        estoqueId,
        active: true,
        ...(user.setor === TypeSetor.Base
          ? { Estoque: { baseId: user.baseId } }
          : {}),
      },
      orderBy: [{ validade: 'asc' }, { created_at: 'asc' }],
    });

    return lotes.map((lote) => {
      const validade = classificarValidade(lote.validade);
      return {
        ...lote,
        ...validade,
        disponivelParaSaida:
          !lote.bloqueado &&
          validade.status !== StatusValidadeEstoque.Vencido &&
          lote.quantidade > 0,
      };
    });
  }

  async findMovimentacoesByLote(loteId: string, user: IUser) {
    return this.repository.prisma.estoqueMovimentacao.findMany({
      where: {
        loteId,
        ...(user.setor === TypeSetor.Base
          ? { Lote: { Estoque: { baseId: user.baseId } } }
          : {}),
      },
      orderBy: { created_at: 'desc' },
      include: {
        User: { select: { nome: true } },
      },
    });
  }

  // ------------------------ Helper --------------------------

  private buildWhere(
    user: IUser,
    query: EstoqueQueryDto,
    where: Prisma.EstoqueWhereInput
  ) {
    // Acesso a todas as bases
    if (
      [TypeSetor.Administrador, TypeSetor.Enfermagem, TypeSetor.Frota].includes(
        user.setor
      )
    ) {
      where.baseId = query.baseId ? query.baseId : undefined;
    }

    // Base
    if (user.setor === TypeSetor.Base) {
      if (!user.baseId)
        throw new NotFoundException('Não tem base vinculado ao seu usuário.');

      where.baseId = user.baseId;
    }

    // Almoxarifado
    if (user.setor === TypeSetor.Almoxarifado) query.tipo = 'produto';

    // Farmacia
    if (user.setor === TypeSetor.Farmacia) query.tipo = 'medicamento';

    // Produtos
    if (query.tipo === 'produto') where.produtoId = { not: null };
    // Medicamentos
    if (query.tipo === 'medicamento') where.medicamentoId = { not: null };

    // Status
    if (query.status) {
      const hoje = new Date();
      const inicioHoje = new Date(
        Date.UTC(hoje.getUTCFullYear(), hoje.getUTCMonth(), hoje.getUTCDate())
      );
      const dataLimite = (dias: number) =>
        new Date(inicioHoje.getTime() + dias * 86_400_000);
      const validade =
        query.status === StatusValidadeEstoque.SemValidade
          ? { validade: null }
          : query.status === StatusValidadeEstoque.Vencido
            ? { validade: { lt: inicioHoje } }
            : query.status === StatusValidadeEstoque.Alerta
              ? { validade: { gte: inicioHoje, lte: dataLimite(7) } }
              : query.status === StatusValidadeEstoque.Atencao
                ? { validade: { gt: dataLimite(7), lte: dataLimite(15) } }
                : { validade: { gt: dataLimite(15) } };
      where.lotes = { some: { active: true, ...validade } };
    }

    const search = query.search?.trim();
    if (search) {
      const searchConditions: Prisma.EstoqueWhereInput[] = [
        { Produto: { nome: { contains: search } } },
        { Medicamento: { nome: { contains: search } } },
      ];
      const codigo = Number(search);
      if (Number.isInteger(codigo)) {
        searchConditions.push(
          { Produto: { codigo } },
          { Medicamento: { codigo } }
        );
      }
      where.OR = searchConditions;
    }

    return where;
  }
}
