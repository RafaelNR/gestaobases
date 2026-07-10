import { apiGet, apiPost, apiPut, apiDelete } from "@/Lib/HttpClient";

export const categoriasMedicamentoService = {
	async findAll(): Promise<any[]> {
		return apiGet<any[]>("/categorias-medicamento");
	},
	async create(dto: { nome: string }): Promise<any> {
		return apiPost<any>("/categorias-medicamento", dto);
	},
	async update(id: string, dto: { nome: string; active?: boolean }): Promise<any> {
		return apiPut<any>(`/categorias-medicamento/${encodeURIComponent(id)}`, { id, ...dto });
	},
	async remove(id: string): Promise<void> {
		await apiDelete<void>(`/categorias-medicamento/${encodeURIComponent(id)}`);
	},
};
