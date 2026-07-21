import { describe, expect, it, jest } from '@jest/globals';
import { EstoqueService } from '../services/estoque.service';

describe('EstoqueService', () => {
  it('retorna a página de estoques sem carregar os lotes', async () => {
    const prisma = {
      estoque: {
        count: jest.fn().mockResolvedValue(25 as never),
        findMany: jest.fn().mockResolvedValue([
          {
            id: 'estoque-1',
            baseId: 'base-1',
            quantidadeMinima: 2,
            ativo: true,
            Base: { nome: 'Base A' },
            Produto: { id: 'produto-1', nome: 'Produto', codigo: 10 },
            Medicamento: null,
          },
        ] as never),
      },
      estoqueLote: {
        groupBy: jest.fn().mockResolvedValue([
          {
            estoqueId: 'estoque-1',
            validade: new Date('2026-08-01T00:00:00.000Z'),
            _sum: { quantidade: 7 },
            _count: { _all: 1 },
          },
        ] as never),
      },
    };
    const service = new EstoqueService({ prisma } as never);

    const result = await service.findAll('base-1', 2, 10);

    expect(prisma.estoque.count).toHaveBeenCalledWith({
      where: { baseId: 'base-1' },
    });
    expect(prisma.estoque.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        skip: 10,
        take: 10,
        select: expect.not.objectContaining({ lotes: expect.anything() }),
      })
    );
    expect(result).toMatchObject({ page: 2, limit: 10, total: 25, pages: 3 });
    expect(result.items[0]).toMatchObject({ quantidadeTotal: 7 });
    expect(result.items[0]).not.toHaveProperty('lotes');
  });

  it('carrega somente os lotes ativos do estoque expandido', async () => {
    const prisma = {
      estoqueLote: {
        findMany: jest.fn().mockResolvedValue([
          {
            id: 'lote-1',
            estoqueId: 'estoque-1',
            validade: new Date('2026-08-01T00:00:00.000Z'),
            quantidade: 3,
            bloqueado: false,
          },
        ] as never),
      },
    };
    const service = new EstoqueService({ prisma } as never);

    const result = await service.findLotes('estoque-1', 'base-1');

    expect(prisma.estoqueLote.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          estoqueId: 'estoque-1',
          active: true,
          Estoque: { baseId: 'base-1' },
        },
      })
    );
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveProperty('status');
  });
});
