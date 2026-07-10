import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';

import { PasswordResetService } from '../password-reset.service';
import { PasswordResetRepository } from '../repository/password-reset.repository';
import { MailService } from '@infra/mail/mail.service';

const mockRepo = {
  findUserByEmail: jest.fn(),
  findCredentialsAccount: jest.fn(),
  invalidatePendingTokens: jest.fn(),
  createToken: jest.fn(),
  findAllPendingByUser: jest.fn(),
  markUsed: jest.fn(),
  updatePasswordHash: jest.fn(),
  prisma: {
    passwordResetToken: { findMany: jest.fn() },
    authAccount: { findFirst: jest.fn() },
    refreshToken: { updateMany: jest.fn() },
  },
};

const mockMail = { sendMail: jest.fn() };
const mockConfig = { get: jest.fn().mockReturnValue('30'), getOrThrow: jest.fn() };

describe('PasswordResetService', () => {
  let service: PasswordResetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PasswordResetService,
        { provide: PasswordResetRepository, useValue: mockRepo },
        { provide: MailService, useValue: mockMail },
        { provide: ConfigService, useValue: mockConfig },
      ],
    }).compile();

    service = module.get<PasswordResetService>(PasswordResetService);
    jest.clearAllMocks();
  });

  describe('requestReset', () => {
    it('retorna mensagem genérica se usuário não existe', async () => {
      mockRepo.findUserByEmail.mockResolvedValue(null);

      const result = await service.requestReset({ email: 'nao@existe.com' }, '127.0.0.1');

      expect(result).toHaveProperty('message');
      expect(mockRepo.createToken).not.toHaveBeenCalled();
    });

    it('retorna mensagem genérica se usuário OAuth (sem senha)', async () => {
      mockRepo.findUserByEmail.mockResolvedValue({ id: 'u1', email: 'google@test.com' });
      mockRepo.findCredentialsAccount.mockResolvedValue(null);

      const result = await service.requestReset({ email: 'google@test.com' }, '127.0.0.1');

      expect(result).toHaveProperty('message');
      expect(mockRepo.createToken).not.toHaveBeenCalled();
    });

    it('cria token e envia e-mail para usuário credentials', async () => {
      mockRepo.findUserByEmail.mockResolvedValue({ id: 'u1', name: 'Test', email: 'test@test.com' });
      mockRepo.findCredentialsAccount.mockResolvedValue({ id: 'acc-1' });
      mockRepo.invalidatePendingTokens.mockResolvedValue({});
      mockRepo.createToken.mockResolvedValue({});
      mockMail.sendMail.mockResolvedValue(undefined);
      mockConfig.get.mockReturnValue('30');

      const result = await service.requestReset({ email: 'test@test.com' }, '127.0.0.1');

      expect(mockRepo.createToken).toHaveBeenCalledTimes(1);
      expect(result).toHaveProperty('message');
    });
  });

  describe('confirmReset', () => {
    it('lança erro se nenhum token candidato encontrado', async () => {
      mockRepo.prisma.passwordResetToken.findMany.mockResolvedValue([]);

      await expect(
        service.confirmReset({ token: 'invalid', password: 'Nova@Senha1' }),
      ).rejects.toThrow();
    });
  });
});
