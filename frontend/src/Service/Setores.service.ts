import { apiGet, apiPost, apiPut, apiDelete } from "@/Lib/HttpClient";
import { SetorSchemaInputCreate, SetorSchemaInputUpdate } from "@/Types/Setor";

export const setoresService = {
	async findAll(): Promise<any[]> {
		return apiGet<any[]>("/setores");
	},

	async findOne(id: string): Promise<any> {
		return apiGet<any>(`/setores/${encodeURIComponent(id)}`);
	},

	async create(dto: SetorSchemaInputCreate): Promise<any> {
		return apiPost<any>("/setores", dto);
	},

	async update(id: string, dto: SetorSchemaInputUpdate): Promise<any> {
		return apiPut<any>(`/setores/${encodeURIComponent(id)}`, dto);
	},

	async remove(id: string): Promise<void> {
		await apiDelete<void>(`/setores/${encodeURIComponent(id)}`);
	},
};
