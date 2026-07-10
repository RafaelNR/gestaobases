import { Inventory2, LocalHospital, Numbers } from "@mui/icons-material";
import {
	Box,
	Chip,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	alpha,
	useTheme,
} from "@mui/material";
import {
	type Requerimento,
	type RequerimentoItemEntry,
	type TipoRequerimento,
} from "@/Types/Requerimento";
import ChipItensCarrinho from "@/Components/Chip/ChipItensCarrinho";

function getItemName(item: RequerimentoItemEntry) {
	return item.Medicamento?.nome ?? item.Produto?.nome ?? "Item sem nome";
}

function getItemCode(item: RequerimentoItemEntry) {
	return item.Medicamento?.codigo ?? item.Produto?.codigo ?? "-";
}

function getItemDetail(item: RequerimentoItemEntry) {
	return item.Medicamento?.especificacao ?? item.Produto?.unidade ?? "-";
}

function getItemCategoria(item: RequerimentoItemEntry) {
	const entry = item as RequerimentoItemEntry & {
		Medicamento?: { categoria?: string | null } | null;
		Produto?: { categoria?: string | null } | null;
	};

	return entry.Medicamento?.categoria ?? entry.Produto?.categoria ?? "-";
}

export default function Index({
	requerimento,
	tipo,
}: {
	requerimento: Requerimento;
	tipo: TipoRequerimento;
}) {
	const theme = useTheme();
	const activeItems = requerimento?.RequerimentoItems?.filter(
		(item) => item.ativo,
	);

	return (
		<Paper
			variant="outlined"
			sx={{
				borderRadius: 2,
				overflow: "hidden",
				borderColor: alpha(theme.palette.primary.main, 0.16),
			}}
		>
			<Box
				sx={{
					px: { xs: 2, sm: 2.5 },
					py: 2,
					backgroundColor: alpha(theme.palette.primary.main, 0.045),
					borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
				}}
			>
				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent="space-between"
					alignItems={{ xs: "flex-start", sm: "center" }}
					spacing={1.5}
				>
					<Stack direction="row" alignItems="center" spacing={1.25}>
						<Box>
							<Typography
								variant="overline"
								color="text.secondary"
								fontWeight={700}
							>
								Itens do requerimento
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Relação de materiais solicitados
							</Typography>
						</Box>
					</Stack>
					<ChipItensCarrinho qnt={activeItems?.length} />
				</Stack>
			</Box>

			<TableContainer sx={{ px: { xs: 1.5, sm: 2 }, py: 2 }}>
				<Table size="small">
					<TableHead>
						<TableRow
							sx={{
								"& th": {
									borderBottom: "none",
									backgroundColor: alpha(theme.palette.primary.main, 0.06),
									color: "text.secondary",
									fontSize: 12,
									fontWeight: 800,
									textTransform: "uppercase",
									whiteSpace: "nowrap",
								},
								"& th:first-of-type": {
									borderTopLeftRadius: 8,
									borderBottomLeftRadius: 8,
								},
								"& th:last-of-type": {
									borderTopRightRadius: 8,
									borderBottomRightRadius: 8,
								},
							}}
						>
							<TableCell width={120}>Código</TableCell>
							<TableCell>Item</TableCell>
							<TableCell width={160}>Categoria</TableCell>
							<TableCell width={180}>Detalhe</TableCell>
							<TableCell align="center" width={120}>
								Quantidade
							</TableCell>
							{tipo === "Farmacia" && <TableCell>Ocorrência</TableCell>}
						</TableRow>
					</TableHead>
					<TableBody>
						{activeItems?.map((item) => (
							<TableRow
								key={item.id}
								sx={{
									"& td": {
										borderBottom: `1px solid ${alpha(
											theme.palette.divider,
											0.72,
										)}`,
										py: 1.25,
									},
									"&:last-of-type td": { borderBottom: 0 },
									"&:hover td": {
										backgroundColor: alpha(theme.palette.primary.main, 0.025),
									},
								}}
							>
								<TableCell>{getItemCode(item)}</TableCell>
								<TableCell>
									<Typography variant="body2" fontWeight={700}>
										{getItemName(item)}
									</Typography>
								</TableCell>
								<TableCell>{getItemCategoria(item)}</TableCell>
								<TableCell>{getItemDetail(item)}</TableCell>
								<TableCell align="center">
									<Typography variant="body2" fontWeight={800}>
										{item.quantidade}
									</Typography>
								</TableCell>
								{tipo === "Farmacia" && (
									<TableCell>{item.ocorrencia ?? "-"}</TableCell>
								)}
							</TableRow>
						))}
						{activeItems?.length === 0 && (
							<TableRow>
								<TableCell
									colSpan={tipo === "Farmacia" ? 6 : 5}
									align="center"
									sx={{ py: 5, borderBottom: 0 }}
								>
									<Stack alignItems="center" spacing={1}>
										<Box
											sx={{
												width: 42,
												height: 42,
												borderRadius: 1,
												display: "grid",
												placeItems: "center",
												color: "text.secondary",
												backgroundColor: alpha(
													theme.palette.text.secondary,
													0.08,
												),
											}}
										>
											<Inventory2 fontSize="small" />
										</Box>
										<Typography variant="body2" color="text.secondary">
											Nenhum item ativo.
										</Typography>
									</Stack>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
}
