import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import snackBar from "@/Hooks/useSnackBar";
import { estoquesService } from "@/Service/Estoques.service";
import type {
	EstoqueQuery,
	MovimentacaoCreateSchemaInput,
} from "@/Types/Estoque";

export const estoqueKeys = {
	all: ["estoques"] as const,
	list: (params: EstoqueQuery) => ["estoques", "list", params] as const,
	lotes: (estoqueId: string) => ["estoques", "lotes", estoqueId] as const,
	history: (loteId: string) =>
		["estoques", "lotes", loteId, "historico"] as const,
};
export const useEstoques = (params: EstoqueQuery) =>
	useQuery({
		queryKey: estoqueKeys.list(params),
		queryFn: () => estoquesService.list(params),
		refetchInterval: 60000 * 10, // 10 minuto
	});
export const useEstoquesLotes = (estoqueId?: string) =>
	useQuery({
		queryKey: estoqueKeys.lotes(estoqueId ?? ""),
		queryFn: () => estoquesService.lotes(estoqueId!),
		enabled: Boolean(estoqueId),
		refetchInterval: 60000 * 10, // 10 minuto
	});
export const useHistoricoEstoque = (loteId?: string) =>
	useQuery({
		queryKey: estoqueKeys.history(loteId ?? ""),
		queryFn: () => estoquesService.historico(loteId!),
		enabled: Boolean(loteId),
		refetchInterval: 60000 * 10, // 10 minuto
	});

function useEstoqueMutation<T>(
	mutationFn: (dto: T) => Promise<unknown>,
	success: string,
) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn,
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: estoqueKeys.all });
			snackBar.success(success);
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Não foi possível concluir a operação."),
	});
}

export const useCreateEstoque = () =>
	useEstoqueMutation(estoquesService.create, "Item adicionado ao estoque.");
export const useCreateEstoqueLote = () =>
	useEstoqueMutation(estoquesService.createLote, "Lote adicionado.");
export const useMovimentarEstoque = () =>
	useEstoqueMutation(
		(dto: MovimentacaoCreateSchemaInput) =>
			estoquesService.movimentar(dto.loteId, dto),
		"Movimentação registrada.",
	);
export const useBloquearEstoqueLote = () =>
	useEstoqueMutation(
		({
			loteId,
			...dto
		}: Parameters<typeof estoquesService.bloquear>[1] & { loteId: string }) =>
			estoquesService.bloquear(loteId, dto),
		"Bloqueio atualizado.",
	);

export const useDesabilitarEstoqueLote = () =>
	useEstoqueMutation(
		({ loteId }: { loteId: string }) => estoquesService.desabilitar(loteId),
		"Lote desabilitado.",
	);
