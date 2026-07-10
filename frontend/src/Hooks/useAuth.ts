import { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { authService, type LoginPayload } from "@/Service/Auth.service";
import { usersService } from "@/Service/Usuarios.service";
import { saveUser, loadUser, clearUser } from "@/Lib/UserCache";
import { getQueryClient } from "@/Providers/QueryProvider";
import snackBar from "@/Hooks/useSnackBar";

// ─── Query keys ───────────────────────────────────────────────────────────────

export const authKeys = {
	me: ["auth", "me"] as const,
};

// ─── Helper redirect ──────────────────────────────────────────────────────────

function useRedirectUrl(defaultUrl = "/dashboard") {
	const location = useLocation();

	const params = new URLSearchParams(location.search);
	const redirectUrl = params.get("redirect");

	if (!redirectUrl) return defaultUrl;

	try {
		const decodedRedirectUrl = decodeURIComponent(redirectUrl);
		const isInternalPath =
			decodedRedirectUrl.startsWith("/") &&
			!decodedRedirectUrl.startsWith("//");

		return isInternalPath ? decodedRedirectUrl : defaultUrl;
	} catch {
		return defaultUrl;
	}
}

// ─── useMe ────────────────────────────────────────────────────────────────────

export function useMe() {
	const query = useQuery({
		queryKey: authKeys.me,
		queryFn: () => authService.me(),
		staleTime: 10 * 60 * 1000,
		retry: false,
		initialData: () =>
			typeof window !== "undefined" ? (loadUser() ?? undefined) : undefined,
		initialDataUpdatedAt: 0,
	});

	useEffect(() => {
		if (query.data && !query.isError) {
			saveUser(query.data);
		}
		if (query.isError) {
			clearUser();
		}
	}, [query.data, query.isError]);

	return query;
}

export default function useAuth() {
	const { data: user, isError, isLoading } = useMe();
	const logado = !!user && !isError;

	return { isLoading, logado, user };
}

// ─── useLogin ─────────────────────────────────────────────────────────────────

export function useLogin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const redirectUrl = useRedirectUrl("/");

	return useMutation({
		mutationFn: (payload: LoginPayload) => authService.login(payload),

		onSuccess: async () => {
			try {
				// Busca o perfil do usuário imediatamente para popular o cache do React Query.
				// Como o useMe() observa esse cache, a mudança fará o useAuth() reemitir logado=true,
				// trocando dinamicamente o roteador para o autenticado.
				const user = await queryClient.fetchQuery({
					queryKey: authKeys.me,
					queryFn: () => authService.me(),
				});

				if (user) {
					saveUser(user);
				}

				navigate(redirectUrl, { replace: true });
				// window.location.href = redirectUrl;
			} catch {
				clearUser();
				queryClient.removeQueries({ queryKey: authKeys.me });
				snackBar.error("Erro ao obter dados do usuário. Tente novamente.");
			}
		},

		onError: () => {
			clearUser();
			queryClient.removeQueries({ queryKey: authKeys.me });

			snackBar.error("Login ou senha incorretos!");
		},
	});
}

// ─── useLogout ────────────────────────────────────────────────────────────────

export function useLogout() {
	// const navigate = useNavigate();

	return useMutation({
		mutationFn: () => authService.logout(),

		onSettled: () => {
			clearUser();
			getQueryClient().clear();

			snackBar.success("Logout realizado com sucesso!");

			// forma o logout navigate("/", { replace: true });
			window.location.href = "/login";
		},
	});
}

// ─── useUpdateProfile ─────────────────────────────────────────────────────────

export function useUpdateProfile() {
	const queryClient = useQueryClient();
	const { data: user } = useMe();

	return useMutation({
		mutationFn: (dto: { name: string; email: string; password?: string }) => {
			if (!user) {
				snackBar.error("Usuário não autenticado");
				throw new Error("Usuário não autenticado");
			}

			return usersService.update(user.id, {
				id: user.id,
				name: dto.name,
				email: dto.email,
				password: dto.password ?? "",
			});
		},

		onSuccess: () => {
			snackBar.success("Perfil atualizado com sucesso!");

			queryClient.invalidateQueries({
				queryKey: authKeys.me,
			});
		},

		onError: (error) => {
			console.log(error);
			snackBar.error("Erro ao atualizar perfil");
		},
	});
}

// ─── useRequestPasswordReset ──────────────────────────────────────────────────

export function useRequestPasswordReset() {
	return useMutation({
		mutationFn: (username: string) =>
			authService.requestPasswordReset(username),

		onSuccess: () => {
			snackBar.success(
				"Solicitação de redefinição de senha enviada com sucesso!",
			);
		},

		onError: () => {
			snackBar.error("Erro ao enviar solicitação de redefinição de senha");
		},
	});
}

// ─── useConfirmResetPassword ──────────────────────────────────────────────────

export function useConfirmResetPassword() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: ({
			token,
			password,
			confirmPassword,
		}: {
			token: string;
			password: string;
			confirmPassword: string;
		}) => authService.resetPassword(token, password, confirmPassword),

		onSuccess: () => {
			snackBar.success("Senha redefinida com sucesso!");

			queryClient.clear();

			navigate("/login", { replace: true });
		},

		onError: (error: any) => {
			snackBar.error(error?.message || "Erro ao redefinir senha");
		},
	});
}
