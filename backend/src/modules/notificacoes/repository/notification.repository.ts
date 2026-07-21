import { Injectable } from '@nestjs/common';
import { Prisma } from '@generated/prisma/client';
import { PrismaService } from '@src/infra/database/prisma/prisma.service';

@Injectable()
export class NotificacoesRepository {
  constructor(public prisma: PrismaService) {}

  async createManyForUsers(
    userIds: string[],
    data: Omit<Prisma.NotificacaoCreateManyInput, 'userId'>
  ): Promise<void> {
    if (!userIds.length) return;

    await this.prisma.notificacao.createMany({
      data: userIds.map((userId) => ({
        ...data,
        userId,
      })),
    });
  }

  async findByUser(userId: string) {
    return this.prisma.notificacao.findMany({
      where: {
        userId,
        removida: false,
      },
      orderBy: { created_at: 'desc' },
      take: 50,
    });
  }

  async countUnread(userId: string): Promise<number> {
    return this.prisma.notificacao.count({
      where: {
        userId,
        lida: false,
        removida: false,
      },
    });
  }

  async markAsRead(id: string, userId: string): Promise<void> {
    await this.prisma.notificacao.updateMany({
      where: { id, userId },
      data: { lida: true },
    });
  }

  async markAllAsRead(userId: string): Promise<void> {
    await this.prisma.notificacao.updateMany({
      where: { userId, lida: false },
      data: { lida: true },
    });
  }

  async remove(id: string, userId: string): Promise<void> {
    await this.prisma.notificacao.updateMany({
      where: { id, userId },
      data: { removida: true },
    });
  }

  async removeAll(userId: string): Promise<void> {
    await this.prisma.notificacao.updateMany({
      where: { userId },
      data: { removida: true },
    });
  }
}
