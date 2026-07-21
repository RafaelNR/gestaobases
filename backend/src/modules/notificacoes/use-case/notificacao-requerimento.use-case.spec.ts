import { TipoRequerimento, TipoNotificacao } from '@generated/prisma/client';
import { NotificacaoRequerimentoUseCase } from './notificacao-requerimento.use-case';

describe('NotificacaoRequerimentoUseCase', () => {
  const repository = {
    createManyForUsers: jest.fn(),
  };
  const userService = {
    usersNotificationBySetor: jest.fn(),
    usersNotificationBySetorAndBase: jest.fn(),
  };
  const gateway = {
    emitToUsers: jest.fn(),
  };

  let useCase: NotificacaoRequerimentoUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    repository.createManyForUsers.mockResolvedValue(undefined);
    userService.usersNotificationBySetor.mockResolvedValue([]);
    userService.usersNotificationBySetorAndBase.mockResolvedValue([]);
    useCase = new NotificacaoRequerimentoUseCase(
      repository as never,
      userService as never,
      gateway as never
    );
  });

  it('notifica Farmácia e CME quando um requerimento de Farmácia é criado', async () => {
    userService.usersNotificationBySetor
      .mockResolvedValueOnce([{ id: 'farmacia-1' }])
      .mockResolvedValueOnce([{ id: 'cme-1' }]);

    await useCase.notifyCreated({
      id: 'req-1',
      numero: 10,
      tipo: TipoRequerimento.Farmacia,
    } as never);

    expect(userService.usersNotificationBySetor).toHaveBeenNthCalledWith(
      1,
      'Farmacia'
    );
    expect(userService.usersNotificationBySetor).toHaveBeenNthCalledWith(
      2,
      'CME'
    );
    expect(repository.createManyForUsers).toHaveBeenCalledWith(
      ['farmacia-1', 'cme-1'],
      expect.objectContaining({
        tipo: TipoNotificacao.Requerimento,
        artefatoUUID: 'req-1',
        evento: 'requerimento.criado',
      })
    );
  });

  it('notifica usuários da Base correspondente quando o status muda', async () => {
    userService.usersNotificationBySetorAndBase.mockResolvedValue([
      { id: 'base-1' },
      { id: 'base-2' },
    ]);

    await useCase.notifyStatusChanged(
      {
        id: 'req-2',
        numero: 11,
        tipo: TipoRequerimento.Almoxarifado,
        base: 'Base Central',
      } as never,
      'Analise' as never
    );

    expect(userService.usersNotificationBySetorAndBase).toHaveBeenCalledWith(
      'Base',
      'Base Central'
    );
    expect(repository.createManyForUsers).toHaveBeenCalledWith(
      ['base-1', 'base-2'],
      expect.objectContaining({
        tipo: TipoNotificacao.Requerimento,
        artefatoUUID: 'req-2',
        evento: 'requerimento.status_alterado',
      })
    );
  });
});
