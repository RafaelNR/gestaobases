import { useCallback } from "react";
import { Typography, Box, Button, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ButtonLoading from "@/Components/Button/Loading";
import CPFTextField from "@/Components/TextField/CPFController";

//* SCHEMAS
import { recuperarSchema } from "@/Schemas/Registro.schemas";

//* SCHEMAS
import { IRecuperar } from "@/Types/Registro";

//* HOOKS
import { zodResolver } from "@hookform/resolvers/zod";
import {
	FormProvider,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from "react-hook-form";

//* CONTEXT
import useRegistro from "@/Hooks/useRegistro";
import useRecaptchaV3 from "@/Hooks/useReCaptchaV3";
import TextFieldController from "@/Components/TextField/TextFieldController";
import { useNavigate } from "react-router";

export default function Form() {
	const theme = useTheme();
	const navigate = useNavigate();
	const { recuperar, recuperaSubmit, setAlerta } = useRegistro();
	const { executeRecaptcha } = useRecaptchaV3();

	const methods = useForm<IRecuperar>({
		resolver: zodResolver(recuperarSchema),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		values: recuperar as any,
		resetOptions: {
			keepDirtyValues: true,
			keepErrors: true,
		},
	});

	const {
		handleSubmit,
		formState: { isSubmitting, isSubmitSuccessful },
	} = methods;

	const onSubmitHandler: SubmitHandler<IRecuperar> = useCallback(
		async (values) => {
			const recaptcha: string = await executeRecaptcha("recuperar");
			if (recaptcha) {
				await recuperaSubmit({
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

	const onError: SubmitErrorHandler<IRecuperar> = useCallback(
		async (error) => {
			console.log(error);
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
						mb: 2,
					}}
				>
					Recuperar Senha
				</Typography>
				<TextFieldController
					name="email"
					fullWidth
					required
					label={"Email"}
					sx={{ mb: 2 }}
				/>
				<CPFTextField name={"cpf"} required sx={{ mb: 2 }} />
				<ButtonLoading
					loading={isSubmitting}
					type="submit"
					color={isSubmitSuccessful ? "success" : "primary"}
					fullWidth
					sx={{ mt: 5, mb: 1, p: 1, color: "white" }}
				>
					Recuperar
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
