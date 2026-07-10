import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { EnvironmentVariables } from '@src/common/types/env';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(private config: ConfigService<EnvironmentVariables>) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req.cookies?.['jwt_refresh'] ?? null,
      ]),
      ignoreExpiration: false,
      secretOrKey: config.getOrThrow<string>('JWT_REFRESH_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: { id?: string; sub?: string }) {
    // issueTokens assina com { id: userId }, mas alguns clientes podem usar sub (RFC 7519)
    const userId = payload?.id ?? payload?.sub;
    if (!userId) throw new UnauthorizedException();
    const refreshToken: string = req.cookies?.['jwt_refresh'];
    if (!refreshToken) throw new UnauthorizedException();
    return { id: userId, refreshToken };
  }
}
