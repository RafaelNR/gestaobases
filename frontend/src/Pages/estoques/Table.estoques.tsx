import { Fragment, useState } from "react";
import {
	Alert,
	Box,
	Button,
	CircularProgress,
	Collapse,
	IconButton,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import useDialog from "@/Hooks/useDialog";
import { usePermissions } from "@/Hooks/usePermissions";
import { useEstoques, useEstoquesLotes } from "@/Hooks/useEstoques";
import { ESTOQUES_PERMISSIONS } from "@/Guard/PermissionGroups";
import ChipStatusValidade from "@/Components/Chip/ChipStatusValidade";
import EstoqueSummary from "./components/EstoqueSummary";
import EstoqueFilters, {
	type EstoqueFiltersValue,
} from "./components/EstoqueFilters";
import LoteCard from "./components/LoteCard";

const initialFilters: EstoqueFiltersValue = {
	search: "",
	tipo: "",
	status: "",
	baseId: "",
};
export default function EstoquesTable() {
	const { can } = usePermissions();
	const { handleClickOpenDialog } = useDialog();
	const [page, setPage] = useState(0);
	const [filters, setFilters] = useState(initialFilters);
	const [expanded, setExpanded] = useState<string | null>(null);

	// Estoque
	const query = useEstoques({
		page: page + 1,
		limit: 20,
		baseId: filters.baseId || undefined,
		search: filters.search || undefined,
		tipo: filters.tipo || undefined,
		status: filters.status || undefined,
	});
	const lotesQuery = useEstoquesLotes(expanded ?? undefined);

	const items = query.data?.items ?? [];
	return (
		<Box>
			<EstoqueSummary items={items} />
			<Stack
				direction={{ xs: "column", xl: "row" }}
				gap={2}
				justifyContent="space-between"
				mb={2}
			>
				<EstoqueFilters
					value={filters}
					onChange={(value) => {
						setFilters(value);
						setPage(0);
						setExpanded(null);
					}}
				/>
				{can(ESTOQUES_PERMISSIONS.NEW) && (
					<Button
						variant="contained"
						startIcon={<AddIcon />}
						onClick={() => handleClickOpenDialog({ m: "create" })}
					>
						Adicionar item
					</Button>
				)}
			</Stack>
			<Paper variant="outlined">
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow sx={{ bgcolor: "action.hover" }}>
								<TableCell width={48} />
								<TableCell>Item</TableCell>
								<TableCell>Tipo</TableCell>
								<TableCell align="center">Saldo</TableCell>
								<TableCell>Próxima Vencimento</TableCell>
								<TableCell align="center">Base</TableCell>
								<TableCell align="right">Ações</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{query.isLoading ? (
								<TableRow>
									<TableCell colSpan={6} align="center" sx={{ py: 6 }}>
										<CircularProgress />
									</TableCell>
								</TableRow>
							) : items.length === 0 ? (
								<TableRow>
									<TableCell colSpan={6}>
										<Stack alignItems="center" py={6}>
											<Inventory2Icon color="disabled" sx={{ fontSize: 44 }} />
											<Typography color="text.secondary">
												Nenhum estoque encontrado.
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							) : (
								items.map((item) => {
									const target = item.Produto ?? item.Medicamento;
									const next = item.proximaValidade;
									return (
										<Fragment key={item.id}>
											<TableRow hover>
												<TableCell>
													<IconButton
														size="small"
														onClick={() =>
															setExpanded(expanded === item.id ? null : item.id)
														}
														sx={{
															transform:
																expanded === item.id
																	? "rotate(180deg)"
																	: "none",
														}}
													>
														<ExpandMoreIcon />
													</IconButton>
												</TableCell>
												<TableCell>
													<Typography fontWeight={700}>
														{target?.nome}
													</Typography>
													<Typography variant="caption" color="text.secondary">
														Código {target?.codigo}
													</Typography>
												</TableCell>
												<TableCell>
													{item.Produto ? "Produto" : "Medicamento"}
												</TableCell>
												<TableCell align="center">
													<Typography
														fontWeight={800}
														color={
															item.quantidadeTotal < 0
																? "error"
																: "text.secondary"
														}
													>
														{item.quantidadeTotal}
													</Typography>
												</TableCell>
												<TableCell>
													{next ? (
														<Stack gap={0.5} alignItems="flex-start">
															<Typography variant="body2">
																{new Date(next).toLocaleDateString("pt-BR", {
																	timeZone: "UTC",
																})}
															</Typography>
															{item.proximaValidadeStatus && (
																<ChipStatusValidade
																	sx={{ width: 150 }}
																	status={item.proximaValidadeStatus}
																/>
															)}
														</Stack>
													) : (
														"Sem vencimento"
													)}
												</TableCell>
												<TableCell align="center">
													<Typography fontWeight={800}>
														{item.Base.nome}
													</Typography>
												</TableCell>
												<TableCell align="right">
													{can(ESTOQUES_PERMISSIONS.ADD_LOTE) && (
														<Button
															size="small"
															variant="outlined"
															onClick={() => {
																handleClickOpenDialog({
																	m: "lote",
																	s: { item },
																});
																setExpanded(item.id);
															}}
														>
															Novo lote
														</Button>
													)}
												</TableCell>
											</TableRow>
											<TableRow>
												<TableCell colSpan={7} sx={{ p: 0, border: 0 }}>
													<Collapse in={expanded === item.id} unmountOnExit>
														<Box sx={{ p: 2, bgcolor: "background.default" }}>
															<Stack gap={1}>
																{lotesQuery.isLoading ? (
																	<CircularProgress size={24} />
																) : lotesQuery.isError ? (
																	<Alert severity="error">
																		Não foi possível carregar os lotes.
																	</Alert>
																) : lotesQuery.data?.length ? (
																	lotesQuery.data.map((lote) => (
																		<LoteCard
																			key={lote.id}
																			item={item}
																			lote={lote}
																		/>
																	))
																) : (
																	<Typography color="text.secondary">
																		Nenhum lote ativo.
																	</Typography>
																)}
															</Stack>
														</Box>
													</Collapse>
												</TableCell>
											</TableRow>
										</Fragment>
									);
								})
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					component="div"
					count={query.data?.total ?? 0}
					page={page}
					onPageChange={(_, value) => {
						setPage(value);
						setExpanded(null);
					}}
					rowsPerPage={20}
					rowsPerPageOptions={[20]}
				/>
			</Paper>
			{query.isError && (
				<Alert severity="error" sx={{ mt: 2 }}>
					Não foi possível carregar o estoque.
				</Alert>
			)}
		</Box>
	);
}
