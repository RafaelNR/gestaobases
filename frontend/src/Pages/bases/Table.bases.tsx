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
import BusinessIcon from "@mui/icons-material/Business";

import { useGetBases } from "@/Hooks/useBases";
import useDialog from "@/Hooks/useDialog";
import { DateFormat } from "@/Utils/dates";
import { TIPO_AMBULANCIA_LABELS } from "@/Types/Base";
import ButtonActionTable from "./components/ButtonsActionTable";

export default function BasesTable() {
	const { data: bases, isLoading } = useGetBases();
	const { handleClickOpenDialog } = useDialog();

	const [search, setSearch] = useState("");

	const filtered = React.useMemo(() => {
		if (!bases) return [];
		if (!search.trim()) return bases;
		return bases.filter((b) =>
			b.nome.toLowerCase().includes(search.toLowerCase()),
		);
	}, [bases, search]);

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
					placeholder="Buscar base..."
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
					Nova Base
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
								<TableCell sx={{ fontWeight: 700 }}>
									Tipo de Ambulância
								</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Criado em</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Atualizado em</TableCell>
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
											<BusinessIcon sx={{ fontSize: 40, opacity: 0.3 }} />
											<Typography color="text.secondary">
												Nenhuma base encontrada
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							) : (
								filtered.map((base) => (
									<TableRow
										key={base.id}
										hover
										sx={{ "&:last-child td": { border: 0 } }}
									>
										<TableCell>
											<Typography variant="body2" fontWeight={500}>
												{base.nome}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" fontWeight={500}>
												{TIPO_AMBULANCIA_LABELS[base.tipo_ambulancias]}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{DateFormat(base.created_at)}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{DateFormat(base.updated_at)}
											</Typography>
										</TableCell>
										<TableCell align="center">
											<ButtonActionTable row={base} />
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
							{filtered.length} base{filtered.length !== 1 ? "s" : ""}{" "}
							encontrada{filtered.length !== 1 ? "s" : ""}
						</Typography>
					</Box>
				)}
			</Paper>
		</Box>
	);
}
