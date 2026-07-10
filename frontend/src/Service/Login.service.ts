import { apiPost, apiDelete } from "@/Lib/HttpClient";

// ─── Login Service — rota /usuarios ──────────────────────────────

export const loginService = {
	/**
	 * POST /usuarios
	 */
	async create(login: any): Promise<any> {
		return apiPost<any>("/login", login);
	},

	/**
	 * DELETE /usuarios/:id
	 */
	async logout(): Promise<any> {
		return apiDelete<any>(`/logout`);
	},
};
