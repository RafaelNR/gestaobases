import type { TipoRequerimento } from "@/Types/Requerimento";

export const TIPO_FROM_ROUTE_PARAM: Record<string, TipoRequerimento> = {
	almoxarifado: "Almoxarifado",
	farmacia: "Farmacia",
	cme: "CME",
};

export function getTipoFromRouteParam(tipo?: string) {
	return tipo ? TIPO_FROM_ROUTE_PARAM[tipo.toLowerCase()] : "Almoxarifado";
}
