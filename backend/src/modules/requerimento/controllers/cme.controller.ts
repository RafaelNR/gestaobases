import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Put,
} from '@nestjs/common';
import { TipoRequerimento } from '@generated/prisma/client';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import { User, IUser } from '@src/common/decorator/user.decorator';
import { TypeSetor, Setor } from '@src/infra/guard/roles.decorator';
import { LogService } from '../../../infra/logger/repository/log.repository';
import {
  AddItemRequestDto,
  ChangeStatusRequestDto,
  CreateRequerimentoAlmoxarifadoAndCMERequestDto,
  UpdateItemRequestDto,
  UpdateRequerimentoAlmoxarifadoAndCMERequestDto,
} from '../dto/requerimento.dto';
import { RequerimentoService } from '../services/requerimento.service';
import type { FiltroRequerimentos } from '../services/requerimento.service';
import {
  RequerimentoItemResult,
  RequerimentoResult,
} from '../types/requerimento.types';

const TIPO = TipoRequerimento.CME;
const MODULO = 'RequerimentoCME';

@Controller('requerimentos/cme')
export class CmeController extends BaseController {
  constructor(
    private readonly service: RequerimentoService,
    private readonly logService: LogService
  ) {
    super();
  }

  // ----- GET (/requerimentos/cme) - CME ----

  @Get()
  @Setor([TypeSetor.CME, TypeSetor.Base])
  async findAll(@User() user: IUser): Promise<IResponse<RequerimentoResult[]>> {
    const data = await this.service.findAll(TIPO, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  @Get('filtro')
  @Setor([TypeSetor.CME, TypeSetor.Base])
  async findByFiltro(
    @Query() filtro: FiltroRequerimentos,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult[]>> {
    const data = await this.service.findByFiltro(TIPO, filtro, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  @Get('/by/status')
  @Setor([TypeSetor.CME, TypeSetor.Base])
  async findByStatus(
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult[]>> {
    const data = await this.service.findStatus(TIPO, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- GET (/requerimentos/cme/:id) - CME ----

  @Get(':id')
  @Setor([TypeSetor.CME, TypeSetor.Base])
  async findOne(
    @Param('id') id: string,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult>> {
    const data = await this.service.findOne(id, TIPO, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- POST (/requerimentos/cme) - CME ----

  @Post()
  @Setor([TypeSetor.CME, TypeSetor.Base])
  async create(
    @Body() dto: CreateRequerimentoAlmoxarifadoAndCMERequestDto,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult>> {
    const data = await this.service.create(TIPO, dto, user);
    this.logService.created({
      mensagem: `Requerimento Almoxarifado #${data.numero} criado`,
      artefato: data.id,
      modulo: MODULO,
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: data,
    });
  }

  // ----- PUT (/requerimentos/cme/:id) - Autenticado ----

  @Put(':id')
  @Setor([TypeSetor.CME, TypeSetor.Base])
  async update(
    /*  */
    @Param('id') id: string,
    @Body() dto: UpdateRequerimentoAlmoxarifadoAndCMERequestDto,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult>> {
    const data = await this.service.update(id, TIPO, dto, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- POST (/requerimentos/cme/:id/enviar) - Autenticado ----

  @Post(':id/enviar')
  @Setor([TypeSetor.CME, TypeSetor.Base])
  async enviar(
    @Param('id') id: string,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult>> {
    const data = await this.service.enviar(id, TIPO, user);
    this.logService.updated({
      mensagem: `Requerimento CME #${data.numero} enviado`,
      artefato: id,
      modulo: MODULO,
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- POST (/requerimentos/cme/:id/status) - CME ----

  @Put(':id/status')
  @Setor([TypeSetor.CME])
  async changeStatus(
    @Param('id') id: string,
    @Body() dto: ChangeStatusRequestDto,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult>> {
    const data = await this.service.changeStatus(id, TIPO, dto, user);
    this.logService.updated({
      mensagem: `Status do Requerimento CME alterado para ${dto.status}`,
      artefato: id,
      modulo: MODULO,
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- DELETE (/requerimentos/cme/:id) - CME ----

  @Delete(':id')
  @Setor([TypeSetor.CME, TypeSetor.Base])
  async delete(
    @Param('id') id: string,
    @User() user: IUser
  ): Promise<IResponse<void>> {
    await this.service.delete(id, TIPO, user);
    return this.handleSuccessResponse({ code: HttpStatus.ACCEPTED });
  }

  // ----- POST (/requerimentos/cme/:id/itens) - CME ----

  @Post(':id/itens')
  @Setor([TypeSetor.CME, TypeSetor.Base])
  async addItem(
    @Param('id') id: string,
    @Body() dto: AddItemRequestDto,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoItemResult>> {
    const data = await this.service.addItem(id, TIPO, dto, user);
    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: data,
    });
  }

  // ----- POST (/requerimentos/cme/:id/itens) - CME ----

  @Put(':id/itens/:itemId')
  @Setor([TypeSetor.CME])
  async updateItem(
    @Param('id') id: string,
    @Param('itemId') itemId: string,
    @Body() dto: UpdateItemRequestDto,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoItemResult>> {
    const data = await this.service.updateItem(id, itemId, TIPO, dto, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- POST (/requerimentos/cme/:id/itens) - CME ----

  @Delete(':id/itens/:itemId')
  @Setor([TypeSetor.CME])
  async removeItem(
    @Param('id') id: string,
    @Param('itemId') itemId: string,
    @User() user: IUser
  ): Promise<IResponse<void>> {
    await this.service.removeItem(id, itemId, TIPO, user);
    return this.handleSuccessResponse({ code: HttpStatus.ACCEPTED });
  }
}
