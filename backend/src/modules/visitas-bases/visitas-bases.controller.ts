import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import { User, IUser } from '@src/common/decorator/user.decorator';
import {
  Autenticado,
  Setor,
  TypeSetor,
} from '@src/infra/guard/roles.decorator';
import { LogService } from '../../infra/logger/repository/log.repository';
import {
  CreateVisitaBaseRequestDto,
  UpdateVisitaBaseRequestDto,
} from './dto/visitas-bases.dto';
import { VisitasBasesService } from './repository/visitas-bases.repository';

@Controller('visitas-bases')
export class VisitasBasesController extends BaseController {
  constructor(
    private readonly service: VisitasBasesService,
    private readonly logService: LogService
  ) {
    super();
  }

  @Get()
  @Autenticado()
  async findAll(
    @Query('mes') mes?: string,
    @Query('ano') ano?: string
  ): Promise<IResponse<any>> {
    const data = await this.service.findAll({
      mes: mes ? Number(mes) : undefined,
      ano: ano ? Number(ano) : undefined,
    });
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  @Get(':id')
  @Autenticado()
  async findOne(@Param('id') id: string): Promise<IResponse<any>> {
    const data = await this.service.findOne(id);
    if (!data)
      throw new HttpException('Visita não encontrada.', HttpStatus.NOT_FOUND);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  @Post()
  @Setor([TypeSetor.Administrador, TypeSetor.Frota])
  async create(
    @Body() dto: CreateVisitaBaseRequestDto,
    @User() user: IUser
  ): Promise<IResponse<any>> {
    const data = await this.service.create({ ...dto, userId: user.id });
    this.logService.created({
      mensagem: `Visita à base "${data.base}" registrada para ${data.data}`,
      artefato: data.id,
      modulo: 'VisitasBases',
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: data,
    });
  }

  @Put(':id')
  @Setor([TypeSetor.Administrador, TypeSetor.Frota])
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateVisitaBaseRequestDto,
    @User() user: IUser
  ): Promise<IResponse<any>> {
    const data = await this.service.update(id, { ...dto, userId: user.id });
    this.logService.updated({
      mensagem: `Visita à base "${data.base}" atualizada`,
      artefato: id,
      modulo: 'VisitasBases',
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  @Delete(':id')
  @Setor([TypeSetor.Administrador, TypeSetor.Frota])
  async remove(
    @Param('id') id: string,
    @User() user: IUser
  ): Promise<IResponse<any>> {
    const visita = await this.service.findOne(id);
    if (!visita)
      throw new HttpException('Visita não encontrada.', HttpStatus.NOT_FOUND);
    await this.service.remove(id);
    this.logService.deleted({
      mensagem: `Visita à base "${visita.base}" removida`,
      artefato: id,
      modulo: 'VisitasBases',
      ip: user.ip,
      userId: user.id,
    });
    return this.handleSuccessResponse({ code: HttpStatus.ACCEPTED });
  }
}
