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
  CreateCategoriasMedicamentoRequestDto,
  UpdateCategoriasMedicamentoRequestDto,
} from './dto/categorias-medicamento.dto';
import { CategoriasMedicamentoRepository } from './repository/categorias-medicamento.repository';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import { TypeSetor, Setor } from '@src/infra/guard/roles.decorator';
import { User, IUser } from '@src/common/decorator/user.decorator';
import { LogService } from '../../infra/logger/repository/log.repository';
import { Prisma } from '@generated/prisma/client';

@Controller('categorias-medicamento')
export class CategoriasMedicamentoController extends BaseController {
  constructor(
    private readonly repository: CategoriasMedicamentoRepository,
    private readonly logService: LogService
  ) {
    super();
  }

  // ----- GET (/categorias-medicamento) - Farmacia ---

  @Get()
  @Setor(TypeSetor.Farmacia)
  async findAll(): Promise<IResponse<any>> {
    const categorias = await this.repository.findAll();

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: categorias,
    });
  }

  // ----- GET (/categorias-medicamento/:id) - Farmacia ----

  @Get(':id')
  @Setor(TypeSetor.Farmacia)
  async findOne(@Param('id') id: string): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const categoria = await this.repository.findOne(id);

    if (!categoria)
      throw new HttpException(
        'Categoria de medicamento não existe.',
        HttpStatus.NOT_FOUND
      );

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: categoria,
    });
  }

  // ----- POST (/categorias-medicamento) - Farmacia ----

  @Post()
  @Setor(TypeSetor.Farmacia)
  async create(
    @User() user: IUser,
    @Body()
    createCategoriasMedicamentoRequestDto: CreateCategoriasMedicamentoRequestDto
  ): Promise<IResponse<any>> {
    const exists = await this.repository.count({
      nome: createCategoriasMedicamentoRequestDto.nome,
    });

    if (exists > 0)
      throw new HttpException(
        'Já existe uma categoria com este nome.',
        HttpStatus.CONFLICT
      );

    const newCategoria = await this.repository.create({
      nome: createCategoriasMedicamentoRequestDto.nome,
      userId: user.id,
    });

    this.logService.created({
      mensagem: `Categoria de medicamento "${newCategoria.nome}" criada pelo usuário ${user.nome}`,
      artefato: newCategoria.id,
      modulo: 'CategoriasMedicamento',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: newCategoria,
    });
  }

  // ----- PUT (/categorias-medicamento/:id) - Farmacia ----

  @Put(':id')
  @Setor(TypeSetor.Farmacia)
  async update(
    @User() user: IUser,
    @Param('id') id: string,
    @Body()
    updateCategoriasMedicamentoRequestDto: UpdateCategoriasMedicamentoRequestDto
  ): Promise<IResponse<any>> {
    if (!id || id !== updateCategoriasMedicamentoRequestDto.id)
      throw new HttpException('Dados não são válidos.', HttpStatus.FORBIDDEN);

    const categoria = await this.repository.findOne(id);

    if (!categoria)
      throw new HttpException(
        'Categoria de medicamento não existe.',
        HttpStatus.NOT_FOUND
      );

    const updatedCategoria = await this.repository.update(id, {
      nome: updateCategoriasMedicamentoRequestDto.nome,
      active: updateCategoriasMedicamentoRequestDto.active,
    });

    this.logService.updated({
      mensagem: `Categoria de medicamento "${updatedCategoria.nome}" atualizada pelo usuário ${user.nome}`,
      artefato: updatedCategoria.id,
      modulo: 'CategoriasMedicamento',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: updatedCategoria,
    });
  }

  // ----- DELETE (/categorias-medicamento/:id) - Farmacia ----

  @Delete(':id')
  @Setor(TypeSetor.Farmacia)
  async remove(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const categoria = await this.repository.findOne(id);

    if (!categoria)
      throw new HttpException(
        'Categoria de medicamento não existe.',
        HttpStatus.NOT_FOUND
      );

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
      mensagem: `Categoria de medicamento "${categoria.nome}" excluída pelo usuário ${user.nome}`,
      artefato: categoria.id,
      modulo: 'CategoriasMedicamento',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
    });
  }
}
