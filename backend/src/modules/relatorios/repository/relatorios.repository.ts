import { Injectable } from '@nestjs/common';
import { Prisma, TipoMovimentacaoEstoque } from '@generated/prisma/client';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { classificarValidade } from '@src/modules/estoque/services/estoque-validade.service';
import {
  RelatorioGeralRequerimentosFiltro,
  RelatorioGeralRequerimentosRow,
} from '../types/relatorio-requerimentos.types';
import {
  RelatorioEstoqueCards,
  RelatorioEstoqueFiltro,
  RelatorioEstoqueMovimentacao,
  RelatorioEstoqueResultado,
} from '../types/relatorio-estoque.types';

type ItemRelatorio = {
  quantidade: number;
  produtoId: string | null;
  medicamentoId: string | null;
  Requerimento: {
    id: string;
    base: string;
    ambulanciaId: string | null;
    Ambulancia: { id: string; nome: string; tipo: string } | null;
  };
};

@Injectable()
export class RelatoriosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findRelatorioGeralRequerimentos(
    filtro: RelatorioGeralRequerimentosFiltro
  ): Promise<RelatorioGeralRequerimentosRow[]> {
    const items = (await this.prisma.requerimentoItem.findMany({
      where: {
        deleted_by: null,
        Requerimento: {
          status: { in: filtro.status },
          ...(filtro.dataInicial || filtro.dataFinal
            ? {
                data_inicio: {
                  ...(filtro.dataInicial && { gte: filtro.dataInicial }),
                  ...(filtro.dataFinal && { lte: filtro.dataFinal }),
                },
              }
            : {}),
          ...(filtro.base && { base: filtro.base }),
          ...(filtro.ambulanciaId && { ambulanciaId: filtro.ambulanciaId }),
          ...(filtro.tipo && { tipo: filtro.tipo }),
        },
      },
      select: {
        quantidade: true,
        produtoId: true,
        medicamentoId: true,
        Requerimento: {
          select: {
            id: true,
            base: true,
            ambulanciaId: true,
            Ambulancia: { select: { id: true, nome: true, tipo: true } },
          },
        },
      },
    })) as unknown as ItemRelatorio[];

    const grouped = new Map<
      string,
      RelatorioGeralRequerimentosRow & {
        medicationRequests: Set<string>;
        productRequests: Set<string>;
      }
    >();

    for (const item of items) {
      const ambulanceKey = item.Requerimento.ambulanciaId ?? 'sem-ambulancia';
      const key = `${item.Requerimento.base}:${ambulanceKey}`;
      const current = grouped.get(key) ?? {
        base: item.Requerimento.base,
        ambulancia: item.Requerimento.Ambulancia,
        requerimentosMedicamentos: 0,
        quantidadeMedicamentos: 0,
        requerimentosProdutos: 0,
        quantidadeProdutos: 0,
        medicationRequests: new Set<string>(),
        productRequests: new Set<string>(),
      };

      if (item.medicamentoId) {
        current.medicationRequests.add(item.Requerimento.id);
        current.quantidadeMedicamentos += item.quantidade;
      }
      if (item.produtoId) {
        current.productRequests.add(item.Requerimento.id);
        current.quantidadeProdutos += item.quantidade;
      }
      current.requerimentosMedicamentos = current.medicationRequests.size;
      current.requerimentosProdutos = current.productRequests.size;
      grouped.set(key, current);
    }

    return [...grouped.values()].map(
      ({ medicationRequests: _m, productRequests: _p, ...row }) => row
    );
  }

  async findRelatorioEstoque(
    filtro: RelatorioEstoqueFiltro
  ): Promise<RelatorioEstoqueResultado> {
    const where = this.buildEstoqueMovimentacaoWhere(filtro);
    const [total, movements, groupedTypes, lotes] = await Promise.all([
      this.prisma.estoqueMovimentacao.count({ where }),
      this.prisma.estoqueMovimentacao.findMany({
        where,
        skip: (filtro.page - 1) * filtro.limit,
        take: filtro.limit,
        orderBy: { created_at: 'desc' },
        select: {
          id: true,
          created_at: true,
          tipo: true,
          quantidade: true,
          saldoAnterior: true,
          saldoPosterior: true,
          observacao: true,
          User: { select: { nome: true } },
          Lote: {
            select: {
              lote: true,
              validade: true,
              Estoque: {
                select: {
                  Produto: { select: { nome: true, codigo: true } },
                  Medicamento: { select: { nome: true, codigo: true } },
                },
              },
            },
          },
        },
      }),
      this.prisma.estoqueMovimentacao.groupBy({
        by: ['tipo'],
        where,
        _sum: { quantidade: true },
      }),
      this.prisma.estoqueLote.findMany({
        where: { Estoque: { baseId: filtro.baseId }, active: true },
        select: { quantidade: true, validade: true },
      }),
    ]);

    const cards: RelatorioEstoqueCards = {
      entradas: this.sumTypes(groupedTypes, [
        TipoMovimentacaoEstoque.Entrada,
        TipoMovimentacaoEstoque.AjusteEntrada,
        TipoMovimentacaoEstoque.TransferenciaEntrada,
      ]),
      saidas: this.sumTypes(groupedTypes, [
        TipoMovimentacaoEstoque.Saida,
        TipoMovimentacaoEstoque.AjusteSaida,
        TipoMovimentacaoEstoque.TransferenciaSaida,
      ]),
      perdas: this.sumTypes(groupedTypes, [TipoMovimentacaoEstoque.Perda]),
      vencimentos: this.sumTypes(groupedTypes, [TipoMovimentacaoEstoque.Vencimento]),
      saldoVencido: 0,
      lotesProximosVencimento: 0,
    };
    for (const lote of lotes) {
      const status = classificarValidade(lote.validade).status;
      if (status === 'Vencido') cards.saldoVencido += lote.quantidade;
      if (status === 'Atencao' || status === 'Alerta') {
        cards.lotesProximosVencimento += 1;
      }
    }

    const items: RelatorioEstoqueMovimentacao[] = movements.map((movement) => {
      const produto = movement.Lote.Estoque.Produto;
      const medicamento = movement.Lote.Estoque.Medicamento;
      return {
        id: movement.id,
        created_at: movement.created_at,
        tipo: movement.tipo,
        quantidade: movement.quantidade,
        saldoAnterior: movement.saldoAnterior,
        saldoPosterior: movement.saldoPosterior,
        lote: movement.Lote.lote,
        validade: movement.Lote.validade,
        usuario: movement.User.nome,
        observacao: movement.observacao,
        item: produto
          ? { tipo: 'produto', nome: produto.nome, codigo: produto.codigo }
          : {
              tipo: 'medicamento',
              nome: medicamento!.nome,
              codigo: medicamento!.codigo,
            },
      };
    });

    return {
      items,
      cards,
      page: filtro.page,
      limit: filtro.limit,
      total,
      pages: Math.ceil(total / filtro.limit),
    };
  }

  private buildEstoqueMovimentacaoWhere(
    filtro: RelatorioEstoqueFiltro
  ): Prisma.EstoqueMovimentacaoWhereInput {
    const validade = this.buildValidadeWhere(filtro.validade);
    const search = filtro.search?.trim();
    const itemConditions: Prisma.EstoqueWhereInput[] = [];
    if (filtro.itemTipo !== 'medicamento') {
      itemConditions.push({ Produto: search ? { nome: { contains: search } } : { isNot: null } });
    }
    if (filtro.itemTipo !== 'produto') {
      itemConditions.push({ Medicamento: search ? { nome: { contains: search } } : { isNot: null } });
    }
    if (search && Number.isInteger(Number(search))) {
      const codigo = Number(search);
      itemConditions.push(
        ...(filtro.itemTipo !== 'medicamento' ? [{ Produto: { codigo } }] : []),
        ...(filtro.itemTipo !== 'produto' ? [{ Medicamento: { codigo } }] : [])
      );
    }
    return {
      ...(filtro.tipo && { tipo: filtro.tipo }),
      ...(filtro.dataInicial || filtro.dataFinal
        ? {
            created_at: {
              ...(filtro.dataInicial && { gte: filtro.dataInicial }),
              ...(filtro.dataFinal && { lte: filtro.dataFinal }),
            },
          }
        : {}),
      Lote: {
        Estoque: {
          baseId: filtro.baseId,
          ...(itemConditions.length > 0 ? { OR: itemConditions } : {}),
        },
        ...(validade ? { validade } : {}),
      },
    };
  }

  private buildValidadeWhere(status?: RelatorioEstoqueFiltro['validade']) {
    if (!status) return undefined;
    const start = new Date();
    start.setUTCHours(0, 0, 0, 0);
    const addDays = (days: number) =>
      new Date(start.getTime() + days * 86_400_000);
    if (status === 'SemValidade') return { equals: null };
    if (status === 'Vencido') return { lt: start };
    if (status === 'Alerta') return { gte: start, lte: addDays(7) };
    if (status === 'Atencao') return { gt: addDays(7), lte: addDays(15) };
    return { gt: addDays(15) };
  }

  private sumTypes(
    grouped: Array<{ tipo: TipoMovimentacaoEstoque; _sum: { quantidade: number | null } }>,
    types: TipoMovimentacaoEstoque[]
  ) {
    return grouped
      .filter((entry) => types.includes(entry.tipo))
      .reduce((sum, entry) => sum + (entry._sum.quantidade ?? 0), 0);
  }
}
