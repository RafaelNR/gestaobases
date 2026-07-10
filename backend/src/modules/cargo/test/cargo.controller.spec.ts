import { HttpException, HttpStatus } from '@nestjs/common';
import { describe, expect, it, jest } from '@jest/globals';

import { CargoController } from '../cargo.controller';

describe('CargoController', () => {
  function makeController(repositoryOverrides: Record<string, unknown> = {}) {
    const repository = {
      findAll: jest.fn(),
      findBySetor: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
      count: jest.fn(),
      ...repositoryOverrides,
    };

    const logService = {
      created: jest.fn(),
      updated: jest.fn(),
      deleted: jest.fn(),
    };

    return {
      repository,
      logService,
      controller: new CargoController(repository as any, logService as any),
    };
  }

  const user = {
    id: 'user-1',
    nome: 'Admin',
    ip: '127.0.0.1',
  };

  it('retorna todos os cargos cadastrados', async () => {
    const cargos = [{ id: 'cargo-1', nome: 'RH', nomeVisivel: 'RH' }];
    const { controller, repository } = makeController({
      findAll: jest.fn().mockResolvedValue(cargos as never),
    });

    const result = await controller.findAll();

    expect(repository.findAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      status: HttpStatus.OK,
      success: true,
      response: cargos,
    });
  });

  it('retorna cargos vinculados ao setor informado', async () => {
    const cargos = [
      {
        id: 'cargo-1',
        nome: 'Farmaceutica',
        nomeVisivel: 'Farmacêutica',
        setor: 'Farmacia',
      },
    ];
    const { controller, repository } = makeController({
      findBySetor: jest.fn().mockResolvedValue(cargos as never),
    });

    const result = await controller.findBySetor('Farmacia');

    expect(repository.findBySetor).toHaveBeenCalledWith('Farmacia');
    expect(result.response).toBe(cargos);
  });

  it('rejeita busca por setor sem parametro', async () => {
    const { controller } = makeController();

    await expect(controller.findBySetor('')).rejects.toEqual(
      new HttpException('Setor não foi enviado.', HttpStatus.FORBIDDEN)
    );
  });

  it('cria cargo quando nome e nome visivel ainda nao existem', async () => {
    const cargo = {
      id: 'cargo-1',
      nome: 'RH',
      nomeVisivel: 'RH',
      setor: 'Administrativo',
    };
    const { controller, repository, logService } = makeController({
      count: jest.fn().mockResolvedValue(0 as never),
      create: jest.fn().mockResolvedValue(cargo as never),
    });

    const result = await controller.create(user as any, {
      nome: 'RH',
      nomeVisivel: 'RH',
      setor: 'Administrativo',
    });

    expect(repository.count).toHaveBeenCalledWith({
      OR: [{ nome: 'RH' }, { nomeVisivel: 'RH' }],
    });
    expect(repository.create).toHaveBeenCalledWith({
      nome: 'RH',
      nomeVisivel: 'RH',
      setor: 'Administrativo',
    });
    expect(logService.created).toHaveBeenCalledTimes(1);
    expect(result.status).toBe(HttpStatus.CREATED);
    expect(result.response).toBe(cargo);
  });

  it('rejeita criacao de cargo duplicado', async () => {
    const { controller } = makeController({
      count: jest.fn().mockResolvedValue(1 as never),
    });

    await expect(
      controller.create(user as any, {
        nome: 'RH',
        nomeVisivel: 'RH',
        setor: 'Administrativo',
      })
    ).rejects.toEqual(
      new HttpException(
        'Já existe um cargo com este nome.',
        HttpStatus.CONFLICT
      )
    );
  });

  it('rejeita atualizacao quando id da rota diverge do body', async () => {
    const { controller } = makeController();

    await expect(
      controller.update(user as any, 'cargo-1', {
        id: 'cargo-2',
        nome: 'RH',
        nomeVisivel: 'RH',
        setor: 'Administrativo',
      })
    ).rejects.toEqual(
      new HttpException('Dados não são válidos.', HttpStatus.FORBIDDEN)
    );
  });
});
