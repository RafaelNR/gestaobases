import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';

import { DashboardService } from './dashboard.service';
import { BaseController } from '@src/common/bases/BaseController';
import {
  Autenticado,
  Setor,
  TypeSetor,
} from '@src/infra/guard/roles.decorator';
import { TipoRequerimento } from '@generated/prisma/enums';
import { IUser, User } from '@/src/common/decorator/user.decorator';

@Controller('dashboard')
export class DashboardController extends BaseController {
  constructor(private readonly service: DashboardService) {
    super();
  }

  // ─── GET /dashboard/stats — público ──────────────────────────────────────────

  @Get('requerimentos/count')
  @Setor([TypeSetor.Administrador, TypeSetor.Base])
  async findAllRequerimentosCounts(@User() user: IUser) {
    const data = await this.service.countRequerimentos(user);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: data,
    });
  }

  @Get('requerimentos/count/:tipo')
  @Autenticado()
  async findStats(@User() user: IUser, @Param('tipo') tipo: TipoRequerimento) {
    const data = await this.service.countRequerimentos(user, tipo);

    return this.handleSuccessResponse({
      code: HttpStatus.OK,
      response: data,
    });
  }

  @Get('proximas-visitas')
  @Autenticado()
  async findProximasVisitas(
    @User() user: IUser,
    @Query('dias') dias?: string,
  ) {
    const periodoDias = Number(dias);
    const data = await this.service.findProximasVisitas(
      user,
      Number.isInteger(periodoDias) ? periodoDias : undefined,
    );
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  @Get('estoque/lotes-proximos-vencimento')
  @Autenticado()
  async findLotesProximosVencimento(
    @User() user: IUser,
    @Query('dias') dias?: string,
  ) {
    const periodoDias = Number(dias);
    const data = await this.service.findLotesProximosVencimento(
      user,
      Number.isInteger(periodoDias) ? periodoDias : undefined,
    );
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }

  @Get('estoque/ultimas-movimentacoes')
  @Autenticado()
  async findUltimasMovimentacoes(@User() user: IUser) {
    const data = await this.service.findUltimasMovimentacoes(user);
    return this.handleSuccessResponse({ code: HttpStatus.OK, response: data });
  }
}
