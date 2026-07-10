import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { VisitasBases, Prisma } from '@generated/prisma/client';
import {
  CreateVisitaBaseRequestDto,
  UpdateVisitaBaseRequestDto,
} from '../dto/visitas-bases.dto';

@Injectable()
export class VisitasBasesService {
  constructor(public prisma: PrismaService) {}

  async findAll(filters?: {
    mes?: number;
    ano?: number;
  }): Promise<VisitasBases[]> {
    const where: Prisma.VisitasBasesWhereInput = {};
    if (filters?.mes && filters?.ano) {
      const start = new Date(filters.ano, filters.mes - 1, 1);
      const end = new Date(filters.ano, filters.mes, 0);
      where.data = { gte: start, lte: end };
    }
    return this.prisma.visitasBases.findMany({
      where,
      orderBy: { data: 'asc' },
      include: {
        User: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<VisitasBases | null> {
    return this.prisma.visitasBases.findUnique({ where: { id } });
  }

  async create(
    data: CreateVisitaBaseRequestDto & {
      userId: string;
    }
  ): Promise<VisitasBases> {
    if (data.base) {
      const base = await this.prisma.base.findUnique({
        where: {
          nome: data.base,
        },
      });

      if (!base) {
        throw new BadRequestException('Base não encontrada.');
      }

      const exist = await this.prisma.visitasBases.findFirst({
        where: {
          base: data.base,
          data: new Date(data.data),
        },
      });

      if (exist) {
        throw new BadRequestException(
          'Visita já cadastrada para esta base nessa data.'
        );
      }
    }

    if (data.outro_motivo) {
      const exist = await this.prisma.visitasBases.findFirst({
        where: {
          outro_motivo: data.outro_motivo,
          data: new Date(data.data),
        },
      });

      if (exist) {
        throw new BadRequestException(
          'Visita já cadastrada para este motivo nessa data.'
        );
      }
    }

    return this.prisma.visitasBases.create({
      data: {
        data: new Date(data.data),
        base: data.base || null,
        outro_motivo: data.outro_motivo || null,
        descricao: data.descricao || null,
        userId: data.userId,
      },
    });
  }

  async update(
    id: string,
    data: UpdateVisitaBaseRequestDto & { userId: string }
  ): Promise<VisitasBases> {
    const visitaExistente = await this.prisma.visitasBases.findUnique({
      where: { id },
    });

    if (!visitaExistente) {
      throw new BadRequestException('Visita não encontrada.');
    }

    if (data.base) {
      const base = await this.prisma.base.findUnique({
        where: {
          nome: data.base,
        },
      });

      if (!base) {
        throw new BadRequestException('Base não encontrada.');
      }

      const exist = await this.prisma.visitasBases.findFirst({
        where: {
          base: data.base,
          data: new Date(data.data),
        },
      });

      if (exist && exist.id !== id) {
        throw new BadRequestException(
          'Visita já cadastrada para esta base nessa data.'
        );
      }
    }

    if (data.outro_motivo) {
      const exist = await this.prisma.visitasBases.findFirst({
        where: {
          outro_motivo: data.outro_motivo,
          data: new Date(data.data),
        },
      });

      if (exist && exist.id !== id) {
        throw new BadRequestException(
          'Visita já cadastrada para este motivo nessa data.'
        );
      }
    }

    return this.prisma.visitasBases.update({
      where: { id },
      data: {
        data: data.data ? new Date(data.data) : undefined,
        base: data.base ? data.base : undefined,
        outro_motivo: data.outro_motivo ? data.outro_motivo : undefined,
        descricao: data.descricao,
      },
    });
  }

  async remove(id: string): Promise<VisitasBases> {
    const visitaExistente = await this.prisma.visitasBases.findUnique({
      where: { id },
    });

    if (!visitaExistente) {
      throw new BadRequestException('Visita não encontrada.');
    }
    return this.prisma.visitasBases.delete({ where: { id } });
  }
}
