import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { Setor, Prisma } from '@generated/prisma/client';

@Injectable()
export class SetorService {
  constructor(public prisma: PrismaService) {}

  async findAll(): Promise<Setor[]> {
    return this.prisma.setor.findMany({
      orderBy: { nome: 'asc' },
    });
  }

  async findOne(id: string): Promise<Setor | null> {
    return this.prisma.setor.findUnique({
      where: { id },
    });
  }

  async create(data: { nome: string; nomeVisivel: string }): Promise<Setor> {
    return this.prisma.setor.create({ data });
  }

  async update(
    id: string,
    data: { nome: string; nomeVisivel: string }
  ): Promise<Setor> {
    return this.prisma.setor.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Setor> {
    return this.prisma.setor.delete({
      where: { id },
    });
  }

  async count(where: Prisma.SetorWhereInput): Promise<number> {
    return this.prisma.setor.count({ where });
  }
}
