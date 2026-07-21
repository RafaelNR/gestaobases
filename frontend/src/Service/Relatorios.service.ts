import { apiGet } from "@/Lib/HttpClient";
import type {
	RelatorioGeralRequerimentosFiltro,
	RelatorioGeralRequerimentosRow,
	RelatorioEstoqueFiltro,
	RelatorioEstoqueResultado,
} from "@/Types/Relatorios";

function cleanFiltro(filtro: object): Record<string, unknown> {
	return Object.fromEntries(
		Object.entries(filtro).filter(
			([, value]) => value !== undefined && value !== "",
		),
	);
}

export const relatoriosService = {
	getRelatorioGeralRequerimentos: (
		filtro: RelatorioGeralRequerimentosFiltro,
	) =>
		apiGet<RelatorioGeralRequerimentosRow[]>(
			"/relatorios/requerimentos",
			cleanFiltro(filtro),
		),
	getRelatorioEstoque: (filtro: RelatorioEstoqueFiltro) =>
		apiGet<RelatorioEstoqueResultado>(
			"/relatorios/estoque/movimentacoes",
			cleanFiltro(filtro),
		),
};
