import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import useSnackBar from "@/Hooks/useSnackBar";
import { useCreateAmbulancia } from "@/Hooks/useAmbulancias";
import Form from "../components/Form";
import { AmbulanciaInsertSchemaInput, TipoUnidade } from "@/Types/Ambulancia";
import { ambulanciaInsertSchema } from "@/Schemas/Ambulancia.schemas";

const FORM_ID = "ambulancia-new-form";

export default function NewAmbulancia({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useCreateAmbulancia();

	const methods = useForm<AmbulanciaInsertSchemaInput>({
		resolver: zodResolver(ambulanciaInsertSchema),
		defaultValues: { nome: "", tipo: TipoUnidade.USA, baseId: "" },
	});
	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<AmbulanciaInsertSchemaInput> = useCallback(
		async (values) => {
			await mutateAsync(values);
			reset();
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	const onError: SubmitErrorHandler<AmbulanciaInsertSchemaInput> =
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
			title="Nova Ambulância"
			icon={<DirectionsCarIcon />}
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
