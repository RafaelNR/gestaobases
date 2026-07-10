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
import { useCreateCategoriasMedicamento } from "@/Hooks/useCategoriasMedicamento";
import Form from "../components/Form";
import { categoriaMedicamentoSchema } from "@/Schemas/Categoria.schemas";
import type { CategoriaMedicamentoSchemaInput } from "@/Types/Medicamento";


const FORM_ID = "cat-med-new-form";

export default function NewCategoriasMedicamento({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useCreateCategoriasMedicamento();

	const methods = useForm<CategoriaMedicamentoSchemaInput>({
		resolver: zodResolver(categoriaMedicamentoSchema),
		defaultValues: { nome: "", active: true },
	});
	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<CategoriaMedicamentoSchemaInput> = useCallback(
		async (values) => {
			await mutateAsync(values);
			reset();
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
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
			title="Nova Categoria de Medicamento"
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
