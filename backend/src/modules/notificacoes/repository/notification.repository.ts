import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/infra/database/prisma/prisma.service';
import { randomUUID } from 'crypto';

@Injectable()
export class NotificacoesRepository {
  constructor(public prisma: PrismaService) {}

  // async createManyForUsers(
  //   userUUIDs: string[],
  //   data: CreateNotificacaoData
  // ): Promise<void> {
  //   if (!userUUIDs.length) return;

  //   await this.prisma.notificacao.createMany({
  //     data: userUUIDs.map((userUUID) => ({
  //       uuid: randomUUID(),
  //       userUUID,
  //       mensagem: data.mensagem,
  //       artefatoUUID: data.artefatoUUID,
  //       tipo: data.tipo,
  //       evento: data.evento,
  //       link: data.link ?? null,
  //     })),
  //   });
  // }

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

  // async countUnread(userUUID: string): Promise<number> {
  //   return this.prisma.notificacao.count({
  //     where: {
  //       userUUID,
  //       lida: false,
  //       removida: false,
  //     },
  //   });
  // }

  // async markAsRead(uuid: string, userUUID: string): Promise<void> {
  //   await this.prisma.notificacao.updateMany({
  //     where: { uuid, userUUID },
  //     data: { lida: true },
  //   });
  // }

  // async markAllAsRead(userUUID: string): Promise<void> {
  //   await this.prisma.notificacao.updateMany({
  //     where: { userUUID, lida: false },
  //     data: { lida: true },
  //   });
  // }

  // async remove(uuid: string, userUUID: string): Promise<void> {
  //   await this.prisma.notificacao.updateMany({
  //     where: { uuid, userUUID },
  //     data: { removida: true },
  //   });
  // }

  // async removeAll(userUUID: string): Promise<void> {
  //   await this.prisma.notificacao.updateMany({
  //     where: { userUUID },
  //     data: { removida: true },
  //   });
  // }
}
