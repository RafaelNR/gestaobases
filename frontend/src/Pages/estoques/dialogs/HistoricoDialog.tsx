import {
	Alert,
	Box,
	Button,
	Chip,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { useHistoricoEstoque } from "@/Hooks/useEstoques";
import type { EstoqueLote, TipoMovimentacaoEstoque } from "@/Types/Estoque";
import ChipStatusValidade from "@/Components/Chip/ChipStatusValidade";
import useDialog from "@/Contexts/DialogContext";

const ENTRADA_TIPOS = new Set<TipoMovimentacaoEstoque>([
	"Entrada",
	"AjusteEntrada",
	"TransferenciaEntrada",
]);

const TIPO_CONFIG: Record<
	TipoMovimentacaoEstoque,
	{ label: string; color: "default" | "info" | "success" | "warning" | "error" }
> = {
	Entrada: { label: "Entrada", color: "success" },
	Saida: { label: "Saída", color: "error" },
	AjusteEntrada: { label: "Ajuste de entrada", color: "info" },
	AjusteSaida: { label: "Ajuste de saída", color: "warning" },
	Perda: { label: "Perda", color: "error" },
	Vencimento: { label: "Vencimento", color: "error" },
	TransferenciaEntrada: { label: "Transferência recebida", color: "info" },
	TransferenciaSaida: { label: "Transferência enviada", color: "warning" },
	Devolucao: { label: "Devolução", color: "warning" },
	Desabilitado: { label: "Desabilitado", color: "default" },
};

function formatDate(value: string) {
	const date = new Date(value);
	return {
		date: date.toLocaleDateString("pt-BR"),
		time: date.toLocaleTimeString("pt-BR", {
			hour: "2-digit",
			minute: "2-digit",
		}),
	};
}

export default function HistoricoDialog({
	open,
	onClose,
	lote,
}: {
	open: boolean;
	onClose: () => void;
	lote: EstoqueLote | null;
}) {
	const historico = useHistoricoEstoque(lote?.id);
	const { selected } = useDialog();

	return (
		<Dialog
			open={open}
			onClose={onClose}
			fullWidth
			maxWidth="lg"
			PaperProps={{ sx: { borderRadius: 3 } }}
		>
			<DialogTitle sx={{ p: 3, pb: 2 }}>
				<Stack gap={2}>
					<Box>
						<Typography variant="h6" fontWeight={800}>
							Histórico de movimentações
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Item:{" "}
							{selected?.item?.Medicamento?.nome ||
								selected?.item?.Produto?.nome}
							{" - "}
							Codigo:{" "}
							{selected?.item?.Medicamento?.codigo ||
								selected?.item?.Produto?.codigo}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Lote: {lote?.lote || "Sem lote"}
							{" - "}
							Validade:{" "}
							{lote?.validade
								? new Date(lote.validade).toLocaleDateString("pt-BR", {
										timeZone: "UTC",
									})
								: "não informada"}
						</Typography>
					</Box>

					{lote && (
						<Stack
							direction={{ xs: "column", sm: "row" }}
							gap={1}
							alignItems={{ sm: "center" }}
							flexWrap="wrap"
						>
							<Chip
								label={`Saldo atual: ${lote.quantidade} unidade(s)`}
								color={lote.quantidade > 0 ? "primary" : "default"}
								variant="outlined"
								size="small"
							/>
							<ChipStatusValidade status={lote.status} sx={{ width: 150 }} />
						</Stack>
					)}
				</Stack>
			</DialogTitle>
			<Divider />
			<DialogContent dividers sx={{ p: 0 }}>
				{historico.isLoading ? (
					<Stack
						alignItems="center"
						justifyContent="center"
						minHeight={280}
						gap={2}
					>
						<CircularProgress size={32} />
						<Typography variant="body2" color="text.secondary">
							Carregando movimentações...
						</Typography>
					</Stack>
				) : historico.isError ? (
					<Alert severity="error" sx={{ m: 3 }}>
						Não foi possível carregar o histórico deste lote.
					</Alert>
				) : historico.data?.length ? (
					<TableContainer sx={{ maxHeight: 460 }}>
						<Table
							stickyHeader
							size="small"
							aria-label="Histórico de movimentações"
						>
							<TableHead>
								<TableRow>
									<TableCell sx={{ minWidth: 130 }}>Data</TableCell>
									<TableCell align="left">Usuário</TableCell>
									<TableCell sx={{ minWidth: 180 }}>Movimentação</TableCell>
									<TableCell align="right">Quantidade</TableCell>
									<TableCell sx={{ minWidth: 150 }}>Saldo</TableCell>
									<TableCell>Observação</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{historico.data.map((row) => {
									const config = TIPO_CONFIG[row.tipo];
									const date = formatDate(row.created_at);
									const entrada = ENTRADA_TIPOS.has(row.tipo);

									return (
										<TableRow key={row.id} hover>
											<TableCell>
												<Typography variant="body2" fontWeight={700}>
													{date.date}
												</Typography>
												<Typography variant="caption" color="text.secondary">
													{date.time}
												</Typography>
											</TableCell>
											<TableCell align="left">{row.User.nome}</TableCell>
											<TableCell>
												<Chip
													label={config?.label ?? row.tipo}
													color={config?.color ?? "default"}
													size="small"
													variant="outlined"
												/>
											</TableCell>
											<TableCell align="right">
												<Typography
													fontWeight={800}
													color={entrada ? "success.main" : "error.main"}
												>
													{entrada ? "+" : "−"}
													{row.quantidade}
												</Typography>
											</TableCell>
											<TableCell>
												<Stack direction="row" gap={1} alignItems="center">
													<Typography variant="body2">
														{row.saldoAnterior}
													</Typography>
													<Typography color="text.disabled">→</Typography>
													<Typography variant="body2" fontWeight={800}>
														{row.saldoPosterior}
													</Typography>
												</Stack>
											</TableCell>
											<TableCell>
												<Typography
													variant="body2"
													color={
														row.observacao ? "text.primary" : "text.secondary"
													}
													sx={{ whiteSpace: "pre-wrap" }}
												>
													{row.observacao || "Sem observação"}
												</Typography>
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
				) : (
					<Stack
						alignItems="center"
						justifyContent="center"
						minHeight={280}
						gap={1}
					>
						<Typography variant="h6" fontWeight={700}>
							Nenhuma movimentação registrada
						</Typography>
						<Typography variant="body2" color="text.secondary">
							As alterações deste lote aparecerão aqui.
						</Typography>
					</Stack>
				)}
			</DialogContent>
			<DialogActions sx={{ px: 3, py: 2 }}>
				<Button onClick={onClose} variant="outlined">
					Fechar
				</Button>
			</DialogActions>
		</Dialog>
	);
}
