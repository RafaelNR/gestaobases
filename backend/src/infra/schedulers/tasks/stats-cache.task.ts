import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '@src/infra/database/prisma/prisma.service';
import { RedisService } from '@src/infra/cache/redis/redis.service';

const STATS_TTL = 65 * 60; // 65 min — garante sobreposição com o próximo ciclo horário

@Injectable()
export class StatsCacheTask {
  private readonly logger = new Logger(StatsCacheTask.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService
  ) {}

  // // Executa a cada 1 hora
  // @Cron('0 0 * * * *', { timeZone: 'America/Sao_Paulo' })
  // async handleRefreshStats() {
  //   const start = Date.now();
  //   this.logger.log('Iniciando refresh do cache de estatísticas...');

  //   try {
  //     await this.refreshStats();
  //     this.logger.log(`Cache de estatísticas atualizado ✅ | Duration=${Date.now() - start}ms`);
  //   } catch (err) {
  //     this.logger.error(`Falha ao atualizar cache de estatísticas ❌ | Error=${err}`);
  //   }
  // }

  // private async refreshStats() {
  //   const [countLotes, countLotes24h, countLeiloeiros] = await Promise.all([
  //     this.prisma.lote.count({ where: { ativo: true } }),
  //     this.prisma.lote.count({
  //       where: {
  //         ativo: true,
  //         created_at: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  //       },
  //     }),
  //     this.prisma.leiloeiro.count({ where: { ativo: true } }),
  //   ]);

  //   await Promise.all([
  //     this.redis.set('stats:lotes:total', countLotes, STATS_TTL),
  //     this.redis.set('stats:lotes:24h', countLotes24h, STATS_TTL),
  //     this.redis.set('stats:leiloeiros:total', countLeiloeiros, STATS_TTL),
  //   ]);
  // }
}
