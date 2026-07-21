import { describe, expect, it, jest } from '@jest/globals';
import { Status } from '@generated/prisma/client';
import { RelatoriosService } from '../services/relatorios.service';
import type { RelatoriosRepository } from '../repository/relatorios.repository';
import type { RelatorioGeralRequerimentosFiltro } from '../types/relatorio-requerimentos.types';

describe('RelatoriosService', () => {
  it('normaliza filtros e solicita o relatório geral ao repositório', async () => {
    const repository = {
      findRelatorioGeralRequerimentos: jest
        .fn<(filtro: RelatorioGeralRequerimentosFiltro) => Promise<unknown>>()
        .mockResolvedValue([]),
    };
    const service = new RelatoriosService(
      repository as unknown as RelatoriosRepository
    );

    await service.getRelatorioGeralRequerimentos({
      dataInicial: '2026-07-01',
      dataFinal: '2026-07-14',
      base: 'Base A',
      ambulanciaId: 'ambulancia-1',
      tipo: 'Farmacia',
    });

    expect(repository.findRelatorioGeralRequerimentos).toHaveBeenCalledWith({
      dataInicial: new Date('2026-07-01T00:00:00.000Z'),
      dataFinal: new Date('2026-07-14T23:59:59.999Z'),
      base: 'Base A',
      ambulanciaId: 'ambulancia-1',
      tipo: 'Farmacia',
      status: [
        Status.Recebido,
        Status.Analise,
        Status.Separacao,
        Status.Finalizado,
      ],
    });
  });

  it('mantém a base obrigatória e normaliza paginação no relatório de estoque', async () => {
    const repository = {
      findRelatorioEstoque: jest
        .fn<(filtro: unknown) => Promise<unknown>>()
        .mockResolvedValue({ items: [], cards: {}, page: 1, limit: 20, total: 0, pages: 0 }),
    };
    const service = new RelatoriosService(
      repository as unknown as RelatoriosRepository
    );

    await service.getRelatorioEstoque({
      baseId: 'base-1',
      dataInicial: '2026-07-01',
      dataFinal: '2026-07-14',
      search: 'dipirona',
    });

    expect(repository.findRelatorioEstoque).toHaveBeenCalledWith(
      expect.objectContaining({
        baseId: 'base-1',
        page: 1,
        limit: 20,
        search: 'dipirona',
      })
    );
  });
});
