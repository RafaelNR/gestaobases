import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from 'crypto';

import { PasswordResetRepository } from './repository/password-reset.repository';
import { RequestResetDto } from './dto/request-reset.dto';
import { ConfirmResetDto } from './dto/confirm-reset.dto';
import { hashPassword, hashToken, verifyToken } from '@common/helpers/argon';
import { MailService } from '@infra/mail/mail.service';

@Injectable()
export class PasswordResetService {
  private readonly logger = new Logger(PasswordResetService.name);

  constructor(
    private readonly repo: PasswordResetRepository,
    private readonly config: ConfigService,
    private readonly mail: MailService
  ) {}

  // ─── Solicitar reset ──────────────────────────────────────────────────────

  async requestReset(dto: RequestResetDto, _ip: string) {
    // Resposta sempre genérica — não revelar se usuário existe
    const genericMsg = {
      message: 'Se o e-mail existir, você receberá as instruções em breve.',
    };

    const user = await this.repo.findUserByUserName(dto.username);
    if (!user) return genericMsg;

    if (!user.email) {
      return genericMsg;
    }

    // Invalida tokens anteriores pendentes
    await this.repo.invalidatePendingTokens(user.id);

    // Gera token seguro com CSPRNG (32 bytes = 256 bits)
    const rawToken = randomBytes(32).toString('hex');
    const tokenHash = await hashToken(rawToken);

    const expireMin = parseInt(
      this.config.get('RESET_TOKEN_EXPIRES_MIN') ?? '30',
      10
    );
    const expiresAt = new Date(Date.now() + expireMin * 60 * 1000);

    await this.repo.createToken({ userId: user.id, tokenHash, expiresAt });

    try {
      // await this.mail.sendMail({
      //   to: dto.email,
      //   subject: 'Redefinição de senha',
      //   template: 'password-reset',
      //   context: {
      //     name: user.name,
      //     resetUrl: `${this.config.get('FRONT_END')}/reset-password?token=${rawToken}`,
      //     expiresMin: expireMin,
      //   },
      // });
    } catch (err) {
      this.logger.error(`Falha ao enviar e-mail de reset: ${err}`);
    }

    return genericMsg;
  }

  // ─── Confirmar reset ──────────────────────────────────────────────────────

  // async confirmReset(dto: ConfirmResetDto) {
  //   // Busca todos os tokens pendentes para este token (não sabemos o userId ainda)
  //   // Estratégia: iterar por matches de hash — O(n) aceitável pois tokens pendentes são poucos
  //   const candidates = await this.repo['prisma'].passwordResetToken.findMany({
  //     where: { usedAt: null, expiresAt: { gt: new Date() } },
  //   });

  //   let matched: { id: string; userId: string } | null = null;

  //   for (const candidate of candidates) {
  //     const ok = await verifyToken(candidate.tokenHash, dto.token);
  //     if (ok) {
  //       matched = { id: candidate.id, userId: candidate.userId };
  //       break;
  //     }
  //   }

  //   if (!matched) {
  //     // Resposta genérica — não revelar motivo
  //     throw new Error('Token inválido ou expirado.');
  //   }

  //   const account = await this.repo['prisma'].authAccount.findFirst({
  //     where: { userId: matched.userId, provider: 'credentials' },
  //   });

  //   if (!account) throw new Error('Token inválido ou expirado.');

  //   const passwordHash = await hashPassword(dto.password);
  //   await this.repo.updatePasswordHash(account.id, passwordHash);
  //   await this.repo.markUsed(matched.id);

  //   // Revogar todos refresh tokens (segurança pós-troca de senha)
  //   await this.repo['prisma'].refreshToken.updateMany({
  //     where: { userId: matched.userId, revokedAt: null },
  //     data: { revokedAt: new Date() },
  //   });

  //   return { message: 'Senha redefinida com sucesso.' };
  // }
}
