import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { CategoriasMedicamento, Prisma } from '@generated/prisma/client';

@Injectable()
export class CategoriasMedicamentoRepository {
  constructor(public prisma: PrismaService) {}

  async findAll(): Promise<CategoriasMedicamento[]> {
    return this.prisma.categoriasMedicamento.findMany({
      orderBy: { nome: 'asc' },
      include: { User: { select: { nome: true } } },
    });
  }

  async findOne(id: string): Promise<CategoriasMedicamento | null> {
    return this.prisma.categoriasMedicamento.findUnique({
      where: { id },
      include: { User: { select: { nome: true } } },
    });
  }

  async create(data: {
    nome: string;
    userId: string;
  }): Promise<CategoriasMedicamento> {
    return this.prisma.categoriasMedicamento.create({ data });
  }

  async update(
    id: string,
    data: { nome: string; active?: boolean }
  ): Promise<CategoriasMedicamento> {
    return this.prisma.categoriasMedicamento.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<CategoriasMedicamento> {
    return this.prisma.categoriasMedicamento.delete({
      where: { id },
    });
  }

  async count(where: Prisma.CategoriasMedicamentoWhereInput): Promise<number> {
    return this.prisma.categoriasMedicamento.count({ where });
  }
}
