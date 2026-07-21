import { apiGet } from "@/Lib/HttpClient";
import type { CountRequerimentos, TipoRequerimento } from "@/Types/Requerimento";
import type { ProximaVisitaBase } from "@/Types/VisitaBase";
import type {
	DashboardLoteProximoVencimento,
	DashboardUltimaMovimentacao,
	PeriodoVencimentoDashboard,
} from "@/Types/DashboardEstoque";

export const dashboardService = {
	async countRequerimentos(
		tipo?: TipoRequerimento,
	): Promise<CountRequerimentos[]> {
		return apiGet<CountRequerimentos[]>(
			`/dashboard/requerimentos/count${tipo ? `/` + encodeURIComponent(tipo) : ""}`,
		);
	},
	proximasVisitas: (dias = 3) =>
		apiGet<ProximaVisitaBase[]>(`/dashboard/proximas-visitas?dias=${dias}`),
	lotesProximosVencimento: (dias: PeriodoVencimentoDashboard) =>
		apiGet<DashboardLoteProximoVencimento[]>(
			`/dashboard/estoque/lotes-proximos-vencimento?dias=${dias}`,
		),
	ultimasMovimentacoes: () =>
		apiGet<DashboardUltimaMovimentacao[]>(
			"/dashboard/estoque/ultimas-movimentacoes",
		),
};
