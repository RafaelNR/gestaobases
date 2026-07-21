import { Alert, Pagination, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useRelatorioEstoque } from "@/Hooks/useRelatorios";
import type { RelatorioEstoqueFiltro } from "@/Types/Relatorios";
import FiltroRelatorioEstoque from "./components/FiltroRelatorioEstoque";
import CardsRelatorioEstoque from "./components/CardsRelatorioEstoque";
import TabelaMovimentacoesEstoque from "./components/TabelaMovimentacoesEstoque";

export default function RelatorioEstoquePage() {
	const [filtro, setFiltro] = useState<RelatorioEstoqueFiltro>({});
	const query = useRelatorioEstoque(filtro);
	const resultado = query.data;
	const changePage = (_event: unknown, page: number) => setFiltro((current) => ({ ...current, page }));

	return <Stack spacing={2}>
		<Typography variant="h6">Controle de movimentações de estoque</Typography>
		<FiltroRelatorioEstoque value={filtro} onChange={setFiltro} />
		{!filtro.baseId ? <Alert severity="info">Selecione uma base para consultar as movimentações.</Alert> : <>
			{resultado && <CardsRelatorioEstoque values={resultado.cards} />}
			<TabelaMovimentacoesEstoque items={resultado?.items ?? []} isLoading={query.isLoading} error={query.error} />
			{resultado && resultado.pages > 1 && <Pagination page={resultado.page} count={resultado.pages} onChange={changePage} />}
		</>}
	</Stack>;
}
