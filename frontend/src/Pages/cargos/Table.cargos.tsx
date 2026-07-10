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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";

import useDialog from "@/Hooks/useDialog";
import { useGetCargos } from "@/Hooks/useCargos";
import { DateFormat } from "@/Utils/dates";
import ButtonActionTable from "./components/ButtonsActionTable";

export default function CargosTable() {
	const { data: cargos, isLoading } = useGetCargos();
	const { handleClickOpenDialog } = useDialog();
	const [search, setSearch] = useState("");

	const filtered = React.useMemo(() => {
		if (!cargos) return [];
		if (!search.trim()) return cargos;

		const query = search.toLowerCase();
		return cargos.filter(
			(cargo) =>
				cargo.nome.toLowerCase().includes(query) ||
				cargo.nomeVisivel.toLowerCase().includes(query) ||
				cargo.setor.toLowerCase().includes(query),
		);
	}, [cargos, search]);

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
					placeholder="Buscar cargo..."
					value={search}
					onChange={(event) => setSearch(event.target.value)}
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
					onClick={() => handleClickOpenDialog({ m: "created" })}
					sx={{ height: 40 }}
				>
					Novo Cargo
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
								<TableCell sx={{ fontWeight: 700 }}>Setor</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Criado em</TableCell>
								<TableCell align="center" sx={{ fontWeight: 700 }}>
									Ações
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{isLoading ? (
								<TableRow>
									<TableCell colSpan={5} align="center" sx={{ py: 4 }}>
										<CircularProgress size={32} />
									</TableCell>
								</TableRow>
							) : filtered.length === 0 ? (
								<TableRow>
									<TableCell colSpan={5} align="center" sx={{ py: 4 }}>
										<Stack alignItems="center" spacing={1}>
											<WorkIcon sx={{ fontSize: 40, opacity: 0.3 }} />
											<Typography color="text.secondary">
												Nenhum cargo encontrado
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							) : (
								filtered.map((cargo) => (
									<TableRow
										key={cargo.id}
										hover
										sx={{ "&:last-child td": { border: 0 } }}
									>
										<TableCell>
											<Box
												sx={{ display: "flex", alignItems: "center", gap: 1 }}
											>
												<Typography variant="body2" fontWeight={500}>
													{cargo.nome}
												</Typography>
											</Box>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{cargo.nomeVisivel}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{cargo.Setor?.nomeVisivel}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{DateFormat(cargo.created_at)}
											</Typography>
										</TableCell>
										<TableCell align="center">
											<ButtonActionTable row={cargo} />
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
							{filtered.length} cargo{filtered.length !== 1 ? "s" : ""}{" "}
							encontrado{filtered.length !== 1 ? "s" : ""}
						</Typography>
					</Box>
				)}
			</Paper>
		</Box>
	);
}
