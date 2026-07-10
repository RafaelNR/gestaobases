import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { categoriasProdutoService } from "@/Service/CategoriasProduto.service";
import snackBar from "@/Hooks/useSnackBar";
import type { CategoriaProduto } from "@/Types/Produto";

export const categoriasProdutoKeys = { all: ["categorias-produto"] as const };

export function useGetCategoriasProduto() {
	return useQuery<CategoriaProduto[]>({
		queryKey: categoriasProdutoKeys.all,
		queryFn: () => categoriasProdutoService.findAll() as Promise<CategoriaProduto[]>,
	});
}

export function useCreateCategoriaProduto() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (dto: { nome: string }) => categoriasProdutoService.create(dto),
		onSuccess: () => { qc.invalidateQueries({ queryKey: categoriasProdutoKeys.all }); snackBar.success("Categoria criada."); },
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao criar categoria."),
	});
}

export function useUpdateCategoriaProduto() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, nome }: { id: string; nome: string }) =>
			categoriasProdutoService.update(id, { nome }),
		onSuccess: () => { qc.invalidateQueries({ queryKey: categoriasProdutoKeys.all }); snackBar.success("Categoria atualizada."); },
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao atualizar categoria."),
	});
}

export function useDeleteCategoriaProduto() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => categoriasProdutoService.remove(id),
		onSuccess: () => { qc.invalidateQueries({ queryKey: categoriasProdutoKeys.all }); snackBar.success("Categoria removida."); },
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao remover. Verifique vínculos."),
	});
}
