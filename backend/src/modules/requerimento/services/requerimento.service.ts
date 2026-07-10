import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, Status, TipoRequerimento } from '@generated/prisma/client';
import { IUser } from '@src/common/decorator/user.decorator';
import { TypeCargo, TypeSetor } from '@src/infra/guard/roles.decorator';
import {
  AddItemRequestDto,
  ChangeStatusRequestDto,
  CreateRequerimentoAlmoxarifadoAndCMERequestDto,
  CreateRequerimentoFarmaciaRequestDto,
  UpdateItemRequestDto,
  UpdateRequerimentoAlmoxarifadoAndCMERequestDto,
  UpdateRequerimentoFarmaciaRequestDto,
} from '../dto/requerimento.dto';
import { RequerimentoRepository } from '../repository/requerimento.repository';
import {
  RequerimentoItemResult,
  RequerimentoResult,
} from '../types/requerimento.types';
import {
  normalizeDate,
  normalizeNumero,
  normalizeText,
} from '@/src/common/helpers/normalize';
import {
  assertCondition,
  assertFound,
  assertPermission,
} from '@/src/common/helpers/assert';

// Transições de status permitidas para não-admins
const STATUS_TRANSITIONS: Partial<Record<Status, Status[]>> = {
  [Status.Recebido]: [Status.Analise, Status.Cancelado],
  [Status.Analise]: [Status.Separacao, Status.Cancelado],
  [Status.Separacao]: [Status.Finalizado, Status.Cancelado],
};

// Estados terminais — não podem ser alterados
const TERMINAL_STATUS: Status[] = [Status.Finalizado, Status.Cancelado];

type SyncItemRequest = AddItemRequestDto & { id?: string };

export type FiltroRequerimentos = {
  status?: Status;
  base?: string;
  userId?: string;
  ambulanciaId?: string;
  data_inicial?: Date | string;
  data_final?: Date | string;
  numero?: number | string;
};

@Injectable()
export class RequerimentoService {
  constructor(private readonly repo: RequerimentoRepository) {}

  // ── Helpers ───────────────────────────────────────────────────────────────

  // Verifica se o usuario tem permissão para ver todos os requerimentos
  private isGetAll(user: IUser, TIPO: TipoRequerimento): boolean {
    console.log('isGetAll', user, TIPO);

    if (TIPO === TipoRequerimento.Farmacia) {
      return (
        user.setor === TypeSetor.Administrador ||
        user.setor === TypeSetor.Farmacia ||
        user.setor === TypeSetor.Frota
      );
    }

    if (TIPO === TipoRequerimento.Almoxarifado) {
      return (
        user.setor === TypeSetor.Administrador ||
        user.setor === TypeSetor.Almoxarifado ||
        user.setor === TypeSetor.Frota
      );
    }

    if (TIPO === TipoRequerimento.CME) {
      return (
        user.setor === TypeSetor.Administrador ||
        user.setor === TypeSetor.CME ||
        user.setor === TypeSetor.Frota
      );
    }

    return false;
  }

  private buildFiltroWhere(
    filtro: FiltroRequerimentos
  ): Prisma.RequerimentoWhereInput {
    const where: Prisma.RequerimentoWhereInput = {};
    const status = normalizeText(filtro.status);
    const dataInicial = normalizeDate(filtro.data_inicial);
    const dataFinal = normalizeDate(filtro.data_final, true);

    if (status) {
      assertCondition(
        Object.values(Status).includes(status as Status),
        'Status inválido.'
      );
      where.status = status as Status;
    }

    const base = normalizeText(filtro.base);
    const userId = normalizeText(filtro.userId);
    const ambulanciaId = normalizeText(filtro.ambulanciaId);
    const numero = normalizeNumero(filtro.numero);

    if (base) where.base = base;
    if (userId) where.userId = userId;
    if (ambulanciaId) where.ambulanciaId = ambulanciaId;
    if (numero) where.numero = numero;
    if (dataInicial || dataFinal) {
      where.data_inicio = {
        ...(dataInicial && { gte: dataInicial }),
        ...(dataFinal && { lte: dataFinal }),
      };
    }

    return where;
  }

  // Valida o item para ter certeza que tem um produto ou medicamento
  private validateItemProduct(
    produto?: string | null,
    medicamento?: string | null
  ): void {
    assertCondition(
      !!(produto || medicamento),
      'Cada item deve ter um produto ou medicamento informado.'
    );
    assertCondition(
      !(produto && medicamento),
      'Um item não pode ter produto e medicamento simultaneamente.'
    );
  }

