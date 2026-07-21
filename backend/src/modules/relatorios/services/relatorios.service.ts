import { BadRequestException, Injectable } from '@nestjs/common';
import {
  Status,
  TipoMovimentacaoEstoque,
  TipoRequerimento,
} from '@generated/prisma/client';
import { RelatoriosRepository } from '../repository/relatorios.repository';
import {
  RelatorioGeralRequerimentosFiltro,
  RelatorioGeralRequerimentosRow,
} from '../types/relatorio-requerimentos.types';
import {
  RelatorioEstoqueFiltro,
  RelatorioEstoqueResultado,
} from '../types/relatorio-estoque.types';

const STATUS_RELATORIO = [
  Status.Recebido,
  Status.Analise,
  Status.Separacao,
  Status.Finalizado,
];

function parseDate(
  value: string | undefined,
  endOfDay = false
): Date | undefined {
  if (!value) return undefined;
  const date = new Date(
    `${value}T${endOfDay ? '23:59:59.999' : '00:00:00.000'}Z`
  );
  if (Number.isNaN(date.getTime()))
    throw new BadRequestException('Data inválida.');
  return date;
}

@Injectable()
export class RelatoriosService {
  constructor(private readonly repository: RelatoriosRepository) {}

  async getRelatorioGeralRequerimentos(filtro: {
    dataInicial?: string;
    dataFinal?: string;
    base?: string;
    ambulanciaId?: string;
    tipo?: keyof typeof TipoRequerimento;
  }): Promise<RelatorioGeralRequerimentosRow[]> {
    const dataInicial = parseDate(filtro.dataInicial);
    const dataFinal = parseDate(filtro.dataFinal, true);
    if (dataInicial && dataFinal && dataInicial > dataFinal) {
      throw new BadRequestException(
        'A data inicial deve ser menor ou igual à data final.'
      );
    }

    const normalized: RelatorioGeralRequerimentosFiltro = {
      dataInicial,
      dataFinal,
      base: filtro.base?.trim() || undefined,
      ambulanciaId: filtro.ambulanciaId?.trim() || undefined,
      tipo: filtro.tipo ? TipoRequerimento[filtro.tipo] : undefined,
      status: STATUS_RELATORIO,
    };

    return this.repository.findRelatorioGeralRequerimentos(normalized);
  }

  async getRelatorioEstoque(filtro: {
    baseId: string;
    page?: number;
    limit?: number;
    dataInicial?: string;
    dataFinal?: string;
    tipo?: keyof typeof TipoMovimentacaoEstoque;
    itemTipo?: 'produto' | 'medicamento';
    search?: string;
    validade?: RelatorioEstoqueFiltro['validade'];
  }): Promise<RelatorioEstoqueResultado> {
    const dataInicial = parseDate(filtro.dataInicial);
    const dataFinal = parseDate(filtro.dataFinal, true);
    if (dataInicial && dataFinal && dataInicial > dataFinal) {
      throw new BadRequestException(
        'A data inicial deve ser menor ou igual à data final.'
      );
    }
    return this.repository.findRelatorioEstoque({
      baseId: filtro.baseId,
      page: filtro.page ?? 1,
      limit: filtro.limit ?? 20,
      dataInicial,
      dataFinal,
      tipo: filtro.tipo ? TipoMovimentacaoEstoque[filtro.tipo] : undefined,
      itemTipo: filtro.itemTipo,
      search: filtro.search?.trim() || undefined,
      validade: filtro.validade,
    });
  }
}
