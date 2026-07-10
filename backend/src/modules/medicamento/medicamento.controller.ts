import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import {
  CreateMedicamentoRequestDto,
  UpdateMedicamentoRequestDto,
} from './dto/medicamento.dto';
import { MedicamentoRepository } from './repository/medicamento.repository';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import {
  TypeSetor,
  Setor,
  Autenticado,
} from '@src/infra/guard/roles.decorator';
import { User, IUser } from '@src/common/decorator/user.decorator';
import { LogService } from '../../infra/logger/repository/log.repository';
import { Prisma } from '@generated/prisma/client';

@Controller('medicamentos')
export class MedicamentoController extends BaseController {
  constructor(
    private readonly repository: MedicamentoRepository,
    private readonly logService: LogService
  ) {
    super();
  }

  // ----- GET (/medicamentos) - Autenticado ---

  @Get()
  @Autenticado()
  async findAll(): Promise<IResponse<any>> {
    const medicamentos = await this.repository.findAll();

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: medicamentos,
    });
  }

  // ----- GET (/medicamentos/:id) - Administrador ----

  @Get(':id')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async findOne(@Param('id') id: string): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const medicamento = await this.repository.findOne(id);

    if (!medicamento)
      throw new HttpException('Medicamento não existe.', HttpStatus.NOT_FOUND);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: medicamento,
    });
  }

  // ----- POST (/medicamentos) - Administrador ----

  @Post()
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async create(
    @User() user: IUser,
    @Body() createMedicamentoRequestDto: CreateMedicamentoRequestDto
  ): Promise<IResponse<any>> {
    const existsNome = await this.repository.count({
      nome: createMedicamentoRequestDto.nome,
    });

    if (existsNome > 0)
      throw new HttpException(
        'Já existe um medicamento com este nome.',
        HttpStatus.CONFLICT
      );

    const existsCodigo = await this.repository.count({
      codigo: createMedicamentoRequestDto.codigo,
    });

    if (existsCodigo > 0)
      throw new HttpException(
        'Já existe um medicamento com este código.',
        HttpStatus.CONFLICT
      );

    const newMedicamento = await this.repository.create({
      nome: createMedicamentoRequestDto.nome,
      codigo: createMedicamentoRequestDto.codigo,
      especificacao: createMedicamentoRequestDto.especificacao,
      categoria: createMedicamentoRequestDto.categoria,
      descricao: createMedicamentoRequestDto.descricao,
      userId: user.id,
    });

    this.logService.created({
      mensagem: `Medicamento "${newMedicamento.nome}" criado pelo usuário ${user.nome}`,
      artefato: newMedicamento.id,
      modulo: 'Medicamento',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: newMedicamento,
    });
  }

  // ----- PUT (/medicamentos/:id) - Administrador ----

  @Put(':id')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async update(
    @User() user: IUser,
    @Param('id') id: string,
    @Body() updateMedicamentoRequestDto: UpdateMedicamentoRequestDto
  ): Promise<IResponse<any>> {
    if (!id || id !== updateMedicamentoRequestDto.id)
      throw new HttpException('Dados não são válidos.', HttpStatus.FORBIDDEN);

    const medicamento = await this.repository.findOne(id);

    if (!medicamento)
      throw new HttpException('Medicamento não existe.', HttpStatus.NOT_FOUND);

    const updatedMedicamento = await this.repository.update(id, {
      nome: updateMedicamentoRequestDto.nome,
      codigo: updateMedicamentoRequestDto.codigo,
      especificacao: updateMedicamentoRequestDto.especificacao,
      categoria: updateMedicamentoRequestDto.categoria,
      descricao: updateMedicamentoRequestDto.descricao,
      active: updateMedicamentoRequestDto.active,
    });

    this.logService.updated({
      mensagem: `Medicamento "${updatedMedicamento.nome}" atualizado pelo usuário ${user.nome}`,
      artefato: updatedMedicamento.id,
      modulo: 'Medicamento',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: updatedMedicamento,
    });
  }

  // ----- DELETE (/medicamentos/:id) - Administrador ----

  @Delete(':id')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async remove(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const medicamento = await this.repository.findOne(id);

    if (!medicamento)
      throw new HttpException('Medicamento não existe.', HttpStatus.NOT_FOUND);

    try {
      await this.repository.remove(id);
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2003'
      ) {
        throw new HttpException(
          'Não é possível excluir: existem registros vinculados.',
          HttpStatus.CONFLICT
        );
      }
      throw err;
    }

    this.logService.deleted({
      mensagem: `Medicamento "${medicamento.nome}" excluído pelo usuário ${user.nome}`,
      artefato: medicamento.id,
      modulo: 'Medicamento',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
    });
  }

  // ----- PUT (/medicamentos/:id/toggle-active) - Administrador ----

  @Put(':id/toggle-active')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async toggleActive(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const medicamento = await this.repository.findOne(id);

    if (!medicamento)
      throw new HttpException('Medicamento não existe.', HttpStatus.NOT_FOUND);

    const updatedMedicamento = await this.repository.update(id, {
      nome: medicamento.nome,
      codigo: medicamento.codigo,
      especificacao: medicamento.especificacao,
      categoria: medicamento.categoria,
      descricao: medicamento.descricao ?? undefined,
      active: !medicamento.active,
    });

    this.logService.actived({
      mensagem: `Medicamento "${updatedMedicamento.nome}" ${updatedMedicamento.active ? 'ativado' : 'desativado'} pelo usuário ${user.nome}`,
      artefato: updatedMedicamento.id,
      modulo: 'Medicamento',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: updatedMedicamento,
    });
  }
}
