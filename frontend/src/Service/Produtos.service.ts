import { apiGet, apiPost, apiPut, apiDelete } from "@/Lib/HttpClient";

export const produtosService = {
	async findAll(): Promise<any[]> {
		return apiGet<any[]>("/produtos");
	},
	async findOne(id: string): Promise<any> {
		return apiGet<any>(`/produtos/${encodeURIComponent(id)}`);
	},
	async create(dto: Record<string, any>): Promise<any> {
		return apiPost<any>("/produtos", dto);
	},
	async update(id: string, dto: Record<string, any>): Promise<any> {
		return apiPut<any>(`/produtos/${encodeURIComponent(id)}`, { id, ...dto });
	},
	async toggleActive(id: string): Promise<any> {
		return apiPut<any>(`/produtos/${encodeURIComponent(id)}/toggle-active`, {});
	},
	async remove(id: string): Promise<void> {
		await apiDelete<void>(`/produtos/${encodeURIComponent(id)}`);
	},
};
