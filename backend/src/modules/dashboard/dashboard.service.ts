import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import { RedisService } from '@src/infra/cache/redis/redis.service';
import { TipoRequerimento } from '@generated/prisma/enums';
import { IUser } from '@/src/common/decorator/user.decorator';
import { TypeSetor } from '@/src/infra/guard/roles.decorator';
import { classificarValidade } from '../estoque/services/estoque-validade.service';

export interface DashboardStats {
  totalLotesAtivos: number;
  lotesHoje: number;
  totalLeiloeiros: number;
  mediaDescontoFipe: number;
  serieUltimos7Dias: number[];
}

export type ProximaVisitaBase = {
  id: string;
  data: Date;
  base: string;
  descricao: string | null;
  requerimentoRecebidoNaSemana: boolean;
  prioridade: 'vermelho' | 'amarelo' | 'verde';
};

export type DashboardLoteProximoVencimento = {
  id: string;
  lote: string | null;
  validade: Date;
  quantidade: number;
  item: string;
};

export type DashboardUltimaMovimentacao = {
  id: string;
  tipo: string;
  quantidade: number;
  saldoAnterior: number;
  saldoPosterior: number;
  observacao: string | null;
  created_at: Date;
  lote: string | null;
  item: string;
  usuario: string;
};

const PERIODOS_VISITAS = [3, 7, 15, 30] as const;
type PeriodoVisitas = (typeof PERIODOS_VISITAS)[number];

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

  async findProximasVisitas(
    user: IUser,
    dias?: number
  ): Promise<ProximaVisitaBase[]> {
    const periodoDias: PeriodoVisitas = PERIODOS_VISITAS.includes(
      dias as PeriodoVisitas
    )
      ? (dias as PeriodoVisitas)
      : 3;
    const agora = new Date();
    const inicioHoje = new Date(
      agora.getFullYear(),
      agora.getMonth(),
      agora.getDate()
    );
    const fimPeriodo = new Date(inicioHoje);
    fimPeriodo.setDate(fimPeriodo.getDate() + periodoDias);

    const visitas = await this.prisma.visitasBases.findMany({
      where: {
        base: { not: null },
        data: { gte: inicioHoje, lt: fimPeriodo },
        ...(user.setor === TypeSetor.Base ? { base: user.base } : {}),
      },
      select: { id: true, data: true, base: true, descricao: true },
      orderBy: [{ data: 'asc' }, { base: 'asc' }],
    });

    const bases = [
      ...new Set(visitas.map((visita) => visita.base).filter(Boolean)),
    ] as string[];
    if (bases.length === 0) return [];

    const inicioSemana = new Date(inicioHoje);
    const diaDaSemana = inicioSemana.getDay();
    inicioSemana.setDate(
      inicioSemana.getDate() - (diaDaSemana === 0 ? 6 : diaDaSemana - 1)
    );
    const recebidos = await this.prisma.requerimento.findMany({
      where: {
        base: { in: bases },
        created_at: { gte: inicioSemana, lte: agora },
        status: 'Recebido',
      },
      select: { base: true, created_at: true },
      orderBy: { created_at: 'asc' },
    });

    const visitasPorBase = new Map<string, typeof visitas>();
    for (const visita of visitas) {
      if (!visita.base) continue;
      const visitasDaBase = visitasPorBase.get(visita.base) ?? [];
      visitasDaBase.push(visita);
      visitasPorBase.set(visita.base, visitasDaBase);
    }

    const visitasComRecebido = new Set<string>();
    for (const requerimento of recebidos) {
      if (!requerimento.base) continue;
      const visita = visitasPorBase
        .get(requerimento.base)
        ?.find(
          (item) =>
            item.data >= requerimento.created_at &&
            !visitasComRecebido.has(item.id)
        );
      if (visita) visitasComRecebido.add(visita.id);
    }

    return visitas.map((visita) => {
      const diasRestantes = Math.round(
        (visita.data.getTime() - inicioHoje.getTime()) / 86_400_000
      );
      const requerimentoRecebidoNaSemana = visitasComRecebido.has(visita.id);
      return {
        id: visita.id,
        data: visita.data,
        base: visita.base!,
        descricao: visita.descricao,
        requerimentoRecebidoNaSemana,
        prioridade: requerimentoRecebidoNaSemana
          ? 'verde'
          : diasRestantes <= 1
            ? 'vermelho'
            : 'amarelo',
      };
    });
  }

  async findLotesProximosVencimento(
    user: IUser,
    dias = 15
  ): Promise<DashboardLoteProximoVencimento[]> {
    const periodoDias = [15, 30, 45, 60].includes(dias) ? dias : 15;
    const agora = new Date();
    const inicioHoje = new Date(
      Date.UTC(agora.getUTCFullYear(), agora.getUTCMonth(), agora.getUTCDate())
    );
    const fimPeriodo = new Date(inicioHoje);
    fimPeriodo.setUTCDate(fimPeriodo.getUTCDate() + periodoDias);

    if (user.setor === TypeSetor.Base && !user.baseId) {
      return [];
    }

    const lotes = await this.prisma.estoqueLote.findMany({
      where: {
        active: true,
        quantidade: { gt: 0 },
        validade: { gte: inicioHoje, lte: fimPeriodo },
        ...(user.setor === TypeSetor.Base
          ? { Estoque: { baseId: user.baseId } }
          : {}),
        ...(user.setor === TypeSetor.Almoxarifado
          ? { Estoque: { produtoId: { not: null } } }
          : {}),
        ...(user.setor === TypeSetor.Farmacia
          ? { Estoque: { medicamentoId: { not: null } } }
          : {}),
        ...(user.setor === TypeSetor.CME
          ? { Estoque: { produtoId: { not: null } } }
          : {}),
      },
      orderBy: [{ validade: 'asc' }, { quantidade: 'desc' }],
      take: 10,
      select: {
        id: true,
        lote: true,
        validade: true,
        quantidade: true,
        Estoque: {
          select: {
            Produto: { select: { nome: true } },
            Medicamento: { select: { nome: true } },
            Base: { select: { nome: true } },
          },
        },
      },
    });

    return lotes.map((lote) => ({
      id: lote.id,
      lote: lote.lote,
      status: classificarValidade(lote.validade).status,
      validade: lote.validade!,
      quantidade: lote.quantidade,
      base: lote.Estoque.Base?.nome ?? 'Base não identificada',
      item:
        lote.Estoque.Produto?.nome ??
        lote.Estoque.Medicamento?.nome ??
        'Item não identificado',
    }));
  }

  async findUltimasMovimentacoes(
    user: IUser
  ): Promise<DashboardUltimaMovimentacao[]> {
    if (user.setor === TypeSetor.Base && !user.baseId) {
      return [];
    }

    const movimentacoes = await this.prisma.estoqueMovimentacao.findMany({
      where: {
        ...(user.setor === TypeSetor.Base
          ? { Lote: { Estoque: { baseId: user.baseId } } }
          : {}),
        ...(user.setor === TypeSetor.Almoxarifado
          ? { Lote: { Estoque: { produtoId: { not: null } } } }
          : {}),
        ...(user.setor === TypeSetor.Farmacia
          ? { Lote: { Estoque: { medicamentoId: { not: null } } } }
          : {}),
        ...(user.setor === TypeSetor.CME
          ? { Lote: { Estoque: { produtoId: { not: null } } } }
          : {}),
      },
      orderBy: { created_at: 'desc' },
      take: 10,
      select: {
        id: true,
        tipo: true,
        quantidade: true,
        saldoAnterior: true,
        saldoPosterior: true,
        observacao: true,
        created_at: true,
        Lote: {
          select: {
            lote: true,
            Estoque: {
              select: {
                Produto: { select: { nome: true } },
                Medicamento: { select: { nome: true } },
                Base: { select: { nome: true } },
              },
            },
          },
        },
        User: { select: { nome: true } },
      },
    });

    return movimentacoes.map((movimentacao) => ({
      id: movimentacao.id,
      tipo: movimentacao.tipo,
      quantidade: movimentacao.quantidade,
      saldoAnterior: movimentacao.saldoAnterior,
      saldoPosterior: movimentacao.saldoPosterior,
      observacao: movimentacao.observacao,
      created_at: movimentacao.created_at,
      lote: movimentacao.Lote.lote,
      item:
        movimentacao.Lote.Estoque.Produto?.nome ??
        movimentacao.Lote.Estoque.Medicamento?.nome ??
        'Item não identificado',
      usuario: movimentacao.User.nome,
      base: movimentacao.Lote.Estoque.Base?.nome ?? 'Sem base',
    }));
  }
}
