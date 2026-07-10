import { apiGet } from "@/Lib/HttpClient";
import type { CountRequerimentos, TipoRequerimento } from "@/Types/Requerimento";

export const dashboardService = {
	async countRequerimentos(
		tipo?: TipoRequerimento,
	): Promise<CountRequerimentos[]> {
		return apiGet<CountRequerimentos[]>(
			`/dashboard/requerimentos/count${tipo ? `/` + encodeURIComponent(tipo) : ""}`,
		);
	},
};
