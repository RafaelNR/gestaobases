import React, { useState } from "react";
import {
	Add,
	Delete,
	Edit,
	Visibility,
} from "@mui/icons-material";
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
	DILUENTE_LABELS,
	UNIDADE_LABELS,
} from "@/Types/Receituario";
import type { Medicamento } from "@/Types/Medicamento";
import AppDialog from "@/Components/Dialog/AppDialog";
import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import { ReceituarioPDFButton } from "./PDF.receituario";
import NewReceituario from "./new";
import EditReceituario from "./edit";
import { DialogProvider } from "@/Contexts/DialogContext";

/* ─── Tipos ──────────────────────────────────────────────── */
type ModalType = "create" | "view" | "edit" | "delete" | "delete-med" | null;

const STATUS_COLORS: Record<StatusReceituario, "default" | "info" | "success" | "error"> = {
	Aberto: "info",
	Finalizado: "success",
	Cancelado: "error",
};
const ALL_STATUS: StatusReceituario[] = ["Aberto", "Finalizado", "Cancelado"];

const ADMINISTRACAO_OPTIONS: TipoAdministracao[] = ["EV", "IM", "SC", "IN", "IR", "IO"];
const UNIDADE_OPTIONS: UnidadeMedicamento[] = ["ampolas", "ml"];
const DILUENTE_OPTIONS: TipoDiluente[] = ["agua_destilada", "nacl09"];

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

function formatDate(iso?: string | null) {
	if (!iso) return "—";
	return new Date(iso).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
}

