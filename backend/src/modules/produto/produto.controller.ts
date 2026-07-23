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
  CreateProdutoRequestDto,
  UpdateProdutoRequestDto,
} from './dto/produto.dto';
import { ProdutoRepository } from './repository/produto.repository';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import {
  TypeSetor,
  Setor,
  Cargo,
  Autenticado,
  TypeCargo,
} from '@src/infra/guard/roles.decorator';
import { User, IUser } from '@src/common/decorator/user.decorator';
import { LogService } from '../../infra/logger/repository/log.repository';
import { Prisma } from '@generated/prisma/client';

@Controller('produtos')
export class ProdutoController extends BaseController {
  constructor(
    private readonly repository: ProdutoRepository,
    private readonly logService: LogService
  ) {
    super();
  }

  // ----- GET (/produtos) - Administrador/Farmacia ----

  @Get()
  @Autenticado()
  async findAll(): Promise<IResponse<any>> {
    const produtos = await this.repository.findAll();

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: produtos,
    });
  }

  // ----- GET (/produtos/:id) - Administrador/Almoxarifado ----

  @Get(':id')
  @Setor([TypeSetor.Administrador, TypeSetor.Almoxarifado])
  @Cargo([TypeCargo.Almoxarifado, TypeCargo.AuxAlmoxarifado])
  async findOne(@Param('id') id: string): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const produto = await this.repository.findOne(id);

    if (!produto)
      throw new HttpException('Produto não existe.', HttpStatus.NOT_FOUND);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: produto,
    });
  }

  // ----- POST (/produtos) - Administrador/Almoxarifado ----

  @Post()
  @Setor([TypeSetor.Administrador])
  @Cargo([TypeCargo.Almoxarifado, TypeCargo.AuxAlmoxarifado])
  async create(
    @User() user: IUser,
    @Body() createProdutoRequestDto: CreateProdutoRequestDto
  ): Promise<IResponse<any>> {
    const existsNome = await this.repository.count({
      nome: createProdutoRequestDto.nome,
    });

    if (existsNome > 0)
      throw new HttpException(
        'Já existe um produto com este nome.',
        HttpStatus.CONFLICT
      );

    const existsCodigo = await this.repository.count({
      codigo: createProdutoRequestDto.codigo,
    });

    if (existsCodigo > 0)
      throw new HttpException(
        'Já existe um produto com este código.',
        HttpStatus.CONFLICT
      );

    const newProduto = await this.repository.create({
      ...createProdutoRequestDto,
      userId: user.id,
    });

    this.logService.created({
      mensagem: `Produto "${newProduto.nome}" criado pelo usuário ${user.nome}`,
      artefato: newProduto.id,
      modulo: 'Produto',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: newProduto,
    });
  }

  // ----- PUT (/produtos) - Administrador/Almoxarifado ----

  @Put(':id')
  @Setor([TypeSetor.Administrador])
  @Cargo([TypeCargo.Almoxarifado, TypeCargo.AuxAlmoxarifado])
  async update(
    @User() user: IUser,
    @Param('id') id: string,
    @Body() updateProdutoRequestDto: UpdateProdutoRequestDto
  ): Promise<IResponse<any>> {
    if (!id || id !== updateProdutoRequestDto.id)
      throw new HttpException('Dados não são válidos.', HttpStatus.FORBIDDEN);

    const produto = await this.repository.findOne(id);

    if (!produto)
      throw new HttpException('Produto não existe.', HttpStatus.NOT_FOUND);

    const updatedProduto = await this.repository.update(id, {
      ...updateProdutoRequestDto,
      userId: user.id,
    });

    this.logService.updated({
      mensagem: `Produto "${updatedProduto.nome}" atualizado pelo usuário ${user.nome}`,
      artefato: updatedProduto.id,
      modulo: 'Produto',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: updatedProduto,
    });
  }

  // ----- DELETE (/produtos) - Administrador/Almoxarifado ----

  @Delete(':id')
  @Setor([TypeSetor.Administrador])
  @Cargo([TypeCargo.Almoxarifado, TypeCargo.AuxAlmoxarifado])
  async remove(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const produto = await this.repository.findOne(id);

    if (!produto)
      throw new HttpException('Produto não existe.', HttpStatus.NOT_FOUND);

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
      mensagem: `Produto "${produto.nome}" excluído pelo usuário ${user.nome}`,
      artefato: produto.id,
      modulo: 'Produto',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
    });
  }

  // ----- PUT (/produtos/:id/toggle-active) - Administrador/Almoxarifado ----

  @Put(':id/toggle-active')
  @Setor([TypeSetor.Administrador])
  @Cargo([TypeCargo.Almoxarifado, TypeCargo.AuxAlmoxarifado])
  async toggleActive(
    @User() user: IUser,
    @Param('id') id: string
  ): Promise<IResponse<any>> {
    if (!id)
      throw new HttpException('Id não foi enviado.', HttpStatus.FORBIDDEN);

    const produto = await this.repository.findOne(id);

    if (!produto)
      throw new HttpException('Produto não existe.', HttpStatus.NOT_FOUND);

    const updatedProduto = await this.repository.update(id, {
      active: !produto.active,
      userId: user.id,
    });

    this.logService.actived({
      mensagem: `Produto "${updatedProduto.nome}" ${updatedProduto.active ? 'ativado' : 'desativado'} pelo usuário ${user.nome}`,
      artefato: updatedProduto.id,
      modulo: 'Produto',
      ip: user.ip,
      userId: user.id,
    });

    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: updatedProduto,
    });
  }
}
