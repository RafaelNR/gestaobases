import { describe, expect, it, jest } from '@jest/globals';
import { Status, TipoRequerimento } from '@generated/prisma/client';
import { TypeCargo, TypeSetor } from '@src/infra/guard/roles.decorator';
import { RequerimentoService } from '../services/requerimento.service';

describe('RequerimentoService filtro', () => {
  function makeService() {
    const repo = {
      findAll: jest.fn(),
    };
    const notificacaoUseCase = {
      notifyCreated: jest.fn(),
      notifyStatusChanged: jest.fn(),
    };

    return {
      repo,
      service: new RequerimentoService(repo as any, notificacaoUseCase as any),
    };
  }

  const baseUser = {
    id: 'user-1',
    nome: 'Usuario Base',
    baseId: 'base-1',
    setorId: 'setor-1',
    setor: TypeSetor.Base,
    cargo: TypeCargo.ApoioBases,
    base: 'Base A',
    iat: 0,
    exp: 0,
    ip: '127.0.0.1',
  };

  it('aplica filtro tipado e preserva a base do usuario sem permissao global', async () => {
    const { repo, service } = makeService();
    repo.findAll.mockResolvedValue([] as never);

    await service.findByFiltro(
      TipoRequerimento.Farmacia,
      {
        status: Status.Recebido,
        base: 'Base B',
        userId: 'user-2',
        ambulanciaId: 'amb-1',
        data_inicial: '2026-07-01',
        data_final: '2026-07-03',
        numero: '15',
      } as any,
      baseUser
    );

    expect(repo.findAll).toHaveBeenCalledWith(TipoRequerimento.Farmacia, {
      status: Status.Recebido,
      base: 'Base A',
      userId: 'user-2',
      ambulanciaId: 'amb-1',
      numero: 15,
      data_inicio: {
        gte: new Date('2026-07-01T00:00:00.000Z'),
        lte: new Date('2026-07-03T23:59:59.999Z'),
      },
    });
  });
});
