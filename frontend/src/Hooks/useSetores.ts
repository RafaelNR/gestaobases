import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { setoresService } from "@/Service/Setores.service";
import snackBar from "@/Hooks/useSnackBar";
import type {
	Setor,
	SetorSchemaInputCreate,
	SetorSchemaInputUpdate,
} from "@/Types/Setor";

export const setoresKeys = {
	all: ["setores"] as const,
	detail: (id: string) => ["setores", id] as const,
};

export function useGetSetores() {
	return useQuery<Setor[]>({
		queryKey: setoresKeys.all,
		queryFn: () => setoresService.findAll() as Promise<Setor[]>,
	});
}

export function useCreateSetor() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (dto: SetorSchemaInputCreate) => setoresService.create(dto),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: setoresKeys.all });
			snackBar.success("Setor criado com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(err?.message ?? "Erro ao criar setor.");
		},
	});
}

export function useUpdateSetor() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (dto: SetorSchemaInputUpdate) =>
			setoresService.update(dto.id, dto),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: setoresKeys.all });
			snackBar.success("Setor atualizado com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(err?.message ?? "Erro ao atualizar setor.");
		},
	});
}

export function useDeleteSetor() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => setoresService.remove(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: setoresKeys.all });
			snackBar.success("Setor removido com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(
				err?.message ??
					"Erro ao remover setor. Verifique se há registros vinculados.",
			);
		},
	});
}
