import { Alert, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import dayjs from "dayjs";
import type { RelatorioEstoqueMovimentacao } from "@/Types/Relatorios";

export default function TabelaMovimentacoesEstoque({ items, isLoading, error }: { items: RelatorioEstoqueMovimentacao[]; isLoading: boolean; error: unknown }) {
	if (isLoading) return <Alert severity="info">Carregando movimentações...</Alert>;
	if (error) return <Alert severity="error">Não foi possível carregar as movimentações.</Alert>;
	if (!items.length) return <Alert severity="info">Nenhuma movimentação encontrada.</Alert>;
	return <TableContainer component={Paper}><Table size="small"><TableHead><TableRow>{["Data", "Tipo", "Item", "Lote", "Validade", "Quantidade", "Saldo anterior", "Saldo posterior", "Usuário", "Observação"].map((label) => <TableCell key={label}>{label}</TableCell>)}</TableRow></TableHead><TableBody>{items.map((item) => <TableRow key={item.id}>
		<TableCell>{dayjs(item.created_at).format("DD/MM/YYYY HH:mm")}</TableCell><TableCell>{item.tipo}</TableCell><TableCell>{item.item.tipo === "produto" ? "Produto" : "Medicamento"} · {item.item.nome} ({item.item.codigo})</TableCell><TableCell>{item.lote ?? "Sem lote"}</TableCell><TableCell>{item.validade ? dayjs(item.validade).format("DD/MM/YYYY") : "Sem validade"}</TableCell><TableCell>{item.quantidade}</TableCell><TableCell>{item.saldoAnterior}</TableCell><TableCell>{item.saldoPosterior}</TableCell><TableCell>{item.usuario}</TableCell><TableCell>{item.observacao ?? "-"}</TableCell>
	</TableRow>)}</TableBody></Table></TableContainer>;
}