  // Sincroniza os itens do requerimento com o banco de dados
  private async syncItems(
    requerimentoId: string,
    itens: SyncItemRequest[] | undefined,
    user: IUser
  ): Promise<void> {
    if (!itens) return;

    for (const item of itens) {
      this.validateItemProduct(item.produtoId, item.medicamentoId);
    }

    const currentItems = await this.repo.findActiveItems(requerimentoId);
    const currentItemIds = new Set(currentItems.map((item) => item.id));
    const incomingItemIds = new Set(
      itens.map((item) => item.id).filter((id): id is string => Boolean(id))
    );

    for (const itemId of incomingItemIds) {
      assertCondition(
        currentItemIds.has(itemId),
        'Item informado não pertence ao requerimento.'
      );
    }

    await this.repo.prisma.$transaction(async (tx) => {
      for (const currentItem of currentItems) {
        if (!incomingItemIds.has(currentItem.id)) {
          await tx.requerimentoItem.update({
            where: { id: currentItem.id },
            data: { deleted_by: user.id, deleted_at: new Date() },
          });
        }
      }

      for (const item of itens) {
        if (item.id) {
          await tx.requerimentoItem.update({
            where: { id: item.id },
            data: {
              produtoId: item.produtoId ?? null,
              medicamentoId: item.medicamentoId ?? null,
              quantidade: item.quantidade,
              ocorrencia: item.ocorrencia ?? null,
              deleted_by: null,
              deleted_at: null,
            },
          });
          continue;
        }

        await tx.requerimentoItem.create({
          data: {
            requerimentoId,
            produtoId: item.produtoId ?? null,
            medicamentoId: item.medicamentoId ?? null,
            quantidade: item.quantidade,
            ocorrencia: item.ocorrencia ?? null,
            userId: user.id,
          },
        });
      }
    });
  }

  // ── Queries ───────────────────────────────────────────────────────────────

  async findAll(
    tipo: TipoRequerimento,
    user: IUser
  ): Promise<RequerimentoResult[]> {
    const where = this.isGetAll(user, tipo) ? {} : { base: user.base };
    return this.repo.findAll(tipo, where);
  }

  async findByFiltro(
    tipo: TipoRequerimento,
    filtro: FiltroRequerimentos,
    user: IUser
  ): Promise<RequerimentoResult[]> {
    const filtroWhere = this.buildFiltroWhere(filtro);
    const accessWhere = this.isGetAll(user, tipo) ? {} : { base: user.base };
    return this.repo.findAll(tipo, { ...filtroWhere, ...accessWhere });
  }

  async findStatus(
    tipo: TipoRequerimento,
    user: IUser
  ): Promise<RequerimentoResult[]> {
    const where = this.isGetAll(user, tipo) ? {} : { base: user.base };
    return this.repo.findAll(tipo, {
      base: where.base,
      status: { in: [Status.Recebido, Status.Separacao, Status.Finalizado] },
    });
  }

  async findOne(
    id: string,
    tipo: TipoRequerimento,
    user: IUser
  ): Promise<RequerimentoResult> {
    let req = await this.repo.findById(id, tipo);

    if (!req) {
      assertPermission(
        this.isGetAll(user, tipo),
        'Requisição não encontrada ou sem permissão.'
      );
    }

    if (req?.base !== user.base) {
      assertPermission(
        this.isGetAll(user, tipo),
        'Sem permissão para acessar requerimento de outra base.'
      );
    }

    if (req?.setor !== user.setor) {
      assertPermission(
        this.isGetAll(user, tipo),
        'Sem permissão para acessar requerimento de outro setor.'
      );
    }

    req = assertFound(req);

    req.RequerimentoItems = this.orderItems(req.RequerimentoItems);

    return req;
  }

  // ── Mutations ─────────────────────────────────────────────────────────────

