import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { basesService } from "@/Service/Bases.service";
import snackBar from "@/Hooks/useSnackBar";
import type { Base, BaseUpdateInput, BaseInsertInput } from "@/Types/Base";

export const basesKeys = {
	all: ["bases"] as const,
	detail: (id: string) => ["bases", id] as const,
};

export function useGetBases({ enabled = true }: { enabled?: boolean } = {}) {
	return useQuery<Base[]>({
		queryKey: basesKeys.all,
		queryFn: () => basesService.findAll() as Promise<Base[]>,
		enabled,
	});
}

export function useCreateBase() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (dto: BaseInsertInput) => basesService.create(dto),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: basesKeys.all });
			snackBar.success("Base criada com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(err?.message ?? "Erro ao criar base.");
		},
	});
}

export function useUpdateBase() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (values: BaseUpdateInput) =>
			basesService.update(values.id, values),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: basesKeys.all });
			snackBar.success("Base atualizada com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(err?.message ?? "Erro ao atualizar base.");
		},
	});
}

export function useDeleteBase() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => basesService.remove(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: basesKeys.all });
			snackBar.success("Base removida com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(
				err?.message ??
					"Erro ao remover base. Verifique se há registros vinculados.",
			);
		},
	});
}
