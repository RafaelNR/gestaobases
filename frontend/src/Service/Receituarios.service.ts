import { apiDelete, apiGet, apiPost, apiPut } from "@/Lib/HttpClient";
import type { Receituario } from "@/Types/Receituario";

export const receituariosService = {
	findAll: (params?: Record<string, any>) =>
		apiGet<Receituario[]>("/receituarios", params),
	findOne: (id: string) =>
		apiGet<Receituario>(`/receituarios/${encodeURIComponent(id)}`),
	create: (dto: Record<string, any>) => apiPost<Receituario>("/receituarios", dto),
	update: (id: string, dto: Record<string, any>) =>
		apiPut<Receituario>(`/receituarios/${encodeURIComponent(id)}`, dto),
	changeStatus: (id: string, status: string) =>
		apiPut<Receituario>(`/receituarios/${encodeURIComponent(id)}/status`, { status }),
	remove: (id: string) => apiDelete<void>(`/receituarios/${encodeURIComponent(id)}`),
	addMedicamento: (id: string, dto: Record<string, any>) =>
		apiPost<any>(`/receituarios/${encodeURIComponent(id)}/medicamentos`, dto),
	updateMedicamento: (id: string, medId: string, dto: Record<string, any>) =>
		apiPut<any>(
			`/receituarios/${encodeURIComponent(id)}/medicamentos/${encodeURIComponent(medId)}`,
			dto
		),
	removeMedicamento: (id: string, medId: string) =>
		apiDelete<void>(
			`/receituarios/${encodeURIComponent(id)}/medicamentos/${encodeURIComponent(medId)}`
		),
};
