import HistoryIcon from "@mui/icons-material/History";
import {
	Alert,
	Box,
	Card,
	CardContent,
	CardHeader,
	Chip,
	CircularProgress,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import { useUltimasMovimentacoes } from "@/Hooks/useDashBoard";
import { DateFormat } from "@/Utils/dates";

const TIPO_LABEL: Record<string, string> = {
	Entrada: "Entrada",
	Saida: "Saída",
	AjusteEntrada: "Ajuste de entrada",
	AjusteSaida: "Ajuste de saída",
	Perda: "Perda",
	Vencimento: "Vencimento",
	TransferenciaEntrada: "Transferência de entrada",
	TransferenciaSaida: "Transferência de saída",
	Devolucao: "Devolução",
	Desabilitado: "Desabilitado",
};

const TIPO_COLOR: Record<
	string,
	"success" | "error" | "warning" | "info" | "default"
> = {
	Entrada: "success",
	AjusteEntrada: "success",
	TransferenciaEntrada: "success",
	Saida: "error",
	AjusteSaida: "error",
	Perda: "warning",
	Vencimento: "warning",
	TransferenciaSaida: "error",
	Devolucao: "info",
	Desabilitado: "default",
};

export default function UltimasMovimentacoesCard() {
	const { data = [], isLoading, isError } = useUltimasMovimentacoes();

	return (
		<Card
			elevation={0}
			sx={{
				border: "1px solid",
				borderColor: "divider",
				borderRadius: 3,
				height: "100%",
			}}
		>
			<CardHeader
				avatar={<HistoryIcon color="primary" />}
				title="Últimas movimentações"
				subheader="10 registros mais recentes"
			/>
			<Divider />
			<CardContent>
				{isLoading && (
					<Box display="flex" justifyContent="center" py={2}>
						<CircularProgress size={26} />
					</Box>
				)}
				{isError && (
					<Alert severity="error">
						Não foi possível carregar as últimas movimentações.
					</Alert>
				)}
				{!isLoading && !isError && data.length === 0 && (
					<Alert severity="info">Nenhuma movimentação registrada.</Alert>
				)}
				{!isLoading && !isError && data.length > 0 && (
					<Stack divider={<Divider flexItem />} spacing={1.25}>
						{data.map((movimentacao) => (
							<Stack
								key={movimentacao.id}
								direction="row"
								justifyContent="space-between"
								spacing={2}
							>
								<Box minWidth={0}>
									<Typography variant="body2" fontWeight={700} noWrap>
										{movimentacao.item}
									</Typography>
									<Typography
										variant="caption"
										color="text.secondary"
										noWrap
										display="block"
									>
										{movimentacao.base} · {movimentacao.usuario} ·{" "}
										{DateFormat(movimentacao.created_at)}
									</Typography>
								</Box>
								<Chip
									label={`${TIPO_LABEL[movimentacao.tipo] ?? movimentacao.tipo} · ${movimentacao.quantidade} Item(s)`}
									color={TIPO_COLOR[movimentacao.tipo] ?? "default"}
									size="small"
								/>
							</Stack>
						))}
					</Stack>
				)}
			</CardContent>
		</Card>
	);
}
