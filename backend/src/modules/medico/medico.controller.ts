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
  CreateMedicoRequestDto,
  UpdateMedicoRequestDto,
} from './dto/medico.dto';
import { MedicoRepository } from './repository/medico.repository';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import {
  TypeSetor,
  Setor,
  Autenticado,
} from '@src/infra/guard/roles.decorator';
import { User, IUser } from '@src/common/decorator/user.decorator';
import { LogService } from '../../infra/logger/repository/log.repository';
import { Prisma } from '@generated/prisma/client';

@Controller('medicos')
export class MedicoController extends BaseController {
  constructor(
    private readonly service: MedicoRepository,
    private readonly logService: LogService
  ) {
    super();
  }

  // ----- GET (/medicos) - Administrador/Farmacia ----

  @Get()
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async findAll(): Promise<IResponse<any>> {
    const medicos = await this.service.findAll();
    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: medicos,
    });
  }

  // ----- GET (/medicos/:id) - Administrador/Farmacia ----

  @Get(':id')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async findOne(@Param('id') id: string): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const medico = await this.service.findOne(id);
    if (!medico)
      throw new HttpException('Médico não existe.', HttpStatus.NOT_FOUND);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: medico,
    });
  }

  // ----- POST (/medicos) - Administrador/Farmacia ----

  @Post()
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async create(
    @User() user: IUser,
    @Body() dto: CreateMedicoRequestDto
  ): Promise<IResponse<any>> {
    const existsNome = await this.service.count({ nome: dto.nome });
    if (existsNome > 0)
      throw new HttpException(
        'Já existe um médico com este nome.',
        HttpStatus.CONFLICT
      );

    const existsCrm = await this.service.count({ crm: dto.crm });
    if (existsCrm > 0)
      throw new HttpException(
        'Já existe um médico com este CRM.',
        HttpStatus.CONFLICT
      );

    const medico = await this.service.create({
      nome: dto.nome,
      crm: dto.crm,
      telefone: dto.telefone ?? null,
      email: dto.email ?? null,
      userId: user.id,
    });

    this.logService.created({
      mensagem: `Médico "${medico.nome}" criado pelo usuário ${user.nome}`,
      artefato: medico.id,
      modulo: 'Medico',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: medico,
    });
  }

  // ----- PUT (/medicos/:id) - Administrador/Farmacia ----

  @Put(':id')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async update(
    @User() user: IUser,
    @Param('id') id: string,
    @Body() dto: UpdateMedicoRequestDto
  ): Promise<IResponse<any>> {
    if (!id || id !== dto.id)
      throw new HttpException('Dados não são válidos.', HttpStatus.FORBIDDEN);

    const medico = await this.service.findOne(id);
    if (!medico)
      throw new HttpException('Médico não existe.', HttpStatus.NOT_FOUND);

    const updated = await this.service.update(id, {
      nome: dto.nome,
      crm: dto.crm,
      telefone: dto.telefone ?? null,
      email: dto.email ?? null,
    });

    this.logService.updated({
      mensagem: `Médico "${updated.nome}" atualizado pelo usuário ${user.nome}`,
      artefato: updated.id,
      modulo: 'Medico',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: updated,
    });
  }

  // // ----- PUT (/medicos/:id/toggle-active) - Administrador ----

  // @Put(':id/toggle-active')
  // @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  // async toggleActive(
  //   @User() user: IUser,
  //   @Param('id') id: string
  // ): Promise<IResponse<any>> {
  //   if (!id)
  //     throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

  //   const medicamento = await this.service.findOne(id);

  //   if (!medicamento)
  //     throw new HttpException('Medico não existe.', HttpStatus.NOT_FOUND);

  //   const updatedMedicamento = await this.service.update(id, {
  //     active: !medicamento.active,
  //   });

  //   this.logService.actived({
  //     mensagem: `Medicamento "${updatedMedicamento.nome}" ${updatedMedicamento.active ? 'ativado' : 'desativado'} pelo usuário ${user.nome}`,
  //     artefato: updatedMedicamento.id,
  //     modulo: 'Medicamento',
  //     ip: user.ip,
  //     userId: user.id,
  //   });

  //   return this.handleSuccessResponse({
  //     code: HttpStatus.ACCEPTED,
  //     response: updatedMedicamento,
  //   });
  // }

  // // ----- DELETE (/medicos/:id) - Administrador/Farmacia ----

  // @Delete(':id')
  // @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  // async remove(
  //   @User() user: IUser,
  //   @Param('id') id: string
  // ): Promise<IResponse<any>> {
  //   if (!id)
  //     throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

  //   const medico = await this.service.findOne(id);
  //   if (!medico)
  //     throw new HttpException('Médico não existe.', HttpStatus.NOT_FOUND);

  //   try {
  //     await this.service.remove(id);
  //   } catch (err) {
  //     if (
  //       err instanceof Prisma.PrismaClientKnownRequestError &&
  //       err.code === 'P2003'
  //     ) {
  //       throw new HttpException(
  //         'Não é possível excluir: existem registros vinculados.',
  //         HttpStatus.CONFLICT
  //       );
  //     }
  //     throw err;
  //   }

  //   this.logService.deleted({
  //     mensagem: `Médico "${medico.nome}" excluído pelo usuário ${user.nome}`,
  //     artefato: medico.id,
  //     modulo: 'Medico',
  //     ip: user.ip,
  //     userId: user.id,
  //   });

  //   return this.handleSuccessResponse({ code: HttpStatus.ACCEPTED });
  // }
}
