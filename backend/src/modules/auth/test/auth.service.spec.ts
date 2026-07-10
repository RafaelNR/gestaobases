import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { createHmac } from 'crypto';

import { hashToken, verifyToken } from '@common/helpers/argon';
import { AuthRepository } from '../repository/auth.repository';
import { RefreshTokenService } from '../repository/refresh.service';
import { AuthService } from '../use-cases/auth.service';

const user = {
  id: 'user-1',
  username: 'operador',
  password: '$argon-password',
  active: true,
  Setor: { nome: 'Farmacia' },
  Cargo: { nome: 'Administrador' },
  Base: { nome: 'Central' },
};

const request = {
  headers: { 'user-agent': 'jest-agent' },
  ip: '127.0.0.1',
} as any;

describe('AuthService refresh token', () => {
  let service: AuthService;
  let repo: any;
  let refreshTokenService: any;
  let jwt: any;
  let config: any;

  beforeEach(() => {
    repo = {
      findUserByUsername: jest.fn(),
      findActiveRefreshTokensByUser: jest.fn(),
      revokeRefreshToken: jest.fn(),
      findUserById: jest.fn(),
    };
    refreshTokenService = {
      create: jest.fn(),
      revoke: jest.fn(),
    };
    jwt = {
      sign: jest
        .fn()
        .mockReturnValueOnce('access-token')
        .mockReturnValueOnce('refresh-token'),
    };
    config = {
      getOrThrow: jest.fn((key: string) => {
        const values: Record<string, string> = {
          JWT_ACCESS_SECRET: 'access-secret',
          JWT_REFRESH_SECRET: 'refresh-secret',
          JWT_EXPIRED_IN: '15m',
          JWT_REFRESH_EXPIRED_IN: '7d',
        };
        return values[key];
      }),
    };

    service = new AuthService(
      repo as unknown as AuthRepository,
      refreshTokenService as unknown as RefreshTokenService,
      jwt as unknown as JwtService,
      config as unknown as ConfigService
    );
  });

  it('salva o refresh token com hash verificavel pela rotina de refresh', async () => {
    refreshTokenService.create.mockResolvedValue({} as any);

    const tokens = await service['issueTokens'](
      user,
      request
    );

    expect(tokens.refreshToken).toBe('refresh-token');
    expect(refreshTokenService.create).toHaveBeenCalledTimes(1);
    const saved = refreshTokenService.create.mock.calls[0][0];
    await expect(verifyToken(saved.tokenHash, 'refresh-token')).resolves.toBe(
      true
    );
  });

  it('rotaciona somente o refresh token atual e mantem a familia da sessao', async () => {
    const currentRefreshToken = 'current-refresh-token';
    const currentHash = await hashToken(currentRefreshToken);
    repo.findActiveRefreshTokensByUser.mockResolvedValue([
      {
        id: 'refresh-1',
        tokenHash: currentHash,
        family: 'family-1',
        expiresAt: new Date(Date.now() + 60_000),
      },
    ] as any);
    repo.revokeRefreshToken.mockResolvedValue({} as any);
    repo.findUserById.mockResolvedValue(user as any);
    refreshTokenService.create.mockResolvedValue({} as any);

    await service.refreshTokens('user-1', currentRefreshToken, request);

    expect(repo.revokeRefreshToken).toHaveBeenCalledWith('refresh-1');
    expect(refreshTokenService.revoke).not.toHaveBeenCalled();
    expect(refreshTokenService.create).toHaveBeenCalledWith(
      expect.objectContaining({
        userId: 'user-1',
        family: 'family-1',
      })
    );
  });

  it('aceita hash legado hmac e rotaciona a sessao para um novo refresh token', async () => {
    const legacyRefreshToken = 'legacy-refresh-token';
    const legacyHash = createHmac('sha256', 'refresh-secret')
      .update(legacyRefreshToken)
      .digest('hex');
    repo.findActiveRefreshTokensByUser.mockResolvedValue([
      {
        id: 'legacy-refresh-1',
        tokenHash: legacyHash,
        family: 'family-legacy',
        expiresAt: new Date(Date.now() + 60_000),
      },
    ] as any);
    repo.revokeRefreshToken.mockResolvedValue({} as any);
    repo.findUserById.mockResolvedValue(user as any);
    refreshTokenService.create.mockResolvedValue({} as any);

    await service.refreshTokens('user-1', legacyRefreshToken, request);

    expect(repo.revokeRefreshToken).toHaveBeenCalledWith('legacy-refresh-1');
    expect(refreshTokenService.create).toHaveBeenCalledWith(
      expect.objectContaining({
        userId: 'user-1',
        family: 'family-legacy',
      })
    );
  });

  it('revoga o refresh token encontrado quando ele ja expirou', async () => {
    const expiredRefreshToken = 'expired-refresh-token';
    const expiredHash = await hashToken(expiredRefreshToken);
    repo.findActiveRefreshTokensByUser.mockResolvedValue([
      {
        id: 'refresh-expired',
        tokenHash: expiredHash,
        family: 'family-1',
        expiresAt: new Date(Date.now() - 60_000),
      },
    ] as any);
    repo.revokeRefreshToken.mockResolvedValue({} as any);

    await expect(
      service.refreshTokens('user-1', expiredRefreshToken, request)
    ).rejects.toBeInstanceOf(UnauthorizedException);

    expect(repo.revokeRefreshToken).toHaveBeenCalledWith('refresh-expired');
    expect(repo.findUserById).not.toHaveBeenCalled();
    expect(refreshTokenService.create).not.toHaveBeenCalled();
  });
});
