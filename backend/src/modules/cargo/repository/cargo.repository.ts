import { Injectable } from '@nestjs/common';
import { Cargo, Prisma } from '@generated/prisma/client';
import { PrismaService } from '@infra/database/prisma/prisma.service';

@Injectable()
export class CargoRepository {
  constructor(public prisma: PrismaService) {}

  async findAll(): Promise<Cargo[]> {
    return this.prisma.cargo.findMany({
      orderBy: { nomeVisivel: 'asc' },
      include: { Setor: { select: { nomeVisivel: true } } },
    });
  }

  async findBySetor(setor: string): Promise<Cargo[]> {
    return this.prisma.cargo.findMany({
      where: { setor },
      orderBy: { nomeVisivel: 'asc' },
      include: { Setor: { select: { nomeVisivel: true } } },
    });
  }

  async findBySetorId(setorId: string): Promise<Cargo[]> {
    return this.prisma.cargo.findMany({
      where: { Setor: { id: setorId } },
      orderBy: { nomeVisivel: 'asc' },
      include: { Setor: { select: { nomeVisivel: true } } },
    });
  }

  async findOne(id: string): Promise<Cargo | null> {
    return this.prisma.cargo.findUnique({
      where: { id },
      include: { Setor: { select: { nomeVisivel: true } } },
    });
  }

  async create(data: {
    nome: string;
    nomeVisivel: string;
    setor: string;
  }): Promise<Cargo> {
    return this.prisma.cargo.create({ data });
  }

  async update(
    id: string,
    data: { nome: string; nomeVisivel: string; setor: string }
  ): Promise<Cargo> {
    return this.prisma.cargo.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Cargo> {
    return this.prisma.cargo.delete({
      where: { id },
    });
  }

  async count(where: Prisma.CargoWhereInput): Promise<number> {
    return this.prisma.cargo.count({ where });
  }
}
