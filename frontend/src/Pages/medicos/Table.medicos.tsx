import React, { useState } from "react";
import {
	Box,
	Button,
	CircularProgress,
	IconButton,
	InputAdornment,
	Paper,
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
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

import { useGetMedicos } from "@/Hooks/useMedicos";
import useDialog from "@/Hooks/useDialog";

function formatDate(iso: string) {
	return new Date(iso).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
}

export default function MedicosTable() {
	const { data: medicos, isLoading } = useGetMedicos();
	const { handleClickOpenDialog } = useDialog();

	const [search, setSearch] = useState("");

	const filtered = React.useMemo(() => {
		if (!medicos) return [];
		if (!search.trim()) return medicos;
		const q = search.toLowerCase();
		return medicos.filter(
			(m) =>
				m.nome.toLowerCase().includes(q) ||
				m.crm.toLowerCase().includes(q) ||
				(m.email ?? "").toLowerCase().includes(q),
		);
	}, [medicos, search]);

	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					mb: 2,
					gap: 2,
					flexWrap: "wrap",
				}}
			>
				<TextField
					size="small"
					placeholder="Buscar médico..."
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
				<Button
					variant="contained"
					startIcon={<AddIcon />}
					onClick={() => handleClickOpenDialog({ m: "create" })}
					sx={{ height: 40 }}
				>
					Novo Médico
				</Button>
			</Box>

			<Paper
				elevation={0}
				sx={{ border: "1px solid", borderColor: "divider", borderRadius: 2 }}
			>
				<TableContainer>
					<Table size="medium">
						<TableHead>
							<TableRow sx={{ bgcolor: "action.hover" }}>
								<TableCell sx={{ fontWeight: 700 }}>Nome</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>CRM</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Telefone</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>E-mail</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Criado em</TableCell>
								<TableCell align="center" sx={{ fontWeight: 700 }}>
									Ações
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{isLoading ? (
								<TableRow>
									<TableCell colSpan={6} align="center" sx={{ py: 4 }}>
										<CircularProgress size={32} />
									</TableCell>
								</TableRow>
							) : filtered.length === 0 ? (
								<TableRow>
									<TableCell colSpan={6} align="center" sx={{ py: 4 }}>
										<Stack alignItems="center" spacing={1}>
											<LocalHospitalIcon sx={{ fontSize: 40, opacity: 0.3 }} />
											<Typography color="text.secondary">
												Nenhum médico encontrado
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							) : (
								filtered.map((m) => (
									<TableRow
										key={m.id}
										hover
										sx={{ "&:last-child td": { border: 0 } }}
									>
										<TableCell>
											<Box
												sx={{ display: "flex", alignItems: "center", gap: 1 }}
											>
												<LocalHospitalIcon
													sx={{
														fontSize: 18,
														color: "primary.main",
														opacity: 0.8,
													}}
												/>
												<Typography variant="body2" fontWeight={500}>
													{m.nome}
												</Typography>
											</Box>
										</TableCell>
										<TableCell>
											<Typography
												variant="body2"
												sx={{ fontFamily: "monospace" }}
											>
												{m.crm}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{m.telefone ?? "—"}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{m.email ?? "—"}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{formatDate(m.created_at)}
											</Typography>
										</TableCell>
										<TableCell align="center">
											<Tooltip title="Visualizar">
												<IconButton
													size="small"
													onClick={() => handleClickOpenDialog({ m: "view", s: m })}
													sx={{ color: "info.main" }}
												>
													<VisibilityIcon fontSize="small" />
												</IconButton>
											</Tooltip>
											<Tooltip title="Editar">
												<IconButton
													size="small"
													onClick={() => handleClickOpenDialog({ m: "edit", s: m })}
													sx={{ color: "primary.main" }}
												>
													<EditIcon fontSize="small" />
												</IconButton>
											</Tooltip>
											<Tooltip title="Excluir">
												<IconButton
													size="small"
													onClick={() => handleClickOpenDialog({ m: "delete", s: m })}
													sx={{ color: "error.main" }}
												>
													<DeleteIcon fontSize="small" />
												</IconButton>
											</Tooltip>
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
							{filtered.length} médico{filtered.length !== 1 ? "s" : ""}{" "}
							encontrado{filtered.length !== 1 ? "s" : ""}
						</Typography>
					</Box>
				)}
			</Paper>
		</Box>
	);
}
