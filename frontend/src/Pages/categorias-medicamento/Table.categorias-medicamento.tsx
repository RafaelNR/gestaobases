import React, { useState } from "react";
import {
	Box,
	Button,
	CircularProgress,
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
	Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MedicationIcon from "@mui/icons-material/Medication";

import { useGetCategoriasMedicamento } from "@/Hooks/useCategoriasMedicamento";
import useDialog from "@/Hooks/useDialog";
import { DateFormat } from "@/Utils/dates";
import ChipAtivoInativo from "@/Components/Chip/ChipAtivoInativo";
import ButtonActionTable from "./components/ButtonsActionTable";

export default function CategoriasMedicamentoTable() {
	const { data: categorias, isLoading } = useGetCategoriasMedicamento();
	const { handleClickOpenDialog } = useDialog();

	const [search, setSearch] = useState("");

	const filtered = React.useMemo(() => {
		if (!categorias) return [];
		if (!search.trim()) return categorias;
		return categorias.filter((c) =>
			c.nome.toLowerCase().includes(search.toLowerCase()),
		);
	}, [categorias, search]);

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
					placeholder="Buscar categoria..."
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
					Nova Categoria
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
								<TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Criado Por</TableCell>
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
											<MedicationIcon sx={{ fontSize: 40, opacity: 0.3 }} />
											<Typography color="text.secondary">
												Nenhuma categoria encontrada
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							) : (
								filtered.map((cat) => (
									<TableRow
										key={cat.id}
										hover
										sx={{ "&:last-child td": { border: 0 } }}
									>
										<TableCell>
											<Box
												sx={{ display: "flex", alignItems: "center", gap: 1 }}
											>
												<Typography variant="body2" fontWeight={500}>
													{cat.nome}
												</Typography>
											</Box>
										</TableCell>

										<TableCell>
											<ChipAtivoInativo active={cat.active} />
										</TableCell>
										<TableCell>
											<Typography variant="body2" fontWeight={500}>
												{cat.User.nome}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{DateFormat(cat.created_at)}
											</Typography>
										</TableCell>
										<TableCell align="center">
											<ButtonActionTable row={cat} />
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
							{filtered.length} categoria{filtered.length !== 1 ? "s" : ""}{" "}
							encontrada{filtered.length !== 1 ? "s" : ""}
						</Typography>
					</Box>
				)}
			</Paper>
		</Box>
	);
}
