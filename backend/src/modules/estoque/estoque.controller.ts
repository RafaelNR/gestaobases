import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import { User, IUser } from '@src/common/decorator/user.decorator';
import {
  Autenticado,
  Setor,
  TypeSetor,
} from '@src/infra/guard/roles.decorator';
import {
  BloquearLoteDto,
  CreateEstoqueDto,
  CreateLoteDto,
  EstoqueQueryDto,
  MovimentarEstoqueDto,
} from './dto/estoque.dto';
import { EstoqueService } from './services/estoque.service';

@Controller('estoques')
export class EstoqueController extends BaseController {
  constructor(private readonly estoqueService: EstoqueService) {
    super();
  }

  @Get()
  @Setor([
    TypeSetor.Base,
    TypeSetor.Farmacia,
    TypeSetor.Almoxarifado,
    TypeSetor.Enfermagem,
    TypeSetor.Frota,
  ])
  async findAll(
    @User() user: IUser,
    @Query() query: EstoqueQueryDto
  ): Promise<IResponse<any>> {
    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: await this.estoqueService.findAll(
        user,
        query.page,
        query.limit,
        query
      ),
    });
  }

  @Get(':estoqueId/lotes')
  @Autenticado()
  async findLotes(
    @User() user: IUser,
    @Param('estoqueId') estoqueId: string
  ): Promise<IResponse<any>> {
    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: await this.estoqueService.findLotes(estoqueId, user),
    });
  }

  @Get('lotes/:loteId/movimentacoes')
  @Autenticado()
  async findMovimentacoesByLote(
    @User() user: IUser,
    @Param('loteId') loteId: string
  ): Promise<IResponse<any>> {
    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: await this.estoqueService.findMovimentacoesByLote(loteId, user),
    });
  }

  @Post()
  @Setor([TypeSetor.Base])
  async createEstoque(
    @User() user: IUser,
    @Body() dto: CreateEstoqueDto
  ): Promise<IResponse<any>> {
    const baseId =
      user.setor === TypeSetor.Administrador ? dto.baseId : user.baseId;
    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: await this.estoqueService.createEstoque({ ...dto, baseId }),
    });
  }

  @Post('lotes')
  @Setor([TypeSetor.Base])
  async createLote(
    @User() user: IUser,
    @Body() dto: CreateLoteDto
  ): Promise<IResponse<any>> {
    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: await this.estoqueService.createLote(dto, user.id),
    });
  }

  // Faz a movimentação de um lote (entrada ou saída)
  @Post('lotes/:loteId/movimentacoes')
  @Setor([TypeSetor.Base])
  async movimentar(
    @User() user: IUser,
    @Param('loteId') loteId: string,
    @Body() dto: MovimentarEstoqueDto
  ): Promise<IResponse<any>> {
    return this.handleSuccessResponse({
      code: HttpStatus.CREATED,
      response: await this.estoqueService.movimentar(loteId, user, dto),
    });
  }

  @Patch('lotes/:loteId/bloqueio')
  @Setor([TypeSetor.Administrador, TypeSetor.Almoxarifado, TypeSetor.Farmacia])
  async bloquear(
    @Param('loteId') loteId: string,
    @Body() dto: BloquearLoteDto
  ): Promise<IResponse<any>> {
    return this.handleSuccessResponse({
      code: HttpStatus.ACCEPTED,
      response: await this.estoqueService.bloquear(
        loteId,
        dto.bloqueado,
        dto.motivoBloqueio
      ),
    });
  }

  @Delete('lotes/:loteId')
  @Setor([TypeSetor.Base, TypeSetor.Almoxarifado, TypeSetor.Farmacia])
  async deleteLote(
    @Param('loteId') loteId: string,
    @User() user: IUser
  ): Promise<IResponse<any>> {
    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: await this.estoqueService.softDelete(loteId, user.id),
    });
  }
}
