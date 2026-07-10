import React, { useCallback } from "react";
import { Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormContext } from "react-hook-form";
import type { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";

import { useUpdateRequerimento } from "@/Hooks/useRequerimentos";
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
import ButtonsStatus from "./ButtonsStatus";

interface ButtonsEditProps {
	tipo: TipoRequerimento;
	cart: CartItem[];
	buildPayload: (values: RequerimentoFormValues) => RequerimentoCreatePayload;
	resetForm?: () => void;
	requerimento?: Requerimento;
}

export default function ButtonsEdit({
	tipo,
	cart,
	buildPayload,
	resetForm,
	requerimento,
}: ButtonsEditProps) {
	const { handleSubmit, setValue } =
		useFormContext<RequerimentoCarrinhoFormValues>();

	const updateMutation = useUpdateRequerimento(tipo);

	const currentStatus = requerimento?.status;
	const isTerminalStatus =
		currentStatus === "Finalizado" || currentStatus === "Cancelado";

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

	const handleEnviar: SubmitHandler<RequerimentoCarrinhoFormValues> =
		useCallback(
			async (values: RequerimentoCarrinhoFormValues) => {
				const id = requerimento?.id;
				if (id) {
					await updateMutation.mutateAsync({
						id,
						...buildPayload({
							...values,
							status: values.status ?? requerimento?.status ?? "Recebido",
						}),
					});
					resetForm?.();
					return;
				}
			},
			[
				buildPayload,
				requerimento?.id,
				requerimento?.status,
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
			<ButtonsStatus tipo={tipo} requerimento={requerimento} />
			{!isTerminalStatus && (
				<LoadingButton
					type="submit"
					variant="contained"
					fullWidth
					loading={updateMutation.isPending}
					startIcon={<SendIcon />}
					onClick={submitWithCart(handleEnviar)}
				>
					Salvar Requerimento
				</LoadingButton>
			)}
		</Box>
	);
}