/* ─── Componente interno ─────────────────────────────────── */
function ReceituariosPage() {
	const { data: receituarios = [], isLoading } = useGetReceituarios();
	const { data: medicamentos = [] } = useGetMedicamentos();

	const deleteMut = useDeleteReceituario();
	const changeStatusMut = useChangeStatusReceituario();
	const addMedMut = useAddMedicamento();
	const removeMedMut = useRemoveMedicamento();

	/* ── Estado dos modais ── */
	const [modal, setModal] = useState<ModalType>(null);
	const [selected, setSelected] = useState<Receituario | null>(null);
	const [selectedMed, setSelectedMed] = useState<ReceituarioMedicamento | null>(null);

	/* ── Estado do formulário de medicamento (no detalhe) ── */
	const [medForm, setMedForm] = useState({ ...emptyMedForm });
	const [newStatus, setNewStatus] = useState<StatusReceituario>("Aberto");

	/* ── Filtros ── */
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState<"all" | StatusReceituario>("all");

	/* ── Helpers ── */
	const handleClose = () => {
		setModal(null);
		setSelected(null);
		setSelectedMed(null);
		setMedForm({ ...emptyMedForm });
	};

	const handleCloseDeleteMed = () => {
		setModal("view");
		setSelectedMed(null);
	};

	// Receituário atualizado em tempo real via react-query
	const detailCurrent =
		selected && (modal === "view" || modal === "delete-med")
			? (receituarios.find((r) => r.id === selected.id) ?? selected)
			: null;

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

	/* ── Handlers ── */
	async function handleDelete() {
		if (!selected) return;
		await deleteMut.mutateAsync(selected.id);
		handleClose();
	}

	async function handleAddMed() {
		if (!selected || !medForm.medicamento) return;
		await addMedMut.mutateAsync({
			id: selected.id,
			medicamento: medForm.medicamento.id,
			qnt: medForm.qnt,
			unidade: medForm.unidade,
			administracao: medForm.administracao,
			diluente: medForm.diluente || undefined,
			qnt_diluente: medForm.qnt_diluente ? Number(medForm.qnt_diluente) : undefined,
			qnt_tempo: medForm.qnt_tempo ? Number(medForm.qnt_tempo) : undefined,
			obs: medForm.obs || undefined,
		});
		setMedForm({ ...emptyMedForm });
	}

	async function handleRemoveMed() {
		if (!selected || !selectedMed) return;
		await removeMedMut.mutateAsync({ id: selected.id, medId: selectedMed.id });
		handleCloseDeleteMed();
	}

	async function handleChangeStatus() {
		if (!selected) return;
		await changeStatusMut.mutateAsync({ id: selected.id, status: newStatus });
	}

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
							onChange={(e) => setStatusFilter(e.target.value as "all" | StatusReceituario)}
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
					onClick={() => setModal("create")}
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
											<TableCell>{formatDate(r.data)}</TableCell>
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
												<Stack
													direction="row"
													spacing={0.5}
													justifyContent="flex-end"
												>
													<ReceituarioPDFButton receituario={r} />
													<Tooltip title="Detalhes">
														<IconButton
															size="small"
															onClick={() => {
																setSelected(r);
																setNewStatus(r.status);
																setModal("view");
															}}
														>
															<Visibility fontSize="small" />
														</IconButton>
													</Tooltip>
													<Tooltip title="Editar">
														<IconButton
															size="small"
															onClick={() => {
																setSelected(r);
																setModal("edit");
															}}
														>
															<Edit fontSize="small" />
														</IconButton>
													</Tooltip>
													<Tooltip title="Excluir">
														<IconButton
															size="small"
															sx={{ color: "error.main" }}
															onClick={() => {
																setSelected(r);
																setModal("delete");
															}}
														>
															<Delete fontSize="small" />
														</IconButton>
													</Tooltip>
												</Stack>
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

			{/* ── Criar / Editar ── */}
			<NewReceituario open={modal === "create"} onClose={handleClose} />
			<EditReceituario
				open={modal === "edit"}
				onClose={handleClose}
				receituario={selected}
			/>

			{/* ── Detalhe ── */}
			<AppDialog
				open={modal === "view"}
				onClose={handleClose}
				title={`Receituário #${detailCurrent?.numero ?? ""}`}
				icon={<AssignmentIcon />}
				maxWidth="md"
				actions={
					<>
						<Button onClick={handleClose}>Fechar</Button>
						<Button
							variant="outlined"
							startIcon={<Edit />}
							onClick={() => setModal("edit")}
						>
							Editar
						</Button>
					</>
				}
			>
				{detailCurrent && (
					<Stack spacing={3}>
						{/* Dados gerais */}
						<Stack
							direction={{ xs: "column", sm: "row" }}
							spacing={2}
							flexWrap="wrap"
							useFlexGap
						>
							<Box>
								<Typography variant="caption" color="text.secondary">
									Data
								</Typography>
								<Typography variant="body2" fontWeight={600}>
									{formatDate(detailCurrent.data)}
								</Typography>
							</Box>
							<Box>
								<Typography variant="caption" color="text.secondary">
									Ocorrência
								</Typography>
								<Typography variant="body2" fontWeight={600}>
									{detailCurrent.ocorrencia}
								</Typography>
							</Box>
							<Box>
								<Typography variant="caption" color="text.secondary">
									Data Ocorrência
								</Typography>
								<Typography variant="body2" fontWeight={600}>
									{formatDate(detailCurrent.data_ocorrencia)}
								</Typography>
							</Box>
							<Box>
								<Typography variant="caption" color="text.secondary">
									Médico
								</Typography>
								<Typography variant="body2" fontWeight={600}>
									{detailCurrent.medico}
								</Typography>
							</Box>
							<Box>
								<Typography variant="caption" color="text.secondary">
									Status
								</Typography>
								<Box mt={0.3}>
									<Chip
										label={detailCurrent.status}
										color={STATUS_COLORS[detailCurrent.status]}
										size="small"
									/>
								</Box>
							</Box>
						</Stack>

						{detailCurrent.obs && (
							<Box>
								<Typography variant="caption" color="text.secondary">
									Observação
								</Typography>
								<Typography variant="body2">{detailCurrent.obs}</Typography>
							</Box>
						)}

						{/* Alterar status */}
						<Box>
							<Typography variant="subtitle2" mb={1}>
								Alterar Status
							</Typography>
							<Stack direction="row" spacing={1} alignItems="center">
								<FormControl size="small" sx={{ minWidth: 160 }}>
									<InputLabel>Novo status</InputLabel>
									<Select
										value={newStatus}
										label="Novo status"
										onChange={(e) =>
											setNewStatus(e.target.value as StatusReceituario)
										}
									>
										{ALL_STATUS.map((s) => (
											<MenuItem key={s} value={s}>
												{s}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<LoadingButton
									variant="outlined"
									size="small"
									loading={changeStatusMut.isPending}
									onClick={handleChangeStatus}
									disabled={newStatus === detailCurrent.status}
								>
									Confirmar
								</LoadingButton>
							</Stack>
						</Box>

						<Divider />

						{/* Medicamentos existentes */}
						<Box>
							<Typography variant="subtitle2" mb={1}>
								Medicamentos ({detailCurrent.ReceituarioMedicamentos?.length ?? 0})
							</Typography>
							{(detailCurrent.ReceituarioMedicamentos?.length ?? 0) === 0 ? (
								<Typography variant="body2" color="text.secondary">
									Nenhum medicamento.
								</Typography>
							) : (
								<Stack spacing={1}>
									{detailCurrent.ReceituarioMedicamentos?.map((med) => (
										<Paper
											key={med.id}
											variant="outlined"
											sx={{ px: 2, py: 1, borderRadius: 1.5 }}
										>
											<Stack
												direction="row"
												justifyContent="space-between"
												alignItems="flex-start"
											>
												<Stack spacing={0.3}>
													<Typography variant="body2" fontWeight={600}>
														{med.Medicamento?.nome ?? med.medicamento}
													</Typography>
													<Typography variant="caption" color="text.secondary">
														{med.qnt} {UNIDADE_LABELS[med.unidade]} |{" "}
														{ADMINISTRACAO_LABELS[med.administracao]}
														{med.diluente
															? ` | ${DILUENTE_LABELS[med.diluente]}${med.qnt_diluente ? ` ${med.qnt_diluente}ml` : ""}`
															: ""}
														{med.qnt_tempo ? ` | ${med.qnt_tempo} min` : ""}
													</Typography>
													{med.obs && (
														<Typography
															variant="caption"
															sx={{ fontStyle: "italic" }}
														>
															{med.obs}
														</Typography>
													)}
												</Stack>
												<Tooltip title="Remover medicamento">
													<IconButton
														size="small"
														sx={{ color: "error.main" }}
														onClick={() => {
															setSelectedMed(med);
															setModal("delete-med");
														}}
													>
														<Delete fontSize="small" />
													</IconButton>
												</Tooltip>
											</Stack>
										</Paper>
									))}
								</Stack>
							)}
						</Box>

						{/* Adicionar medicamento */}
						{detailCurrent.status === "Aberto" && (
							<Box>
								<Typography variant="subtitle2" mb={1}>
									Adicionar Medicamento
								</Typography>
								<Stack spacing={1.5}>
									<Autocomplete
										options={medicamentos as Medicamento[]}
										getOptionLabel={(o) => `${o.nome} (${o.codigo})`}
										value={medForm.medicamento}
										onChange={(_, v) =>
											setMedForm((f) => ({ ...f, medicamento: v }))
										}
										renderInput={(params) => (
											<TextField
												{...params}
												label="Medicamento"
												size="small"
											/>
										)}
									/>
									<Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
										<TextField
											label="Qtd"
											type="number"
											size="small"
											sx={{ width: 80 }}
											value={medForm.qnt}
											onChange={(e) =>
												setMedForm((f) => ({
													...f,
													qnt: Math.max(1, Number(e.target.value)),
												}))
											}
										/>
										<FormControl size="small" sx={{ width: 120 }}>
											<InputLabel>Unidade</InputLabel>
											<Select
												value={medForm.unidade}
												label="Unidade"
												onChange={(e) =>
													setMedForm((f) => ({
														...f,
														unidade: e.target.value as UnidadeMedicamento,
													}))
												}
											>
												{UNIDADE_OPTIONS.map((u) => (
													<MenuItem key={u} value={u}>
														{UNIDADE_LABELS[u]}
													</MenuItem>
												))}
											</Select>
										</FormControl>
										<FormControl size="small" sx={{ width: 100 }}>
											<InputLabel>Via</InputLabel>
											<Select
												value={medForm.administracao}
												label="Via"
												onChange={(e) =>
													setMedForm((f) => ({
														...f,
														administracao: e.target.value as TipoAdministracao,
													}))
												}
											>
												{ADMINISTRACAO_OPTIONS.map((a) => (
													<MenuItem key={a} value={a}>
														{ADMINISTRACAO_LABELS[a]}
													</MenuItem>
												))}
											</Select>
										</FormControl>
										<FormControl size="small" sx={{ width: 150 }}>
											<InputLabel>Diluente</InputLabel>
											<Select
												value={medForm.diluente}
												label="Diluente"
												onChange={(e) =>
													setMedForm((f) => ({
														...f,
														diluente: e.target.value as TipoDiluente | "",
													}))
												}
											>
												<MenuItem value="">Nenhum</MenuItem>
												{DILUENTE_OPTIONS.map((d) => (
													<MenuItem key={d} value={d}>
														{DILUENTE_LABELS[d]}
													</MenuItem>
												))}
											</Select>
										</FormControl>
										{medForm.diluente && (
											<TextField
												label="Volume (ml)"
												type="number"
												size="small"
												sx={{ width: 110 }}
												value={medForm.qnt_diluente}
												onChange={(e) =>
													setMedForm((f) => ({
														...f,
														qnt_diluente: e.target.value,
													}))
												}
											/>
										)}
										<TextField
											label="Tempo (min)"
											type="number"
											size="small"
											sx={{ width: 110 }}
											value={medForm.qnt_tempo}
											onChange={(e) =>
												setMedForm((f) => ({
													...f,
													qnt_tempo: e.target.value,
												}))
											}
										/>
									</Stack>
									<TextField
										label="Obs do medicamento"
										size="small"
										fullWidth
										value={medForm.obs}
										onChange={(e) =>
											setMedForm((f) => ({ ...f, obs: e.target.value }))
										}
									/>
									<LoadingButton
										variant="outlined"
										size="small"
										loading={addMedMut.isPending}
										onClick={handleAddMed}
										disabled={!medForm.medicamento}
										startIcon={<Add />}
										sx={{ alignSelf: "flex-start" }}
									>
										Adicionar ao Receituário
									</LoadingButton>
								</Stack>
							</Box>
						)}
					</Stack>
				)}
			</AppDialog>

			{/* ── Excluir Receituário ── */}
			<ConfirmDeleteDialog
				open={modal === "delete"}
				onClose={handleClose}
				onConfirm={handleDelete}
				title="Remover Receituário"
				message={
					<>
						Remover o receituário <strong>#{selected?.numero}</strong>? Esta ação
						é irreversível.
					</>
				}
				isPending={deleteMut.isPending}
			/>

			{/* ── Remover Medicamento ── */}
			<ConfirmDeleteDialog
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
			/>
		</Box>
	);
}

export default function ReceituariosPageWrapper() {
	return (
		<DialogProvider>
			<ReceituariosPage />
		</DialogProvider>
	);
}
