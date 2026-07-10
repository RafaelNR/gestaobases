import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { describe, expect, it, jest } from '@jest/globals';

import { JwtRefreshAuthGuard } from './jwt-refresh-auth.guard';

function createContext(): ExecutionContext {
  const response = {
    clearCookie: jest.fn(),
  };

  return {
    switchToHttp: () => ({
      getRequest: () => ({
        cookies: { jwt_refresh: 'invalid-refresh' },
        headers: { 'user-agent': 'jest-agent' },
        ip: '127.0.0.1',
      }),
      getResponse: () => response,
    }),
  } as unknown as ExecutionContext;
}

describe('JwtRefreshAuthGuard', () => {
  it('limpa cookies de autenticacao quando refresh e rejeitado antes do controller', () => {
    const guard = new JwtRefreshAuthGuard();
    const context = createContext();

    expect(() =>
      guard.handleRequest(null, null, new Error('jwt expired'), context)
    ).toThrow(UnauthorizedException);

    const response = context.switchToHttp().getResponse() as {
      clearCookie: jest.Mock;
    };
    expect(response.clearCookie).toHaveBeenCalledWith(
      'jwt_token',
      expect.objectContaining({ httpOnly: true, path: '/' })
    );
    expect(response.clearCookie).toHaveBeenCalledWith(
      'jwt_refresh',
      expect.objectContaining({ httpOnly: true, path: '/auth' })
    );
    expect(response.clearCookie).toHaveBeenCalledWith(
      'jwt_refresh',
      expect.objectContaining({ httpOnly: true, path: '/' })
    );
  });
});
