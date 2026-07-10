import {
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

const isProd = process.env.NODE_ENV === 'production';

const COOKIE_OPTS = {
  httpOnly: true,
  secure: true,
  sameSite: (isProd ? 'strict' : 'none') as 'strict' | 'none',
  path: '/',
};

const REFRESH_COOKIE_OPTS = {
  ...COOKIE_OPTS,
  path: '/auth',
};

type RefreshRequest = Request & {
  cookies?: Record<string, unknown>;
  body?: { refreshToken?: unknown };
};

@Injectable()
export class JwtRefreshAuthGuard extends AuthGuard('jwt-refresh') {
  private readonly logger = new Logger(JwtRefreshAuthGuard.name);

  handleRequest<TUser = unknown>(
    err: unknown,
    user: TUser,
    info: unknown,
    context: ExecutionContext
  ): TUser {
    if (err || !user) {
      const request = context.switchToHttp().getRequest<RefreshRequest>();
      const response = context.switchToHttp().getResponse<Response>();
      this.clearAuthCookies(response);
      this.logger.warn('Refresh token rejeitado antes da renovação.', {
        error: this.getErrorMessage(err, info),
        ip: (request.ip ?? '').slice(0, 45) || undefined,
        userAgent: request.headers?.['user-agent']?.slice(0, 512),
        hasRefreshCookie: Boolean(request.cookies?.jwt_refresh),
        hasRefreshBody: Boolean(request.body?.refreshToken),
      });

      throw err || new UnauthorizedException();
    }

    return user;
  }

  private getErrorMessage(err: unknown, info: unknown): string {
    if (err instanceof Error) return err.message;
    if (info instanceof Error) return info.message;
    if (typeof err === 'string') return err;
    if (typeof info === 'string') return info;
    return 'Refresh token inválido ou ausente.';
  }

  private clearAuthCookies(response: Response): void {
    response.clearCookie('jwt_token', COOKIE_OPTS);
    response.clearCookie('jwt_refresh', REFRESH_COOKIE_OPTS);
    response.clearCookie('jwt_refresh', COOKIE_OPTS);
  }
}
