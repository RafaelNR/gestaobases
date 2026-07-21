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

import { CreateBaseRequestDto, UpdateBaseRequestDto } from './dto/base.dto';
import { BaseRepository } from './repository/base.repository';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import {
  TypeSetor,
  Setor,
  Autenticado,
  TypeCargo,
  Cargo,
} from '@src/infra/guard/roles.decorator';
import { User, IUser } from '@src/common/decorator/user.decorator';
import { LogService } from '../../infra/logger/repository/log.repository';
import { Prisma } from '@generated/prisma/client';

@Controller('bases')
export class BasesController extends BaseController {
  constructor(
    private readonly baseRepository: BaseRepository,
    private readonly logService: LogService
  ) {
    super();
  }

  // ----- GET (/bases) - Autenticado ---

  @Get()
  @Autenticado()
  async findAll(): Promise<IResponse<any>> {
    const bases = await this.baseRepository.findAll();

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: bases,
    });
  }

  // ----- GET (/bases/:id) - Administrador ----

  @Get(':id')
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async findOne(@Param('id') id: string): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const base = await this.baseRepository.findOne(id);

    if (!base)
      throw new HttpException('Base não existe.', HttpStatus.NOT_FOUND);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: base,
    });
  }

  // ----- POST (/bases) - Administrador ----

  @Post()
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async create(
    @User() user: IUser,
    @Body() createBaseRequestDto: CreateBaseRequestDto
  ): Promise<IResponse<any>> {
    const exists = await this.baseRepository.count({
      nome: createBaseRequestDto.nome,
    });

    if (exists > 0)
      throw new HttpException(
        'Já existe uma base com este nome.',
        HttpStatus.CONFLICT
      );

    const newBase = await this.baseRepository.create(createBaseRequestDto);

    this.logService.created({
      mensagem: `Base "${newBase.nome}" criada pelo usuário ${user.nome}`,
      artefato: newBase.id,
      modulo: 'Base',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: newBase,
    });
  }

  // ----- PUT (/bases/:id) - Administrador ----

  @Put(':id')
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async update(
    @User() user: IUser,
    @Param('id') id: string,
    @Body() updateBaseRequestDto: UpdateBaseRequestDto
  ): Promise<IResponse<any>> {
    if (!id || id !== updateBaseRequestDto.id)
      throw new HttpException('Dados não são válidos.', HttpStatus.FORBIDDEN);

    const base = await this.baseRepository.findOne(id);

    if (!base)
      throw new HttpException('Base não existe.', HttpStatus.NOT_FOUND);

    const updatedBase = await this.baseRepository.update(
      id,
      updateBaseRequestDto
    );

    this.logService.updated({
      mensagem: `Base "${updatedBase.nome}" atualizada pelo usuário ${user.nome}`,
      artefato: updatedBase.id,
      modulo: 'Base',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: updatedBase,
    });
  }

  // ----- DELETE (/bases/:id) - Administrador ----

  @Delete(':id')
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async remove(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const base = await this.baseRepository.findOne(id);

    if (!base)
      throw new HttpException('Base não existe.', HttpStatus.NOT_FOUND);

    try {
      await this.baseRepository.remove(id);
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
      mensagem: `Base "${base.nome}" excluída pelo usuário ${user.nome}`,
      artefato: base.id,
      modulo: 'Base',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
    });
  }
}
