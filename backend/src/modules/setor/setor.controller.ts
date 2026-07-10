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

import { CreateSetorRequestDto, UpdateSetorRequestDto } from './dto/setor.dto';
import { SetorService } from './repository/setor.repository';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import { Setor, TypeSetor } from '@src/infra/guard/roles.decorator';
import { User, IUser } from '@src/common/decorator/user.decorator';
import { LogService } from '../../infra/logger/repository/log.repository';
import { Prisma } from '@generated/prisma/client';

@Controller('setores')
export class SetorController extends BaseController {
  constructor(
    private readonly setorService: SetorService,
    private readonly logService: LogService
  ) {
    super();
  }

  // ----- GET (/setor) - Administrador ----

  @Get()
  @Setor(TypeSetor.Administrador)
  async findAll(): Promise<IResponse<any>> {
    const setores = await this.setorService.findAll();

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: setores,
    });
  }

  // ----- GET (/setor/:id) - Administrador ----

  @Get(':id')
  @Setor(TypeSetor.Administrador)
  async findOne(@Param('id') id: string): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const setor = await this.setorService.findOne(id);

    if (!setor)
      throw new HttpException('Setor não existe.', HttpStatus.NOT_FOUND);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: setor,
    });
  }

  // ----- POST (/setor) - Administrador ----

  @Post()
  @Setor(TypeSetor.Administrador)
  async create(
    @User() user: IUser,
    @Body() createSetorRequestDto: CreateSetorRequestDto
  ): Promise<IResponse<any>> {
    const exists = await this.setorService.count({
      nome: createSetorRequestDto.nome,
    });

    if (exists > 0)
      throw new HttpException(
        'Já existe um setor com este nome.',
        HttpStatus.CONFLICT
      );

    const newSetor = await this.setorService.create({
      nome: createSetorRequestDto.nome,
      nomeVisivel: createSetorRequestDto.nomeVisivel,
    });

    this.logService.created({
      mensagem: `Setor "${newSetor.nome}" criado pelo usuário ${user.nome}`,
      artefato: newSetor.id,
      modulo: 'Setor',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: newSetor,
    });
  }

  // ----- PUT (/setor/:id) - Administrador ----

  @Put(':id')
  @Setor(TypeSetor.Administrador)
  async update(
    @User() user: IUser,
    @Param('id') id: string,
    @Body() updateSetorRequestDto: UpdateSetorRequestDto
  ): Promise<IResponse<any>> {
    if (!id || id !== updateSetorRequestDto.id)
      throw new HttpException('Dados não são válidos.', HttpStatus.FORBIDDEN);

    const setor = await this.setorService.findOne(id);

    if (!setor)
      throw new HttpException('Setor não existe.', HttpStatus.NOT_FOUND);

    const updatedSetor = await this.setorService.update(id, {
      nome: updateSetorRequestDto.nome,
      nomeVisivel: updateSetorRequestDto.nomeVisivel,
    });

    this.logService.updated({
      mensagem: `Setor "${updatedSetor.nome}" atualizado pelo usuário ${user.nome}`,
      artefato: updatedSetor.id,
      modulo: 'Setor',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: updatedSetor,
    });
  }

  // ----- GET (/requerimentos/farmacia) - Farmacia ----

  @Delete(':id')
  @Setor(TypeSetor.Administrador)
  async remove(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const setor = await this.setorService.findOne(id);

    if (!setor)
      throw new HttpException('Setor não existe.', HttpStatus.NOT_FOUND);

    try {
      await this.setorService.remove(id);
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
      mensagem: `Setor "${setor.nome}" excluído pelo usuário ${user.nome}`,
      artefato: setor.id,
      modulo: 'Setor',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
    });
  }
}
