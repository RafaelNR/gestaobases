import { TipoMovimentacaoEstoque } from '@generated/prisma/client';

export type RelatorioEstoqueFiltro = {
  baseId: string;
  page: number;
  limit: number;
  dataInicial?: Date;
  dataFinal?: Date;
  tipo?: TipoMovimentacaoEstoque;
  itemTipo?: 'produto' | 'medicamento';
  search?: string;
  validade?: 'SemValidade' | 'Regular' | 'Atencao' | 'Alerta' | 'Vencido';
};

export type RelatorioEstoqueMovimentacao = {
  id: string;
  created_at: Date;
  tipo: TipoMovimentacaoEstoque;
  quantidade: number;
  saldoAnterior: number;
  saldoPosterior: number;
  lote: string | null;
  validade: Date | null;
  usuario: string;
  observacao: string | null;
  item: { tipo: 'produto' | 'medicamento'; nome: string; codigo: number };
};

export type RelatorioEstoqueCards = {
  entradas: number;
  saidas: number;
  perdas: number;
  vencimentos: number;
  saldoVencido: number;
  lotesProximosVencimento: number;
};

export type RelatorioEstoqueResultado = {
  items: RelatorioEstoqueMovimentacao[];
  cards: RelatorioEstoqueCards;
  page: number;
  limit: number;
  total: number;
  pages: number;
};
