import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { afterEach, describe, expect, it, jest } from '@jest/globals';
import request from 'supertest';
import { TypeCargo, TypeSetor } from '@src/infra/guard/roles.decorator';
import { RelatoriosController } from '../relatorios.controller';
import { RelatoriosService } from '../services/relatorios.service';
import type { RelatorioEstoqueResultado } from '../types/relatorio-estoque.types';

describe('RelatoriosController', () => {
  let app: INestApplication | null = null;
  const service = {
    getRelatorioGeralRequerimentos: jest.fn(),
    getRelatorioEstoque: jest
      .fn<(filtro: unknown) => Promise<RelatorioEstoqueResultado>>(),
  };

  afterEach(async () => {
    jest.clearAllMocks();
    if (app) await app.close();
    app = null;
  });

  it('GET /relatorios/requerimentos encaminha filtros e retorna envelope de sucesso', async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [RelatoriosController],
      providers: [{ provide: RelatoriosService, useValue: service }],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.use((req: any, _res: unknown, next: () => void) => {
      req.user = {
        id: 'user-1',
        setor: TypeSetor.Administrativo,
        cargo: TypeCargo.RH,
      };
      next();
    });
    await app.init();
    service.getRelatorioGeralRequerimentos.mockResolvedValue([] as never);

    await request(app.getHttpServer())
      .get('/relatorios/requerimentos')
      .query({ dataInicial: '2026-07-01', tipo: 'Farmacia' })
      .expect(200)
      .expect(({ body }) => {
        expect(body.success).toBe(true);
        expect(body.response).toEqual([]);
      });

    expect(service.getRelatorioGeralRequerimentos).toHaveBeenCalledWith(
      expect.objectContaining({ dataInicial: '2026-07-01', tipo: 'Farmacia' })
    );
  });

  it('GET /relatorios/estoque/movimentacoes exige base e retorna paginação/cards', async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [RelatoriosController],
      providers: [{ provide: RelatoriosService, useValue: service }],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.use((req: any, _res: unknown, next: () => void) => {
      req.user = { id: 'user-1', setor: TypeSetor.Administrativo, cargo: TypeCargo.RH };
      next();
    });
    await app.init();
    service.getRelatorioEstoque.mockResolvedValue({
      items: [],
      cards: { entradas: 0, saidas: 0, perdas: 0, vencimentos: 0, saldoVencido: 0, lotesProximosVencimento: 0 },
      page: 1,
      limit: 20,
      total: 0,
      pages: 0,
    });

    await request(app.getHttpServer())
      .get('/relatorios/estoque/movimentacoes')
      .query({ baseId: '00000000-0000-0000-0000-000000000001' })
      .expect(200)
      .expect(({ body }) => expect(body.response.page).toBe(1));
    expect(service.getRelatorioEstoque).toHaveBeenCalledWith(
      expect.objectContaining({ baseId: '00000000-0000-0000-0000-000000000001' })
    );
  });
});
