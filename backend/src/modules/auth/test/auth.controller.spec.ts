import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { describe, expect, it, jest } from '@jest/globals';

import { AuthController } from '../auth.controller';

describe('AuthController refresh', () => {
  const config = {
    getOrThrow: jest.fn((key: string) => {
      const values: Record<string, string> = {
        JWT_REFRESH_EXPIRED_IN: '7d',
        JWT_EXPIRED_IN: '15m',
      };
      return values[key];
    }),
  };

  type RefreshTokensMock = (
    userId: string,
    refreshToken: string,
    req: unknown
  ) => Promise<unknown>;

  function makeController(authService: any) {
    return new AuthController(
      authService as any,
      { findUserWithProfile: jest.fn() } as any,
      config as unknown as ConfigService
    );
  }

  function makeResponse() {
    return {
      cookie: jest.fn(),
      clearCookie: jest.fn(),
    };
  }

  it('seta novos cookies e nao expoe tokens no body quando refresh token e rotacionado com sucesso', async () => {
    const authService = {
      refreshTokens: jest.fn<RefreshTokensMock>().mockResolvedValue({
        accessToken: 'new-access',
        refreshToken: 'new-refresh',
      }),
    };
    const controller = makeController(authService);
    const req = {
      user: { id: 'user-1', refreshToken: 'current-refresh' },
    };
    const res = makeResponse();

    const result = await controller.refresh(req as any, res as any);

    expect(authService.refreshTokens).toHaveBeenCalledWith(
      'user-1',
      'current-refresh',
      req
    );
    expect(res.cookie).toHaveBeenCalledWith(
      'jwt_token',
      'new-access',
      expect.objectContaining({ httpOnly: true, path: '/' })
    );
    expect(res.cookie).toHaveBeenCalledWith(
      'jwt_refresh',
      'new-refresh',
      expect.objectContaining({ httpOnly: true, path: '/auth' })
    );
    expect(result.response).toEqual({ refreshed: true });
  });

  it('seta cookies e nao expoe tokens no body no login', async () => {
    const authService = {
      loginCredentials: jest.fn().mockResolvedValue({
        accessToken: 'access-token',
        refreshToken: 'refresh-token',
      } as never),
    };
    const controller = makeController(authService);
    const res = makeResponse();

    const result = await controller.login(
      { username: 'operador', password: 'senha' } as any,
      {} as any,
      res as any
    );

    expect(authService.loginCredentials).toHaveBeenCalledTimes(1);
    expect(res.cookie).toHaveBeenCalledWith(
      'jwt_token',
      'access-token',
      expect.objectContaining({ httpOnly: true, path: '/' })
    );
    expect(res.cookie).toHaveBeenCalledWith(
      'jwt_refresh',
      'refresh-token',
      expect.objectContaining({ httpOnly: true, path: '/auth' })
    );
    expect(result.response).toEqual({ authenticated: true });
  });

  it('usa cookies compatíveis com desenvolvimento local', async () => {
    const authService = {
      loginCredentials: jest.fn().mockResolvedValue({
        accessToken: 'access-token',
        refreshToken: 'refresh-token',
      } as never),
    };
    const controller = makeController(authService);
    const res = makeResponse();

    await controller.login(
      { username: 'operador', password: 'senha' } as any,
      {} as any,
      res as any
    );

    expect(res.cookie).toHaveBeenCalledWith(
      'jwt_token',
      'access-token',
      expect.objectContaining({ secure: false, sameSite: 'lax' })
    );
    expect(res.cookie).toHaveBeenCalledWith(
      'jwt_refresh',
      'refresh-token',
      expect.objectContaining({ secure: false, sameSite: 'lax' })
    );
  });

  it('limpa cookies quando a rotina de refresh rejeita o token', async () => {
    const error = new UnauthorizedException('Refresh token inválido.');
    const authService = {
      refreshTokens: jest.fn<RefreshTokensMock>().mockRejectedValue(error),
    };
    const controller = makeController(authService);
    const req = {
      user: { id: 'user-1', refreshToken: 'invalid-refresh' },
    };
    const res = makeResponse();

    await expect(
      controller.refresh(req as any, res as any)
    ).rejects.toBe(error);

    expect(res.clearCookie).toHaveBeenCalledWith(
      'jwt_token',
      expect.objectContaining({ httpOnly: true, path: '/' })
    );
    expect(res.clearCookie).toHaveBeenCalledWith(
      'jwt_refresh',
      expect.objectContaining({ httpOnly: true, path: '/auth' })
    );
  });
});
