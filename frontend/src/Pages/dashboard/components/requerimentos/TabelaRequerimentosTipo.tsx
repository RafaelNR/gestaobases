import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Chip,
	CircularProgress,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { useGetRequerimentos } from "@/Hooks/useRequerimentos";
import type {
	TipoRequerimento,
	RequerimentoStatus,
} from "@/Types/Requerimento";
import ChipStatusRequerimento from "@/Components/Chip/ChipStatusRequerimento";
import { DateFormat } from "@/Utils/dates";

const OPEN_STATUSES: RequerimentoStatus[] = [
	"Recebido",
	"Analise",
	"Separacao",
];

interface Props {
	tipo: TipoRequerimento;
	titulo: string;
}

export default function TabelaRequerimentosTipo({ tipo, titulo }: Props) {
	const navigate = useNavigate();
	const { data: all = [], isLoading } = useGetRequerimentos(tipo);

	const abertos = all.filter((r) => OPEN_STATUSES.includes(r.status));

	function navigateToRequerimentoView(requerimentoId: string) {
		navigate(`/requerimentos/${tipo.toLowerCase()}/view/${requerimentoId}`);
	}

	return (
		<Card
			elevation={0}
			sx={{
				border: "1px solid",
				borderColor: "divider",
				borderRadius: 2,
				height: "100%",
				overflow: "hidden",
				bgcolor: "background.paper",
			}}
		>
			<CardHeader
				title={
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						spacing={1.5}
					>
						<Box minWidth={0}>
							<Typography variant="subtitle1" fontWeight={800} noWrap>
								{titulo}
							</Typography>
						</Box>
						<Chip
							size="small"
							label={isLoading ? "..." : `${abertos.length} abertos`}
							color={abertos.length > 0 ? "warning" : "default"}
							variant={abertos.length > 0 ? "filled" : "outlined"}
							sx={{
								fontWeight: 700,
								flexShrink: 0,
								borderRadius: 1.5,
							}}
						/>
					</Stack>
				}
				sx={{
					p: 2,
					pb: 1.5,
					borderBottom: "1px solid",
					borderColor: "divider",
				}}
			/>
			<CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
				{isLoading ? (
					<Box display="flex" justifyContent="center" py={4}>
						<CircularProgress size={24} />
					</Box>
				) : abertos.length === 0 ? (
					<Box textAlign="center" py={4} px={2}>
						<Typography variant="body2" fontWeight={700}>
							Nenhum requerimento em aberto
						</Typography>
						<Typography variant="caption" color="text.secondary">
							Quando houver pendências, elas aparecerão nesta lista.
						</Typography>
					</Box>
				) : (
					<TableContainer sx={{ maxHeight: 360 }}>
						<Table size="small" stickyHeader>
							<TableHead>
								<TableRow>
									<TableCell sx={{ fontWeight: 800, py: 1.2, width: 86 }}>
										Número
									</TableCell>
									<TableCell sx={{ fontWeight: 800, py: 1.2 }}>
										Origem
									</TableCell>
									<TableCell sx={{ fontWeight: 800, py: 1.2 }}>
										Solicitante
									</TableCell>
									<TableCell sx={{ fontWeight: 800, py: 1.2 }}>
										Enviado em
									</TableCell>
									<TableCell align="center" sx={{ fontWeight: 800, py: 1.2 }}>
										Status
									</TableCell>
									<TableCell sx={{ width: 36 }} />
								</TableRow>
							</TableHead>
							<TableBody>
								{abertos.map((r) => (
									<TableRow
										key={r.id}
										hover
										tabIndex={0}
										role="button"
										aria-label={`Abrir requerimento ${r.numero}`}
										onClick={() => navigateToRequerimentoView(r.id)}
										onKeyDown={(event) => {
											if (event.key === "Enter" || event.key === " ") {
												event.preventDefault();
												navigateToRequerimentoView(r.id);
											}
										}}
										sx={{
											cursor: "pointer",
											transition:
												"background-color 120ms ease, box-shadow 120ms ease",
											"&:hover": {
												bgcolor: "action.hover",
												boxShadow: (theme) =>
													`inset 3px 0 0 ${theme.palette.primary.main}`,
											},
											"&:focus-visible": {
												outline: "2px solid",
												outlineColor: "primary.main",
												outlineOffset: -2,
											},
										}}
									>
										<TableCell sx={{ py: 1 }}>
											<Typography variant="body2" fontWeight={800}>
												#{r.numero}
											</Typography>
										</TableCell>
										<TableCell sx={{ py: 1 }}>
											{r.tipo === "Farmacia" ? (
												<>
													<Typography variant="body2" fontWeight={700} noWrap>
														{r.base}
													</Typography>
													<Typography
														variant="caption"
														color="text.secondary"
														noWrap
													>
														{r.Ambulancia?.tipo} - {r.Ambulancia?.nome}
													</Typography>
												</>
											) : (
												<>
													<Typography variant="body2" fontWeight={700} noWrap>
														{r.base}
													</Typography>
													<Typography
														variant="caption"
														color="text.secondary"
														noWrap
													>
														{r.setor}
													</Typography>
												</>
											)}
										</TableCell>
										<TableCell sx={{ py: 1 }}>
											<Typography variant="body2" noWrap sx={{ maxWidth: 150 }}>
												{r.User.nome}
											</Typography>
										</TableCell>
										<TableCell sx={{ py: 1 }}>
											<Typography variant="body2" noWrap>
												{DateFormat(r.data_inicio, "DD/MM/YYYY")}
											</Typography>
										</TableCell>
										<TableCell align="center" sx={{ py: 1 }}>
											<ChipStatusRequerimento status={r.status} />
										</TableCell>
										<TableCell align="right" sx={{ py: 1, pr: 1.5 }}>
											<ArrowForwardIosIcon
												sx={{
													fontSize: 14,
													color: "text.disabled",
												}}
											/>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				)}
			</CardContent>
		</Card>
	);
}
