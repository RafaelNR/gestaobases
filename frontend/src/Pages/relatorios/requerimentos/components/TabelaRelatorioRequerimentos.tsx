import { Alert, Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from "@mui/material";
import { TableSkeleton } from "@/Components/Skeletons/TableSkeleton";
import type { RelatorioGeralRequerimentosRow } from "@/Types/Relatorios";

export default function TabelaRelatorioRequerimentos({
	rows,
	isLoading,
	error,
}: {
	rows: RelatorioGeralRequerimentosRow[];
	isLoading: boolean;
	error: unknown;
}) {
	if (isLoading) return <Paper sx={{ p: 2 }}><TableSkeleton /></Paper>;
	if (error) return <Alert severity="error">Não foi possível carregar o relatório.</Alert>;
	if (!rows.length) return <Alert severity="info">Nenhum resultado encontrado.</Alert>;

	return <TableContainer component={Paper}><Table size="small"><TableHead><TableRow>
		<TableCell>Base</TableCell><TableCell>Ambulância</TableCell>
		<TableCell align="right">Req. medicamentos</TableCell><TableCell align="right">Qtd. medicamentos</TableCell>
		<TableCell align="right">Req. produtos</TableCell><TableCell align="right">Qtd. produtos</TableCell>
	</TableRow></TableHead><TableBody>{rows.map((row) => <TableRow key={`${row.base}-${row.ambulancia?.id ?? "sem"}`}>
		<TableCell>{row.base}</TableCell><TableCell>{row.ambulancia ? `${row.ambulancia.tipo} - ${row.ambulancia.nome}` : "Sem ambulância"}</TableCell>
		<TableCell align="right">{row.requerimentosMedicamentos}</TableCell><TableCell align="right">{row.quantidadeMedicamentos}</TableCell>
		<TableCell align="right">{row.requerimentosProdutos}</TableCell><TableCell align="right">{row.quantidadeProdutos}</TableCell>
	</TableRow>)}</TableBody></Table></TableContainer>;
}
