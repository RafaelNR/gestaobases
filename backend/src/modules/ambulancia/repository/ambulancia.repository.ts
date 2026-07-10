import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { Ambulancia, Prisma, TipoUnidade } from '@generated/prisma/client';

@Injectable()
export class AmbulanciaRepository {
  constructor(public prisma: PrismaService) {}

  async findAll(): Promise<Ambulancia[]> {
    return this.prisma.ambulancia.findMany({
      orderBy: { nome: 'asc' },
      include: {
        Base: {
          select: {
            nome: true,
          },
        },
        User: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  async findByBase(base: string): Promise<Ambulancia[]> {
    return this.prisma.ambulancia.findMany({
      where: { Base: { nome: base } },
      orderBy: { nome: 'asc' },
      include: {
        Base: {
          select: {
            nome: true,
          },
        },
        User: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<Ambulancia | null> {
    return this.prisma.ambulancia.findUnique({
      where: { id },
      include: {
        Base: {
          select: {
            nome: true,
          },
        },
        User: {
          select: {
            nome: true,
          },
        },
      },
    });
  }

  async create(
    data: {
      nome: string;
      tipo: TipoUnidade;
      baseId: string;
    },
    userId: string
  ): Promise<Ambulancia> {
    return this.prisma.ambulancia.create({
      data: {
        nome: data.nome,
        tipo: data.tipo,
        Base: {
          connect: { id: data.baseId },
        },
        User: {
          connect: { id: userId },
        },
      },
    });
  }

  async update(
    id: string,
    data: { nome: string; tipo: TipoUnidade; baseId: string },
    userId: string
  ): Promise<Ambulancia> {
    return this.prisma.ambulancia.update({
      where: { id },
      data: {
        nome: data.nome,
        tipo: data.tipo,
        Base: {
          connect: { id: data.baseId },
        },
        User: {
          connect: { id: userId },
        },
      },
    });
  }

  async remove(id: string): Promise<Ambulancia> {
    return this.prisma.ambulancia.delete({
      where: { id },
    });
  }

  async count(where: Prisma.AmbulanciaWhereInput): Promise<number> {
    return this.prisma.ambulancia.count({ where });
  }
}
