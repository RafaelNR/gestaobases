import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { requerimentoServices } from "@/Service/Requerimentos.service";
import snackBar from "@/Hooks/useSnackBar";
import type {
	Requerimento,
	FiltroRequerimentos,
	RequerimentoStatus,
	TipoRequerimento,
} from "@/Types/Requerimento";

export const requerimentoKeys = {
	all: (tipo: TipoRequerimento) => ["requerimentos", tipo] as const,
	filtered: (tipo: TipoRequerimento, filtro: FiltroRequerimentos) =>
		["requerimentos", tipo, "filtro", filtro] as const,
	byStatus: (tipo: TipoRequerimento) =>
		["requerimentos", "byStatus", tipo] as const,
	one: (tipo: TipoRequerimento, id: string) =>
		["requerimentos", tipo, id] as const,
};

export function useGetRequerimentos(tipo: TipoRequerimento) {
	return useQuery<Requerimento[]>({
		queryKey: requerimentoKeys.all(tipo),
		queryFn: () =>
			requerimentoServices[tipo].findAll() as Promise<Requerimento[]>,
	});
}

export function useGetRequerimentosByFiltro(
	tipo: TipoRequerimento,
	filtro: FiltroRequerimentos = {},
) {
	return useQuery<Requerimento[]>({
		queryKey: requerimentoKeys.filtered(tipo, filtro),
		queryFn: () =>
			requerimentoServices[tipo].findAll(filtro) as Promise<Requerimento[]>,
	});
}

export function useGetRequerimentoByStatus(tipo: TipoRequerimento) {
	return useQuery<Requerimento[]>({
		queryKey: requerimentoKeys.byStatus(tipo),
		queryFn: () => requerimentoServices[tipo].findByStatus(),
	});
}

export function useGetRequerimento(tipo: TipoRequerimento, id?: string) {
	return useQuery<Requerimento>({
		queryKey: id ? requerimentoKeys.one(tipo, id) : requerimentoKeys.all(tipo),
		queryFn: () =>
			requerimentoServices[tipo].findOne(id as string) as Promise<Requerimento>,
		enabled: Boolean(id),
	});
}

export function useCreateRequerimento(tipo: TipoRequerimento) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (dto: Record<string, any>) =>
			requerimentoServices[tipo].create(dto),
		onSuccess: (data: Requerimento) => {
			qc.invalidateQueries({ queryKey: requerimentoKeys.all(tipo) });
			snackBar.success("Requerimento criado.");
			return data;
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao criar requerimento."),
	});
}

export function useUpdateRequerimento(tipo: TipoRequerimento) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, ...dto }: { id: string; [k: string]: any }) =>
			requerimentoServices[tipo].update(id, dto),
		onSuccess: (_data, variables) => {
			qc.invalidateQueries({ queryKey: requerimentoKeys.all(tipo) });
			qc.invalidateQueries({
				queryKey: requerimentoKeys.one(tipo, variables.id),
			});
			snackBar.success("Requerimento atualizado.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao atualizar requerimento."),
	});
}

export function useEnviarRequerimento(tipo: TipoRequerimento) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => requerimentoServices[tipo].enviar(id),
		onSuccess: (_data, id) => {
			qc.invalidateQueries({ queryKey: requerimentoKeys.all(tipo) });
			qc.invalidateQueries({ queryKey: requerimentoKeys.one(tipo, id) });
			snackBar.success("Requerimento enviado com sucesso.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao enviar requerimento."),
	});
}

export function useExcluirRequerimento(tipo: TipoRequerimento) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => requerimentoServices[tipo].delete(id),
		onSuccess: (_data, id) => {
			qc.invalidateQueries({ queryKey: requerimentoKeys.all(tipo) });
			qc.invalidateQueries({ queryKey: requerimentoKeys.one(tipo, id) });
			snackBar.success("Requerimento excluído com sucesso.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao enviar requerimento."),
	});
}

export function useChangeStatusRequerimento(tipo: TipoRequerimento) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, status }: { id: string; status: RequerimentoStatus }) =>
			requerimentoServices[tipo].changeStatus(id, status),
		onSuccess: (_data, variables) => {
			qc.invalidateQueries({
				queryKey: requerimentoKeys.all(tipo),
				exact: true,
			});
			qc.invalidateQueries({
				queryKey: requerimentoKeys.byStatus(tipo),
				exact: true,
			});
			qc.invalidateQueries({
				queryKey: requerimentoKeys.one(tipo, variables.id),
			});
			snackBar.success("Status atualizado.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao alterar status."),
	});
}

export function useAddItemRequerimento(tipo: TipoRequerimento) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, ...dto }: { id: string; [k: string]: any }) =>
			requerimentoServices[tipo].addItem(id, dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: requerimentoKeys.all(tipo) });
			snackBar.success("Item adicionado.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao adicionar item."),
	});
}

export function useUpdateItemRequerimento(tipo: TipoRequerimento) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({
			id,
			itemId,
			...dto
		}: {
			id: string;
			itemId: string;
			[k: string]: any;
		}) => requerimentoServices[tipo].updateItem(id, itemId, dto),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: requerimentoKeys.all(tipo) });
			snackBar.success("Item atualizado.");
		},
		onError: (e: any) =>
			snackBar.error(e?.message ?? "Erro ao atualizar item."),
	});
}

export function useRemoveItemRequerimento(tipo: TipoRequerimento) {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: ({ id, itemId }: { id: string; itemId: string }) =>
			requerimentoServices[tipo].removeItem(id, itemId),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: requerimentoKeys.all(tipo) });
			snackBar.success("Item removido.");
		},
		onError: (e: any) => snackBar.error(e?.message ?? "Erro ao remover item."),
	});
}
