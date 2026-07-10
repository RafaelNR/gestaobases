import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { CategoriaProduto, Prisma } from '@generated/prisma/client';

@Injectable()
export class CategoriaProdutoRepository {
  constructor(public prisma: PrismaService) {}

  async findAll(): Promise<CategoriaProduto[]> {
    return this.prisma.categoriaProduto.findMany({
      orderBy: { nome: 'asc' },
      include: { User: { select: { nome: true } } },
    });
  }

  async findOne(id: string): Promise<CategoriaProduto | null> {
    return this.prisma.categoriaProduto.findUnique({
      where: { id },
      include: { User: { select: { nome: true } } },
    });
  }

  async create(data: {
    nome: string;
    userId: string;
  }): Promise<CategoriaProduto> {
    return this.prisma.categoriaProduto.create({ data });
  }

  async update(id: string, data: { nome: string }): Promise<CategoriaProduto> {
    return this.prisma.categoriaProduto.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<CategoriaProduto> {
    return this.prisma.categoriaProduto.delete({
      where: { id },
    });
  }

  async count(where: Prisma.CategoriaProdutoWhereInput): Promise<number> {
    return this.prisma.categoriaProduto.count({ where });
  }
}
