import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { afterEach, describe, expect, it, jest } from '@jest/globals';
import request from 'supertest';

import { TypeCargo, TypeSetor } from '@src/infra/guard/roles.decorator';
import { AlmoxarifadoController } from '../controllers/almoxarifado.controller';
import { RequerimentoService } from '../services/requerimento.service';
import { LogService } from '@src/infra/logger/repository/log.repository';
import { Status, TipoRequerimento } from '@generated/prisma/client';

describe('RequerimentoController filtro routes', () => {
  let app: INestApplication | null = null;
  const service = {
    findByFiltro: jest.fn(),
  };

  async function createApp() {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AlmoxarifadoController],
      providers: [
        {
          provide: RequerimentoService,
          useValue: service,
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
    app.use((req: any, _res: unknown, next: () => void) => {
      req.user = {
        id: 'user-1',
        nome: 'Usuario',
        baseId: 'base-1',
        setorId: 'setor-1',
        setor: TypeSetor.Almoxarifado,
        cargo: TypeCargo.Almoxarifado,
        base: 'Base A',
      };
      next();
    });
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

  it('GET /requerimentos/almoxarifado/filtro encaminha query para o service', async () => {
    service.findByFiltro.mockResolvedValue([] as never);
    const testApp = await createApp();

    await request(testApp.getHttpServer())
      .get('/requerimentos/almoxarifado/filtro')
      .query({
        status: Status.Recebido,
        base: 'Base A',
        numero: '10',
      })
      .expect(200);

    expect(service.findByFiltro).toHaveBeenCalledWith(
      TipoRequerimento.Almoxarifado,
      {
        status: Status.Recebido,
        base: 'Base A',
        numero: '10',
      },
      expect.objectContaining({
        id: 'user-1',
        setor: TypeSetor.Almoxarifado,
      })
    );
  });
});
