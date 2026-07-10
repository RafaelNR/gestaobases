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
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

import { useGetAmbulancias } from "@/Hooks/useAmbulancias";
import useDialog from "@/Hooks/useDialog";
import { DateFormat } from "@/Utils/dates";
import ButtonActionTable from "./components/ButtonsActionTable";

export default function AmbulanciaTable() {
	const { data: ambulancias, isLoading } = useGetAmbulancias();
	const { handleClickOpenDialog } = useDialog();

	const [search, setSearch] = useState("");

	const filtered = React.useMemo(() => {
		if (!ambulancias) return [];
		if (!search.trim()) return ambulancias;
		const q = search.toLowerCase();
		return ambulancias.filter(
			(a) =>
				a.nome.toLowerCase().includes(q) || a.tipo.toLowerCase().includes(q),
		);
	}, [ambulancias, search]);

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
					placeholder="Buscar ambulância..."
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
					Nova Ambulância
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
								<TableCell sx={{ fontWeight: 700 }}>Tipo</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Base</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Criado por</TableCell>
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
											<DirectionsCarIcon sx={{ fontSize: 40, opacity: 0.3 }} />
											<Typography color="text.secondary">
												Nenhuma ambulância encontrada
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							) : (
								filtered.map((a) => (
									<TableRow
										key={a.id}
										hover
										sx={{ "&:last-child td": { border: 0 } }}
									>
										<TableCell>
											<Box
												sx={{ display: "flex", alignItems: "center", gap: 1 }}
											>
												<Typography variant="body2" fontWeight={500}>
													{a.nome}
												</Typography>
											</Box>
										</TableCell>
										<TableCell>
											<Typography variant="body2">{a.tipo}</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{a.Base?.nome}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{a.User?.nome}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{DateFormat(a.created_at)}
											</Typography>
										</TableCell>
										<TableCell align="center">
											<ButtonActionTable row={a} />
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
							{filtered.length} ambulância
							{filtered.length !== 1 ? "s" : ""} encontrada
							{filtered.length !== 1 ? "s" : ""}
						</Typography>
					</Box>
				)}
			</Paper>
		</Box>
	);
}
