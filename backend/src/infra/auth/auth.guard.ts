import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JsonWebTokenError, JwtService, TokenExpiredError } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);

  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private configService: ConfigService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Paginas quando publica
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    // Paginas que qualquer usuário autenticado pode acessar (sem checagem de roles)
    const allowRolesAuth = this.reflector.getAllAndOverride<boolean>(
      'AllowRolesAuth',
      [context.getHandler(), context.getClass()]
    );

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token não foi encontrado.');
    }

    if (allowRolesAuth && !request.user) {
      throw new UnauthorizedException('Sem autorização de acesso.');
    }

    if (allowRolesAuth && request.user && !request.user.role) {
      throw new UnauthorizedException(
        'Sem perfil de acesso vinculado ao seu usuário.'
      );
    }

    if (allowRolesAuth && request.user && request.user.role) {
      return true; // Permite acesso a qualquer usuário autenticado, sem checagem de roles
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
      });

      if (!payload)
        throw new UnauthorizedException(
          'Sem autorização de acesso, token não é mais válido.'
        );

      request['user'] = payload;
    } catch (error) {
      this.logger.warn(`Auth guard error: ${error?.constructor?.name}`);

      if (error instanceof TokenExpiredError)
        throw new UnauthorizedException('Token não é mais válido.');

      if (error instanceof JsonWebTokenError)
        throw new UnauthorizedException('Token está inválido.');

      if (error instanceof UnauthorizedException) throw error;

      throw new UnauthorizedException('Sem autorização de acesso.');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    // 1. Cookie tem prioridade (requisições same-origin / httpOnly)
    const cookie = request.cookies?.['jwt_token'];
    if (cookie) return cookie.trim();

    // 2. Bearer fallback para clientes cross-origin (axios com Authorization header)
    const auth = (request.headers as Record<string, string | undefined>)?.[
      'authorization'
    ];
    if (auth?.startsWith('Bearer ')) return auth.slice(7).trim();

    return undefined;
  }
}
