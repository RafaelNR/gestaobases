import { describe, expect, it, jest } from '@jest/globals';

import { DashboardService } from '../dashboard.service';

describe('DashboardService próximas visitas', () => {
  it('filtra pela base do usuário e prioriza recebido na semana', async () => {
    const agora = new Date();
    const inicioHoje = new Date(
      Date.UTC(agora.getUTCFullYear(), agora.getUTCMonth(), agora.getUTCDate()),
    );
    const data = (dias: number) => {
      const visita = new Date(inicioHoje);
      visita.setUTCDate(visita.getUTCDate() + dias);
      return visita;
    };

    const prisma = {
      visitasBases: {
        findMany: jest.fn<(...args: any[]) => Promise<any[]>>().mockResolvedValue([
          { id: 'visita-1', data: data(0), base: 'Base A', descricao: null },
          { id: 'visita-2', data: data(1), base: 'Base A', descricao: 'Rota norte' },
          { id: 'visita-3', data: data(2), base: 'Base A', descricao: null },
        ]),
      },
      requerimento: {
        findMany: jest.fn<(...args: any[]) => Promise<any[]>>().mockResolvedValue([
          { base: 'Base A', created_at: data(-1) },
          { base: 'Base A', created_at: data(1) },
        ]),
      },
    };
    const service = new DashboardService(prisma as any);

    const response = await service.findProximasVisitas({
      setor: 'Base',
      base: 'Base A',
    } as any);

    expect(prisma.visitasBases.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ base: 'Base A' }),
      }),
    );
    expect(response.map(({ prioridade, requerimentoRecebidoNaSemana }) => ({
      prioridade,
      requerimentoRecebidoNaSemana,
    }))).toEqual([
      { prioridade: 'verde', requerimentoRecebidoNaSemana: true },
      { prioridade: 'vermelho', requerimentoRecebidoNaSemana: false },
      { prioridade: 'verde', requerimentoRecebidoNaSemana: true },
    ]);
  });
});

describe('DashboardService estoque', () => {
  it('busca lotes próximos somente na base do usuário e aplica o período informado', async () => {
    const prisma = {
      estoqueLote: {
        findMany: jest.fn<(...args: any[]) => Promise<any[]>>().mockResolvedValue([]),
      },
    };
    const service = new DashboardService(prisma as any);

    await service.findLotesProximosVencimento(
      { setor: 'Base', baseId: 'base-1' } as any,
      45,
    );

    expect(prisma.estoqueLote.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          active: true,
          quantidade: { gt: 0 },
          Estoque: { baseId: 'base-1' },
          validade: expect.objectContaining({ gte: expect.any(Date), lte: expect.any(Date) }),
        }),
        take: 10,
      }),
    );
  });

  it('busca as dez últimas movimentações somente na base do usuário', async () => {
    const prisma = {
      estoqueMovimentacao: {
        findMany: jest.fn<(...args: any[]) => Promise<any[]>>().mockResolvedValue([]),
      },
    };
    const service = new DashboardService(prisma as any);

    await service.findUltimasMovimentacoes({ setor: 'Base', baseId: 'base-1' } as any);

    expect(prisma.estoqueMovimentacao.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { Lote: { Estoque: { baseId: 'base-1' } } },
        orderBy: { created_at: 'desc' },
        take: 10,
      }),
    );
  });
});
