import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import FiltroRelatorioRequerimentos from "./components/FiltroRelatorioRequerimentos";
import TabelaRelatorioRequerimentos from "./components/TabelaRelatorioRequerimentos";
import { useRelatorioGeralRequerimentos } from "@/Hooks/useRelatorios";
import type { RelatorioGeralRequerimentosFiltro } from "@/Types/Relatorios";

export default function RelatorioGeralRequerimentosPage() {
	const [filtro, setFiltro] = useState<RelatorioGeralRequerimentosFiltro>({});
	const { data = [], isLoading, error } = useRelatorioGeralRequerimentos(filtro);

	return <Stack spacing={2}>
		<Typography variant="h6">Relatório geral de requerimentos</Typography>
		<FiltroRelatorioRequerimentos onChange={setFiltro} />
		<TabelaRelatorioRequerimentos rows={data} isLoading={isLoading} error={error} />
	</Stack>;
}
