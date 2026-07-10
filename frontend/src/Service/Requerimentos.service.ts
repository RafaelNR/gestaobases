import { apiDelete, apiGet, apiPost, apiPut } from "@/Lib/HttpClient";
import type { FiltroRequerimentos } from "@/Types/Requerimento";

function hasFiltro(filtro?: FiltroRequerimentos): boolean {
	return Boolean(
		filtro &&
			Object.values(filtro).some((value) => value !== undefined && value !== ""),
	);
}

const buildService = (tipo: string) => ({
	findAll: (filtro?: FiltroRequerimentos) =>
		apiGet<any[]>(
			hasFiltro(filtro)
				? `/requerimentos/${tipo.toLocaleLowerCase()}/filtro`
				: `/requerimentos/${tipo.toLocaleLowerCase()}`,
			filtro,
		),
	findOne: (id: string) =>
		apiGet<any>(
			`/requerimentos/${tipo.toLocaleLowerCase()}/${encodeURIComponent(id)}`,
		),
	findByStatus: () =>
		apiGet<any[]>(`/requerimentos/${tipo.toLocaleLowerCase()}/by/status`),
	create: (dto: Record<string, any>) =>
		apiPost<any>(`/requerimentos/${tipo.toLocaleLowerCase()}`, dto),
	update: (id: string, dto: Record<string, any>) =>
		apiPut<any>(
			`/requerimentos/${tipo.toLocaleLowerCase()}/${encodeURIComponent(id)}`,
			dto,
		),
	enviar: (id: string) =>
		apiPost<any>(
			`/requerimentos/${tipo.toLocaleLowerCase()}/${encodeURIComponent(id)}/enviar`,
			{},
		),
	delete: (id: string) =>
		apiDelete<any>(
			`/requerimentos/${tipo.toLocaleLowerCase()}/${encodeURIComponent(id)}`,
		),
	changeStatus: (id: string, status: string) =>
		apiPut<any>(
			`/requerimentos/${tipo.toLocaleLowerCase()}/${encodeURIComponent(id)}/status`,
			{
				status,
			},
		),
	addItem: (id: string, dto: Record<string, any>) =>
		apiPost<any>(
			`/requerimentos/${tipo.toLocaleLowerCase()}/${encodeURIComponent(id)}/itens`,
			dto,
		),
	updateItem: (id: string, itemId: string, dto: Record<string, any>) =>
		apiPut<any>(
			`/requerimentos/${tipo.toLocaleLowerCase()}/${encodeURIComponent(id)}/itens/${encodeURIComponent(itemId)}`,
			dto,
		),
	removeItem: (id: string, itemId: string) =>
		apiDelete<void>(
			`/requerimentos/${tipo.toLocaleLowerCase()}/${encodeURIComponent(id)}/itens/${encodeURIComponent(itemId)}`,
		),
});

export const almoxarifadoReqService = buildService("Almoxarifado");
export const farmaciaReqService = buildService("Farmacia");
export const cmeReqService = buildService("CME");

export const requerimentoServices = {
	Almoxarifado: almoxarifadoReqService,
	Farmacia: farmaciaReqService,
	CME: cmeReqService,
} as const;
