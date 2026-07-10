import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { RedisService } from '@src/infra/cache/redis/redis.service';
import { TipoRequerimento } from '@generated/prisma/enums';
import { IUser } from '@/src/common/decorator/user.decorator';
import { TypeSetor } from '@/src/infra/guard/roles.decorator';

export interface DashboardStats {
  totalLotesAtivos: number;
  lotesHoje: number;
  totalLeiloeiros: number;
  mediaDescontoFipe: number;
  serieUltimos7Dias: number[];
}

@Injectable()
export class DashboardService {
  constructor(
    private readonly prisma: PrismaService
    // private readonly redisService: RedisService
  ) {}

  async countByStatus(query: {
    tipo?: TipoRequerimento;
    setor?: string;
    base?: string;
    cargo?: string;
  }) {
    const { tipo, setor, base, cargo } = query;

    return this.prisma.requerimento.groupBy({
      by: ['status'],
      where: {
        ...(tipo ? { tipo } : {}),
        ...(setor ? { setor } : {}),
        ...(base ? { base } : {}),
        ...(cargo ? { cargo } : {}),
        status: {
          notIn: ['Rascunho', 'Cancelado', 'Analise'],
        },
      },
      _count: {
        status: true,
      },
    });
  }

  async countRequerimentos(user: IUser, tipo?: TipoRequerimento) {
    if (user.setor === TypeSetor.Administrador) {
      return await this.countByStatus({ tipo });
    }

    let setor: string | undefined = undefined;
    let base: string | undefined = undefined;
    let cargo: string | undefined = undefined;

    if (user?.setor === 'Almoxarifado') {
      tipo = TipoRequerimento.Almoxarifado;
    }

    if (user?.setor === 'CME') {
      tipo = TipoRequerimento.CME;
    }

    if (user?.setor === 'Farmacia') {
      tipo = TipoRequerimento.Farmacia;
    }

    // Se facilitador so pegar da sua base
    if (user?.setor === 'Base') {
      setor = user?.setor;
      base = user?.base;
    }

    if (user?.setor === 'Administrativo') {
      setor = user?.setor;
      base = user?.base;
      cargo = user?.cargo;
    }

    return await this.countByStatus({
      tipo,
      setor,
      base,
      cargo,
    });
  }

  // async findStats() {
  //   const [totalLotesAtivos, lotesHoje, totalLeiloeiros] = await Promise.all([
  //     this.redisService.get<number>('stats:lotes:total'),
  //     this.redisService.get<number>('stats:lotes:24h'),
  //     this.redisService.get<number>('stats:leiloeiros:total'),
  //   ]);

  //   return { totalLotesAtivos, lotesHoje, totalLeiloeiros };
  // }

  // async getStats(): Promise<DashboardStats> {
  // const hoje = new Date();
  // hoje.setHours(0, 0, 0, 0);

  // const sete = new Date(hoje);
  // sete.setDate(sete.getDate() - 6); // 7 dias incluindo hoje

  // const [
  //   totalLotesAtivos,
  //   lotesHoje,
  //   totalLeiloeiros,
  //   lotesComFipe,
  //   serieRaw,
  // ] = await this.prisma.$transaction([
  //   // Total de lotes ativos
  //   this.prisma.lote.count({ where: { ativo: true } }),

  //   // Lotes criados hoje
  //   this.prisma.lote.count({
  //     where: { ativo: true, createdAt: { gte: hoje } },
  //   }),

  //   // Total de leiloeiros ativos
  //   this.prisma.leiloeiro.count({ where: { ativo: true } }),

  //   // Lotes com valorFipe > 0 para calcular desconto médio
  //   this.prisma.lote.findMany({
  //     where: { ativo: true, valorFipe: { gt: 0 } },
  //     select: { valorFipe: true, valorAtual: true },
  //     take: 1000, // limita para performance
  //   }),

  //   // Lotes agrupados por dia nos últimos 7 dias
  //   this.prisma.lote.groupBy({
  //     by: ['createdAt'],
  //     where: { ativo: true, createdAt: { gte: sete } },
  //     _count: { uuid: true },
  //   }),
  // ]);

  // // Média de desconto percentual
  // const mediaDescontoFipe =
  //   lotesComFipe.length > 0
  //     ? lotesComFipe.reduce((acc, l) => {
  //         const desconto = ((l.valorFipe - l.valorAtual) / l.valorFipe) * 100;
  //         return acc + desconto;
  //       }, 0) / lotesComFipe.length
  //     : 0;

  // // Série temporal: contagem por dia dos últimos 7 dias
  // const serieUltimos7Dias = this.buildSerie(serieRaw, sete, hoje);

  // return {
  //   totalLotesAtivos,
  //   lotesHoje,
  //   totalLeiloeiros,
  //   mediaDescontoFipe: Math.round(mediaDescontoFipe * 100) / 100,
  //   serieUltimos7Dias,
  // };
  // }

  // ─── Helpers ──────────────────────────────────────────────────────────────

  private buildSerie(
    raw: { createdAt: Date; _count: { uuid: number } }[],
    inicio: Date,
    fim: Date
  ): number[] {
    const mapa = new Map<string, number>();

    for (const row of raw) {
      const dia = row.createdAt.toISOString().slice(0, 10);
      mapa.set(dia, (mapa.get(dia) ?? 0) + row._count.uuid);
    }

    const serie: number[] = [];
    const cursor = new Date(inicio);

    while (cursor <= fim) {
      const chave = cursor.toISOString().slice(0, 10);
      serie.push(mapa.get(chave) ?? 0);
      cursor.setDate(cursor.getDate() + 1);
    }

    return serie;
  }
}
