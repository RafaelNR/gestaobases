import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { medicamentosService } from "@/Service/Medicamentos.service";
import snackBar from "@/Hooks/useSnackBar";
import type { Medicamento } from "@/Types/Medicamento";

export const medicamentosKeys = { all: ["medicamentos"] as const };

export function useGetMedicamentos() {
	return useQuery<Medicamento[]>({
		queryKey: medicamentosKeys.all,
		queryFn: () => medicamentosService.findAll() as Promise<Medicamento[]>,
	});
}

export function useCreateMedicamento() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (dto: Record<string, any>) => medicamentosService.create(dto),
		onSuccess: () => { qc.invalidateQueries({ queryKey: medicamentosKeys.all }); snackBar.success("Medicamento criado."); },
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao criar medicamento."),
	});
}

export function useUpdateMedicamento() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, ...dto }: { id: string; [k: string]: any }) =>
			medicamentosService.update(id, dto),
		onSuccess: () => { qc.invalidateQueries({ queryKey: medicamentosKeys.all }); snackBar.success("Medicamento atualizado."); },
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao atualizar medicamento."),
	});
}

export function useToggleActiveMedicamento() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => medicamentosService.toggleActive(id),
		onSuccess: () => { qc.invalidateQueries({ queryKey: medicamentosKeys.all }); snackBar.success("Status atualizado."); },
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao alterar status."),
	});
}

export function useDeleteMedicamento() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => medicamentosService.remove(id),
		onSuccess: () => { qc.invalidateQueries({ queryKey: medicamentosKeys.all }); snackBar.success("Medicamento removido."); },
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao remover. Verifique vínculos."),
	});
}
