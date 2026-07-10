import { Injectable } from '@nestjs/common';
import { createHash, randomBytes } from 'crypto';
import { PrismaService } from '@src/infra/database/prisma/prisma.service';

@Injectable()
export class RefreshTokenService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    tokenHash: string;
    family: string;
    userId: string;
    ip: string;
    userAgent?: string;
    expiresAt: Date;
  }) {
    // await this.prisma.refreshToken.deleteMany({
    //   where: {
    //     family: data.family,
    //     userId: data.userId,
    //   },
    // });

    return this.prisma.refreshToken.create({
      data: {
        tokenHash: data.tokenHash,
        family: data.family,
        userId: data.userId,
        ip: data.ip,
        userAgent: data.userAgent,
        expiresAt: data.expiresAt,
      },
    });
  }

  async findByHash(tokenHash: string) {
    return this.prisma.refreshToken.findUnique({ where: { tokenHash } });
  }

  async revoke(id: string) {
    return this.prisma.refreshToken.update({
      where: { id },
      data: { revokedAt: new Date() },
    });
  }

  async revokeFamily(familyId: string) {
    return this.prisma.refreshToken.updateMany({
      where: { family: familyId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async revokeAllForUser(userId: string) {
    return this.prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }
}
