import type { TipoRequerimento } from "./Requerimento";

export type RelatorioManifestacoes = {
	tipo: string;
	mes: number;
	valor?: string | null;
	total?: number | null;
};

export type RelatorioNotasChatBot = {
	unidade: string;
	mes: number;
	media_nota_atendimento: number | null;
	media_nota_local: number | null;
	ocorrencias: number | null;
};

export type RelatorioGeralRequerimentosFiltro = {
	dataInicial?: string;
	dataFinal?: string;
	base?: string;
	ambulanciaId?: string;
	tipo?: TipoRequerimento;
};

export type RelatorioGeralRequerimentosRow = {
	base: string;
	ambulancia: { id: string; nome: string; tipo: string } | null;
	requerimentosMedicamentos: number;
	quantidadeMedicamentos: number;
	requerimentosProdutos: number;
	quantidadeProdutos: number;
};

export type RelatorioEstoqueFiltro = {
	baseId?: string;
	page?: number;
	limit?: number;
	dataInicial?: string;
	dataFinal?: string;
	tipo?: string;
	itemTipo?: "produto" | "medicamento";
	search?: string;
	validade?: "SemValidade" | "Regular" | "Atencao" | "Alerta" | "Vencido";
};

export type RelatorioEstoqueMovimentacao = {
	id: string;
	created_at: string;
	tipo: string;
	quantidade: number;
	saldoAnterior: number;
	saldoPosterior: number;
	lote: string | null;
	validade: string | null;
	usuario: string;
	observacao: string | null;
	item: { tipo: "produto" | "medicamento"; nome: string; codigo: number };
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
