import { Injectable } from '@nestjs/common';
import { Prisma, Status, TipoRequerimento } from '@generated/prisma/client';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import {
  REQUERIMENTO_ITEM_INCLUDE,
  RequerimentoItemResult,
  RequerimentoResult,
} from '../types/requerimento.types';

@Injectable()
export class RequerimentoRepository {
  constructor(public readonly prisma: PrismaService) {}

  async findAll(
    tipo: TipoRequerimento,
    where?: Prisma.RequerimentoWhereInput
  ): Promise<RequerimentoResult[]> {
    return this.prisma.requerimento.findMany({
      take: 150,
      where: { tipo, ...where },
      include: {
        _count: {
          select: {
            RequerimentoItems: {
              where: {
                deleted_by: null,
              },
            },
          },
        },
        Ambulancia: { select: { id: true, nome: true, tipo: true } },
        User: {
          select: {
            nome: true,
          },
        },
      },
      orderBy: { numero: 'desc' },
    }) as unknown as Promise<RequerimentoResult[]>;
  }

  async findById(
    id: string,
    tipo: TipoRequerimento
  ): Promise<RequerimentoResult | null> {
    return this.prisma.requerimento.findFirst({
      where: { id, tipo },
      include: {
        RequerimentoItems: {
          where: { deleted_by: null },
          include: REQUERIMENTO_ITEM_INCLUDE,
          orderBy: [
            {
              Produto: {
                ordem: {
                  sort: 'asc',
                  nulls: 'last',
                },
              },
            },
            { Medicamento: { nome: 'asc' } },
          ],
        },
        RequerimentoStatus: { orderBy: { created_at: 'desc' } },
        Ambulancia: { select: { id: true, nome: true, tipo: true } },
        User: {
          select: {
            nome: true,
            Setor: { select: { nome: true, nomeVisivel: true } },
            Cargo: { select: { nome: true, nomeVisivel: true } },
            Base: { select: { nome: true, tipo_ambulancias: true } },
          },
        },
      },
    }) as unknown as Promise<RequerimentoResult | null>;
  }

  async findRawById(id: string, tipo: TipoRequerimento) {
    return this.prisma.requerimento.findFirst({ where: { id, tipo } });
  }

  async getNextNumero(): Promise<number> {
    const last = await this.prisma.requerimento.findFirst({
      orderBy: { numero: 'desc' },
      select: { numero: true },
    });
    return (last?.numero ?? 0) + 1;
  }

  async countActiveItems(requerimentoId: string): Promise<number> {
    return this.prisma.requerimentoItem.count({
      where: { requerimentoId: requerimentoId, deleted_by: null },
    });
  }

  async create(data: Prisma.RequerimentoUncheckedCreateInput) {
    return this.prisma.requerimento.create({ data });
  }

  async createItems(
    items: Prisma.RequerimentoItemUncheckedCreateInput[]
  ): Promise<void> {
    await this.prisma.requerimentoItem.createMany({ data: items });
  }

  async update(id: string, data: Prisma.RequerimentoUncheckedUpdateInput) {
    return this.prisma.requerimento.update({ where: { id }, data });
  }

  async updateStatus(id: string, status: Status, userId: string) {
    const [updated] = await this.prisma.$transaction([
      this.prisma.requerimento.update({ where: { id }, data: { status } }),
      this.prisma.requerimentoStatus.create({
        data: { requerimentoId: id, status, userId },
      }),
    ]);
    return updated;
  }

  async delete(id: string) {
    await this.prisma.requerimento.delete({
      where: { id },
    });
  }

  async findItem(itemId: string, requerimentoId: string) {
    return this.prisma.requerimentoItem.findFirst({
      where: { id: itemId, requerimentoId: requerimentoId, deleted_by: null },
    });
  }

  async findActiveItems(requerimentoId: string) {
    return this.prisma.requerimentoItem.findMany({
      where: { requerimentoId, deleted_by: null },
      orderBy: { created_at: 'asc' },
    });
  }

  async createItem(
    data: Prisma.RequerimentoItemUncheckedCreateInput
  ): Promise<RequerimentoItemResult> {
    return this.prisma.requerimentoItem.create({
      data,
      include: REQUERIMENTO_ITEM_INCLUDE,
    }) as unknown as Promise<RequerimentoItemResult>;
  }

  async updateItem(
    itemId: string,
    data: Prisma.RequerimentoItemUncheckedUpdateInput
  ): Promise<RequerimentoItemResult> {
    return this.prisma.requerimentoItem.update({
      where: { id: itemId },
      data,
      include: REQUERIMENTO_ITEM_INCLUDE,
    }) as unknown as Promise<RequerimentoItemResult>;
  }

  async softDeleteItem(itemId: string, deletedById: string): Promise<void> {
    await this.prisma.requerimentoItem.update({
      where: { id: itemId },
      data: { deleted_by: deletedById },
    });
  }
}
