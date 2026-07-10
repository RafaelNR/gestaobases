//* Component
import Container from "./components/Box";
import FormNovaSenha from "./components/FormNovaSenha";
import { Box, Button, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

//* CONTEXTS
import useRegistro from "@/Hooks/useRegistro";
import { useNavigate } from "react-router";

function SenhaAlterada() {
	const navigate = useNavigate();

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			sx={{ width: "100%" }}
		>
			<CheckCircleOutlineIcon sx={{ color: "green", fontSize: 120, mb: 5 }} />
			<Typography variant="body1" sx={{ fontSize: 20 }}>
				Sua senha foi alterada com
			</Typography>
			<Typography
				variant="body1"
				sx={{ fontSize: 35, fontWeight: 600, mb: 5, color: "green" }}
			>
				SUCESSO!
			</Typography>
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
	);
}

export default function Cards({ token }: { token: string }) {
	const { success } = useRegistro();

	return (
		<Container>
			{!success ? <FormNovaSenha token={token} /> : <SenhaAlterada />}
		</Container>
	);
}
