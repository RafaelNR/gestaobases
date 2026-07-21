import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { medicosService } from "@/Service/Medicos.service";
import snackBar from "@/Hooks/useSnackBar";
import type { Medico } from "@/Types/Medico";

const TTL = 1000 * 60 * 60 * 24; // 1 dia
export const medicosKeys = { all: ["medicos"] as const };

export function useGetMedicos() {
	return useQuery<Medico[]>({
		queryKey: medicosKeys.all,
		queryFn: () => medicosService.findAll() as Promise<Medico[]>,
		staleTime: TTL,
	});
}

export function useCreateMedico() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (dto: Record<string, any>) => medicosService.create(dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: medicosKeys.all });
			snackBar.success("Médico criado.");
		},
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao criar médico."),
	});
}

export function useUpdateMedico() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, ...dto }: { id: string; [k: string]: any }) =>
			medicosService.update(id, dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: medicosKeys.all });
			snackBar.success("Médico atualizado.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao atualizar médico."),
	});
}

export function useDeleteMedico() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => medicosService.remove(id),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: medicosKeys.all });
			snackBar.success("Médico removido.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao remover. Verifique vínculos."),
	});
}
