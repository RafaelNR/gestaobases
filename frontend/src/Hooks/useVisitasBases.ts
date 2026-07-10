import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { visitasBasesService } from "@/Service/VisitasBases.service";
import snackBar from "@/Hooks/useSnackBar";
import type { VisitaBase } from "@/Types/VisitaBase";

export const visitasKeys = { all: ["visitas-bases"] as const };

export function useGetVisitasBases(params?: Record<string, any>) {
	return useQuery<VisitaBase[]>({
		queryKey: [...visitasKeys.all, params],
		queryFn: () => visitasBasesService.findAll(params) as Promise<VisitaBase[]>,
	});
}

export function useCreateVisitaBase() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (dto: Record<string, any>) => visitasBasesService.create(dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: visitasKeys.all });
			snackBar.success("Visita registrada.");
		},
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao registrar visita."),
	});
}

export function useUpdateVisitaBase() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, ...dto }: { id: string; [k: string]: any }) =>
			visitasBasesService.update(id, dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: visitasKeys.all });
			snackBar.success("Visita atualizada.");
		},
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao atualizar visita."),
	});
}

export function useDeleteVisitaBase() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => visitasBasesService.remove(id),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: visitasKeys.all });
			snackBar.success("Visita removida.");
		},
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao remover visita."),
	});
}
