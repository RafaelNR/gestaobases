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
  CreateCategoriaProdutoRequestDto,
  UpdateCategoriaProdutoRequestDto,
} from './dto/categoria-produto.dto';
import { CategoriaProdutoRepository } from './repository/categoria-produto.repository';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import {
  TypeSetor,
  Setor,
  Autenticado,
} from '@src/infra/guard/roles.decorator';
import { User, IUser } from '@src/common/decorator/user.decorator';
import { LogService } from '../../infra/logger/repository/log.repository';
import { Prisma } from '@generated/prisma/client';

@Controller('categorias-produto')
export class CategoriaProdutoController extends BaseController {
  constructor(
    private readonly repository: CategoriaProdutoRepository,
    private readonly logService: LogService
  ) {
    super();
  }

  // ----- GET (/categorias-produto) - Autenticado ---

  @Get()
  @Autenticado()
  async findAll(): Promise<IResponse<any>> {
    const categorias = await this.repository.findAll();

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: categorias,
    });
  }

  // ----- GET (/categorias-produto/:id) - Administrador ----

  @Get(':id')
  @Setor(TypeSetor.Administrador)
  async findOne(@Param('id') id: string): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const categoria = await this.repository.findOne(id);

    if (!categoria)
      throw new HttpException(
        'Categoria de produto não existe.',
        HttpStatus.NOT_FOUND
      );

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: categoria,
    });
  }

  // ----- POST (/categorias-produto) - Administrador ----

  @Post()
  @Setor(TypeSetor.Administrador)
  async create(
    @User() user: IUser,
    @Body() createCategoriaProdutoRequestDto: CreateCategoriaProdutoRequestDto
  ): Promise<IResponse<any>> {
    const exists = await this.repository.count({
      nome: createCategoriaProdutoRequestDto.nome,
    });

    if (exists > 0)
      throw new HttpException(
        'Já existe uma categoria com este nome.',
        HttpStatus.CONFLICT
      );

    const newCategoria = await this.repository.create({
      nome: createCategoriaProdutoRequestDto.nome,
      userId: user.id,
    });

    this.logService.created({
      mensagem: `Categoria de produto "${newCategoria.nome}" criada pelo usuário ${user.nome}`,
      artefato: newCategoria.id,
      modulo: 'CategoriaProduto',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: newCategoria,
    });
  }

  // ----- PUT (/categorias-produto/:id) - Administrador ----

  @Put(':id')
  @Setor(TypeSetor.Administrador)
  async update(
    @User() user: IUser,
    @Param('id') id: string,
    @Body() updateCategoriaProdutoRequestDto: UpdateCategoriaProdutoRequestDto
  ): Promise<IResponse<any>> {
    if (!id || id !== updateCategoriaProdutoRequestDto.id)
      throw new HttpException('Dados não são válidos.', HttpStatus.FORBIDDEN);

    const categoria = await this.repository.findOne(id);

    if (!categoria)
      throw new HttpException(
        'Categoria de produto não existe.',
        HttpStatus.NOT_FOUND
      );

    const updatedCategoria = await this.repository.update(id, {
      nome: updateCategoriaProdutoRequestDto.nome,
    });

    this.logService.updated({
      mensagem: `Categoria de produto "${updatedCategoria.nome}" atualizada pelo usuário ${user.nome}`,
      artefato: updatedCategoria.id,
      modulo: 'CategoriaProduto',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: updatedCategoria,
    });
  }

  // ----- DELETE (/categorias-produto/:id) - Administrador ----

  @Delete(':id')
  @Setor(TypeSetor.Administrador)
  async remove(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const categoria = await this.repository.findOne(id);

    if (!categoria)
      throw new HttpException(
        'Categoria de produto não existe.',
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
      mensagem: `Categoria de produto "${categoria.nome}" excluída pelo usuário ${user.nome}`,
      artefato: categoria.id,
      modulo: 'CategoriaProduto',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
    });
  }
}
