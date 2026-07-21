import { useCallback } from "react";
import { Button, Typography } from "@mui/material";
import { useMovimentarEstoque } from "@/Hooks/useEstoques";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import {
	EstoqueItem,
	EstoqueLote,
	EstoqueLoteCreateSchemaInput,
	MovimentacaoCreateSchemaInput,
} from "@/Types/Estoque";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	loteCreateSchema,
	movimentacaoCreatedSchema,
} from "@/Schemas/Estoque.schemas";

import AppDialog from "@/Components/Dialog/AppDialog";
import { LoadingButton } from "@mui/lab";
import Form from "../components/forms/FormMovimentacao";
import SaveIcon from "@mui/icons-material/Save";
import MyFormProvider from "@/Components/Form/FormProvider";
import useSnackBar from "@/Hooks/useSnackBar";
import { DateFormat } from "@/Utils/dates";

const FORM_ID = "form-movimentacao";

export default function MovimentacaoDialog({
	open,
	onClose,
	lote,
	item,
}: {
	open: boolean;
	onClose: () => void;
	lote: EstoqueLote;
	item: EstoqueItem;
}) {
	const { handleSnackBar } = useSnackBar();
	const mutation = useMovimentarEstoque();

	const methods = useForm<MovimentacaoCreateSchemaInput>({
		resolver: zodResolver(movimentacaoCreatedSchema as any),
		values: {
			quantidade: 1,
			tipo: "Entrada",
			loteId: lote?.id,
			observacao: "",
		},
		resetOptions: {
			keepDirtyValues: true,
			keepErrors: true,
		},
	});

	const {
		reset,
		getValues,
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<MovimentacaoCreateSchemaInput> = useCallback(
		async (values) => {
			await mutation.mutateAsync(values);
			reset();
			onClose();
		},
		[mutation, lote, onClose, reset],
	);

	const onError: SubmitErrorHandler<MovimentacaoCreateSchemaInput> =
		useCallback(async (error) => {
			console.log(error);
			console.log(getValues());

			handleSnackBar({
				type: "error",
				message: "Algum valor do formulário está incorreto.",
			});
		}, []);

	const handleClose = () => {
		reset();
		onClose();
	};

	return (
		<AppDialog
			open={open}
			onClose={handleClose}
			title={
				<>
					Movimentar Lote:{" "}
					<Typography variant="body1">
						Lote: {lote.lote ?? "Sem Lote"} - Validade:{" "}
						{lote.validade
							? DateFormat(lote.validade, "DD/MM/YYYY")
							: "Sem Validade"}
					</Typography>
					<Typography variant="body1">
						Item: {item.Produto?.nome ?? item.Medicamento?.nome}
					</Typography>
				</>
			}
			maxWidth="sm"
			actions={
				<>
					<Button onClick={handleClose} disabled={isSubmitting}>
						Cancelar
					</Button>
					<LoadingButton
						type="submit"
						form={FORM_ID}
						variant="contained"
						loading={isSubmitting}
						startIcon={<SaveIcon />}
					>
						Salvar
					</LoadingButton>
				</>
			}
		>
			<MyFormProvider
				id={FORM_ID}
				methods={methods}
				isSubmitting={isSubmitting}
				Form={<Form lote={lote} />}
				onSubmit={handleSubmit(onSubmit, onError)}
			/>
		</AppDialog>
	);
}
