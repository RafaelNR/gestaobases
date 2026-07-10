import { apiDelete, apiGet, apiPost, apiPut } from "@/Lib/HttpClient";
import type { VisitaBase } from "@/Types/VisitaBase";

export const visitasBasesService = {
	findAll: (params?: Record<string, any>) =>
		apiGet<VisitaBase[]>("/visitas-bases", params),
	findOne: (id: string) => apiGet<VisitaBase>(`/visitas-bases/${encodeURIComponent(id)}`),
	create: (dto: Record<string, any>) => apiPost<VisitaBase>("/visitas-bases", dto),
	update: (id: string, dto: Record<string, any>) =>
		apiPut<VisitaBase>(`/visitas-bases/${encodeURIComponent(id)}`, dto),
	remove: (id: string) => apiDelete<void>(`/visitas-bases/${encodeURIComponent(id)}`),
};
