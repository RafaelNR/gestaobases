import { apiGet, apiPost, apiPut, apiDelete } from "@/Lib/HttpClient";

export const basesService = {
	async findAll(): Promise<any[]> {
		return apiGet<any[]>("/bases");
	},

	async findOne(id: string): Promise<any> {
		return apiGet<any>(`/bases/${encodeURIComponent(id)}`);
	},

	async create(dto: { nome: string }): Promise<any> {
		return apiPost<any>("/bases", dto);
	},

	async update(id: string, dto: { nome: string }): Promise<any> {
		return apiPut<any>(`/bases/${encodeURIComponent(id)}`, { id, ...dto });
	},

	async remove(id: string): Promise<void> {
		await apiDelete<void>(`/bases/${encodeURIComponent(id)}`);
	},
};
