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
	DILUENTE_LABELS,
	STATUS_COLORS,
	UNIDADE_LABELS,
} from "@/Types/Receituario";
import type { Medicamento } from "@/Types/Medicamento";
import AppDialog from "@/Components/Dialog/AppDialog";
// import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
// import { ReceituarioPDFButton } from "./PDF.receituario";
// import NewReceituario from "./new";
// import EditReceituario from "./edit";
// import { DialogProvider } from "@/Contexts/DialogContext";
import { DateFormat } from "@/Utils/dates";

export default function ViewReceituario({
	open,
	onClose,
	receituario,
	handleClickOpenDialog,
}: {
	open: boolean;
	onClose: () => void;
	receituario: Receituario;
	handleClickOpenDialog: (data: any) => void;
}) {
	return (
		<AppDialog
			open={open}
			onClose={onClose}
			title={`Receituário #${receituario?.numero ?? ""}`}
			icon={<AssignmentIcon />}
			maxWidth="md"
			actions={
				<>
					<Button onClick={onClose}>Fechar</Button>
					<Button
						variant="outlined"
						startIcon={<Edit />}
						onClick={() => handleClickOpenDialog({ m: "edit", s: receituario })}
					>
						Editar
					</Button>
				</>
			}
		>
			{receituario && (
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
								{DateFormat(receituario.data)}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Ocorrência
							</Typography>
							<Typography variant="body2" fontWeight={600}>
								{receituario.ocorrencia}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Data Ocorrência
							</Typography>
							<Typography variant="body2" fontWeight={600}>
								{DateFormat(receituario.data_ocorrencia)}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Médico
							</Typography>
							<Typography variant="body2" fontWeight={600}>
								{receituario.medico}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Status
							</Typography>
							<Box mt={0.3}>
								<Chip
									label={receituario.status}
									color={STATUS_COLORS[receituario.status]}
									size="small"
								/>
							</Box>
						</Box>
					</Stack>
					{receituario.obs && (
						<Box>
							<Typography variant="caption" color="text.secondary">
								Observação
							</Typography>
							<Typography variant="body2">{receituario.obs}</Typography>
						</Box>
					)}
					Alterar status
					<Box>
						{/* <Typography variant="subtitle2" mb={1}>
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
								disabled={newStatus === receituario.status}
							>
								Confirmar
							</LoadingButton>
						</Stack> */}
					</Box>
					<Divider />
					{/* Medicamentos existentes */}
					{/* <Box>
						<Typography variant="subtitle2" mb={1}>
							Medicamentos ({receituario.ReceituarioMedicamentos?.length ?? 0})
						</Typography>
						{(receituario.ReceituarioMedicamentos?.length ?? 0) === 0 ? (
							<Typography variant="body2" color="text.secondary">
								Nenhum medicamento.
							</Typography>
						) : (
							<Stack spacing={1}>
								{receituario.ReceituarioMedicamentos?.map((med) => (
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
					</Box> */}
					{/* Adicionar medicamento */}
					{/* {receituario.status === "Aberto" && (
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
										<TextField {...params} label="Medicamento" size="small" />
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
					)}*/}
				</Stack>
			)}
		</AppDialog>
	);
}
