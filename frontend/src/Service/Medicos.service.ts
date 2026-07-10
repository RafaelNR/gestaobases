import { apiGet, apiPost, apiPut, apiDelete } from "@/Lib/HttpClient";

export const medicosService = {
	async findAll(): Promise<any[]> {
		return apiGet<any[]>("/medicos");
	},
	async findOne(id: string): Promise<any> {
		return apiGet<any>(`/medicos/${encodeURIComponent(id)}`);
	},
	async create(dto: Record<string, any>): Promise<any> {
		return apiPost<any>("/medicos", dto);
	},
	async update(id: string, dto: Record<string, any>): Promise<any> {
		return apiPut<any>(`/medicos/${encodeURIComponent(id)}`, { id, ...dto });
	},
	async remove(id: string): Promise<void> {
		await apiDelete<void>(`/medicos/${encodeURIComponent(id)}`);
	},
};
