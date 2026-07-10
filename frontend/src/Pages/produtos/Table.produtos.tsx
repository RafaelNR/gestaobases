import React, { useState } from "react";
import {
	Box,
	Button,
	Chip,
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
import InventoryIcon from "@mui/icons-material/Inventory";

import { useGetProdutos } from "@/Hooks/useProdutos";
import useDialog from "@/Hooks/useDialog";
import type { Produto } from "@/Types/Produto";
import ButtonActionTable from "./components/ButtonsActionTable";

type Order = "asc" | "desc";
type ProdutoSortKey =
	| "codigo"
	| "ordem"
	| "nome"
	| "categoria"
	| "usa"
	| "cme"
	| "active";

type SortState = {
	key: ProdutoSortKey;
	order: Order;
} | null;

const sortableHeadCells: Array<{ key: ProdutoSortKey; label: string }> = [
	{ key: "codigo", label: "Código" },
	{ key: "ordem", label: "Ordem" },
	{ key: "nome", label: "Nome" },
	{ key: "categoria", label: "Categoria" },
	{ key: "usa", label: "Item de USA?" },
	{ key: "cme", label: "Item do CME?" },
	{ key: "active", label: "Status" },
];

function compareProdutoValue(
	first: Produto,
	second: Produto,
	key: ProdutoSortKey,
) {
	const firstValue = first[key];
	const secondValue = second[key];

	if (typeof firstValue === "number" && typeof secondValue === "number") {
		return firstValue - secondValue;
	}

	if (typeof firstValue === "boolean" && typeof secondValue === "boolean") {
		return Number(firstValue) - Number(secondValue);
	}

	return String(firstValue ?? "").localeCompare(
		String(secondValue ?? ""),
		"pt-BR",
		{
			sensitivity: "base",
			numeric: true,
		},
	);
}

export default function ProdutosTable() {
	const { data: produtos, isLoading } = useGetProdutos();
	const { handleClickOpenDialog } = useDialog();

	const [search, setSearch] = useState("");
	const [sort, setSort] = useState<SortState>(null);

	const handleRequestSort = (key: ProdutoSortKey) => {
		setSort((currentSort) => ({
			key,
			order:
				currentSort?.key === key && currentSort.order === "asc"
					? "desc"
					: "asc",
		}));
	};

	const filtered = React.useMemo(() => {
		if (!produtos) return [];
		if (!search.trim()) return produtos;
		const q = search.toLowerCase();
		return produtos.filter(
			(p) =>
				p.nome.toLowerCase().includes(q) ||
				String(p.codigo).toLowerCase().includes(q),
		);
	}, [produtos, search]);

	const sortedProdutos = React.useMemo(() => {
		if (!sort) return filtered;

		return [...filtered].sort((first, second) => {
			const result = compareProdutoValue(first, second, sort.key);
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
					placeholder="Buscar produto..."
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
					Novo Produto
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
									<TableCell colSpan={8} align="center" sx={{ py: 4 }}>
										<CircularProgress size={32} />
									</TableCell>
								</TableRow>
							) : filtered.length === 0 ? (
								<TableRow>
									<TableCell colSpan={8} align="center" sx={{ py: 4 }}>
										<Stack alignItems="center" spacing={1}>
											<InventoryIcon sx={{ fontSize: 40, opacity: 0.3 }} />
											<Typography color="text.secondary">
												Nenhum produto encontrado
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							) : (
								sortedProdutos.map((p) => (
									<TableRow
										key={p.id}
										hover
										sx={{ "&:last-child td": { border: 0 } }}
									>
										<TableCell>
											<Typography
												variant="body2"
												sx={{ fontFamily: "monospace" }}
											>
												{p.codigo}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography
												variant="body2"
												sx={{ fontFamily: "monospace" }}
											>
												{p.ordem}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" fontWeight={500}>
												{p.nome}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{p.categoria}
											</Typography>
										</TableCell>
										<TableCell>
											<Chip
												label={p.usa ? "Sim" : "Não"}
												color={p.usa ? "info" : "default"}
												size="small"
											/>
										</TableCell>
										<TableCell>
											<Chip
												label={p.cme ? "Sim" : "Não"}
												color={p.cme ? "info" : "default"}
												size="small"
											/>
										</TableCell>
										<TableCell>
											<Chip
												label={p.active ? "Ativo" : "Inativo"}
												color={p.active ? "success" : "error"}
												size="small"
											/>
										</TableCell>
										<TableCell align="center">
											<ButtonActionTable row={p} />
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
							{filtered.length} produto{filtered.length !== 1 ? "s" : ""}{" "}
							encontrado{filtered.length !== 1 ? "s" : ""}
						</Typography>
					</Box>
				)}
			</Paper>
		</Box>
	);
}
