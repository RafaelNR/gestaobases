import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StatusReceituario } from '@generated/prisma/client';
import { IUser } from '@src/common/decorator/user.decorator';
import { TypeCargo, TypeSetor } from '@src/infra/guard/roles.decorator';
import { ReceituariosRepository } from '../repository/receituarios.repository';
import {
  ReceituarioMedicamentoResult,
  ReceituarioResult,
} from '../types/receituarios.types';
import {
  AddMedicamentoRequestDto,
  ChangeStatusReceituarioRequestDto,
  CreateReceituarioRequestDto,
  UpdateMedicamentoRequestDto,
  UpdateReceituarioRequestDto,
} from '../dto/receituarios.dto';

const TERMINAL_STATUSES: StatusReceituario[] = [StatusReceituario.Cancelado];

@Injectable()
export class ReceituariosService {
  constructor(private readonly repository: ReceituariosRepository) {}

  // ---------- helpers privados ----------

  private assertFound<T>(
    value: T | null | undefined,
    message = 'Registro não encontrado.'
  ): asserts value is T {
    if (value == null) throw new NotFoundException(message);
  }

  private assertPermission(
    condition: boolean,
    message = 'Ação não permitida.'
  ): void {
    if (!condition) throw new ForbiddenException(message);
  }

  private assertCondition(condition: boolean, message: string): void {
    if (!condition) throw new BadRequestException(message);
  }

  // ---------- métodos públicos ----------

  async findAll(
    filters: { base?: string; status?: StatusReceituario },
    user: IUser
  ): Promise<ReceituarioResult[]> {
    const isAdmin = user.setor === TypeSetor.Administrador;
    const effectiveBase = isAdmin ? filters.base : user.baseId;
    return this.repository.findAll({
      base: effectiveBase,
      status: filters.status,
    });
  }

  async findOne(id: string): Promise<ReceituarioResult> {
    const data = await this.repository.findById(id);
    this.assertFound(data, 'Receituário não encontrado.');
    return data;
  }

  async create(
    dto: CreateReceituarioRequestDto,
    user: IUser
  ): Promise<ReceituarioResult> {
    if (dto.data && dto.data_ocorrencia) {
      this.assertCondition(
        new Date(dto.data) <= new Date(dto.data_ocorrencia),
        'A data do receituário não pode ser posterior à data da ocorrência.'
      );
    }
    return this.repository.create(dto, user.id);
  }

  async update(
    id: string,
    dto: UpdateReceituarioRequestDto,
    user: IUser
  ): Promise<ReceituarioResult> {
    const rec = await this.repository.findRawById(id);
    this.assertFound(rec, 'Receituário não encontrado.');

    const isAdmin = user.setor === TypeSetor.Administrador;
    if (rec.status !== StatusReceituario.Aberto) {
      this.assertPermission(
        isAdmin,
        'Apenas administradores podem editar receituários que não estão Abertos.'
      );
    }

    return this.repository.update(id, dto);
  }

  async changeStatus(
    id: string,
    dto: ChangeStatusReceituarioRequestDto
  ): Promise<ReceituarioResult> {
    const rec = await this.repository.findRawById(id);
    this.assertFound(rec, 'Receituário não encontrado.');

    this.assertCondition(
      !TERMINAL_STATUSES.includes(rec.status),
      `Não é possível alterar o status de um receituário ${rec.status}.`
    );

    return this.repository.updateStatus(id, dto.status as StatusReceituario);
  }

  async remove(id: string): Promise<void> {
    const rec = await this.repository.findRawById(id);
    this.assertFound(rec, 'Receituário não encontrado.');

    this.assertCondition(
      rec.status === StatusReceituario.Aberto,
      'Apenas receituários com status Aberto podem ser removidos.'
    );

    await this.repository.remove(id);
  }

  async addMedicamento(
    receituarioId: string,
    dto: AddMedicamentoRequestDto,
    userId: string
  ): Promise<ReceituarioMedicamentoResult> {
    const rec = await this.repository.findRawById(receituarioId);
    this.assertFound(rec, 'Receituário não encontrado.');

    this.assertCondition(
      rec.status === StatusReceituario.Aberto,
      'Medicamentos só podem ser adicionados a receituários com status Aberto.'
    );

    return this.repository.addMedicamento(receituarioId, dto, userId);
  }

  async updateMedicamento(
    receituarioId: string,
    medId: string,
    dto: UpdateMedicamentoRequestDto
  ): Promise<ReceituarioMedicamentoResult> {
    const med = await this.repository.findMedicamento(medId);
    this.assertFound(med, 'Medicamento não encontrado.');

    this.assertCondition(
      med.receituarioId === receituarioId,
      'Medicamento não pertence ao receituário informado.'
    );

    return this.repository.updateMedicamento(medId, dto);
  }

  async removeMedicamento(receituarioId: string, medId: string): Promise<void> {
    const med = await this.repository.findMedicamento(medId);
    this.assertFound(med, 'Medicamento não encontrado.');

    this.assertCondition(
      med.receituarioId === receituarioId,
      'Medicamento não pertence ao receituário informado.'
    );

    await this.repository.removeMedicamento(medId);
  }
}