  async create(
    tipo: TipoRequerimento,
    dto:
      | CreateRequerimentoAlmoxarifadoAndCMERequestDto
      | CreateRequerimentoFarmaciaRequestDto,
    user: IUser
  ): Promise<RequerimentoResult> {
    const itens = dto.itens ?? [];
    for (const item of itens) {
      this.validateItemProduct(item.produtoId, item.medicamentoId);
    }

    const numero = await this.repo.getNextNumero();
    let setor = dto.setor;
    let base = dto.base;

    // ADM pode abrir para qualquer setor
    if (user.setor !== TypeSetor.Administrador) {
      setor = user.setor;
      base = user.base;
    }

    if (dto.status === Status.Rascunho) {
      const existRascunho = await this.repo.findAll(tipo, {
        base: base,
        setor: setor,
        ambulanciaId:
          (dto as CreateRequerimentoFarmaciaRequestDto).ambulanciaId ?? null,
        status: Status.Rascunho,
        userId: user.id,
      });

      if (existRascunho.length > 0) {
        throw new HttpException(
          'Já existe um requerimento em rascunho com esses dados. Envie ou remove o rascunho aberto.',
          HttpStatus.BAD_REQUEST
        );
      }
    }

    const requerimento = await this.repo.prisma.$transaction(async (tx) => {
      const reqCreated = await tx.requerimento.create({
        data: {
          numero,
          tipo,
          status: dto.status,
          data_inicio: new Date(),
          data_fim: null,
          obs: dto.obs ?? null,
          base: base,
          setor: setor,
          cargo: user.cargo,
          ambulanciaId:
            (dto as CreateRequerimentoFarmaciaRequestDto).ambulanciaId ?? null,
          userId: user.id,
        },
      });
      await tx.requerimentoItem.createMany({
        data: itens.map((item) => ({
          requerimentoId: reqCreated.id,
          produtoId: item.produtoId ?? null,
          medicamentoId: item.medicamentoId ?? null,
          quantidade: item.quantidade,
          ocorrencia: item.ocorrencia ?? null,
          userId: user.id,
        })),
      });

      return reqCreated;
    });

    return this.findOne(requerimento.id, tipo, user);
  }

  async update(
    id: string,
    tipo: TipoRequerimento,
    dto:
      | UpdateRequerimentoAlmoxarifadoAndCMERequestDto
      | UpdateRequerimentoFarmaciaRequestDto,
    user: IUser
  ): Promise<RequerimentoResult> {
    const req = assertFound(await this.repo.findRawById(id, tipo));

    assertPermission(
      this.isGetAll(user, tipo) || req.status === Status.Rascunho,
      'Requerimentos somente podem ser editados quando em rascunho.'
    );
    assertPermission(this.isGetAll(user, tipo) || req.base === user.base);

    await this.repo.update(id, {
      ...(this.isGetAll(user, tipo) &&
        dto.base !== undefined && { base: dto.base }),
      ...(this.isGetAll(user, tipo) &&
        dto.setor !== undefined && { setor: dto.setor }),
      ...(dto.obs !== undefined && { obs: dto.obs }),
      ...((dto as UpdateRequerimentoFarmaciaRequestDto).ambulanciaId !==
        undefined && {
        ambulanciaId:
          (dto as UpdateRequerimentoFarmaciaRequestDto).ambulanciaId ?? null,
      }),
    });
    await this.syncItems(id, dto.itens, user);

    return this.findOne(id, tipo, user);
  }

  // USADO NAS PAGINAS DE GESTÃO DOS REQUERIMENTOS COM BUTTONS SEND
  async enviar(
    id: string,
    tipo: TipoRequerimento,
    user: IUser
  ): Promise<RequerimentoResult> {
    const req = assertFound(await this.repo.findRawById(id, tipo));

    assertCondition(
      req.status === Status.Rascunho,
      'Apenas requerimentos em rascunho podem ser enviados.'
    );

    assertPermission(this.isGetAll(user, tipo) || req.base === user.base);

    const totalItens = await this.repo.countActiveItems(id);
    assertCondition(
      totalItens > 0,
      'O requerimento deve ter pelo menos um item antes de ser enviado.'
    );

    await this.repo.updateStatus(id, Status.Recebido, user.id);
    return this.findOne(id, tipo, user);
  }

  async changeStatus(
    id: string,
    tipo: TipoRequerimento,
    dto: ChangeStatusRequestDto,
    user: IUser
  ): Promise<RequerimentoResult> {
    const req = assertFound(await this.repo.findRawById(id, tipo));
    const novoStatus = dto.status as Status;

    assertCondition(
      !TERMINAL_STATUS.includes(req.status),
      `Requerimento com status "${req.status}" não pode ser alterado.`
    );

    assertCondition(
      novoStatus !== Status.Rascunho,
      'Não é possível retornar ao status Rascunho.'
    );

    if (!this.isGetAll(user, tipo)) {
      const permitidos = STATUS_TRANSITIONS[req.status] ?? [];
      assertCondition(
        permitidos.includes(novoStatus),
        `Transição inválida: ${req.status} → ${novoStatus}.`
      );
    }

    await this.repo.updateStatus(id, novoStatus, user.id);
    return this.findOne(id, tipo, user);
  }

