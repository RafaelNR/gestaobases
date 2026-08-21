import {
	useMemo,
	useRef,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react";
import {
	IconButton,
	InputAdornment,
	Paper,
	Chip,
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
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

import { useGetProdutos } from "@/Hooks/useProdutos";
import { useGetMedicamentos } from "@/Hooks/useMedicamentos";

import type { TipoRequerimento } from "@/Types/Requerimento";
import type { Produto } from "@/Types/Produto";
import type { Medicamento } from "@/Types/Medicamento";
import { CartItem } from "../RequerimentoPage";
import useAuth, { useMe } from "@/Hooks/useAuth";

type CatalogEntry = {
	id: string;
	nome: string;
	codigo: number;
	categoria: string;
	usa?: boolean;
};

interface RequerimentoPageProps {
	tipo: TipoRequerimento;
	cart: CartItem[];
	setCart: Dispatch<SetStateAction<CartItem[]>>;
}

export default function Catalogo({
	tipo,
	cart,
	setCart,
}: RequerimentoPageProps) {
	const { user } = useAuth();
	const [search, setSearch] = useState("");
	const removeTimeouts = useRef<Record<string, NodeJS.Timeout>>({});

	const isUsa = ["USA", "USA_USB"].includes(user?.Base.tipo_ambulancias || "")
		? true
		: false;

	const { data: produtos = [] } = useGetProdutos();
	const { data: medicamentos = [] } = useGetMedicamentos();

	const catalogEntries: CatalogEntry[] = useMemo(() => {
		if (!user) {
			return [];
		}

		if (tipo === "Farmacia") {
			return (medicamentos as Medicamento[])
				.filter((m) => m.active)
				.map((m) => ({
					id: m.id,
					nome: m.nome,
					codigo: m.codigo,
					categoria: m.categoria,
				}));
		}
		if (tipo === "CME") {
			return (produtos as Produto[])
				.filter((p) => p.active && p.cme && (isUsa || !p.usa))
				.map((p) => ({
					id: p.id,
					nome: p.nome,
					codigo: p.codigo,
					categoria: p.categoria,
					usa: p.usa,
				}));
		}
		return (produtos as Produto[])
			.filter((p) => p.active && (isUsa || !p.usa))
			.map((p) => ({
				id: p.id,
				nome: p.nome,
				codigo: p.codigo,
				categoria: p.categoria,
				usa: p.usa,
			}));
	}, [tipo, produtos, medicamentos, isUsa, user]);

	const filteredCatalog = useMemo(() => {
		const q = search.toLowerCase();
		if (!q) return catalogEntries;
		return catalogEntries.filter(
			(e) =>
				e.nome.toLowerCase().includes(q) ||
				String(e.codigo).toLowerCase().includes(q),
		);
	}, [catalogEntries, search]);

	const totalQuantity = useMemo(
		() => cart.reduce((total, item) => total + item.quantidade, 0),
		[cart],
	);

	function getCartItem(id: string) {
		return cart.find((c) => c.itemId === id) ?? null;
	}

	function getCartItemKey(item: CartItem) {
		return item.cartItemId ?? item.requerimentoItemId ?? item.itemId;
	}

	function duplicateMedication(entry: CatalogEntry) {
		setCart((prev) => {
			const item = prev.find((cartItem) => cartItem.itemId === entry.id);
			if (!item) return prev;

			return [
				...prev,
				{
					...item,
					cartItemId: crypto.randomUUID(),
					requerimentoItemId: undefined,
					quantidade: 1,
					ocorrencia: "",
				},
			];
		});
	}

	function removeFromCart(entry: CatalogEntry) {
		if (removeTimeouts.current[entry.id]) {
			clearTimeout(removeTimeouts.current[entry.id]);
			delete removeTimeouts.current[entry.id];
		}

		setCart((prev) => {
			const index = prev.findIndex((item) => item.itemId === entry.id);
			return index < 0
				? prev
				: prev.filter((_, itemIndex) => itemIndex !== index);
		});
	}

	function updateCartQuantity(entry: CatalogEntry, quantidade: number) {
		// Se voltar para >= 1, cancela a remoção pendente
		if (quantidade >= 1 && removeTimeouts.current[entry.id]) {
			clearTimeout(removeTimeouts.current[entry.id]);
			delete removeTimeouts.current[entry.id];
		}

		if (quantidade <= 0 || !quantidade) {
			// Evita criar múltiplos timeouts
			if (!removeTimeouts.current[entry.id]) {
				removeTimeouts.current[entry.id] = setTimeout(() => {
					setCart((prev) => {
						let removed = false;
						return prev.filter((c) => {
							if (!removed && c.itemId === entry.id) {
								removed = true;
								return false;
							}
							return true;
						});
					});

					delete removeTimeouts.current[entry.id];
				}, 2000);
			}
		}

		setCart((prev) => {
			const existingIndex = prev.findIndex((c) => c.itemId === entry.id);
			const existing = existingIndex >= 0 ? prev[existingIndex] : undefined;

			if (existing) {
				const existingKey = getCartItemKey(existing);
				return prev.map((c) =>
					getCartItemKey(c) === existingKey ? { ...c, quantidade } : c,
				);
			}

			return [
				...prev,
				{
					cartItemId: crypto.randomUUID(),
					itemId: entry.id,
					nome: entry.nome,
					codigo: entry.codigo,
					categoria: entry.categoria,
					quantidade,
					ocorrencia: "",
				},
			];
		});
	}

	return (
		<Paper sx={{ p: 2 }}>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				mb={1.5}
			>
				<Typography variant="subtitle1" fontWeight={600}>
					Catálogo {tipo}
				</Typography>
				<Stack direction="row" gap={0.75}>
					<Chip
						label={`${cart.length} item(ns)`}
						color={cart.length > 0 ? "primary" : "default"}
						size="small"
					/>
					{cart.length > 0 && (
						<Chip label={`${totalQuantity} unidade(s)`} size="small" />
					)}
				</Stack>
			</Stack>
			<TextField
				size="small"
				fullWidth
				placeholder="Buscar por nome ou código..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon fontSize="small" />
						</InputAdornment>
					),
				}}
				sx={{ mb: 1.5 }}
			/>
			<TableContainer
				sx={{ maxHeight: { xs: "55dvh", md: "calc(100dvh - 180px)" } }}
			>
				<Table size="small" stickyHeader>
					<TableHead>
						<TableRow>
							<TableCell>Código</TableCell>
							<TableCell>Nome</TableCell>
							<TableCell align="center" sx={{ width: 130 }}>
								Qtd
							</TableCell>
							<TableCell align="center" sx={{ width: 150 }}>
								Ações
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredCatalog.map((entry) => {
							const cartItem = getCartItem(entry.id);
							return (
								<TableRow
									key={entry.id}
									sx={{
										bgcolor: cartItem ? "action.selected" : "inherit",
									}}
								>
									<TableCell>{entry.codigo}</TableCell>
									<TableCell>
										<Typography variant="body2" fontWeight={500}>
											{entry.nome}
										</Typography>
										<Typography variant="caption" color="text.secondary">
											{entry.categoria}
										</Typography>
									</TableCell>
									<TableCell align="center">
										{cartItem ? (
											<TextField
												size="small"
												value={cartItem.quantidade}
												onChange={(event) =>
													updateCartQuantity(
														entry,
														Number.parseInt(event.target.value, 10) || 0,
													)
												}
												inputProps={{
													min: 0,
													style: {
														textAlign: "center",
														padding: "4px 6px",
													},
												}}
												sx={{ width: 72 }}
											/>
										) : (
											"—"
										)}
									</TableCell>
									<TableCell align="center">
										{cartItem ? (
											<>
												<IconButton
													type="button"
													size="small"
													color="error"
													aria-label={`Remover ${entry.nome} do carrinho`}
													onClick={() => removeFromCart(entry)}
												>
													<DeleteIcon fontSize="small" />
												</IconButton>
												{tipo === "Farmacia" && (
													<IconButton
														type="button"
														size="small"
														color="primary"
														aria-label={`Duplicar medicamento ${entry.nome}`}
														onClick={() => duplicateMedication(entry)}
													>
														<ContentCopyIcon fontSize="small" />
													</IconButton>
												)}
											</>
										) : (
											<IconButton
												type="button"
												size="small"
												color="primary"
												aria-label={`Adicionar ${entry.nome} ao carrinho`}
												onClick={() => updateCartQuantity(entry, 1)}
											>
												<AddIcon fontSize="small" />
											</IconButton>
										)}
									</TableCell>
								</TableRow>
							);
						})}
						{filteredCatalog.length === 0 && (
							<TableRow>
								<TableCell
									colSpan={4}
									align="center"
									sx={{ py: 3, color: "text.secondary" }}
								>
									Nenhum item encontrado
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
}
