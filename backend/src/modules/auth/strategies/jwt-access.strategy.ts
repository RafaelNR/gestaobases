import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { EnvironmentVariables } from '@src/common/types/env';

export interface JwtPayload {
  id: string;
  nome: string;
  setor: string;
  cargo: string;
  baseId: string;
  setorId: string;
  iat?: number;
  exp?: number;
}

function extractFromCookieOrHeader(req: Request): string | null {
  const auth = req?.headers?.authorization;
  if (auth?.startsWith('Bearer ')) return auth.slice(7);
  if (req?.cookies?.jwt_token) return req.cookies.jwt_token;
  return null;
}

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private config: ConfigService<EnvironmentVariables>) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([extractFromCookieOrHeader]),
      ignoreExpiration: false,
      secretOrKey: config.getOrThrow<string>('JWT_ACCESS_SECRET'),
    });
  }

  async validate(payload: JwtPayload) {
    if (!payload?.id) throw new UnauthorizedException();
    return {
      id: payload.id,
      nome: payload.nome,
      setor: payload.setor,
      cargo: payload.cargo,
      baseId: payload.baseId,
      setorId: payload.setorId,
    };
  }
}
