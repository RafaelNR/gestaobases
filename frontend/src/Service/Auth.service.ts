import { apiGet, apiPost } from "@/Lib/HttpClient";
import type { AuthSessionResponse, UserMe } from "@/Types/Auth";

// ─── Auth Service ─────────────────────────────────────────────────────────────

export interface LoginPayload {
	username: string;
	password: string;
}

export const authService = {
	/**
	 * POST /auth/login
	 * Seta cookies httpOnly jwt_token e jwt_refresh.
	 */
	async login(payload: LoginPayload): Promise<AuthSessionResponse> {
		return apiPost<AuthSessionResponse>("/auth/login", payload);
	},

	/**
	 * POST /auth/logout
	 * Invalida todos os refresh tokens do usuário no backend.
	 */
	async logout(): Promise<void> {
		await apiPost<void>("/auth/logout");
	},

	/**
	 * POST /auth/refresh
	 * Chamado automaticamente pelo interceptor do http-client.
	 * Usa apenas o cookie httpOnly jwt_refresh.
	 */
	async refresh(): Promise<AuthSessionResponse> {
		return apiPost<AuthSessionResponse>("/auth/refresh");
	},

	/**
	 * GET /auth/me
	 * Retorna dados do usuário autenticado via cookie httpOnly jwt_token.
	 */
	async me(): Promise<UserMe> {
		return apiGet<UserMe>("/auth/me");
	},

	/**
	 * POST /auth/password-reset/request
	 * Envia solicitação de redefinição de senha para o e-mail informado.
	 */
	async requestPasswordReset(username: string): Promise<void> {
		return apiPost<void>("/auth/password-reset/request", { username });
	},

	/**
	 * POST /auth/password-reset/confirm
	 * Redefine a senha com o token.
	 */
	async resetPassword(
		token: string,
		password: string,
		confirmPassword: string,
	): Promise<void> {
		return apiPost<void>("/auth/password-reset/confirm", {
			token,
			password,
			confirmPassword,
		});
	},
};
