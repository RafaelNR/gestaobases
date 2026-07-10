import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';

@Injectable()
export class PasswordResetRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByUserName(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async invalidatePendingTokens(userId: string) {
    // Invalida tokens anteriores não usados
    return this.prisma.passwordResetToken.updateMany({
      where: { userId, usedAt: null },
      data: { usedAt: new Date() },
    });
  }

  async createToken(data: {
    userId: string;
    tokenHash: string;
    expiresAt: Date;
  }) {
    return this.prisma.passwordResetToken.create({ data });
  }

  async findAllPendingByUser(userId: string) {
    return this.prisma.passwordResetToken.findMany({
      where: { userId, usedAt: null, expiresAt: { gt: new Date() } },
    });
  }

  async markUsed(id: string) {
    return this.prisma.passwordResetToken.update({
      where: { id },
      data: { usedAt: new Date() },
    });
  }

  async updatePasswordHash(accountId: string, passwordHash: string) {
    return this.prisma.user.update({
      where: { id: accountId },
      data: { password: passwordHash },
    });
  }
}
