import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { BaseController, IResponse } from '@src/common/bases/BaseController';
import {
  Cargo,
  Setor,
  TypeCargo,
  TypeSetor,
} from '@src/infra/guard/roles.decorator';
import { RelatorioGeralRequerimentosQueryDto } from './dto/relatorio-requerimentos.dto';
import { RelatoriosService } from './services/relatorios.service';
import { RelatorioGeralRequerimentosRow } from './types/relatorio-requerimentos.types';
import { RelatorioEstoqueMovimentacoesQueryDto } from './dto/relatorio-estoque.dto';
import { RelatorioEstoqueResultado } from './types/relatorio-estoque.types';

@Controller('relatorios')
export class RelatoriosController extends BaseController {
  constructor(private readonly service: RelatoriosService) {
    super();
  }

  @Get('requerimentos')
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async getRequerimentos(
    @Query() filtro: RelatorioGeralRequerimentosQueryDto
  ): Promise<IResponse<RelatorioGeralRequerimentosRow[]>> {
    const data = await this.service.getRelatorioGeralRequerimentos(filtro);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  @Get('estoque/movimentacoes')
  @Setor(TypeSetor.Administrador)
  @Cargo(TypeCargo.Almoxarifado)
  async getEstoque(
    @Query() filtro: RelatorioEstoqueMovimentacoesQueryDto
  ): Promise<IResponse<RelatorioEstoqueResultado>> {
    const data = await this.service.getRelatorioEstoque(filtro);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }
}
