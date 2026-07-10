import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { categoriasMedicamentoService } from "@/Service/CategoriasMedicamento.service";
import snackBar from "@/Hooks/useSnackBar";
import type { CategoriaMedicamento } from "@/Types/Medicamento";

export const categoriasMedicamentoKeys = {
	all: ["categorias-medicamento"] as const,
};

export function useGetCategoriasMedicamento() {
	return useQuery<CategoriaMedicamento[]>({
		queryKey: categoriasMedicamentoKeys.all,
		queryFn: () =>
			categoriasMedicamentoService.findAll() as Promise<CategoriaMedicamento[]>,
	});
}

export function useCreateCategoriasMedicamento() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (dto: { nome: string }) =>
			categoriasMedicamentoService.create(dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: categoriasMedicamentoKeys.all });
			snackBar.success("Categoria criada.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao criar categoria."),
	});
}

export function useUpdateCategoriasMedicamento() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({
			id,
			...dto
		}: {
			id: string;
			nome: string;
			active?: boolean;
		}) => categoriasMedicamentoService.update(id, dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: categoriasMedicamentoKeys.all });
			snackBar.success("Categoria atualizada.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao atualizar categoria."),
	});
}

export function useDeleteCategoriasMedicamento() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => categoriasMedicamentoService.remove(id),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: categoriasMedicamentoKeys.all });
			snackBar.success("Categoria removida.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao remover. Verifique vínculos."),
	});
}
