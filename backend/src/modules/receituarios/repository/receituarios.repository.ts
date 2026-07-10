import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { StatusReceituario } from '@generated/prisma/client';
import {
  RECEITUARIO_INCLUDE,
  RECEITUARIO_MEDICAMENTO_INCLUDE,
  ReceituarioMedicamentoResult,
  ReceituarioResult,
} from '../types/receituarios.types';
import { CreateReceituarioRequestDto } from '../dto/receituarios.dto';
import { UpdateReceituarioRequestDto } from '../dto/receituarios.dto';
import { AddMedicamentoRequestDto } from '../dto/receituarios.dto';
import { UpdateMedicamentoRequestDto } from '../dto/receituarios.dto';

@Injectable()
export class ReceituariosRepository {
  constructor(public prisma: PrismaService) {}

  async findAll(filters?: {
    base?: string;
    status?: StatusReceituario;
  }): Promise<ReceituarioResult[]> {
    return this.prisma.receituario.findMany({
      where: filters?.base
        ? { baseId: filters.base, status: filters.status }
        : { status: filters?.status },
      include: RECEITUARIO_INCLUDE,
      orderBy: { numero: 'desc' },
    });
  }

  async findById(id: string): Promise<ReceituarioResult | null> {
    return this.prisma.receituario.findUnique({
      where: { id },
      include: RECEITUARIO_INCLUDE,
    });
  }

  async findRawById(id: string) {
    return this.prisma.receituario.findUnique({ where: { id } });
  }

  async getNextNumero(): Promise<string> {
    const year = new Date().getFullYear();
    const last = await this.prisma.receituario.findFirst({
      where: { numero: { startsWith: `REC-${year}-` } },
      orderBy: { numero: 'desc' },
      select: { numero: true },
    });
    if (!last) return `REC-${year}-00001`;
    const seq = parseInt(last.numero.split('-').pop() || '0', 10);
    return `REC-${year}-${String(seq + 1).padStart(5, '0')}`;
  }

  async create(
    data: CreateReceituarioRequestDto,
    userId: string
  ): Promise<ReceituarioResult> {
    const { medicamentos = [], ...rest } = data;
    const numero = await this.getNextNumero();

    const receituario = await this.prisma.receituario.create({
      data: {
        numero,
        status: StatusReceituario.Aberto,
        data: new Date(rest.data),
        data_ocorrencia: new Date(rest.data_ocorrencia),
        ocorrencia: rest.ocorrencia,
        baseId: rest.base,
        ambulanciaId: rest.ambulancia,
        requerimento: rest.requerimento ?? null,
        obs: rest.obs ?? null,
        userId,
        medicoId: rest.medicoId,
      },
    });

    if (medicamentos.length > 0) {
      await this.prisma.receituarioMedicamentos.createMany({
        data: medicamentos.map((m) => ({
          receituarioId: receituario.id,
          medicamentoId: m.medicamento,
          qnt: m.qnt,
          unidade: m.unidade,
          administracao: m.administracao,
          diluente: m.diluente ?? null,
          qnt_diluente: m.qnt_diluente ?? null,
          qnt_tempo: m.qnt_tempo ?? null,
          obs: m.obs ?? null,
          userId,
        })),
      });
    }

    return this.findById(receituario.id) as Promise<ReceituarioResult>;
  }

  async update(
    id: string,
    data: UpdateReceituarioRequestDto
  ): Promise<ReceituarioResult> {
    return this.prisma.receituario.update({
      where: { id },
      data: {
        data: data.data ? new Date(data.data) : undefined,
        data_ocorrencia: data.data_ocorrencia
          ? new Date(data.data_ocorrencia)
          : undefined,
        ocorrencia: data.ocorrencia,
        medicoId: data.medicoId,
        baseId: data.base,
        ambulanciaId: data.ambulancia,
        requerimento: data.requerimento,
        obs: data.obs,
      },
      include: RECEITUARIO_INCLUDE,
    });
  }

  async updateStatus(
    id: string,
    status: StatusReceituario
  ): Promise<ReceituarioResult> {
    return this.prisma.receituario.update({
      where: { id },
      data: { status },
      include: RECEITUARIO_INCLUDE,
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.receituario.delete({ where: { id } });
  }

  async findMedicamento(
    medId: string
  ): Promise<ReceituarioMedicamentoResult | null> {
    return this.prisma.receituarioMedicamentos.findUnique({
      where: { id: medId },
      include: RECEITUARIO_MEDICAMENTO_INCLUDE,
    });
  }

  async addMedicamento(
    receituarioId: string,
    data: AddMedicamentoRequestDto,
    userId: string
  ): Promise<ReceituarioMedicamentoResult> {
    return this.prisma.receituarioMedicamentos.create({
      data: {
        receituarioId,
        medicamentoId: data.medicamento,
        qnt: data.qnt,
        unidade: data.unidade,
        administracao: data.administracao,
        diluente: data.diluente ?? null,
        qnt_diluente: data.qnt_diluente ?? null,
        qnt_tempo: data.qnt_tempo ?? null,
        obs: data.obs ?? null,
        userId,
      },
      include: RECEITUARIO_MEDICAMENTO_INCLUDE,
    });
  }

  async updateMedicamento(
    medId: string,
    data: UpdateMedicamentoRequestDto
  ): Promise<ReceituarioMedicamentoResult> {
    return this.prisma.receituarioMedicamentos.update({
      where: { id: medId },
      data: {
        qnt: data.qnt,
        unidade: data.unidade,
        administracao: data.administracao,
        diluente: data.diluente,
        qnt_diluente: data.qnt_diluente,
        qnt_tempo: data.qnt_tempo,
        obs: data.obs,
      },
      include: RECEITUARIO_MEDICAMENTO_INCLUDE,
    });
  }

  async removeMedicamento(medId: string): Promise<void> {
    await this.prisma.receituarioMedicamentos.delete({ where: { id: medId } });
  }
}
