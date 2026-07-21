import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
      include: {
        Setor: { select: { nome: true } },
        Cargo: { select: { nome: true } },
        Base: { select: { nome: true } },
      },
    });
  }

  async findUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        Setor: { select: { nome: true } },
        Cargo: { select: { nome: true } },
        Base: { select: { nome: true } },
      },
    });
  }

  async findUserWithProfile(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        baseId: true,
        setorId: true,
        cargoId: true,
        Base: { select: { nome: true, tipo_ambulancias: true } },
        Setor: { select: { nome: true, nomeVisivel: true } },
        Cargo: { select: { nome: true, nomeVisivel: true } },
      },
    });
  }

  // Refresh Token
  async createRefreshToken(data: {
    userId: string;
    tokenHash: string;
    family: string;
    expiresAt: Date;
    userAgent?: string;
    ip?: string;
  }) {
    return this.prisma.refreshToken.create({ data });
  }

  async findRefreshTokenByHash(tokenHash: string) {
    return this.prisma.refreshToken.findUnique({ where: { tokenHash } });
  }

  async revokeRefreshToken(id: string) {
    return this.prisma.refreshToken.update({
      where: { id },
      data: { revokedAt: new Date() },
    });
  }

  async revokeAllTokensByFamily(family: string) {
    return this.prisma.refreshToken.updateMany({
      where: { family, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async revokeAllUserTokens(userId: string) {
    return this.prisma.refreshToken.updateMany({
      where: { userId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async findActiveRefreshTokensByUser(userId: string) {
    return this.prisma.refreshToken.findMany({
      where: { userId, revokedAt: null },
      orderBy: { expiresAt: 'desc' },
      select: {
        id: true,
        tokenHash: true,
        family: true,
        expiresAt: true,
      },
    });
  }
}
