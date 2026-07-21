import { describe, expect, it, jest } from '@jest/globals';

import { DashboardController } from '../dashboard.controller';

describe('DashboardController requerimentos count', () => {
  it('busca contagem geral quando o tipo nao e informado', async () => {
    const service = {
      countRequerimentos: jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
    };
    const controller = new DashboardController(service as any);

    const response = await controller.findAllRequerimentosCounts({} as any);

    expect(service.countRequerimentos).toHaveBeenCalledWith();
    expect(response).toMatchObject({
      status: 200,
      success: true,
      response: [],
    });
  });
});

describe('DashboardController próximas visitas', () => {
  it('encaminha o usuário para buscar as próximas visitas', async () => {
    const service = {
      findProximasVisitas: jest.fn<(...args: any[]) => Promise<any[]>>().mockResolvedValue([]),
    };
    const controller = new DashboardController(service as any);
    const user = { id: 'user-1', setor: 'Base', base: 'Base A' } as any;

    const response = await controller.findProximasVisitas(user);

    expect(service.findProximasVisitas).toHaveBeenCalledWith(user, undefined);
    expect(response).toMatchObject({ status: 200, success: true, response: [] });
  });
});

describe('DashboardController estoque', () => {
  it('encaminha o período dos lotes próximos do vencimento', async () => {
    const service = {
      findLotesProximosVencimento: jest.fn<(...args: any[]) => Promise<any[]>>().mockResolvedValue([]),
    };
    const controller = new DashboardController(service as any);
    const user = { setor: 'Base', baseId: 'base-1' } as any;

    const response = await controller.findLotesProximosVencimento(user, '45');

    expect(service.findLotesProximosVencimento).toHaveBeenCalledWith(user, 45);
    expect(response).toMatchObject({ status: 200, success: true, response: [] });
  });

  it('busca as últimas movimentações do usuário autenticado', async () => {
    const service = {
      findUltimasMovimentacoes: jest.fn<(...args: any[]) => Promise<any[]>>().mockResolvedValue([]),
    };
    const controller = new DashboardController(service as any);
    const user = { setor: 'Base', baseId: 'base-1' } as any;

    const response = await controller.findUltimasMovimentacoes(user);

    expect(service.findUltimasMovimentacoes).toHaveBeenCalledWith(user);
    expect(response).toMatchObject({ status: 200, success: true, response: [] });
  });
});
