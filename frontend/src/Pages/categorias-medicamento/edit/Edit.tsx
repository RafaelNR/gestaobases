import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import MedicationIcon from "@mui/icons-material/Medication";

import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import useSnackBar from "@/Hooks/useSnackBar";
import { useUpdateCategoriasMedicamento } from "@/Hooks/useCategoriasMedicamento";
import type { CategoriasMedicamento, CategoriaMedicamentoSchemaInput } from "@/Types/Medicamento";
import Form from "../components/Form";
import { categoriaMedicamentoSchema } from "@/Schemas/Categoria.schemas";


const FORM_ID = "cat-med-edit-form";

export default function EditCategoriasMedicamento({
	open,
	onClose,
	categoria,
}: {
	open: boolean;
	onClose: () => void;
	categoria: CategoriasMedicamento | null;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdateCategoriasMedicamento();

	const methods = useForm<CategoriaMedicamentoSchemaInput>({
		resolver: zodResolver(categoriaMedicamentoSchema),
		values: categoria
			? { nome: categoria.nome, active: categoria.active }
			: { nome: "", active: true },
	});
	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<CategoriaMedicamentoSchemaInput> = useCallback(
		async (values) => {
			if (!categoria) return;
			await mutateAsync({ id: categoria.id, ...values });
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[categoria],
	);

	const onError: SubmitErrorHandler<CategoriaMedicamentoSchemaInput> = useCallback(() => {
		handleSnackBar({ type: "error", message: "Preencha os campos obrigatórios." });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClose = () => {
		reset();
		onClose();
	};

	return (
		<AppDialog
			open={open}
			onClose={handleClose}
			title="Editar Categoria de Medicamento"
			icon={<MedicationIcon />}
			maxWidth="xs"
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
