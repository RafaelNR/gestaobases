import React, { useCallback } from "react";
import { Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormContext } from "react-hook-form";
import type { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";

import {
	useCreateRequerimento,
	useEnviarRequerimento,
	useUpdateRequerimento,
} from "@/Hooks/useRequerimentos";
import snackBar from "@/Hooks/useSnackBar";
import type {
	RequerimentoCreatePayload,
	RequerimentoFormValues,
	Requerimento,
	TipoRequerimento,
	RequerimentoCarrinhoFormValues,
	RequerimentoCartFormItem,
} from "@/Types/Requerimento";
import { CartItem } from "../RequerimentoPage";
import { getSubmitErrorMessage } from "./getSubmitErrorMessage";
import { useNavigate } from "react-router";

interface ButtonsCarrinhoProps {
	tipo: TipoRequerimento;
	cart: CartItem[];
	setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
	buildPayload: (values: RequerimentoFormValues) => RequerimentoCreatePayload;
	resetForm?: () => void;
	requerimento?: Requerimento;
}

export default function ButtonsCarrinho({
	tipo,
	cart,
	setCart,
	buildPayload,
	resetForm,
	requerimento,
}: ButtonsCarrinhoProps) {
	const { handleSubmit, watch, setValue, reset } =
		useFormContext<RequerimentoCarrinhoFormValues>();
	const ambulancia = watch("ambulancia");
	const navigate = useNavigate();

	const createMutation = useCreateRequerimento(tipo);
	const updateMutation = useUpdateRequerimento(tipo);
	const enviarMutation = useEnviarRequerimento(tipo);

	function clearCart() {
		if (!confirm("Tem certeza que deseja limpar o carrinho?")) return;
		setCart(() => []);
		snackBar.success("Carrinho limpo com sucesso!");
	}

	const isFormValid =
		cart.length > 0 && (tipo !== "Farmacia" || ambulancia !== "");

	function buildFormItems(): RequerimentoCartFormItem[] {
		return cart.map((item) =>
			tipo === "Farmacia"
				? {
						id: item.requerimentoItemId,
						medicamentoId: item.itemId,
						quantidade: item.quantidade,
						ocorrencia: item.ocorrencia ?? "",
					}
				: {
						id: item.requerimentoItemId,
						produtoId: item.itemId,
						quantidade: item.quantidade,
					},
		);
	}

	function syncCartWithForm() {
		setValue("itens", buildFormItems(), {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: false,
		});
	}

	const handleSalvarRascunho: SubmitHandler<RequerimentoCarrinhoFormValues> =
		useCallback(
			async (values: RequerimentoCarrinhoFormValues) => {
				if (requerimento?.id) {
					await updateMutation.mutateAsync({
						id: requerimento.id,
						...buildPayload({ ...values, status: "Rascunho" }),
					});
				} else {
					const newRequerimento = await createMutation.mutateAsync(
						buildPayload({ ...values, status: "Rascunho" }),
					);
					resetForm?.();
					navigate(
						`/requerimentos/${newRequerimento.tipo.toLowerCase()}/edit/${newRequerimento.id}`,
					);
				}
				return;
			},
			[
				buildPayload,
				createMutation,
				requerimento?.id,
				resetForm,
				updateMutation,
			],
		);

	const handleEnviar: SubmitHandler<RequerimentoCarrinhoFormValues> =
		useCallback(
			async (values: RequerimentoCarrinhoFormValues) => {
				const id = requerimento?.id;

				if (id) {
					if (requerimento.status === "Rascunho") {
						await enviarMutation.mutateAsync(id);
						resetForm?.();
						navigate(
							`/requerimentos/${requerimento.tipo.toLowerCase()}/view/${requerimento.id}`,
						);
						return;
					}

					await updateMutation.mutateAsync({
						id,
						...buildPayload(values),
					});
					return;
				}

				const created = await createMutation.mutateAsync(
					buildPayload({ ...values, status: "Recebido" }),
				);
				resetForm?.();
				navigate(
					`/requerimentos/${created.tipo.toLowerCase()}/view/${created.id}`,
				);
			},
			[
				buildPayload,
				createMutation,
				requerimento?.id,
				resetForm,
				updateMutation,
			],
		);

	const onError: SubmitErrorHandler<RequerimentoCarrinhoFormValues> = (
		errors,
	) => {
		console.log(Object.keys(errors));
		console.warn("Falha na validação do requerimento.", {
			tipo,
			campos: Object.keys(errors),
		});

		snackBar.error(getSubmitErrorMessage(tipo, errors));
	};

	const submitWithCart =
		(handler: SubmitHandler<RequerimentoCarrinhoFormValues>) =>
		(event: React.MouseEvent<HTMLButtonElement>) => {
			syncCartWithForm();
			void handleSubmit(handler, onError)(event);
		};

	return (
		<Box
			sx={{
				display: "flex",
				gap: 1,
				mt: 2,
				flexDirection: "column",
			}}
		>
			{(!requerimento?.status || requerimento.status === "Rascunho") && (
				<>
					<LoadingButton
						type="submit"
						variant="outlined"
						color="error"
						fullWidth
						disabled={!isFormValid}
						loading={createMutation.isPending || updateMutation.isPending}
						onClick={clearCart}
					>
						Limpar Carrinho
					</LoadingButton>
					<LoadingButton
						type="submit"
						variant="outlined"
						fullWidth
						disabled={!isFormValid}
						loading={createMutation.isPending || updateMutation.isPending}
						onClick={submitWithCart(handleSalvarRascunho)}
					>
						Salvar Rascunho
					</LoadingButton>
				</>
			)}

			<LoadingButton
				type="submit"
				variant="contained"
				fullWidth
				disabled={!isFormValid}
				loading={createMutation.isPending || updateMutation.isPending}
				startIcon={<SendIcon />}
				onClick={submitWithCart(handleEnviar)}
			>
				{requerimento?.status === "Rascunho" || !requerimento?.status
					? "Enviar Requerimento"
					: "Atualizar Requerimento"}
			</LoadingButton>
		</Box>
	);
}
