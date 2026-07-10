import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import ApartmentIcon from "@mui/icons-material/Apartment";

import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import useSnackBar from "@/Hooks/useSnackBar";
import { useUpdateSetor } from "@/Hooks/useSetores";
import type { Setor, SetorSchemaInputUpdate } from "@/Types/Setor";
import Form from "../components/Form";
import { setorSchemaUpdate } from "@/Schemas/Setor.schemas";

const FORM_ID = "setor-edit-form";

export default function EditSetor({
	open,
	onClose,
	setor,
}: {
	open: boolean;
	onClose: () => void;
	setor: Setor | null;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdateSetor();

	const methods = useForm<SetorSchemaInputUpdate>({
		resolver: zodResolver(setorSchemaUpdate),
		values: setor
			? { id: setor.id, nome: setor.nome, nomeVisivel: setor.nomeVisivel }
			: { id: "", nome: "", nomeVisivel: "" },
	});
	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<SetorSchemaInputUpdate> = useCallback(
		async (values) => {
			if (!setor) return;
			await mutateAsync(values);
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[setor],
	);

	const onError: SubmitErrorHandler<SetorSchemaInputUpdate> =
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
			title="Editar Setor"
			icon={<ApartmentIcon />}
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
