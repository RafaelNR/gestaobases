import React, { useState } from "react";
import { Add, Delete, Edit, Visibility } from "@mui/icons-material";
import {
	Autocomplete,
	Box,
	Button,
	Chip,
	CircularProgress,
	Divider,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SearchIcon from "@mui/icons-material/Search";
import { LoadingButton } from "@mui/lab";

import {
	useAddMedicamento,
	useChangeStatusReceituario,
	useDeleteReceituario,
	useGetReceituarios,
	useRemoveMedicamento,
} from "@/Hooks/useReceituarios";
import { useGetMedicamentos } from "@/Hooks/useMedicamentos";
import type {
	Receituario,
	ReceituarioMedicamento,
	StatusReceituario,
	TipoAdministracao,
	TipoDiluente,
	UnidadeMedicamento,
} from "@/Types/Receituario";
import {
	ADMINISTRACAO_LABELS,
	ALL_STATUS,
	DILUENTE_LABELS,
	STATUS_COLORS,
	UNIDADE_LABELS,
} from "@/Types/Receituario";
import type { Medicamento } from "@/Types/Medicamento";
import AppDialog from "@/Components/Dialog/AppDialog";
import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import { ReceituarioPDFButton } from "./PDF.receituario";
import NewReceituario from "./new";
import EditReceituario from "./edit";
import useDialog, { DialogProvider } from "@/Contexts/DialogContext";
import { DateFormat } from "@/Utils/dates";
import ButtonActionTable from "./components/ButtonsActionTable";

const emptyMedForm = {
	medicamento: null as Medicamento | null,
	qnt: 1,
	unidade: "ampolas" as UnidadeMedicamento,
	administracao: "EV" as TipoAdministracao,
	diluente: "" as TipoDiluente | "",
	qnt_diluente: "",
	qnt_tempo: "",
	obs: "",
};

/* ─── Componente interno ─────────────────────────────────── */
export default function ReceituariosPage() {
	const { data: receituarios = [], isLoading } = useGetReceituarios();
	const { data: medicamentos = [] } = useGetMedicamentos();
	const { handleClickOpenDialog } = useDialog();

	const deleteMut = useDeleteReceituario();
	const changeStatusMut = useChangeStatusReceituario();
	const addMedMut = useAddMedicamento();
	const removeMedMut = useRemoveMedicamento();

	/* ── Estado do formulário de medicamento (no detalhe) ── */
	const [medForm, setMedForm] = useState({ ...emptyMedForm });
	const [newStatus, setNewStatus] = useState<StatusReceituario>("Aberto");

	/* ── Filtros ── */
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState<"all" | StatusReceituario>(
		"all",
	);

	// const handleCloseDeleteMed = () => {
	// 	setModal("view");
	// 	setSelectedMed(null);
	// };

	const filtered = React.useMemo(() => {
		return receituarios.filter((r) => {
			const q = search.toLowerCase();
			const matchSearch =
				!q ||
				String(r.numero).includes(q) ||
				r.medico?.toLowerCase().includes(q) ||
				String(r.ocorrencia).includes(q);
			const matchStatus = statusFilter === "all" || r.status === statusFilter;
			return matchSearch && matchStatus;
		});
	}, [receituarios, search, statusFilter]);

	// async function handleAddMed() {
	// 	if (!selected || !medForm.medicamento) return;
	// 	await addMedMut.mutateAsync({
	// 		id: selected.id,
	// 		medicamento: medForm.medicamento.id,
	// 		qnt: medForm.qnt,
	// 		unidade: medForm.unidade,
	// 		administracao: medForm.administracao,
	// 		diluente: medForm.diluente || undefined,
	// 		qnt_diluente: medForm.qnt_diluente
	// 			? Number(medForm.qnt_diluente)
	// 			: undefined,
	// 		qnt_tempo: medForm.qnt_tempo ? Number(medForm.qnt_tempo) : undefined,
	// 		obs: medForm.obs || undefined,
	// 	});
	// 	setMedForm({ ...emptyMedForm });
	// }

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
				<Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
					<TextField
						size="small"
						placeholder="Buscar nº, médico, ocorrência..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon fontSize="small" />
								</InputAdornment>
							),
						}}
						sx={{ minWidth: 240 }}
					/>
					<FormControl size="small" sx={{ minWidth: 140 }}>
						<InputLabel>Status</InputLabel>
						<Select
							value={statusFilter}
							label="Status"
							onChange={(e) =>
								setStatusFilter(e.target.value as "all" | StatusReceituario)
							}
						>
							<MenuItem value="all">Todos</MenuItem>
							{ALL_STATUS.map((s) => (
								<MenuItem key={s} value={s}>
									{s}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Stack>
				<Button
					variant="contained"
					startIcon={<Add />}
					onClick={() => handleClickOpenDialog({ m: "create" })}
					sx={{ height: 40 }}
				>
					Novo Receituário
				</Button>
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
									<TableCell sx={{ fontWeight: 700 }}>Nº</TableCell>
									<TableCell sx={{ fontWeight: 700 }}>Data</TableCell>
									<TableCell sx={{ fontWeight: 700 }}>Ocorrência</TableCell>
									<TableCell sx={{ fontWeight: 700 }}>Médico</TableCell>
									<TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
									<TableCell sx={{ fontWeight: 700 }}>Meds</TableCell>
									<TableCell sx={{ fontWeight: 700 }} align="right">
										Ações
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{filtered.length === 0 ? (
									<TableRow>
										<TableCell colSpan={7} align="center" sx={{ py: 4 }}>
											<Stack alignItems="center" spacing={1}>
												<AssignmentIcon sx={{ fontSize: 40, opacity: 0.3 }} />
												<Typography color="text.secondary">
													Nenhum receituário encontrado
												</Typography>
											</Stack>
										</TableCell>
									</TableRow>
								) : (
									filtered.map((r) => (
										<TableRow
											key={r.id}
											hover
											sx={{ "&:last-child td": { border: 0 } }}
										>
											<TableCell>
												<Typography variant="body2" fontWeight={600}>
													#{r.numero}
												</Typography>
											</TableCell>
											<TableCell>{DateFormat(r.data)}</TableCell>
											<TableCell>{r.ocorrencia}</TableCell>
											<TableCell>{r.medico}</TableCell>
											<TableCell>
												<Chip
													label={r.status}
													color={STATUS_COLORS[r.status]}
													size="small"
												/>
											</TableCell>
											<TableCell>
												<Chip
													label={r.ReceituarioMedicamentos?.length ?? 0}
													size="small"
													variant="outlined"
												/>
											</TableCell>
											<TableCell align="right">
												<ButtonActionTable row={r} />
											</TableCell>
										</TableRow>
									))
								)}
							</TableBody>
						</Table>
					</TableContainer>
					{filtered.length > 0 && (
						<Box
							sx={{
								px: 2,
								py: 1.5,
								borderTop: "1px solid",
								borderColor: "divider",
							}}
						>
							<Typography variant="caption" color="text.secondary">
								{filtered.length} receituário
								{filtered.length !== 1 ? "s" : ""} encontrado
								{filtered.length !== 1 ? "s" : ""}
							</Typography>
						</Box>
					)}
				</Paper>
			)}

			{/* ── Remover Medicamento ── */}
			{/* <ConfirmDeleteDialog
        open={modal === "delete-med"}
        onClose={handleCloseDeleteMed}
        onConfirm={handleRemoveMed}
        title="Remover Medicamento"
        message={
          <>
            Remover{" "}
            <strong>
              {selectedMed?.Medicamento?.nome ?? selectedMed?.medicamento}
            </strong>{" "}
            do receituário?
          </>
        }
        isPending={removeMedMut.isPending}
      /> */}
		</Box>
	);
}
