import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/Service/Dashboard.service";
import type {
	CountRequerimentos,
	TipoRequerimento,
} from "@/Types/Requerimento";

export const dashboardKeys = {
	count: (tipo?: TipoRequerimento) =>
		["dashboard", "count", tipo ?? "todos"] as const,
};

export function useCountRequerimentos(tipo?: TipoRequerimento) {
	return useQuery<CountRequerimentos[]>({
		queryKey: dashboardKeys.count(tipo),
		queryFn: () => dashboardService.countRequerimentos(tipo),
	});
}
