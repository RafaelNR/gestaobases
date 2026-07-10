import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { cargosService } from "@/Service/Cargos.service";
import snackBar from "@/Hooks/useSnackBar";
import type {
	Cargo,
	CargoSchemaInsert,
	CargoSchemaUpdate,
} from "@/Types/Cargo";

export const CargosKeys = {
	all: ["cargos"] as const,
	forSetor: (setor: string) => ["cargos", setor] as const,
	detail: (id: string) => ["cargos", id] as const,
};

export function useGetCargos() {
	return useQuery<Cargo[]>({
		queryKey: CargosKeys.all,
		queryFn: () => cargosService.findAll() as Promise<Cargo[]>,
	});
}

export function useGetCargosBySetor(setor: string) {
	return useQuery<Cargo[]>({
		queryKey: CargosKeys.forSetor(setor),
		queryFn: () => cargosService.findAllBySetor(setor) as Promise<Cargo[]>,
		enabled: Boolean(setor),
	});
}

export function useGetCargosBySetorId(setorId: string) {
	return useQuery<Cargo[]>({
		queryKey: CargosKeys.forSetor(setorId),
		queryFn: () => cargosService.findAllBySetorId(setorId) as Promise<Cargo[]>,
		enabled: Boolean(setorId),
	});
}

export function useCreateCargo() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (dto: CargoSchemaInsert) => cargosService.create(dto),
		onSuccess: (_data: Cargo, variables: CargoSchemaInsert) => {
			queryClient.invalidateQueries({ queryKey: CargosKeys.all });
			queryClient.invalidateQueries({
				queryKey: CargosKeys.forSetor(variables.setor),
			});
			snackBar.success("Cargo criado com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(err?.message ?? "Erro ao criar Cargo.");
		},
	});
}

export function useUpdateCargo() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (dto: CargoSchemaUpdate) => cargosService.update(dto),
		onSuccess: (_data: Cargo, variables: CargoSchemaUpdate) => {
			queryClient.invalidateQueries({ queryKey: CargosKeys.all });
			queryClient.invalidateQueries({
				queryKey: CargosKeys.forSetor(variables.setor),
			});
			snackBar.success("Cargo atualizado com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(err?.message ?? "Erro ao atualizar Cargo.");
		},
	});
}

export function useDeleteCargo() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => cargosService.remove(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: CargosKeys.all });
			snackBar.success("Cargo removido com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(
				err?.message ??
					"Erro ao remover Cargo. Verifique se há registros vinculados.",
			);
		},
	});
}
