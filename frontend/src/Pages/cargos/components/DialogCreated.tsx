import { useCallback } from "react";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import WorkIcon from "@mui/icons-material/Work";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from "react-hook-form";

import AppDialog from "@/Components/Dialog/AppDialog";
import MyFormProvider from "@/Components/Form/FormProvider";
import { useCreateCargo } from "@/Hooks/useCargos";
import useSnackBar from "@/Hooks/useSnackBar";
import { cargoInsertSchema } from "@/Schemas/Cargo.schemas";
import type { CargoSchemaInsert } from "@/Types/Cargo";
import CargoForm from "./Form";

const FORM_ID = "cargo-created-form";

export default function DialogCreated({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useCreateCargo();

	const methods = useForm<CargoSchemaInsert>({
		resolver: zodResolver(cargoInsertSchema),
		defaultValues: { nome: "", nomeVisivel: "", setor: "" },
	});

	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<CargoSchemaInsert> = useCallback(
		async (values) => {
			await mutateAsync(values);
			reset();
			onClose();
		},
		[mutateAsync, onClose, reset],
	);

	const onError: SubmitErrorHandler<CargoSchemaInsert> = useCallback(() => {
		handleSnackBar({
			type: "error",
			message: "Preencha os campos obrigatórios.",
		});
	}, [handleSnackBar]);

	const handleClose = () => {
		reset();
		onClose();
	};

	return (
		<AppDialog
			open={open}
			onClose={handleClose}
			title="Novo Cargo"
			icon={<WorkIcon />}
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
				Form={<CargoForm />}
				onSubmit={handleSubmit(onSubmit, onError)}
			/>
		</AppDialog>
	);
}
