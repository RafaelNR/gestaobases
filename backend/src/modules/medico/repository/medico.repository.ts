import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { Medico, Prisma } from '@generated/prisma/client';

@Injectable()
export class MedicoRepository {
  constructor(public prisma: PrismaService) {}

  async findAll(): Promise<Medico[]> {
    return this.prisma.medico.findMany({
      orderBy: { nome: 'asc' },
    });
  }

  async findOne(id: string): Promise<Medico | null> {
    return this.prisma.medico.findUnique({ where: { id } });
  }

  async create(data: {
    nome: string;
    crm: string;
    telefone?: string | null;
    email?: string | null;
    userId: string;
  }): Promise<Medico> {
    return this.prisma.medico.create({ data });
  }

  async update(
    id: string,
    data: {
      nome: string;
      crm: string;
      telefone?: string | null;
      email?: string | null;
    }
  ): Promise<Medico> {
    return this.prisma.medico.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Medico> {
    return this.prisma.medico.delete({ where: { id } });
  }

  async count(where: Prisma.MedicoWhereInput): Promise<number> {
    return this.prisma.medico.count({ where });
  }
}
