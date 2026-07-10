import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ambulanciasService } from "@/Service/Ambulancias.service";
import snackBar from "@/Hooks/useSnackBar";
import type {
	Ambulancia,
	AmbulanciaInsertSchemaInput,
	AmbulanciaUpdateSchemaInput,
} from "@/Types/Ambulancia";

export const ambulanciasKeys = { all: ["ambulancias"] as const };

export function useGetAmbulancias({
	enabled = true,
}: { enabled?: boolean } = {}) {
	return useQuery<Ambulancia[]>({
		queryKey: ambulanciasKeys.all,
		queryFn: () => ambulanciasService.findAll() as Promise<Ambulancia[]>,
		enabled,
	});
}

export function useGetAmbulanciasOrBase(
	base?: string | null,
	{ enabled = true }: { enabled?: boolean } = {},
) {
	return useQuery<Ambulancia[]>({
		queryKey: [...ambulanciasKeys.all, base ?? "all"],
		queryFn: () => {
			if (base) {
				return ambulanciasService.findAllByBase(base) as Promise<Ambulancia[]>;
			}

			return ambulanciasService.findAll() as Promise<Ambulancia[]>;
		},
		enabled,
	});
}

export function useCreateAmbulancia() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (dto: AmbulanciaInsertSchemaInput) =>
			ambulanciasService.create(dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ambulanciasKeys.all });
			snackBar.success("Ambulância criada.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao criar ambulância."),
	});
}

export function useUpdateAmbulancia() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (dto: AmbulanciaUpdateSchemaInput) =>
			ambulanciasService.update(dto.id, dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ambulanciasKeys.all });
			snackBar.success("Ambulância atualizada.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao atualizar ambulância."),
	});
}

export function useDeleteAmbulancia() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => ambulanciasService.remove(id),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ambulanciasKeys.all });
			snackBar.success("Ambulância removida.");
		},
		onError: (e: any) =>
			snackBar.error(
				e?.message ?? "Erro ao remover ambulância. Verifique vínculos.",
			),
	});
}
