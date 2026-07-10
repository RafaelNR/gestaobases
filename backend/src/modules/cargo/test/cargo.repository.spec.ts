import { describe, expect, it, jest } from '@jest/globals';

import { CargoRepository } from '../repository/cargo.repository';

describe('CargoRepository', () => {
  function makeRepository() {
    const prisma = {
      cargo: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
        count: jest.fn(),
      },
    };

    return {
      prisma,
      repository: new CargoRepository(prisma as any),
    };
  }

  it('lista cargos ordenados pelo nome visivel', async () => {
    const { prisma, repository } = makeRepository();
    prisma.cargo.findMany.mockResolvedValue([] as never);

    await repository.findAll();

    expect(prisma.cargo.findMany).toHaveBeenCalledWith({
      orderBy: { nomeVisivel: 'asc' },
    });
  });

  it('filtra cargos pelo nome do setor', async () => {
    const { prisma, repository } = makeRepository();
    prisma.cargo.findMany.mockResolvedValue([] as never);

    await repository.findBySetor('Farmacia');

    expect(prisma.cargo.findMany).toHaveBeenCalledWith({
      where: { setor: 'Farmacia' },
      orderBy: { nomeVisivel: 'asc' },
    });
  });
});
