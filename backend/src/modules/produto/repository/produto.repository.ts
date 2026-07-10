import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { Produto, Prisma, Unidade } from '@generated/prisma/client';
import {
  CreateProdutoRequestDto,
  UpdateProdutoRequestDto,
} from '../dto/produto.dto';

@Injectable()
export class ProdutoRepository {
  constructor(public prisma: PrismaService) {}

  async findAll(): Promise<Produto[]> {
    return this.prisma.produto.findMany({
      orderBy: { nome: 'asc' },
      include: { User: { select: { nome: true } } },
    });
  }

  async findOne(id: string): Promise<Produto | null> {
    return this.prisma.produto.findUnique({
      where: { id },
      include: { User: { select: { nome: true } } },
    });
  }

  async create(
    data: CreateProdutoRequestDto & { userId: string }
  ): Promise<Produto> {
    return this.prisma.produto.create({ data });
  }

  async update(
    id: string,
    data: Partial<UpdateProdutoRequestDto & { userId: string }>
  ): Promise<Produto> {
    return this.prisma.produto.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Produto> {
    return this.prisma.produto.delete({
      where: { id },
    });
  }

  async count(where: Prisma.ProdutoWhereInput): Promise<number> {
    return this.prisma.produto.count({ where });
  }
}
