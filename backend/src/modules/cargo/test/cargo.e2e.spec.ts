import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { afterEach, describe, expect, it, jest } from '@jest/globals';
import request from 'supertest';

import { PrismaService } from '@infra/database/prisma/prisma.service';
import { LogService } from '@src/infra/logger/repository/log.repository';
import { CargoController } from '../cargo.controller';
import { CargoRepository } from '../repository/cargo.repository';

describe('CargoController routes', () => {
  let app: INestApplication | null = null;
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

  async function createApp() {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [CargoController],
      providers: [
        CargoRepository,
        {
          provide: PrismaService,
          useValue: prisma,
        },
        {
          provide: LogService,
          useValue: {
            created: jest.fn(),
            updated: jest.fn(),
            deleted: jest.fn(),
          },
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    return app;
  }

  afterEach(async () => {
    jest.clearAllMocks();
    if (app) {
      await app.close();
      app = null;
    }
  });

  it('GET /cargos/setor/:setor retorna cargos filtrados pelo setor', async () => {
    prisma.cargo.findMany.mockResolvedValue([
      {
        id: 'cargo-1',
        nome: 'Farmaceutica',
        nomeVisivel: 'Farmacêutica',
        setor: 'Farmacia',
      },
    ] as never);
    const testApp = await createApp();

    const response = await request(testApp.getHttpServer())
      .get('/cargos/setor/Farmacia')
      .expect(200);

    expect(prisma.cargo.findMany).toHaveBeenCalledWith({
      where: { setor: 'Farmacia' },
      orderBy: { nomeVisivel: 'asc' },
    });
    expect(response.body).toEqual({
      status: 200,
      success: true,
      response: [
        {
          id: 'cargo-1',
          nome: 'Farmaceutica',
          nomeVisivel: 'Farmacêutica',
          setor: 'Farmacia',
        },
      ],
    });
  });
});
