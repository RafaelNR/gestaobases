import { useCallback, useEffect } from "react";
import MyFormProvider from "@/Components/Form/FormProvider";
//* COMPONENTS
import { CircularProgress, Box, Button } from "@mui/material";
import Form from "../components/Form";
import SaveIcon from "@mui/icons-material/Save";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LoadingButton from "@mui/lab/LoadingButton";

//* SCHEMAS
import { usuarioUpdateSchema } from "@/Schemas/Usuarios.schemas";

//* SCHEMAS
import { Usuario, UsuarioUpdateSchemaInput } from "@/Types/Usuarios";

//* HOOKS
import { zodResolver } from "@hookform/resolvers/zod";
import {
	FormProvider,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from "react-hook-form";

//* HOOKS
import useSnackBar from "@/Hooks/useSnackBar";
import { useUpdateUsuario } from "@/Hooks/useUsuarios";
import AppDialog from "@/Components/Dialog/AppDialog";

const FORM_ID = "usuario-edit-form";

export default function EditUsuario({
	open,
	onClose,
	usuario,
}: {
	open: boolean;
	onClose: () => void;
	usuario?: Usuario | null | undefined;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdateUsuario();

	const methods = useForm<UsuarioUpdateSchemaInput>({
		resolver: zodResolver(usuarioUpdateSchema as any),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		values: { ...usuario, password: "********" } as any,
		resetOptions: {
			keepDirtyValues: true,
			keepErrors: true,
		},
	});

	const {
		reset,
		handleSubmit,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<UsuarioUpdateSchemaInput> = useCallback(
		async (values) => {
			if (!usuario) return;
			await mutateAsync({ ...values, id: usuario.id });
			onClose();
		},
		//eslint-disable-next-line
		[usuario, onClose],
	);

	const onError: SubmitErrorHandler<UsuarioUpdateSchemaInput> = useCallback(
		async (error) => {
			console.log(error);
			handleSnackBar({
				type: "error",
				message: "Algum valor do formulário está incorreto.",
			});
		},
		//eslint-disable-next-line
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
			title="Editar Usuário"
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
