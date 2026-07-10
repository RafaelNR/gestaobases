import { useCallback, useEffect } from "react";

//* COMPONENTS
import { Button, CircularProgress } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SaveIcon from "@mui/icons-material/Save";

//* SCHEMAS
import { usuarioInsertSchema } from "@/Schemas/Usuarios.schemas";

import { UsuarioInsertSchemaInput } from "@/Types/Usuarios";

//* HOOKS
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

//* HOOKS
import useSnackBar from "@/Hooks/useSnackBar";
import { useCreateUsuario } from "@/Hooks/useUsuarios";
import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import { LoadingButton } from "@mui/lab";
import Form from "../components/Form";

const FORM_ID = "usuario-new-form";

export default function NewUsuario({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync: createUsuario } = useCreateUsuario();

	const methods = useForm<UsuarioInsertSchemaInput>({
		resolver: zodResolver(usuarioInsertSchema as any),
		values: {
			email: null,
			telefone: null,
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
		formState: { isSubmitting, isSubmitSuccessful },
	} = methods;

	const onSubmit: SubmitHandler<UsuarioInsertSchemaInput> = useCallback(
		async (values) => {
			console.log(values);
			await createUsuario(values);
			reset();
			onClose();
		},
		[],
	);

	const onError: SubmitErrorHandler<UsuarioInsertSchemaInput> = useCallback(
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
			title="Novo Usuário"
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
