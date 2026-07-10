import { apiGet, apiPost, apiPut, apiDelete } from "@/Lib/HttpClient";
import { CargoSchemaInsert, CargoSchemaUpdate } from "@/Types/Cargo";

export const cargosService = {
	async findAll(): Promise<any[]> {
		return apiGet<any[]>("/cargos");
	},

	async getCargos(): Promise<any[]> {
		return apiGet<any[]>("/cargos");
	},

	async findAllBySetor(setor: string): Promise<any[]> {
		return apiGet<any[]>(`/cargos/setor/${encodeURIComponent(setor)}`);
	},

	async findAllBySetorId(setorId: string): Promise<any[]> {
		return apiGet<any[]>(`/cargos/setorId/${encodeURIComponent(setorId)}`);
	},

	async findOne(id: string): Promise<any> {
		return apiGet<any>(`/cargos/${encodeURIComponent(id)}`);
	},

	async create(dto: CargoSchemaInsert): Promise<any> {
		return apiPost<any>("/cargos", dto);
	},

	async update(dto: CargoSchemaUpdate): Promise<any> {
		return apiPut<any>(`/cargos/${encodeURIComponent(dto.id)}`, dto);
	},

	async remove(id: string): Promise<void> {
		await apiDelete<void>(`/cargos/${encodeURIComponent(id)}`);
	},
};
