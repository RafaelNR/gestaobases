import { useState, useCallback } from "react";
import {
	Box,
	TextField,
	InputAdornment,
	IconButton,
	InputLabel,
	Link,
	Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "@/Hooks/useAuth";
import { loginSchema } from "@/Schemas/Login.schemas";
import type { ILogin } from "@/Types/Login";
import ButtonLoading from "@/Components/Button/Loading";

const fieldStyle = {
	color: "#404040",
	border: "1px solid #404040",
	borderRadius: "8px",
};

export default function FormLogin() {
	const [showPassword, setShowPassword] = useState(false);
	const { mutate: login, isPending, error } = useLogin();

	const methods = useForm<ILogin>({
		resolver: zodResolver(loginSchema as any),
		defaultValues: { username: "", password: "" },
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = methods;

	const onSubmit = useCallback(
		(values: ILogin) => {
			login({ username: values.username, password: values.password });
		},
		[login],
	);

	return (
		<FormProvider {...methods}>
			<Box
				component="form"
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit(onSubmit)}
				sx={{ width: { xs: "100%", sm: "100%", lg: "100%" } }}
			>
				{error && (
					<Alert severity="error" sx={{ mb: 2, borderRadius: 3 }}>
						{"message" in error
							? (error as any).message
							: "Usuário ou senha incorretos."}
					</Alert>
				)}

				{/* ─── Usuário ─────────────────────────────────────────────── */}
				<InputLabel
					htmlFor="username"
					sx={{ fontWeight: "bold", mb: 0.5, color: "#404040" }}
					required
					error={!!errors.username}
				>
					Usuário
				</InputLabel>
				<Controller
					name="username"
					control={control}
					render={({ field }) => (
						<TextField
							id="username"
							autoComplete="username"
							variant="outlined"
							size="small"
							fullWidth
							required
							error={!!errors.username}
							helperText={errors.username?.message}
							InputProps={{ style: fieldStyle }}
							sx={{
								mb: 2,
								color: "#404040",
								borderRadius: 2,
							}}
							{...field}
						/>
					)}
				/>

				{/* ─── Senha ───────────────────────────────────────────────── */}
				<InputLabel
					htmlFor="password"
					sx={{ fontWeight: "bold", mb: 0.5, color: "#404040" }}
					required
					error={!!errors.password}
				>
					Senha
				</InputLabel>
				<Controller
					name="password"
					control={control}
					render={({ field }) => (
						<TextField
							id="password"
							type={showPassword ? "text" : "password"}
							autoComplete="current-password"
							variant="outlined"
							size="small"
							fullWidth
							required
							error={!!errors.password}
							helperText={errors.password?.message}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											onClick={() => setShowPassword((p) => !p)}
											edge="end"
											tabIndex={-1}
											size="small"
										>
											{showPassword ? (
												<VisibilityOff sx={{ color: "#404040" }} />
											) : (
												<Visibility sx={{ color: "#404040" }} />
											)}
										</IconButton>
									</InputAdornment>
								),
								style: fieldStyle,
							}}
							sx={{ mb: 1, color: "#404040" }}
							{...field}
						/>
					)}
				/>

				{/* ─── Recuperar Senha ─────────────────────────────────────── */}
				{/* <Link
					href="/recuperar_senha"
					underline="hover"
					variant="body2"
					sx={{ display: "block", mb: 4, color: "text.secondary" }}
				>
					Esqueceu a senha?
				</Link> */}

				<ButtonLoading
					loading={isPending}
					type="submit"
					fullWidth
					sx={{ p: 1.2, borderRadius: 3, fontWeight: "bold", letterSpacing: 1 }}
				>
					ENTRAR
				</ButtonLoading>
			</Box>
		</FormProvider>
	);
}