  async delete(id: string, tipo: TipoRequerimento, user: IUser): Promise<void> {
    const req = assertFound(await this.repo.findRawById(id, tipo));

    if (TERMINAL_STATUS.includes(req.status)) {
      throw new HttpException(
        'Requerimento finalizado ou cancelado não pode ser excluído.',
        HttpStatus.BAD_REQUEST
      );
    }

    // ADM e COORDENADOR do almoxarifado
    if (
      user.setor === TypeSetor.Administrador ||
      user.cargo === TypeCargo.Almoxarifado
    ) {
      return await this.repo.delete(id);
    }

    assertCondition(
      req.userId === user.id,
      'Você não tem permissão para excluir este requerimento.'
    );

    if (req.status !== Status.Rascunho) {
      throw new HttpException(
        'Apenas requerimentos em rascunho podem ser excluídos.',
        HttpStatus.BAD_REQUEST
      );
    }

    await this.repo.delete(id);
  }

  async addItem(
    id: string,
    tipo: TipoRequerimento,
    dto: AddItemRequestDto,
    user: IUser
  ): Promise<RequerimentoItemResult> {
    const req = assertFound(await this.repo.findRawById(id, tipo));

    assertPermission(
      this.isGetAll(user, tipo) || req.status === Status.Rascunho,
      'Itens só podem ser adicionados pelo administrador após o envio.'
    );

    this.validateItemProduct(dto.produtoId, dto.medicamentoId);

    return this.repo.createItem({
      requerimentoId: id,
      produtoId: dto.produtoId ?? null,
      medicamentoId: dto.medicamentoId ?? null,
      quantidade: dto.quantidade,
      ocorrencia: dto.ocorrencia ?? null,
      userId: user.id,
    });
  }

  async updateItem(
    requerimentoId: string,
    itemId: string,
    tipo: TipoRequerimento,
    dto: UpdateItemRequestDto,
    user: IUser
  ): Promise<RequerimentoItemResult> {
    const req = assertFound(await this.repo.findRawById(requerimentoId, tipo));

    assertPermission(
      this.isGetAll(user, tipo) || req.status === Status.Rascunho,
      'Itens só podem ser editados pelo administrador após o envio.'
    );

    assertFound(
      await this.repo.findItem(itemId, requerimentoId),
      'Item não encontrado.'
    );

    return this.repo.updateItem(itemId, {
      quantidade: dto.quantidade,
      ...(dto.ocorrencia !== undefined && { ocorrencia: dto.ocorrencia }),
    });
  }

  async removeItem(
    requerimentoId: string,
    itemId: string,
    tipo: TipoRequerimento,
    user: IUser
  ): Promise<void> {
    const req = assertFound(await this.repo.findRawById(requerimentoId, tipo));

    assertPermission(
      this.isGetAll(user, tipo) || req.status === Status.Rascunho,
      'Itens só podem ser removidos pelo administrador após o envio.'
    );

    assertFound(
      await this.repo.findItem(itemId, requerimentoId),
      'Item não encontrado.'
    );

    await this.repo.softDeleteItem(itemId, user.id);
  }

  private orderItems(
    items: RequerimentoItemResult[]
  ): RequerimentoItemResult[] {
    return items.sort((a, b) => {
      const ordemA = a.Produto?.ordem;
      const ordemB = b.Produto?.ordem;

      const nomeA = a.Produto?.nome ?? a.Medicamento?.nome ?? '';

      const nomeB = b.Produto?.nome ?? b.Medicamento?.nome ?? '';

      const aTemOrdemValida =
        ordemA !== null && ordemA !== undefined && ordemA > 0;
      const bTemOrdemValida =
        ordemB !== null && ordemB !== undefined && ordemB > 0;

      // Quem tem ordem válida vem primeiro
      if (aTemOrdemValida && !bTemOrdemValida) return -1;
      if (!aTemOrdemValida && bTemOrdemValida) return 1;

      // Se os dois têm ordem válida, ordena pela ordem
      if (aTemOrdemValida && bTemOrdemValida) {
        if (ordemA !== ordemB) {
          return ordemA - ordemB;
        }

        // Se a ordem for igual, ordena por nome
        return nomeA.localeCompare(nomeB, 'pt-BR');
      }

      // Se os dois são ordem 0/null/undefined, ordena por nome no final
      return nomeA.localeCompare(nomeB, 'pt-BR');
    });
  }
}
