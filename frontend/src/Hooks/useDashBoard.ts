import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/Service/Dashboard.service";
import type {
	CountRequerimentos,
	TipoRequerimento,
} from "@/Types/Requerimento";
import type { PeriodoVencimentoDashboard } from "@/Types/DashboardEstoque";

export const dashboardKeys = {
	count: (tipo?: TipoRequerimento) =>
		["dashboard", "count", tipo ?? "todos"] as const,
	proximasVisitas: (dias: number) =>
		["dashboard", "proximas-visitas", dias] as const,
	lotesProximosVencimento: (dias: PeriodoVencimentoDashboard) =>
		["dashboard", "estoque", "lotes-proximos-vencimento", dias] as const,
	ultimasMovimentacoes: () =>
		["dashboard", "estoque", "ultimas-movimentacoes"] as const,
};

export function useCountRequerimentos(tipo?: TipoRequerimento) {
	return useQuery<CountRequerimentos[]>({
		queryKey: dashboardKeys.count(tipo),
		queryFn: () => dashboardService.countRequerimentos(tipo),
		refetchInterval: 60000 * 10, // 10 minuto
	});
}

export function useProximasVisitas(dias = 3) {
	return useQuery({
		queryKey: dashboardKeys.proximasVisitas(dias),
		queryFn: () => dashboardService.proximasVisitas(dias),
		refetchInterval: 60000 * 10, // 10 minuto
	});
}

export function useLotesProximosVencimento(
	dias: PeriodoVencimentoDashboard = 15,
) {
	return useQuery({
		queryKey: dashboardKeys.lotesProximosVencimento(dias),
		queryFn: () => dashboardService.lotesProximosVencimento(dias),
		refetchInterval: 60000 * 10, // 10 minuto
	});
}

export function useUltimasMovimentacoes() {
	return useQuery({
		queryKey: dashboardKeys.ultimasMovimentacoes(),
		queryFn: () => dashboardService.ultimasMovimentacoes(),
		refetchInterval: 60000 * 10, // 10 minuto
	});
}
