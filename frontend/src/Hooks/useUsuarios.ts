import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { usersService } from "@/Service/Usuarios.service";
import snackBar from "@/Hooks/useSnackBar";
import type { Usuario } from "@/Types/Usuarios";

const TTL = 1000 * 60 * 60 * 24; // 1 dia

export const usuariosKeys = {
	all: ["usuarios"] as const,
	cargo: (cargo: string) => ["usuarios", cargo] as const,
	cargoAndBase: (cargo: string, base: string) =>
		["usuarios", cargo, base] as const,
	detail: (id: string) => ["usuarios", id] as const,
};

export function useGetUsuarios() {
	return useQuery<Usuario[]>({
		queryKey: usuariosKeys.all,
		queryFn: () => usersService.findAll() as Promise<Usuario[]>,
		staleTime: TTL,
	});
}

export function useGetUsuariosByCargo(cargo: string) {
	return useQuery<Usuario[]>({
		queryKey: usuariosKeys.cargo(cargo),
		queryFn: () => usersService.finAllByCargo(cargo) as Promise<Usuario[]>,
		enabled: !!cargo,
	});
}

export function useGetUsuariosByCargoOrBase(
	cargo: string,
	base: string,
	{ enabled = true }: { enabled?: boolean } = {},
) {
	return useQuery<Usuario[]>({
		queryKey: base
			? usuariosKeys.cargoAndBase(cargo, base)
			: usuariosKeys.cargo(cargo),
		queryFn: () =>
			base
				? (usersService.findAllByCargoAndBase(cargo, base) as Promise<
						Usuario[]
					>)
				: (usersService.finAllByCargo(cargo) as Promise<Usuario[]>),
		enabled,
	});
}

export function useGetUsuario(id: string) {
	return useQuery<Usuario>({
		queryKey: usuariosKeys.detail(id),
		queryFn: () => usersService.findOne(id) as Promise<Usuario>,
		enabled: !!id,
	});
}

export function useCreateUsuario() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (dto: any) => usersService.create(dto),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: usuariosKeys.all });
			snackBar.success("Usuário criado com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(err?.message ?? "Erro ao criar usuário.");
		},
	});
}

export function useUpdateUsuario() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (dto: { id: string; [key: string]: any }) =>
			usersService.update(dto.id, dto),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: usuariosKeys.all });
			snackBar.success("Usuário atualizado com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(err?.message ?? "Erro ao atualizar usuário.");
		},
	});
}

export function useUpdatePerfil() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (dto: { id: string; [key: string]: any }) =>
			usersService.updatePerfil(dto.id, dto),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["auth", "me"] as const });
			snackBar.success("Perfil atualizado com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(err?.message ?? "Erro ao atualizar perfil.");
		},
	});
}

export function useBlockUsuario() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => usersService.block(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: usuariosKeys.all });
			snackBar.success("Usuário bloqueado com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(err?.message ?? "Erro ao bloquear usuário.");
		},
	});
}

export function useDeleteUsuario() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => usersService.remove(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: usuariosKeys.all });
			snackBar.success("Usuário removido com sucesso.");
		},
		onError: (err: any) => {
			snackBar.error(err?.message ?? "Erro ao remover usuário.");
		},
	});
}
