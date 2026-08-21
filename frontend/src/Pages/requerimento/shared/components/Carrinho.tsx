import React, { useCallback } from "react";
import {
	Box,
	Chip,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import type {
	RequerimentoCreatePayload,
	RequerimentoFormValues,
	Requerimento,
	TipoRequerimento,
} from "@/Types/Requerimento";
import { CartItem } from "../RequerimentoPage";
import ChipItensCarrinho from "@/Components/Chip/ChipItensCarrinho";
import ButtonsCarrinho from "./ButtonsCarrinho";
import ButtonsStatus from "./ButtonsStatus";

interface RequerimentoPageProps {
	tipo: TipoRequerimento;
	cart: CartItem[];
	setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
	buildPayload: (values: RequerimentoFormValues) => RequerimentoCreatePayload;
	resetForm?: () => void;
	requerimento?: Requerimento;
}

export default function Carrinho({
	tipo,
	cart,
	setCart,
	buildPayload,
	resetForm,
	requerimento,
}: RequerimentoPageProps) {
	function removeFromCart(id: string) {
		setCart((prev) => prev.filter((c) => getCartItemKey(c) !== id));
	}

	function updateQty(id: string, qty: number) {
		if (qty < 1) {
			removeFromCart(id);
			return;
		}
		setCart((prev) =>
			prev.map((c) =>
				getCartItemKey(c) === id ? { ...c, quantidade: qty } : c,
			),
		);
	}

	function updateOcorrencia(id: string, value: string) {
		setCart((prev) =>
			prev.map((c) =>
				getCartItemKey(c) === id ? { ...c, ocorrencia: value } : c,
			),
		);
	}

	function getCartItemKey(item: CartItem) {
		return item.cartItemId ?? item.requerimentoItemId ?? item.itemId;
	}

	function duplicateMedication(item: CartItem) {
		setCart((prev) => {
			const index = prev.findIndex(
				(currentItem) => getCartItemKey(currentItem) === getCartItemKey(item),
			);

			const duplicatedItem: CartItem = {
				...item,
				cartItemId: crypto.randomUUID(),
				requerimentoItemId: undefined,
				quantidade: 1,
				ocorrencia: "",
			};

			return [
				...prev.slice(0, index + 1),
				duplicatedItem,
				...prev.slice(index + 1),
			];
		});
	}

	const totalQuantity = cart.reduce(
		(total, item) => total + item.quantidade,
		0,
	);

	return (
		<Paper
			sx={{
				p: 2,
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 1,
					mb: 1.5,
				}}
			>
				<ShoppingCartIcon fontSize="small" color="primary" />
				<Typography variant="subtitle1" fontWeight={600}>
					Resumo do Pedido
				</Typography>
				<ChipItensCarrinho
					qnt={cart.length}
					size="medium"
					color={cart.length > 0 ? "primary" : "default"}
				/>
				{cart.length > 0 && (
					<Chip
						label={`${totalQuantity} unidade(s)`}
						size="small"
						variant="outlined"
					/>
				)}
			</Box>

			{cart.length === 0 ? (
				<Box
					sx={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						color: "text.disabled",
						gap: 1,
					}}
				>
					<ShoppingCartIcon sx={{ fontSize: 48 }} />
					<Typography variant="body2">Nenhum item adicionado</Typography>
				</Box>
			) : (
				<TableContainer
					sx={{ maxHeight: { xs: "55dvh", md: "calc(100dvh - 320px)" } }}
				>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell>Nome</TableCell>
								<TableCell>Qnt</TableCell>
								{tipo === "Farmacia" && (
									<TableCell align="center">Ocorrência</TableCell>
								)}
								<TableCell align="center">#</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{cart.map((item) => (
								<React.Fragment key={getCartItemKey(item)}>
									<TableRow>
										<TableCell
											sx={{
												pb: tipo === "Farmacia" ? 0.5 : undefined,
											}}
										>
											<Typography variant="body2" fontWeight={500}>
												{item.nome}
											</Typography>
											<Typography variant="caption" color="text.secondary">
												{item.codigo} - {item.categoria}
											</Typography>
										</TableCell>
										<TableCell
											sx={{
												width: 80,
												pb: tipo === "Farmacia" ? 0.5 : undefined,
											}}
										>
											<TextField
												type="number"
												size="small"
												value={item.quantidade}
												onChange={(e) =>
													updateQty(
														getCartItemKey(item),
														parseInt(e.target.value, 10) || 1,
													)
												}
												inputProps={{
													min: 1,
													style: {
														textAlign: "center",
														padding: "4px 6px",
													},
												}}
												sx={{ width: 64 }}
											/>
										</TableCell>

										{tipo === "Farmacia" && (
											<TableCell
												sx={{
													width: 80,
													pb: tipo === "Farmacia" ? 0.5 : undefined,
												}}
											>
												<TextField
													size="small"
													fullWidth
													value={item.ocorrencia ?? ""}
													error={
														tipo === "Farmacia" && !item.ocorrencia?.trim()
													}
													onChange={(e) =>
														updateOcorrencia(
															getCartItemKey(item),
															e.target.value,
														)
													}
													inputProps={{
														min: 1,
														style: {
															textAlign: "center",
															padding: "4px 6px",
														},
													}}
												/>
											</TableCell>
										)}
										<TableCell
											sx={{
												width: 100,
												pb: tipo === "Farmacia" ? 0.5 : undefined,
											}}
										>
											<IconButton
												type="button"
												size="small"
												color="error"
												onClick={() => removeFromCart(getCartItemKey(item))}
											>
												<DeleteIcon fontSize="small" />
											</IconButton>
											{tipo === "Farmacia" && (
												<IconButton
													type="button"
													size="small"
													color="primary"
													aria-label={`Duplicar medicamento ${item.nome}`}
													onClick={() => duplicateMedication(item)}
												>
													<ContentCopyIcon fontSize="small" />
												</IconButton>
											)}
										</TableCell>
									</TableRow>
								</React.Fragment>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}

			{!requerimento?.status || requerimento.status === "Rascunho" ? (
				<Box
					sx={{
						display: "flex",
						gap: 1,
						mt: 2,
						flexDirection: "column",
					}}
				>
					<ButtonsCarrinho
						cart={cart}
						buildPayload={buildPayload}
						resetForm={resetForm}
						tipo={tipo}
						requerimento={requerimento}
						setCart={setCart}
					/>
				</Box>
			) : (
				!["Finalizado", "Cancelado"].includes(requerimento?.status) && (
					<Box
						sx={{
							display: "flex",
							gap: 1,
							mt: 2,
							flexDirection: "column",
						}}
					>
						<ButtonsStatus requerimento={requerimento} tipo={tipo} />
						<ButtonsCarrinho
							cart={cart}
							buildPayload={buildPayload}
							resetForm={resetForm}
							tipo={tipo}
							requerimento={requerimento}
							setCart={setCart}
						/>
					</Box>
				)
			)}
		</Paper>
	);
}
