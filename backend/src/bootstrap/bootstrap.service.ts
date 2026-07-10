import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../infra/database/prisma/prisma.service';
import { Logger } from '@nestjs/common';
import { RedisService } from '@src/infra/cache/redis/redis.service';

const PLANS_TTL = 60 * 60; // 1 hora

@Injectable()
export class BootstrapService implements OnModuleInit {
  public readonly logger: Logger;

  constructor(
    private prisma: PrismaService
    // private redis: RedisService
  ) {
    this.logger = new Logger(BootstrapService.name);
  }

  async onModuleInit() {
    await this.waitForDatabasePrisma();
    // await this.seedPlansCache();
    // await this.seedStatsCache();
  }

  private async waitForDatabasePrisma(retries = 3) {
    for (let i = 1; i <= retries; i++) {
      try {
        await this.prisma.$queryRaw`SELECT 1`;
        this.logger.log('Conexão com banco via PRISMA OK ✅');
        return;
      } catch {
        this.logger.log(
          `Tentativa de executar a query de teste falou, Tentativa: ${i}  ⚠️`
        );
        await new Promise((r) => setTimeout(r, 1000));
      }
    }
    throw new Error('Todas as tentativas de se conectar ao prima falham. ❌');
  }

  // private async seedPlansCache() {
  //   try {
  //     const plans = await this.prisma.plan.findMany({ orderBy: { price: 'asc' } });

  //     // Aquece apenas os caches individuais (usados pelo SessionService para ler limits.maxSessions).
  //     // O cache da listagem (chave 'plans') aquece na primeira chamada à API para preservar
  //     // o formato exato que o PlansRepository retorna.
  //     await Promise.all([
  //       plans.map((plan) => this.redis.set(`plan:${plan.id}`, plan, PLANS_TTL)),
  //       this.redis.set(`plans`, plans, PLANS_TTL),
  //     ]);

  //     this.logger.log(`✅ Cache de planos semeado: ${plans.length} plano(s) `);
  //   } catch (err) {
  //     this.logger.error(`❌ Cache de planos não semeado: ${err} `);
  //   }
  // }

  // private async seedStatsCache() {
  //   try {
  //     const [countLotes, countLotes24horas, countLeiloeiros] = await Promise.all([
  //       this.prisma.lote.count({ where: { ativo: true } }),
  //       this.prisma.lote.count({ where: { ativo: true, created_at: { gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } } }),
  //       this.prisma.leiloeiro.count({ where: { ativo: true } }),
  //     ]);

  //     await Promise.all([
  //       this.redis.set('stats:lotes:total', countLotes, PLANS_TTL),
  //       this.redis.set('stats:lotes:24h', countLotes24horas, PLANS_TTL),
  //       this.redis.set('stats:leiloeiros:total', countLeiloeiros, PLANS_TTL),
  //     ]);

  //     this.logger.log(`✅ Cache de estatísticas semeado`);
  //   } catch (err) {
  //     this.logger.error(`❌ Cache de estatísticas não semeado: ${err} `);
  //   }
  // }
}
