import { apiGet, apiPost, apiPut, apiDelete } from "@/Lib/HttpClient";
import {
	Ambulancia,
	AmbulanciaInsertSchemaInput,
	AmbulanciaUpdateSchemaInput,
} from "@/Types/Ambulancia";

export const ambulanciasService = {
	async findAll(): Promise<Ambulancia[]> {
		return apiGet<Ambulancia[]>("/ambulancias");
	},
	async findOne(id: string): Promise<Ambulancia> {
		return apiGet<Ambulancia>(`/ambulancias/${encodeURIComponent(id)}`);
	},
	async findAllByBase(base: string): Promise<Ambulancia[]> {
		return apiGet<Ambulancia[]>(
			`/ambulancias/base/${encodeURIComponent(base)}`,
		);
	},
	async create(dto: AmbulanciaInsertSchemaInput): Promise<Ambulancia> {
		return apiPost<Ambulancia>("/ambulancias", dto);
	},
	async update(
		id: string,
		dto: AmbulanciaUpdateSchemaInput,
	): Promise<Ambulancia> {
		return apiPut<Ambulancia>(`/ambulancias/${encodeURIComponent(id)}`, {
			...dto,
		});
	},
	async remove(id: string): Promise<void> {
		await apiDelete<void>(`/ambulancias/${encodeURIComponent(id)}`);
	},
};
