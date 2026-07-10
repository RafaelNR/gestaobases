import { useCallback, useEffect, useState } from "react";
import {
	FormHelperText,
	FormControl,
	OutlinedInput,
	InputLabel,
	InputAdornment,
	IconButton,
	Typography,
	Box,
	Button,
	Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ButtonLoading from "@/Components/Button/Loading";

//* SCHEMAS
import { novaSenhaSchema } from "@/Schemas/Registro.schemas";

//* SCHEMAS
import { INovaSenha } from "@/Types/Registro";

//* HOOKS
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Controller,
	FormProvider,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from "react-hook-form";

//* CONTEXT
import useRegistro from "@/Hooks/useRegistro";
import useRecaptchaV3 from "@/Hooks/useReCaptchaV3";
import PasswordField from "@/Components/TextField/PasswordController";
import { useNavigate } from "react-router";

export default function Form({ token }: { token: string }) {
	const theme = useTheme();
	const { novaSenha, changePasswordSubmit, setAlerta } = useRegistro();
	const navigate = useNavigate();
	const { executeRecaptcha } = useRecaptchaV3();

	const methods = useForm<INovaSenha>({
		resolver: zodResolver(novaSenhaSchema as any),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		values: {
			...(novaSenha as any),
			recaptcha: undefined,
			token,
		},
		resetOptions: {
			keepDirtyValues: true,
			keepErrors: true,
		},
	});

	const {
		setValue,
		handleSubmit,
		formState: { isSubmitting, isSubmitSuccessful },
	} = methods;

	const onSubmitHandler: SubmitHandler<INovaSenha> = useCallback(
		async (values) => {
			if (values) {
				const recaptcha = await executeRecaptcha("nova_senha");
				await changePasswordSubmit({
					...values,
					recaptcha,
				});
			} else {
				setAlerta(
					"Erro em validar Recaptcha, atualize a pagina e tente novamente."
				);
			}
		},
		//eslint-disable-next-line
		[]
	);

	const onError: SubmitErrorHandler<INovaSenha> = useCallback(
		async (error) => {
			console.log(error);
			// setAlerta("Valores são invalidos.");
		},
		//eslint-disable-next-line
		[]
	);

	return (
		<FormProvider {...methods}>
			<Box
				component="form"
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit(onSubmitHandler, onError)}
				sx={{
					width: {
						xs: "100%", // mobile
						sm: "80%", // ≥ 600px
						lg: "50%",
					},
				}}
			>
				<Typography
					component="h5"
					variant="h5"
					sx={{
						fontWeight: "bold",
						color: theme.palette.primary.main,
						textAlign: "center",
					}}
				>
					Informe a nova senha
				</Typography>
				<PasswordField
					label="Senha"
					name="password"
					required
					setValue={setValue}
					sx={{ mb: 2 }}
				/>
				<PasswordField
					label="Confirma Senha"
					name="confirma_password"
					required
					setValue={setValue}
				/>
				<ButtonLoading
					loading={isSubmitting}
					type="submit"
					color={isSubmitSuccessful ? "success" : "primary"}
					fullWidth
					sx={{ mt: 5, mb: 1, p: 1, color: "white" }}
				>
					Salvar
				</ButtonLoading>
				<Divider>ou</Divider>
				<Button
					variant="outlined"
					color={"secondary"}
					fullWidth
					onClick={() => navigate("/")}
					sx={{ mt: 1, p: 1 }}
				>
					Voltar
				</Button>
				<Button
					variant="outlined"
					color={"primary"}
					fullWidth
					onClick={() => navigate("/login")}
					sx={{ mt: 1, p: 1 }}
				>
					Acessar Conta
				</Button>
			</Box>
		</FormProvider>
	);
}
