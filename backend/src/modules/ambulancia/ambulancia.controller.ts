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
  CreateAmbulanciaRequestDto,
  UpdateAmbulanciaRequestDto,
} from './dto/ambulancia.dto';
import { AmbulanciaRepository } from './repository/ambulancia.repository';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import {
  TypeSetor,
  Setor,
  Autenticado,
} from '@src/infra/guard/roles.decorator';
import { User, IUser } from '@src/common/decorator/user.decorator';
import { LogService } from '../../infra/logger/repository/log.repository';
import { Prisma } from '@generated/prisma/client';

@Controller('ambulancias')
export class AmbulanciaController extends BaseController {
  constructor(
    private readonly ambulanciaRepository: AmbulanciaRepository,
    private readonly logService: LogService
  ) {
    super();
  }

  // ----- GET (/ambulancias) - Administrador ---

  @Get()
  @Autenticado()
  async findAll(): Promise<IResponse<any>> {
    const ambulancias = await this.ambulanciaRepository.findAll();

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: ambulancias,
    });
  }

  // ----- GET (/ambulancias/base/:base) - Autenticado ---

  @Get('base/:base')
  @Autenticado()
  async findAllByBase(@Param('base') base: string): Promise<IResponse<any>> {
    const ambulancias = await this.ambulanciaRepository.findByBase(base);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: ambulancias,
    });
  }

  // ----- GET (/ambulancias/:id) - Administrador ----

  @Get(':id')
  @Setor(TypeSetor.Administrador)
  async findOne(@Param('id') id: string): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const ambulancia = await this.ambulanciaRepository.findOne(id);

    if (!ambulancia)
      throw new HttpException('Ambulância não existe.', HttpStatus.NOT_FOUND);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: ambulancia,
    });
  }

  // ----- POST (/ambulancias) - Administrador ----

  @Post()
  @Setor(TypeSetor.Administrador)
  async create(
    @User() user: IUser,
    @Body() createAmbulanciaRequestDto: CreateAmbulanciaRequestDto
  ): Promise<IResponse<any>> {
    const exists = await this.ambulanciaRepository.count({
      nome: createAmbulanciaRequestDto.nome,
      tipo: createAmbulanciaRequestDto.tipo,
      baseId: createAmbulanciaRequestDto.baseId,
    });

    if (exists > 0)
      throw new HttpException(
        'Já existe uma ambulância com este dados: nome, base e tipo.',
        HttpStatus.CONFLICT
      );

    const newAmbulancia = await this.ambulanciaRepository.create(
      {
        nome: createAmbulanciaRequestDto.nome,
        baseId: createAmbulanciaRequestDto.baseId,
        tipo: createAmbulanciaRequestDto.tipo,
      },
      user.id
    );

    this.logService.created({
      mensagem: `Ambulância "${newAmbulancia.nome}" criada pelo usuário ${user.nome}`,
      artefato: newAmbulancia.id,
      modulo: 'Ambulancia',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: newAmbulancia,
    });
  }

  // ----- PUT (/ambulancias/:id) - Administrador ----

  @Put(':id')
  @Setor(TypeSetor.Administrador)
  async update(
    @User() user: IUser,
    @Param('id') id: string,
    @Body() updateAmbulanciaRequestDto: UpdateAmbulanciaRequestDto
  ): Promise<IResponse<any>> {
    if (!id || id !== updateAmbulanciaRequestDto.id)
      throw new HttpException('Dados não são válidos.', HttpStatus.FORBIDDEN);

    const ambulancia = await this.ambulanciaRepository.findOne(id);

    if (!ambulancia)
      throw new HttpException('Ambulância não existe.', HttpStatus.NOT_FOUND);

    const exists = await this.ambulanciaRepository.count({
      nome: updateAmbulanciaRequestDto.nome,
      baseId: updateAmbulanciaRequestDto.baseId,
      tipo: updateAmbulanciaRequestDto.tipo,
      id: { not: id },
    });

    if (exists > 0)
      throw new HttpException(
        'Já existe uma ambulância com este dados: nome, base e tipo.',
        HttpStatus.CONFLICT
      );

    const updatedAmbulancia = await this.ambulanciaRepository.update(
      id,
      {
        nome: updateAmbulanciaRequestDto.nome,
        tipo: updateAmbulanciaRequestDto.tipo,
        baseId: updateAmbulanciaRequestDto.baseId,
      },
      user.id
    );

    this.logService.updated({
      mensagem: `Ambulância "${updatedAmbulancia.nome}" atualizada pelo usuário ${user.nome}`,
      artefato: updatedAmbulancia.id,
      modulo: 'Ambulancia',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: updatedAmbulancia,
    });
  }

  // ----- DELETE (/ambulancias/:id) - Administrador ----

  @Delete(':id')
  @Setor(TypeSetor.Administrador)
  async remove(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const ambulancia = await this.ambulanciaRepository.findOne(id);

    if (!ambulancia)
      throw new HttpException('Ambulância não existe.', HttpStatus.NOT_FOUND);

    try {
      await this.ambulanciaRepository.remove(id);
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
      mensagem: `Ambulância "${ambulancia.nome}" excluída pelo usuário ${user.nome}`,
      artefato: ambulancia.id,
      modulo: 'Ambulancia',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
    });
  }
}
