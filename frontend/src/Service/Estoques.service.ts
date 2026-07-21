import { apiDelete, apiGet, apiPatch, apiPost } from "@/Lib/HttpClient";
import type {
	EstoqueCreateSchemaInput,
	EstoqueLoteCreateSchemaInput,
	EstoqueMovimentacao,
	EstoquePage,
	EstoqueLote,
	EstoqueQuery,
	MovimentacaoCreateSchemaInput,
} from "@/Types/Estoque";

export const estoquesService = {
	list: (params: EstoqueQuery) =>
		apiGet<EstoquePage>(
			"/estoques",
			params as unknown as Record<string, unknown>,
		),

	lotes: (estoqueId: string, baseId?: string) =>
		apiGet<EstoqueLote[]>(
			`/estoques/${encodeURIComponent(estoqueId)}/lotes`,
			baseId ? { baseId } : undefined,
		),

	create: (dto: EstoqueCreateSchemaInput) => apiPost("/estoques", dto),

	createLote: (dto: EstoqueLoteCreateSchemaInput) =>
		apiPost("/estoques/lotes", dto),
	movimentar: (loteId: string, dto: MovimentacaoCreateSchemaInput) =>
		apiPost(`/estoques/lotes/${encodeURIComponent(loteId)}/movimentacoes`, dto),
	bloquear: (
		loteId: string,
		dto: { bloqueado: boolean; motivoBloqueio?: string },
	) => apiPatch(`/estoques/lotes/${encodeURIComponent(loteId)}/bloqueio`, dto),
	historico: (loteId: string, page = 1, limit = 20) =>
		apiGet<EstoqueMovimentacao[]>(
			`/estoques/lotes/${encodeURIComponent(loteId)}/movimentacoes`,
			{ page, limit },
		),
	desabilitar: (loteId: string) =>
		apiDelete(`/estoques/lotes/${encodeURIComponent(loteId)}`),
};
