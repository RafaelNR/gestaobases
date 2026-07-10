import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { Medicamento, Prisma } from '@generated/prisma/client';
import {
  CreateMedicamentoRequestDto,
  UpdateMedicamentoRequestDto,
} from '../dto/medicamento.dto';

@Injectable()
export class MedicamentoRepository {
  constructor(public prisma: PrismaService) {}

  async findAll(): Promise<Medicamento[]> {
    return this.prisma.medicamento.findMany({
      orderBy: { nome: 'asc' },
      include: { User: { select: { nome: true } } },
    });
  }

  async findOne(id: string): Promise<Medicamento | null> {
    return this.prisma.medicamento.findUnique({
      where: { id },
      include: { User: { select: { nome: true } } },
    });
  }

  async create(
    data: CreateMedicamentoRequestDto & { userId: string }
  ): Promise<Medicamento> {
    return this.prisma.medicamento.create({ data });
  }

  async update(
    id: string,
    data: Omit<UpdateMedicamentoRequestDto, 'id'>
  ): Promise<Medicamento> {
    return this.prisma.medicamento.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Medicamento> {
    return this.prisma.medicamento.delete({
      where: { id },
    });
  }

  async count(where: Prisma.MedicamentoWhereInput): Promise<number> {
    return this.prisma.medicamento.count({ where });
  }
}
