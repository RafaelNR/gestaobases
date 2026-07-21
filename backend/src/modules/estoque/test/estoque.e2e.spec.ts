import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { describe, expect, it, jest } from '@jest/globals';
import request from 'supertest';
import { TipoMovimentacaoEstoque } from '@generated/prisma/enums';
import { EstoqueController } from '../estoque.controller';
import { EstoqueService } from '../services/estoque.service';

describe('Estoque API (B2B)', () => {
  it('lista estoques com paginação e busca lotes em endpoint separado', async () => {
    const service = {
      findAll: jest.fn().mockResolvedValue({
        items: [],
        page: 2,
        limit: 10,
        total: 11,
        pages: 2,
      } as never),
      findLotes: jest.fn().mockResolvedValue([] as never),
    };
    const module = await Test.createTestingModule({
      controllers: [EstoqueController],
      providers: [{ provide: EstoqueService, useValue: service }],
    }).compile();
    const app: INestApplication = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.use((req: any, _res: any, next: () => void) => {
      req.user = { id: 'user-1', baseId: 'base-1', setor: 'Base' };
      next();
    });
    await app.init();

    await request(app.getHttpServer())
      .get('/estoques?page=2&limit=10')
      .expect(200);
    await request(app.getHttpServer())
      .get('/estoques/estoque-1/lotes')
      .expect(200);

    expect(service.findAll).toHaveBeenCalledWith('base-1', 2, 10);
    expect(service.findLotes).toHaveBeenCalledWith('estoque-1', 'base-1');
    await app.close();
  });

  it('registra uma entrada usando o usuário autenticado', async () => {
    const service = {
      movimentar: jest.fn().mockResolvedValue({
        lote: { id: '01900000-0000-7000-8000-000000000001', quantidade: 10 },
        movimentacao: { saldoAnterior: 0, saldoPosterior: 10 },
      } as never),
    };
    const module = await Test.createTestingModule({
      controllers: [EstoqueController],
      providers: [{ provide: EstoqueService, useValue: service }],
    }).compile();
    const app: INestApplication = module.createNestApplication();
    app.use((req: any, _res: any, next: () => void) => {
      req.user = {
        id: '01900000-0000-7000-8000-000000000002',
        nome: 'Teste',
        baseId: '01900000-0000-7000-8000-000000000003',
      };
      next();
    });
    await app.init();

    await request(app.getHttpServer())
      .post(
        '/estoques/lotes/01900000-0000-7000-8000-000000000001/movimentacoes'
      )
      .send({ tipo: TipoMovimentacaoEstoque.Entrada, quantidade: 10 })
      .expect(201);

    expect(service.movimentar).toHaveBeenCalledWith(
      '01900000-0000-7000-8000-000000000001',
      '01900000-0000-7000-8000-000000000002',
      { tipo: TipoMovimentacaoEstoque.Entrada, quantidade: 10 },
      '01900000-0000-7000-8000-000000000003'
    );
    await app.close();
  });
});
