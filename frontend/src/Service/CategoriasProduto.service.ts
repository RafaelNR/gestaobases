import { apiGet, apiPost, apiPut, apiDelete } from "@/Lib/HttpClient";

export const categoriasProdutoService = {
	async findAll(): Promise<any[]> {
		return apiGet<any[]>("/categorias-produto");
	},
	async create(dto: { nome: string }): Promise<any> {
		return apiPost<any>("/categorias-produto", dto);
	},
	async update(id: string, dto: { nome: string }): Promise<any> {
		return apiPut<any>(`/categorias-produto/${encodeURIComponent(id)}`, { id, ...dto });
	},
	async remove(id: string): Promise<void> {
		await apiDelete<void>(`/categorias-produto/${encodeURIComponent(id)}`);
	},
};
