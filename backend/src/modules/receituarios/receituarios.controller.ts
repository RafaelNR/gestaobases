import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { StatusReceituario } from '@generated/prisma/client';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import { User, IUser } from '@src/common/decorator/user.decorator';
import {
  TypeSetor,
  Setor,
  Cargo,
  Autenticado,
  TypeCargo,
} from '@src/infra/guard/roles.decorator';
import { LogService } from '../../infra/logger/repository/log.repository';
import {
  AddMedicamentoRequestDto,
  ChangeStatusReceituarioRequestDto,
  CreateReceituarioRequestDto,
  UpdateMedicamentoRequestDto,
  UpdateReceituarioRequestDto,
} from './dto/receituarios.dto';
import { ReceituariosService } from './services/receituarios.service';
import {
  ReceituarioMedicamentoResult,
  ReceituarioResult,
} from './types/receituarios.types';

@Controller('receituarios')
export class ReceituariosController extends BaseController {
  constructor(
    private readonly service: ReceituariosService,
    private readonly logService: LogService
  ) {
    super();
  }

  // ----- GET (/medicos) - Administrador/Farmacia ----

  @Get()
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async findAll(
    @Query('base') base?: string,
    @Query('status') status?: string,
    @User() user?: IUser
  ): Promise<IResponse<ReceituarioResult[]>> {
    const data = await this.service.findAll(
      { base, status: status as StatusReceituario },
      user!
    );
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- GET (/medicos/:id) - Administrador/Farmacia ----

  @Get(':id')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async findOne(
    @Param('id') id: string
  ): Promise<IResponse<ReceituarioResult>> {
    const data = await this.service.findOne(id);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- POST (/medicos) - Administrador/Farmacia ----

  @Post()
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async create(
    @Body() dto: CreateReceituarioRequestDto,
    @User() user: IUser
  ): Promise<IResponse<ReceituarioResult>> {
    const data = await this.service.create(dto, user);
    this.logService.created({
      mensagem: `Receituário ${data.numero} criado`,
      artefato: data.id,
      modulo: 'Receituarios',
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: data,
    });
  }

  // ----- PUT (/medicos) - Administrador/Farmacia ----

  @Put(':id')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateReceituarioRequestDto,
    @User() user: IUser
  ): Promise<IResponse<ReceituarioResult>> {
    const data = await this.service.update(id, dto, user);
    this.logService.updated({
      mensagem: `Receituário ${id} atualizado`,
      artefato: id,
      modulo: 'Receituarios',
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- PUT (/medicos/:id/status) - Administrador/Farmacia ----

  @Put(':id/status')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async changeStatus(
    @Param('id') id: string,
    @Body() dto: ChangeStatusReceituarioRequestDto,
    @User() user: IUser
  ): Promise<IResponse<ReceituarioResult>> {
    const data = await this.service.changeStatus(id, dto);
    this.logService.updated({
      mensagem: `Status do Receituário alterado para ${dto.status}`,
      artefato: id,
      modulo: 'Receituarios',
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- DELETE (/medicos) - Administrador/Farmacia ----

  @Delete(':id')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async remove(
    @Param('id') id: string,
    @User() user: IUser
  ): Promise<IResponse<void>> {
    await this.service.remove(id);
    this.logService.deleted({
      mensagem: `Receituário ${id} removido`,
      artefato: id,
      modulo: 'Receituarios',
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({ code: HttpStatus.ACCEPTED });
  }

  // ----- POST (/medicos) - Administrador/Farmacia ----

  @Post(':id/medicamentos')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async addMedicamento(
    @Param('id') id: string,
    @Body() dto: AddMedicamentoRequestDto,
    @User() user: IUser
  ): Promise<IResponse<ReceituarioMedicamentoResult>> {
    const data = await this.service.addMedicamento(id, dto, user.id);
    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: data,
    });
  }

  // ----- PUT (/medicos) - Administrador/Farmacia ----

  @Put(':id/medicamentos/:medId')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async updateMedicamento(
    @Param('id') id: string,
    @Param('medId') medId: string,
    @Body() dto: UpdateMedicamentoRequestDto
  ): Promise<IResponse<ReceituarioMedicamentoResult>> {
    const data = await this.service.updateMedicamento(id, medId, dto);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- DELETE (/medicos) - Administrador/Farmacia ----

  @Delete(':id/medicamentos/:medId')
  @Setor([TypeSetor.Administrador, TypeSetor.Farmacia])
  async removeMedicamento(
    @Param('id') id: string,
    @Param('medId') medId: string,
    @User() user: IUser
  ): Promise<IResponse<void>> {
    void user;
    await this.service.removeMedicamento(id, medId);
    return this.handleSuccessResponse({ code: HttpStatus.ACCEPTED });
  }
}
