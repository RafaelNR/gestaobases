import { apiGet, apiPost, apiPut, apiDelete } from "@/Lib/HttpClient";
// import type { User, CreateUserDto, UpdateUserDto } from "@/types/Usuarios";

// ─── Users Service — rota /usuarios (ADMIN only) ──────────────────────────────

export const usersService = {
	/**
	 * GET /usuarios
	 * Retorna todos os usuários (máx. 200, ordenado por nome).
	 */
	async findAll(): Promise<any[]> {
		return apiGet<any[]>("/usuarios");
	},

	/**
	 * GET /usuarios/:id
	 */
	async findOne(id: string): Promise<any> {
		return apiGet<any>(`/usuarios/${encodeURIComponent(id)}`);
	},

	/**
	 * GET /usuarios/cargo/:cargo
	 */
	async finAllByCargo(cargo: string): Promise<any> {
		return apiGet<any>(`/usuarios/cargo/${encodeURIComponent(cargo)}`);
	},

	/**
	 * GET /usuarios/cargo/:cargo/base/:base
	 */
	async findAllByCargoAndBase(cargo: string, base: string): Promise<any> {
		return apiGet<any>(
			`/usuarios/cargo/${encodeURIComponent(cargo)}/base/${encodeURIComponent(base)}`,
		);
	},

	/**
	 * POST /usuarios
	 */
	async create(dto: any): Promise<any> {
		return apiPost<any>("/usuarios", dto);
	},

	/**
	 * PUT /usuarios/:id
	 */
	async update(id: string, dto: Omit<any, "status">): Promise<any> {
		return apiPut<any>(`/usuarios/${encodeURIComponent(id)}`, dto);
	},

	/**
	 * PUT /usuarios/perfil/:id
	 */
	async updatePerfil(id: string, dto: Omit<any, "status">): Promise<any> {
		return apiPut<any>(`/usuarios/perfil/${encodeURIComponent(id)}`, dto);
	},

	/**
	 * PUT /usuarios/bloquear/:id
	 */
	async block(id: string): Promise<void> {
		await apiPut<void>(`/usuarios/bloquear/${encodeURIComponent(id)}`, { id });
	},

	/**
	 * DELETE /usuarios/:id  (soft-delete, active = false)
	 */
	async remove(id: string): Promise<void> {
		await apiDelete<void>(`/usuarios/${encodeURIComponent(id)}`);
	},
};
