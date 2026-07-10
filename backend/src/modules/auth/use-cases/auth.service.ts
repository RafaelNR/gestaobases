import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { createHmac, randomUUID, timingSafeEqual } from 'crypto';
import { Request } from 'express';

import { AuthRepository } from '../repository/auth.repository';
import { RefreshTokenService } from '../repository/refresh.service';
import { LoginCredentialsDto } from '../dto/login-credentials.dto';
import { hashToken, verifyPassword, verifyToken } from '@common/helpers/argon';
import { parseDuration } from '@src/common/helpers/parseDurationToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly repo: AuthRepository,
    private readonly refreshTokenService: RefreshTokenService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService
  ) {}

  // ─── Login credentials ────────────────────────────────────────────────────

  async loginCredentials(dto: LoginCredentialsDto, req: Request) {
    const user = await this.repo.findUserByUsername(dto.username);

    // Resposta genérica para não revelar se o usuário existe
    if (!user || !user.password) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const valid = await verifyPassword(user.password, dto.password);
    if (!valid) throw new UnauthorizedException('Credenciais inválidas.');

    return this.issueTokens(user, req);
  }

  // ─── Refresh token ────────────────────────────────────────────────────────

  async refreshTokens(userId: string, rawRefreshToken: string, req: Request) {
    const records = await this.repo.findActiveRefreshTokensByUser(userId);

    let validRecord: { id: string; family: string; expiresAt: Date } | null =
      null;

    for (const record of records) {
      const match = await this.verifyRefreshTokenHash(
        record.tokenHash,
        rawRefreshToken
      );
      if (match) {
        validRecord = record;
        break;
      }
    }

    if (!validRecord) {
      throw new UnauthorizedException('Refresh token inválido ou expirado.');
    }

    if (new Date() > validRecord.expiresAt) {
      await this.repo.revokeRefreshToken(validRecord.id);
      throw new UnauthorizedException('Refresh token expirado.');
    }

    // Rotação: revogar token atual, emitir novo da mesma família
    await this.repo.revokeRefreshToken(validRecord.id);

    // Busca usuário
    const user = await this.repo.findUserById(userId);
    if (!user || !user.active) {
      throw new UnauthorizedException('Usuário inativo ou não encontrado.');
    }

    return this.issueTokens(user, req, validRecord.family);
  }

  // ─── Logout ───────────────────────────────────────────────────────────────

  async logout(userId: string) {
    await Promise.all([this.repo.revokeAllUserTokens(userId)]);
  }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  // Emite tokens e registra sessão
  private async issueTokens(
    user: {
      id: string;
      Setor: { nome: string };
      Cargo: { nome: string };
      Base: { nome: string };
    },
    req?: Request,
    existingFamily?: string
  ) {
    // Gera um ID para o token
    const jti = randomUUID();

    // Gera o access token
    const accessToken = this.jwt.sign(
      {
        id: user.id,
        setor: user.Setor.nome,
        cargo: user.Cargo.nome,
        base: user.Base.nome,
        jti,
      },
      {
        secret: this.config.getOrThrow('JWT_ACCESS_SECRET'),
        expiresIn: this.config.getOrThrow('JWT_EXPIRED_IN'),
      }
    );

    // Gera o refresh token assinado como JWT para que JwtRefreshStrategy possa validá-lo
    const rawRefreshToken = this.jwt.sign(
      { id: user.id },
      {
        secret: this.config.getOrThrow('JWT_REFRESH_SECRET'),
        expiresIn: this.config.getOrThrow('JWT_REFRESH_EXPIRED_IN'),
      }
    );
    const tokenHash = await hashToken(rawRefreshToken);
    const family = existingFamily ?? randomUUID();
    const expiresRefresh = parseDuration(
      this.config.getOrThrow<string>('JWT_REFRESH_EXPIRED_IN')!
    );
    const expiresAt = new Date(Date.now() + expiresRefresh);

    // Salva refresh token
    await this.refreshTokenService.create({
      userId: user.id,
      tokenHash,
      family,
      expiresAt,
      userAgent: req?.headers?.['user-agent']?.slice(0, 512),
      ip: (req?.ip ?? '').slice(0, 45),
    });

    return { accessToken, refreshToken: rawRefreshToken, expiresIn: expiresAt };
  }

  private async verifyRefreshTokenHash(
    tokenHash: string,
    rawRefreshToken: string
  ): Promise<boolean> {
    if (await verifyToken(tokenHash, rawRefreshToken)) {
      return true;
    }

    const legacyHash = createHmac(
      'sha256',
      this.config.getOrThrow<string>('JWT_REFRESH_SECRET')
    )
      .update(rawRefreshToken)
      .digest('hex');
    const tokenHashBuffer = Buffer.from(tokenHash, 'hex');
    const legacyHashBuffer = Buffer.from(legacyHash, 'hex');

    return (
      tokenHashBuffer.length === legacyHashBuffer.length &&
      timingSafeEqual(tokenHashBuffer, legacyHashBuffer)
    );
  }
}
