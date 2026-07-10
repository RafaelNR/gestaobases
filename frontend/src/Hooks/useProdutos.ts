import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { produtosService } from "@/Service/Produtos.service";
import snackBar from "@/Hooks/useSnackBar";
import type { Produto } from "@/Types/Produto";

export const produtosKeys = { all: ["produtos"] as const };

export function useGetProdutos() {
	return useQuery<Produto[]>({
		queryKey: produtosKeys.all,
		queryFn: () => produtosService.findAll() as Promise<Produto[]>,
	});
}

export function useCreateProduto() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (dto: Record<string, any>) => produtosService.create(dto),
		onSuccess: () => { qc.invalidateQueries({ queryKey: produtosKeys.all }); snackBar.success("Produto criado."); },
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao criar produto."),
	});
}

export function useUpdateProduto() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, ...dto }: { id: string; [k: string]: any }) =>
			produtosService.update(id, dto),
		onSuccess: () => { qc.invalidateQueries({ queryKey: produtosKeys.all }); snackBar.success("Produto atualizado."); },
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao atualizar produto."),
	});
}

export function useToggleActiveProduto() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => produtosService.toggleActive(id),
		onSuccess: () => { qc.invalidateQueries({ queryKey: produtosKeys.all }); snackBar.success("Status atualizado."); },
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao alterar status."),
	});
}

export function useDeleteProduto() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => produtosService.remove(id),
		onSuccess: () => { qc.invalidateQueries({ queryKey: produtosKeys.all }); snackBar.success("Produto removido."); },
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao remover. Verifique vínculos."),
	});
}
