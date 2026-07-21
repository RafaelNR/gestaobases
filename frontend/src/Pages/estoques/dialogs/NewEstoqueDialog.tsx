import { useCallback } from "react";
import { Button } from "@mui/material";
import { useCreateEstoque } from "@/Hooks/useEstoques";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { EstoqueCreateSchemaInput } from "@/Types/Estoque";
import { zodResolver } from "@hookform/resolvers/zod";
import { estoqueCreateSchema } from "@/Schemas/Estoque.schemas";

import { usePermissions } from "@/Hooks/usePermissions";
import { ESTOQUES_PERMISSIONS } from "@/Guard/PermissionGroups";
import AppDialog from "@/Components/Dialog/AppDialog";
import { LoadingButton } from "@mui/lab";
import Form from "../components/forms/FormNewEstoque";
import SaveIcon from "@mui/icons-material/Save";
import MyFormProvider from "@/Components/Form/FormProvider";
import useSnackBar from "@/Hooks/useSnackBar";

const FORM_ID = "form-new-estoque";

export default function NewEstoqueDialog({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const { handleSnackBar } = useSnackBar();
	const mutation = useCreateEstoque();
	const { user, can } = usePermissions();

	const allBases = can(ESTOQUES_PERMISSIONS.BASES);
	const addProduto = can(ESTOQUES_PERMISSIONS.ADD_PRODUTO);
	const addMedicamento = can(ESTOQUES_PERMISSIONS.ADD_MEDICAMENTO);

	const methods = useForm<EstoqueCreateSchemaInput>({
		resolver: zodResolver(estoqueCreateSchema as any),
		values: {
			baseId: allBases ? null : user?.baseId || null,
			quantidadeMinima: 0,
			kind: addProduto && !addMedicamento ? "produto" : "medicamento",
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

	const onSubmit: SubmitHandler<EstoqueCreateSchemaInput> = useCallback(
		async (values) => {
			console.log(values);
			await mutation.mutateAsync({
				baseId: values.baseId,
				quantidadeMinima: values.quantidadeMinima,
				kind: values.kind,
				...(values.kind === "produto"
					? { produtoId: values.produtoId }
					: { medicamentoId: values.medicamentoId }),
			});
			reset();
			onClose();
		},
		[],
	);

	const onError: SubmitErrorHandler<EstoqueCreateSchemaInput> = useCallback(
		async (error) => {
			console.log(error);
			console.log(getValues());

			if (error.kind) {
			}

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
			title="Adicionar ao estoque"
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
				Form={
					<Form
						allBases={allBases}
						addMedicamento={addMedicamento}
						addProduto={addProduto}
					/>
				}
				onSubmit={handleSubmit(onSubmit, onError)}
			/>
		</AppDialog>
	);
}
