import { useState } from "react";
import {
	Box,
	CircularProgress,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

import {
	useGetRequerimentosByFiltro,
	useGetRequerimentos,
} from "@/Hooks/useRequerimentos";
import type {
	FiltroRequerimentos,
	TipoRequerimento,
} from "@/Types/Requerimento";
import { DateFormat } from "@/Utils/dates";
import ActionsButtons from "./components/ActionsButtons";
import { DialogFactory } from "./components/DialogFactory";
import ChipStatusRequerimento from "@/Components/Chip/ChipStatusRequerimento";
import ChipItensCarrinho from "@/Components/Chip/ChipItensCarrinho";
import RequerimentoTableFiltro from "./RequerimentoTableFiltro";

/* ─── Props ──────────────────────────────────────────────── */
type Props = {
	tipo: TipoRequerimento;
};

export default function RequerimentoTable({ tipo }: Props) {
	/* ── Dados ── */
	const [filtro, setFiltro] = useState<FiltroRequerimentos>({});
	const { data: requerimentos = [], isLoading } =
		Object.keys(filtro).length > 0
			? useGetRequerimentosByFiltro(tipo, filtro)
			: useGetRequerimentos(tipo);

	/* ─── Render ─────────────────────────────────────────── */
	return (
		<Box>
			{/* ── Cabeçalho ── */}
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				mb={2}
				flexWrap="wrap"
				gap={2}
			>
				<RequerimentoTableFiltro tipo={tipo} onFilterChange={setFiltro} />
			</Stack>

			{/* ── Tabela ── */}
			{isLoading ? (
				<Box display="flex" justifyContent="center" py={6}>
					<CircularProgress />
				</Box>
			) : (
				<Paper
					elevation={0}
					sx={{ border: "1px solid", borderColor: "divider", borderRadius: 2 }}
				>
					<TableContainer>
						<Table size="medium">
							<TableHead>
								<TableRow sx={{ bgcolor: "action.hover" }}>
									<TableCell sx={{ fontWeight: 700 }}>#</TableCell>
									<TableCell sx={{ fontWeight: 700 }}>Base</TableCell>
									{tipo === "Farmacia" && (
										<TableCell sx={{ fontWeight: 700 }}>Ambulância</TableCell>
									)}
									<TableCell sx={{ fontWeight: 700 }}>Aberto Por</TableCell>
									<TableCell sx={{ fontWeight: 700 }}>Aberto Em</TableCell>
									<TableCell sx={{ fontWeight: 700 }}>Finalizado Em</TableCell>
									<TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
									<TableCell sx={{ fontWeight: 700 }}>Itens</TableCell>
									<TableCell sx={{ fontWeight: 700 }} align="right">
										Ações
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{requerimentos.length === 0 ? (
									<TableRow>
										<TableCell colSpan={8} align="center" sx={{ py: 4 }}>
											<Stack alignItems="center" spacing={1}>
												<AssignmentIcon sx={{ fontSize: 40, opacity: 0.3 }} />
												<Typography color="text.secondary">
													Nenhum requerimento encontrado.
												</Typography>
											</Stack>
										</TableCell>
									</TableRow>
								) : (
									requerimentos.map((req) => (
										<TableRow
											key={req.id}
											hover
											sx={{ "&:last-child td": { border: 0 } }}
										>
											<TableCell>
												<Typography variant="body2" fontWeight={700}>
													#{req.numero}
												</Typography>
											</TableCell>
											<TableCell>{req.base}</TableCell>
											{tipo === "Farmacia" && (
												<TableCell>
													<Typography variant="caption" color="text.secondary">
														{req.Ambulancia?.tipo} - {req.Ambulancia?.nome}
													</Typography>
												</TableCell>
											)}

											<TableCell>
												<Typography variant="caption" color="text.secondary">
													{req.User?.nome}
												</Typography>
											</TableCell>
											<TableCell>
												<Typography variant="caption" color="text.secondary">
													{DateFormat(req.data_inicio)}
												</Typography>
											</TableCell>
											<TableCell>
												<Typography variant="caption" color="text.secondary">
													{req.data_fim ? DateFormat(req.data_fim) : "-"}
												</Typography>
											</TableCell>
											<TableCell>
												<ChipStatusRequerimento
													status={req.status}
													size="small"
												/>
											</TableCell>
											<TableCell>
												<ChipItensCarrinho
													qnt={req._count?.RequerimentoItems}
												/>
											</TableCell>
											<TableCell align="right">
												<ActionsButtons tipo={tipo.toLowerCase()} req={req} />
											</TableCell>
										</TableRow>
									))
								)}
							</TableBody>
						</Table>
					</TableContainer>
					{requerimentos.length > 0 && (
						<Box
							sx={{
								px: 2,
								py: 1.5,
								borderTop: "1px solid",
								borderColor: "divider",
							}}
						>
							<Typography variant="caption" color="text.secondary">
								{requerimentos.length} requerimento
								{requerimentos.length !== 1 ? "s" : ""} encontrado
								{requerimentos.length !== 1 ? "s" : ""}
							</Typography>
						</Box>
					)}
				</Paper>
			)}

			{/* ── Fábrica de diálogos ── */}
			<DialogFactory />
		</Box>
	);
}
