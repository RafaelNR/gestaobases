import type { StatusValidadeEstoque, TipoMovimentacaoEstoque } from "./Estoque";

export type PeriodoVencimentoDashboard = 15 | 30 | 45 | 60;

export interface DashboardLoteProximoVencimento {
	id: string;
	lote: string | null;
	status: StatusValidadeEstoque;
	validade: string;
	quantidade: number;
	item: string;
	base: string;
}

export interface DashboardUltimaMovimentacao {
	id: string;
	tipo: TipoMovimentacaoEstoque;
	quantidade: number;
	saldoAnterior: number;
	saldoPosterior: number;
	observacao: string | null;
	created_at: string;
	lote: string | null;
	item: string;
	usuario: string;
	base: string;
}
