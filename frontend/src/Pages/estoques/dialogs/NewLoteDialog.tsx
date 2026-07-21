import { useCallback } from "react";
import { Button } from "@mui/material";
import { useCreateEstoqueLote } from "@/Hooks/useEstoques";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { EstoqueItem, EstoqueLoteCreateSchemaInput } from "@/Types/Estoque";
import { zodResolver } from "@hookform/resolvers/zod";
import { loteCreateSchema } from "@/Schemas/Estoque.schemas";

import AppDialog from "@/Components/Dialog/AppDialog";
import { LoadingButton } from "@mui/lab";
import Form from "../components/forms/FormNewLote";
import SaveIcon from "@mui/icons-material/Save";
import MyFormProvider from "@/Components/Form/FormProvider";
import useSnackBar from "@/Hooks/useSnackBar";

const FORM_ID = "form-new-estoque";

export default function NewEstoqueDialog({
	open,
	onClose,
	item,
}: {
	open: boolean;
	onClose: () => void;
	item: EstoqueItem;
}) {
	const { handleSnackBar } = useSnackBar();
	const mutation = useCreateEstoqueLote();

	const methods = useForm<EstoqueLoteCreateSchemaInput>({
		resolver: zodResolver(loteCreateSchema as any),
		values: {
			estoqueId: item?.id,
			validade: null,
			quantidade: 0,
			lote: null,
		} as any,
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

	const onSubmit: SubmitHandler<EstoqueLoteCreateSchemaInput> = useCallback(
		async (values) => {
			console.log(values);
			await mutation.mutateAsync({
				estoqueId: item.id,
				validade: values.validade,
				quantidade: values.quantidade,
				lote: values.lote,
			});
			reset();
			onClose();
		},
		[],
	);

	const onError: SubmitErrorHandler<EstoqueLoteCreateSchemaInput> = useCallback(
		async (error) => {
			console.log(error);
			console.log(getValues());

			handleSnackBar({
				type: "error",
				message: "Algum valor do formulário está incorreto.",
			});
		},
		[],
	);

	const handleClose = () => {
		reset();
		onClose();
	};

	return (
		<AppDialog
			open={open}
			onClose={handleClose}
			title={`Adicionar Lote - "${item.Produto?.nome ?? item.Medicamento?.nome}"`}
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
				Form={<Form />}
				onSubmit={handleSubmit(onSubmit, onError)}
			/>
		</AppDialog>
	);
}
