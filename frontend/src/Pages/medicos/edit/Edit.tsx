import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import useSnackBar from "@/Hooks/useSnackBar";
import { useUpdateMedico } from "@/Hooks/useMedicos";
import type { Medico, MedicoSchemaInput } from "@/Types/Medico";
import Form from "../components/Form";
import { medicoSchema } from "@/Schemas/Medico.schemas";


const FORM_ID = "medico-edit-form";

export default function EditMedico({
	open,
	onClose,
	medico,
}: {
	open: boolean;
	onClose: () => void;
	medico: Medico | null;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdateMedico();

	const methods = useForm<MedicoSchemaInput>({
		resolver: zodResolver(medicoSchema),
		values: medico
			? {
					nome: medico.nome,
					crm: medico.crm,
					telefone: medico.telefone ?? "",
					email: medico.email ?? "",
				}
			: { nome: "", crm: "", telefone: "", email: "" },
	});
	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<MedicoSchemaInput> = useCallback(
		async (values) => {
			if (!medico) return;
			await mutateAsync({
				id: medico.id,
				nome: values.nome,
				crm: values.crm,
				telefone: values.telefone || null,
				email: values.email || null,
			});
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[medico],
	);

	const onError: SubmitErrorHandler<MedicoSchemaInput> = useCallback(() => {
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
			title="Editar Médico"
			icon={<LocalHospitalIcon />}
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
