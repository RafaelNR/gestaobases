import { describe, expect, it, jest } from '@jest/globals';
import { RelatoriosRepository } from '../repository/relatorios.repository';
import { Status } from '@generated/prisma/client';

describe('RelatoriosRepository', () => {
  it('agrupa por base e ambulância e conta cada requerimento uma vez por categoria', async () => {
    const prisma = {
      requerimentoItem: {
        findMany: jest.fn<() => Promise<unknown>>().mockResolvedValue([
          {
            quantidade: 2,
            medicamentoId: 'med-1',
            produtoId: null,
            Requerimento: {
              id: 'req-1',
              base: 'Base A',
              ambulanciaId: 'amb-1',
              Ambulancia: { id: 'amb-1', nome: '01', tipo: 'USA' },
            },
          },
          {
            quantidade: 3,
            medicamentoId: 'med-2',
            produtoId: null,
            Requerimento: {
              id: 'req-1',
              base: 'Base A',
              ambulanciaId: 'amb-1',
              Ambulancia: { id: 'amb-1', nome: '01', tipo: 'USA' },
            },
          },
          {
            quantidade: 4,
            medicamentoId: null,
            produtoId: 'prod-1',
            Requerimento: {
              id: 'req-2',
              base: 'Base A',
              ambulanciaId: 'amb-1',
              Ambulancia: { id: 'amb-1', nome: '01', tipo: 'USA' },
            },
          },
        ]),
      },
    };
    const repository = new RelatoriosRepository(prisma as never);

    const result = await repository.findRelatorioGeralRequerimentos({
      status: [Status.Recebido],
    });

    expect(result).toEqual([
      {
        base: 'Base A',
        ambulancia: { id: 'amb-1', nome: '01', tipo: 'USA' },
        requerimentosMedicamentos: 1,
        quantidadeMedicamentos: 5,
        requerimentosProdutos: 1,
        quantidadeProdutos: 4,
      },
    ]);
  });
});
