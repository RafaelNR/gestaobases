import { Typography, Box, Divider, Button } from "@mui/material";

import CheckEmail from "/images/check-mail.png";

export default function EmailConfirm() {
	return (
		<Box
			sx={{ mb: 2, width: "100%" }}
			display="flex"
			justifyContent={"center"}
			alignItems={"center"}
			flexDirection={"column"}
		>
			<img
				className="img"
				src={CheckEmail}
				loading="lazy"
				alt="logo"
				width="128px"
			/>
			<Typography
				variant="h5"
				sx={{
					mb: 2,
					color: "green",
					width: "100%",
					textAlign: "center",
				}}
			>
				Enviamos no seu email o link para recuperar sua senha.
			</Typography>
			<Divider
				variant="middle"
				sx={{ width: "100%", background: "rgba(0, 0, 0, 0.12)" }}
			/>
			<Typography variant="subtitle1" sx={{ textAlign: "center", mt: 2 }}>
				Verifique sua caixa de entrada, caso não encontre, verifiquei no{" "}
				<strong>SPAM</strong> e/ou na <strong>LIXEIRA</strong> do seu email.
			</Typography>
			<Typography variant="subtitle1">
				Somente após validação, sua conta é liberada.
			</Typography>
			<Button
				variant="outlined"
				color={"secondary"}
				fullWidth
				href="/login"
				sx={{ mt: 1, mb: 1, p: 1 }}
			>
				VOLTAR
			</Button>
		</Box>
	);
}
