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
import { Setor, TypeSetor } from '@src/infra/guard/roles.decorator';
import { LogService } from '../../../infra/logger/repository/log.repository';
import {
  AddItemRequestDto,
  ChangeStatusRequestDto,
  UpdateItemRequestDto,
  CreateRequerimentoFarmaciaRequestDto,
  UpdateRequerimentoFarmaciaRequestDto,
} from '../dto/requerimento.dto';
import { RequerimentoService } from '../services/requerimento.service';
import type { FiltroRequerimentos } from '../services/requerimento.service';
import {
  RequerimentoItemResult,
  RequerimentoResult,
} from '../types/requerimento.types';

const TIPO = TipoRequerimento.Farmacia;
const MODULO = 'RequerimentoFarmacia';

@Controller('requerimentos/farmacia')
export class FarmaciaController extends BaseController {
  constructor(
    private readonly service: RequerimentoService,
    private readonly logService: LogService
  ) {
    super();
  }

  // ----- GET (/requerimentos/farmacia) - Farmacia ----

  @Get()
  @Setor([TypeSetor.Farmacia, TypeSetor.Base])
  async findAll(@User() user: IUser): Promise<IResponse<RequerimentoResult[]>> {
    const data = await this.service.findAll(TIPO, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  @Get('filtro')
  @Setor([TypeSetor.Farmacia, TypeSetor.Base])
  async findByFiltro(
    @Query() filtro: FiltroRequerimentos,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult[]>> {
    const data = await this.service.findByFiltro(TIPO, filtro, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- GET (/requerimentos/farmacia/:id) - Farmacia ----

  @Get(':id')
  @Setor([TypeSetor.Farmacia, TypeSetor.Base])
  async findOne(
    @Param('id') id: string,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult>> {
    const data = await this.service.findOne(id, TIPO, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  @Get('/by/status')
  @Setor([TypeSetor.Farmacia, TypeSetor.Base])
  async findByStatus(
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult[]>> {
    const data = await this.service.findStatus(TIPO, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- POST (/requerimentos/farmacia) - Farmacia ----

  @Post()
  @Setor([TypeSetor.Farmacia, TypeSetor.Base])
  async create(
    @Body() dto: CreateRequerimentoFarmaciaRequestDto,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult>> {
    const data = await this.service.create(TIPO, dto, user);
    this.logService.created({
      mensagem: `Requerimento Farmácia #${data.numero} criado`,
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

  // ----- POST (/requerimentos/farmacia/:id/enviar) - Farmacia ----

  @Post(':id/enviar')
  @Setor([TypeSetor.Farmacia, TypeSetor.Base])
  async enviar(
    @Param('id') id: string,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult>> {
    const data = await this.service.enviar(id, TIPO, user);
    this.logService.updated({
      mensagem: `Requerimento Farmácia #${data.numero} enviado`,
      artefato: id,
      modulo: MODULO,
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- PUT (/requerimentos/farmacia/:id) - Farmacia ----

  @Put(':id')
  @Setor(TypeSetor.Farmacia)
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateRequerimentoFarmaciaRequestDto,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult>> {
    const data = await this.service.update(id, TIPO, dto, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- PUT (/requerimentos/farmacia/:id/status) - Farmacia ----

  @Put(':id/status')
  @Setor(TypeSetor.Farmacia)
  async changeStatus(
    @Param('id') id: string,
    @Body() dto: ChangeStatusRequestDto,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoResult>> {
    const data = await this.service.changeStatus(id, TIPO, dto, user);
    this.logService.updated({
      mensagem: `Status do Requerimento Farmácia alterado para ${dto.status}`,
      artefato: id,
      modulo: MODULO,
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- DELETE (/requerimentos/farmacia/:id) - Farmacia ----

  @Delete(':id')
  @Setor([TypeSetor.Farmacia, TypeSetor.Base])
  async delete(
    @Param('id') id: string,
    @User() user: IUser
  ): Promise<IResponse<void>> {
    await this.service.delete(id, TIPO, user);
    return this.handleSuccessResponse({ code: HttpStatus.ACCEPTED });
  }

  // ----- POST (/requerimentos/farmacia/:id/itens) - Farmacia ----

  @Post(':id/itens')
  @Setor([TypeSetor.Farmacia])
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

  // ----- PUT (/requerimentos/farmacia/:id/itens/:itemId) - Farmacia ----

  @Put(':id/itens/:itemId')
  @Setor([TypeSetor.Farmacia])
  async updateItem(
    @Param('id') id: string,
    @Param('itemId') itemId: string,
    @Body() dto: UpdateItemRequestDto,
    @User() user: IUser
  ): Promise<IResponse<RequerimentoItemResult>> {
    const data = await this.service.updateItem(id, itemId, TIPO, dto, user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  // ----- DELETE (/requerimentos/farmacia/:id/itens/:itemId) - Farmacia ----

  @Delete(':id/itens/:itemId')
  @Setor([TypeSetor.Farmacia])
  async removeItem(
    @Param('id') id: string,
    @Param('itemId') itemId: string,
    @User() user: IUser
  ): Promise<IResponse<void>> {
    await this.service.removeItem(id, itemId, TIPO, user);
    return this.handleSuccessResponse({ code: HttpStatus.ACCEPTED });
  }
}
