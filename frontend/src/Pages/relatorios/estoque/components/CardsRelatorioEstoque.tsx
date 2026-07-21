import { Card, CardContent, Grid, Typography } from "@mui/material";
import type { RelatorioEstoqueCards } from "@/Types/Relatorios";

const cards = [
	["Entradas", "entradas"], ["Saídas", "saidas"], ["Perdas", "perdas"],
	["Vencimentos", "vencimentos"], ["Saldo vencido", "saldoVencido"], ["Próximos do vencimento", "lotesProximosVencimento"],
] as const;

export default function CardsRelatorioEstoque({ values }: { values: RelatorioEstoqueCards }) {
	return <Grid container spacing={1.5}>{cards.map(([label, key]) => <Grid key={key} size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
		<Card variant="outlined"><CardContent><Typography variant="caption" color="text.secondary">{label}</Typography><Typography variant="h5" fontWeight={700}>{values[key]}</Typography></CardContent></Card>
	</Grid>)}</Grid>;
}
