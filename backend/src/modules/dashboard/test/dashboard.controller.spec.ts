import { describe, expect, it, jest } from '@jest/globals';

import { DashboardController } from '../dashboard.controller';

describe('DashboardController requerimentos count', () => {
  it('busca contagem geral quando o tipo nao e informado', async () => {
    const service = {
      countRequerimentos: jest.fn<() => Promise<any[]>>().mockResolvedValue([]),
    };
    const controller = new DashboardController(service as any);

    const response = await controller.findAllRequerimentosCounts();

    expect(service.countRequerimentos).toHaveBeenCalledWith();
    expect(response).toMatchObject({
      status: 200,
      success: true,
      response: [],
    });
  });
});
