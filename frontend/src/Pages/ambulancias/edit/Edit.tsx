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
import { useUpdateAmbulancia } from "@/Hooks/useAmbulancias";
import {
	TipoUnidade,
	type Ambulancia,
	type AmbulanciaInsertSchemaInput,
} from "@/Types/Ambulancia";
import Form from "../components/Form";
import { ambulanciaInsertSchema } from "@/Schemas/Ambulancia.schemas";

const FORM_ID = "ambulancia-edit-form";

export default function EditAmbulancia({
	open,
	onClose,
	ambulancia,
}: {
	open: boolean;
	onClose: () => void;
	ambulancia?: Ambulancia | null | undefined;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdateAmbulancia();

	const methods = useForm<AmbulanciaInsertSchemaInput>({
		resolver: zodResolver(ambulanciaInsertSchema),
		values: ambulancia
			? {
					nome: ambulancia.nome,
					tipo: ambulancia.tipo,
					baseId: ambulancia.baseId,
				}
			: { nome: "", tipo: TipoUnidade.USA, baseId: "" },
	});
	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<AmbulanciaInsertSchemaInput> = useCallback(
		async (values) => {
			if (!ambulancia) return;
			await mutateAsync({ id: ambulancia.id, ...values });
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ambulancia],
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
			title="Editar Ambulância"
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
