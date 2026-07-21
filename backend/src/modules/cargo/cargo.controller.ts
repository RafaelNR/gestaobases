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
} from '@nestjs/common';
import { Prisma } from '@generated/prisma/client';

import { BaseController, IResponse } from '@src/common/bases/BaseController';
import { User, IUser } from '@src/common/decorator/user.decorator';
import { LogService } from '../../infra/logger/repository/log.repository';
import {
  Autenticado,
  Cargo,
  Setor,
  TypeCargo,
  TypeSetor,
} from '@src/infra/guard/roles.decorator';
import { CreateCargoRequestDto, UpdateCargoRequestDto } from './dto/cargo.dto';
import { CargoRepository } from './repository/cargo.repository';

@Controller('cargos')
export class CargoController extends BaseController {
  constructor(
    private readonly cargoRepository: CargoRepository,
    private readonly logService: LogService
  ) {
    super();
  }

  @Get()
  @Autenticado()
  async findAll(): Promise<IResponse<any>> {
    const cargos = await this.cargoRepository.findAll();

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: cargos,
    });
  }

  @Get('setor/:setor')
  @Autenticado()
  async findBySetor(@Param('setor') setor: string): Promise<IResponse<any>> {
    if (!setor)
      throw new HttpException('Setor não foi enviado.', HttpStatus.FORBIDDEN);

    const cargos = await this.cargoRepository.findBySetor(setor);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: cargos,
    });
  }

  @Get('setorId/:setorId')
  @Autenticado()
  async findBySetorId(
    @Param('setorId') setorId: string
  ): Promise<IResponse<any>> {
    if (!setorId)
      throw new HttpException('Setor não foi enviado.', HttpStatus.FORBIDDEN);

    const cargos = await this.cargoRepository.findBySetorId(setorId);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: cargos,
    });
  }

  @Get(':id')
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async findOne(@Param('id') id: string): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const cargo = await this.cargoRepository.findOne(id);

    if (!cargo)
      throw new HttpException('Cargo não existe.', HttpStatus.NOT_FOUND);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: cargo,
    });
  }

  @Post()
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async create(
    @User() user: IUser,
    @Body() createCargoRequestDto: CreateCargoRequestDto
  ): Promise<IResponse<any>> {
    const exists = await this.cargoRepository.count({
      OR: [
        { nome: createCargoRequestDto.nome },
        { nomeVisivel: createCargoRequestDto.nomeVisivel },
      ],
    });

    if (exists > 0)
      throw new HttpException(
        'Já existe um cargo com este nome.',
        HttpStatus.CONFLICT
      );

    const newCargo = await this.cargoRepository.create({
      nome: createCargoRequestDto.nome,
      nomeVisivel: createCargoRequestDto.nomeVisivel,
      setor: createCargoRequestDto.setor,
    });

    this.logService.created({
      mensagem: `Cargo "${newCargo.nome}" criado pelo usuário ${user.nome}`,
      artefato: newCargo.id,
      modulo: 'Cargo',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: newCargo,
    });
  }

  @Put(':id')
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async update(
    @User() user: IUser,
    @Param('id') id: string,
    @Body() updateCargoRequestDto: UpdateCargoRequestDto
  ): Promise<IResponse<any>> {
    if (!id || id !== updateCargoRequestDto.id)
      throw new HttpException('Dados não são válidos.', HttpStatus.FORBIDDEN);

    const cargo = await this.cargoRepository.findOne(id);

    if (!cargo)
      throw new HttpException('Cargo não existe.', HttpStatus.NOT_FOUND);

    const exists = await this.cargoRepository.count({
      id: { not: id },
      OR: [
        { nome: updateCargoRequestDto.nome },
        { nomeVisivel: updateCargoRequestDto.nomeVisivel },
      ],
    });

    if (exists > 0)
      throw new HttpException(
        'Já existe um cargo com este nome.',
        HttpStatus.CONFLICT
      );

    const updatedCargo = await this.cargoRepository.update(id, {
      nome: updateCargoRequestDto.nome,
      nomeVisivel: updateCargoRequestDto.nomeVisivel,
      setor: updateCargoRequestDto.setor,
    });

    this.logService.updated({
      mensagem: `Cargo "${updatedCargo.nome}" atualizado pelo usuário ${user.nome}`,
      artefato: updatedCargo.id,
      modulo: 'Cargo',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: updatedCargo,
    });
  }

  @Delete(':id')
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async remove(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const cargo = await this.cargoRepository.findOne(id);

    if (!cargo)
      throw new HttpException('Cargo não existe.', HttpStatus.NOT_FOUND);

    try {
      await this.cargoRepository.remove(id);
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
      mensagem: `Cargo "${cargo.nome}" excluído pelo usuário ${user.nome}`,
      artefato: cargo.id,
      modulo: 'Cargo',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
    });
  }
}
