import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import useSnackBar from "@/Hooks/useSnackBar";
import { useCreateMedicamento } from "@/Hooks/useMedicamentos";
import Form from "../components/Form";
import { medicamentoSchema } from "@/Schemas/Medicamento.schemas";
import type { MedicamentoSchemaInput } from "@/Types/Medicamento";
import DialogButtonsAction from "@/Components/Dialog/DialogButtons";

const FORM_ID = "medicamento-new-form";

export default function NewMedicamento({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useCreateMedicamento();

	const methods = useForm<MedicamentoSchemaInput>({
		resolver: zodResolver(medicamentoSchema),
		defaultValues: {
			nome: "",
			codigo: 0,
			especificacao: "",
			categoria: "",
			descricao: "",
		},
	});
	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<MedicamentoSchemaInput> = useCallback(
		async (values) => {
			await mutateAsync({
				...values,
				descricao: values.descricao || null,
			});
			reset();
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	const onError: SubmitErrorHandler<MedicamentoSchemaInput> =
		useCallback(() => {
			handleSnackBar({
				type: "error",
				message: "Preencha os campos obrigatórios.",
			});
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
			title="Novo Medicamento"
			icon={<MedicalServicesIcon />}
			maxWidth="md"
			actions={
				<DialogButtonsAction
					FORM_ID={FORM_ID}
					handleClose={handleClose}
					isSubmitting={isSubmitting}
					fechar
				/>
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
