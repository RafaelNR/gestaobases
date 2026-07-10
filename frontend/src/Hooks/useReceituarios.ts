import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { receituariosService } from "@/Service/Receituarios.service";
import snackBar from "@/Hooks/useSnackBar";
import type { Receituario } from "@/Types/Receituario";

export const receituariosKeys = { all: ["receituarios"] as const };

export function useGetReceituarios(params?: Record<string, any>) {
	return useQuery<Receituario[]>({
		queryKey: [...receituariosKeys.all, params],
		queryFn: () =>
			receituariosService.findAll(params) as Promise<Receituario[]>,
	});
}

export function useCreateReceituario() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (dto: Record<string, any>) => receituariosService.create(dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: receituariosKeys.all });
			snackBar.success("Receituário criado.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao criar receituário."),
	});
}

export function useUpdateReceituario() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, ...dto }: { id: string; [k: string]: any }) =>
			receituariosService.update(id, dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: receituariosKeys.all });
			snackBar.success("Receituário atualizado.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao atualizar receituário."),
	});
}

export function useChangeStatusReceituario() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, status }: { id: string; status: string }) =>
			receituariosService.changeStatus(id, status),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: receituariosKeys.all });
			snackBar.success("Status atualizado.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao alterar status."),
	});
}

export function useDeleteReceituario() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => receituariosService.remove(id),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: receituariosKeys.all });
			snackBar.success("Receituário removido.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao remover receituário."),
	});
}

export function useAddMedicamento() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, ...dto }: { id: string; [k: string]: any }) =>
			receituariosService.addMedicamento(id, dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: receituariosKeys.all });
			snackBar.success("Medicamento adicionado.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao adicionar medicamento."),
	});
}

export function useUpdateMedicamento() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({
			id,
			medId,
			...dto
		}: {
			id: string;
			medId: string;
			[k: string]: any;
		}) => receituariosService.updateMedicamento(id, medId, dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: receituariosKeys.all });
			snackBar.success("Medicamento atualizado.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao atualizar medicamento."),
	});
}

export function useRemoveMedicamento() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, medId }: { id: string; medId: string }) =>
			receituariosService.removeMedicamento(id, medId),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: receituariosKeys.all });
			snackBar.success("Medicamento removido.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao remover medicamento."),
	});
}
