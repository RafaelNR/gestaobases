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
	TableSortLabel,
	TextField,
	Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import { MEDICAMENTOS_PERMISSIONS } from "@/Guard/PermissionGroups";
import { useGetMedicamentos } from "@/Hooks/useMedicamentos";
import useDialog from "@/Hooks/useDialog";
import ChipAtivoInativo from "@/Components/Chip/ChipAtivoInativo";
import ButtonActionTable from "./components/ButtonsActionTable";
import { usePermissions } from "@/Hooks/usePermissions";
import type { Medicamento } from "@/Types/Medicamento";

type Order = "asc" | "desc";
type MedicamentoSortKey =
	| "codigo"
	| "nome"
	| "especificacao"
	| "categoria"
	| "active";

type SortState = {
	key: MedicamentoSortKey;
	order: Order;
} | null;

const sortableHeadCells: Array<{ key: MedicamentoSortKey; label: string }> = [
	{ key: "codigo", label: "Código" },
	{ key: "nome", label: "Nome" },
	{ key: "especificacao", label: "Especificação" },
	{ key: "categoria", label: "Categoria" },
	{ key: "active", label: "Status" },
];

function compareMedicamentoValue(
	first: Medicamento,
	second: Medicamento,
	key: MedicamentoSortKey,
) {
	const firstValue = first[key];
	const secondValue = second[key];

	if (typeof firstValue === "number" && typeof secondValue === "number") {
		return firstValue - secondValue;
	}

	if (typeof firstValue === "boolean" && typeof secondValue === "boolean") {
		return Number(firstValue) - Number(secondValue);
	}

	return String(firstValue ?? "").localeCompare(String(secondValue ?? ""), "pt-BR", {
		sensitivity: "base",
		numeric: true,
	});
}

export default function MedicamentosTable() {
	const { data: medicamentos, isLoading } = useGetMedicamentos();
	const { handleClickOpenDialog } = useDialog();
	const { can } = usePermissions();

	const [search, setSearch] = useState("");
	const [sort, setSort] = useState<SortState>(null);

	const handleRequestSort = (key: MedicamentoSortKey) => {
		setSort((currentSort) => ({
			key,
			order:
				currentSort?.key === key && currentSort.order === "asc" ? "desc" : "asc",
		}));
	};

	const filtered = React.useMemo(() => {
		if (!medicamentos) return [];
		if (!search.trim()) return medicamentos;
		const q = search.toLowerCase();
		return medicamentos.filter(
			(m) =>
				m.nome.toLowerCase().includes(q) ||
				String(m.codigo).toLowerCase().includes(q) ||
				m.especificacao.toLowerCase().includes(q),
		);
	}, [medicamentos, search]);

	const sortedMedicamentos = React.useMemo(() => {
		if (!sort) return filtered;

		return [...filtered].sort((first, second) => {
			const result = compareMedicamentoValue(first, second, sort.key);
			return sort.order === "asc" ? result : -result;
		});
	}, [filtered, sort]);

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
					placeholder="Buscar medicamento..."
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
				{can(MEDICAMENTOS_PERMISSIONS.NEW) && (
					<Button
						variant="contained"
						startIcon={<AddIcon />}
						onClick={() => handleClickOpenDialog({ m: "create" })}
						sx={{ height: 40 }}
					>
						Novo Medicamento
					</Button>
				)}
			</Box>

			<Paper
				elevation={0}
				sx={{ border: "1px solid", borderColor: "divider", borderRadius: 2 }}
			>
				<TableContainer>
					<Table size="medium">
						<TableHead>
							<TableRow sx={{ bgcolor: "action.hover" }}>
								{sortableHeadCells.map((headCell) => (
									<TableCell
										key={headCell.key}
										sortDirection={
											sort?.key === headCell.key ? sort.order : false
										}
										sx={{ fontWeight: 700 }}
									>
										<TableSortLabel
											active={sort?.key === headCell.key}
											direction={
												sort?.key === headCell.key ? sort.order : "asc"
											}
											onClick={() => handleRequestSort(headCell.key)}
										>
											{headCell.label}
										</TableSortLabel>
									</TableCell>
								))}
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
											<Typography color="text.secondary">
												Nenhum medicamento encontrado
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							) : (
								sortedMedicamentos.map((m) => (
									<TableRow
										key={m.id}
										hover
										sx={{ "&:last-child td": { border: 0 } }}
									>
										<TableCell>
											<Typography
												variant="body2"
												sx={{ fontFamily: "monospace" }}
											>
												{m.codigo}
											</Typography>
										</TableCell>
										<TableCell>
											<Box
												sx={{ display: "flex", alignItems: "center", gap: 1 }}
											>
												<Typography variant="body2" fontWeight={500}>
													{m.nome}
												</Typography>
											</Box>
										</TableCell>
										<TableCell>
											<Typography
												variant="body2"
												color="text.secondary"
												sx={{
													maxWidth: 200,
													overflow: "hidden",
													textOverflow: "ellipsis",
													whiteSpace: "nowrap",
												}}
											>
												{m.especificacao}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{m.categoria}
											</Typography>
										</TableCell>
										<TableCell>
											<ChipAtivoInativo active={m.active} />
										</TableCell>
										<TableCell align="center">
											<ButtonActionTable row={m} />
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
							{filtered.length} medicamento{filtered.length !== 1 ? "s" : ""}{" "}
							encontrado{filtered.length !== 1 ? "s" : ""}
						</Typography>
					</Box>
				)}
			</Paper>
		</Box>
	);
}
