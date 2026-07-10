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
import ApartmentIcon from "@mui/icons-material/Apartment";

import { useGetSetores } from "@/Hooks/useSetores";
import useDialog from "@/Hooks/useDialog";
import ButtonActionTable from "./components/ButtonsActionTable";

function formatDate(iso: string) {
	return new Date(iso).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
}

export default function SetoresTable() {
	const { data: setores, isLoading } = useGetSetores();
	const { handleClickOpenDialog } = useDialog();

	const [search, setSearch] = useState("");

	const filtered = React.useMemo(() => {
		if (!setores) return [];
		if (!search.trim()) return setores;
		const q = search.toLowerCase();
		return setores.filter(
			(s) =>
				s.nome.toLowerCase().includes(q) ||
				s.nomeVisivel.toLowerCase().includes(q),
		);
	}, [setores, search]);

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
					placeholder="Buscar setor..."
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
					Novo Setor
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
								<TableCell sx={{ fontWeight: 700 }}>Nome visível</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Criado em</TableCell>
								<TableCell align="center" sx={{ fontWeight: 700 }}>
									Ações
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{isLoading ? (
								<TableRow>
									<TableCell colSpan={4} align="center" sx={{ py: 4 }}>
										<CircularProgress size={32} />
									</TableCell>
								</TableRow>
							) : filtered.length === 0 ? (
								<TableRow>
									<TableCell colSpan={4} align="center" sx={{ py: 4 }}>
										<Stack alignItems="center" spacing={1}>
											<ApartmentIcon sx={{ fontSize: 40, opacity: 0.3 }} />
											<Typography color="text.secondary">
												Nenhum setor encontrado
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							) : (
								filtered.map((setor) => (
									<TableRow
										key={setor.id}
										hover
										sx={{ "&:last-child td": { border: 0 } }}
									>
										<TableCell>
											<Box
												sx={{ display: "flex", alignItems: "center", gap: 1 }}
											>
												<Typography variant="body2" fontWeight={500}>
													{setor.nome}
												</Typography>
											</Box>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{setor.nomeVisivel}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{formatDate(setor.created_at)}
											</Typography>
										</TableCell>
										<TableCell align="center">
											<ButtonActionTable row={setor} />
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
							{filtered.length} setor{filtered.length !== 1 ? "es" : ""}{" "}
							encontrado{filtered.length !== 1 ? "s" : ""}
						</Typography>
					</Box>
				)}
			</Paper>
		</Box>
	);
}
