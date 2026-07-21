import { useQuery } from "@tanstack/react-query";
import { relatoriosService } from "@/Service/Relatorios.service";
import type {
	RelatorioGeralRequerimentosFiltro,
	RelatorioGeralRequerimentosRow,
	RelatorioEstoqueFiltro,
	RelatorioEstoqueResultado,
} from "@/Types/Relatorios";

export const relatoriosKeys = {
	geralRequerimentos: (filtro: RelatorioGeralRequerimentosFiltro) =>
		["relatorios", "requerimentos", filtro] as const,
	estoque: (filtro: RelatorioEstoqueFiltro) =>
		["relatorios", "estoque", filtro] as const,
};

export function useRelatorioGeralRequerimentos(
	filtro: RelatorioGeralRequerimentosFiltro,
) {
	return useQuery<RelatorioGeralRequerimentosRow[]>({
		queryKey: relatoriosKeys.geralRequerimentos(filtro),
		queryFn: () => relatoriosService.getRelatorioGeralRequerimentos(filtro),
	});
}

export function useRelatorioEstoque(filtro: RelatorioEstoqueFiltro) {
	return useQuery<RelatorioEstoqueResultado>({
		queryKey: relatoriosKeys.estoque(filtro),
		queryFn: () => relatoriosService.getRelatorioEstoque(filtro),
		enabled: Boolean(filtro.baseId),
	});
}
