import { apiGet, apiPost, apiPut, apiDelete } from "@/Lib/HttpClient";

export const medicamentosService = {
	async findAll(): Promise<any[]> {
		return apiGet<any[]>("/medicamentos");
	},
	async findOne(id: string): Promise<any> {
		return apiGet<any>(`/medicamentos/${encodeURIComponent(id)}`);
	},
	async create(dto: Record<string, any>): Promise<any> {
		return apiPost<any>("/medicamentos", dto);
	},
	async update(id: string, dto: Record<string, any>): Promise<any> {
		return apiPut<any>(`/medicamentos/${encodeURIComponent(id)}`, { id, ...dto });
	},
	async toggleActive(id: string): Promise<any> {
		return apiPut<any>(`/medicamentos/${encodeURIComponent(id)}/toggle-active`, {});
	},
	async remove(id: string): Promise<void> {
		await apiDelete<void>(`/medicamentos/${encodeURIComponent(id)}`);
	},
};
