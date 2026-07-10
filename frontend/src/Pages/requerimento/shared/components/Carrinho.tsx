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
import { LoadingButton } from "@mui/lab";
import { useFormContext } from "react-hook-form";
import type {
	FieldErrors,
	SubmitErrorHandler,
	SubmitHandler,
} from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
	useCreateRequerimento,
	useUpdateRequerimento,
} from "@/Hooks/useRequerimentos";
import snackBar from "@/Hooks/useSnackBar";
import type {
	RequerimentoCreatePayload,
	RequerimentoFormValues,
	Requerimento,
	TipoRequerimento,
} from "@/Types/Requerimento";
import { CartItem } from "../RequerimentoPage";
import ChipItensCarrinho from "@/Components/Chip/ChipItensCarrinho";
import ButtonsCarrinho from "./ButtonsCarrinho";
import ButtonsEdit from "./ButtonsEdit";

type RequerimentoCartFormItem = {
	id?: string;
	produtoId?: string;
	medicamentoId?: string;
	quantidade: number;
	ocorrencia?: string;
};

type RequerimentoCarrinhoFormValues = RequerimentoFormValues & {
	itens: RequerimentoCartFormItem[];
};

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
		setCart((prev) => prev.filter((c) => c.itemId !== id));
	}

	function updateQty(id: string, qty: number) {
		if (qty < 1) {
			removeFromCart(id);
			return;
		}
		setCart((prev) =>
			prev.map((c) => (c.itemId === id ? { ...c, quantidade: qty } : c)),
		);
	}

	function updateOcorrencia(id: string, value: string) {
		setCart((prev) =>
			prev.map((c) => (c.itemId === id ? { ...c, ocorrencia: value } : c)),
		);
	}

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
					Carrinho
				</Typography>
				<ChipItensCarrinho
					qnt={cart.length}
					size="medium"
					color={cart.length > 0 ? "primary" : "default"}
				/>
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
								<React.Fragment key={item.itemId}>
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
														item.itemId,
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
													onChange={(e) =>
														updateOcorrencia(item.itemId, e.target.value)
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
												width: 36,
												pb: tipo === "Farmacia" ? 0.5 : undefined,
											}}
										>
											<IconButton
												type="button"
												size="small"
												color="error"
												onClick={() => removeFromCart(item.itemId)}
											>
												<DeleteIcon fontSize="small" />
											</IconButton>
										</TableCell>
									</TableRow>
								</React.Fragment>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}

			{requerimento?.status &&
			!["Finalizado", "Cancelado"].includes(requerimento?.status) ? (
				<Box
					sx={{
						display: "flex",
						gap: 1,
						mt: 2,
						flexDirection: "column",
					}}
				>
					{requerimento?.id ? (
						<ButtonsEdit
							cart={cart}
							buildPayload={buildPayload}
							resetForm={resetForm}
							tipo={tipo}
							requerimento={requerimento}
						/>
					) : (
						<ButtonsCarrinho
							cart={cart}
							buildPayload={buildPayload}
							resetForm={resetForm}
							tipo={tipo}
							requerimento={requerimento}
							setCart={setCart}
						/>
					)}
				</Box>
			) : (
				<Box
					sx={{
						display: "flex",
						gap: 1,
						mt: 2,
						flexDirection: "column",
					}}
				>
					{requerimento?.id ? (
						<ButtonsEdit
							cart={cart}
							buildPayload={buildPayload}
							resetForm={resetForm}
							tipo={tipo}
							requerimento={requerimento}
						/>
					) : (
						<ButtonsCarrinho
							cart={cart}
							buildPayload={buildPayload}
							resetForm={resetForm}
							tipo={tipo}
							requerimento={requerimento}
							setCart={setCart}
						/>
					)}
				</Box>
			)}
		</Paper>
	);
}
