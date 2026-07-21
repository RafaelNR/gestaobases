import React, { useState } from "react";
import {
	Box,
	Button,
	Chip,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
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
import BlockIcon from "@mui/icons-material/Block";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";

import { useGetUsuarios, useBlockUsuario } from "@/Hooks/useUsuarios";
import type { Usuario } from "@/Types/Usuarios";
import useDialog from "@/Hooks/useDialog";
import ChipAtivoInativo from "@/Components/Chip/ChipAtivoInativo";
import ButtonActionTable from "./components/ButtonsActionTable";

export default function UsuariosTable() {
	const navigate = useNavigate();
	const { data: usuarios, isLoading } = useGetUsuarios();
	const blockUsuario = useBlockUsuario();
	const { handleClickOpenDialog } = useDialog();

	const [search, setSearch] = useState("");
	const [blockTarget, setBlockTarget] = useState<Usuario | null>(null);

	const filtered = React.useMemo(() => {
		if (!usuarios) return [];
		if (!search.trim()) return usuarios;
		const q = search.toLowerCase();
		return usuarios.filter(
			(u) =>
				u.nome?.toLowerCase().includes(q) ||
				u.username?.toLowerCase().includes(q) ||
				u.email?.toLowerCase().includes(q) ||
				u.Cargo?.nomeVisivel?.toLowerCase().includes(q) ||
				u.Setor?.nomeVisivel?.toLowerCase().includes(q) ||
				u.Base?.nome?.toLowerCase().includes(q),
		);
	}, [usuarios, search]);

	const handleBlock = async () => {
		if (!blockTarget) return;
		await blockUsuario.mutateAsync(blockTarget.id);
		setBlockTarget(null);
	};

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
					placeholder="Buscar usuário..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon fontSize="small" />
							</InputAdornment>
						),
					}}
					sx={{ minWidth: 260 }}
				/>
				<Button
					variant="contained"
					startIcon={<AddIcon />}
					onClick={() => handleClickOpenDialog({ m: "create" })}
					sx={{ height: 40 }}
				>
					Novo Usuário
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
								<TableCell sx={{ fontWeight: 700 }}>Username</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Base</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Setor</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Cargo</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
								<TableCell align="center" sx={{ fontWeight: 700 }}>
									Ações
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{isLoading ? (
								<TableRow>
									<TableCell colSpan={7} align="center" sx={{ py: 4 }}>
										<CircularProgress size={32} />
									</TableCell>
								</TableRow>
							) : filtered.length === 0 ? (
								<TableRow>
									<TableCell colSpan={7} align="center" sx={{ py: 4 }}>
										<Stack alignItems="center" spacing={1}>
											<PersonIcon sx={{ fontSize: 40, opacity: 0.3 }} />
											<Typography color="text.secondary">
												Nenhum usuário encontrado
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							) : (
								filtered.map((u) => (
									<TableRow
										key={u.id}
										hover
										sx={{ "&:last-child td": { border: 0 } }}
									>
										<TableCell>
											<Typography variant="body2" fontWeight={500}>
												{u.nome}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography
												variant="body2"
												sx={{ fontFamily: "monospace" }}
											>
												{u.username}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{u.email ?? "-"}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2">
												{u.Base.nome ?? "-"}
											</Typography>
										</TableCell>
										<TableCell>
											<Chip
												label={u.Setor.nomeVisivel ?? "-"}
												size="small"
												variant="outlined"
												sx={{ fontSize: "0.75rem" }}
											/>
										</TableCell>
										<TableCell>
											<Chip
												label={u.Cargo.nomeVisivel ?? "-"}
												size="small"
												variant="outlined"
												sx={{ fontSize: "0.75rem" }}
											/>
										</TableCell>
										<TableCell>
											<ChipAtivoInativo active={u.active} />
										</TableCell>
										<TableCell align="center">
											<ButtonActionTable row={u} />
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
							{filtered.length} usuário{filtered.length !== 1 ? "s" : ""}{" "}
							encontrado{filtered.length !== 1 ? "s" : ""}
						</Typography>
					</Box>
				)}
			</Paper>
		</Box>
	);
}
