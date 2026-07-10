import { useRouteError, useNavigate, isRouteErrorResponse } from "react-router-dom";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorBoundary = () => {
	const error = useRouteError();
	const navigate = useNavigate();

	let title = "Algo deu errado";
	let message = "Ocorreu um erro inesperado. Tente novamente.";

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			title = "Página não encontrada";
			message = "A página que você está procurando não existe.";
		} else if (error.status === 403) {
			title = "Acesso negado";
			message = "Você não tem permissão para acessar esta página.";
		}
	} else if (error instanceof Error) {
		message = error.message;
	}

	return (
		<Container maxWidth="sm">
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				minHeight="60vh"
				textAlign="center"
			>
				<ErrorOutlineIcon sx={{ fontSize: 64, color: "error.main", mb: 2 }} />
				<Typography variant="h5" fontWeight={600} gutterBottom>
					{title}
				</Typography>
				<Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
					{message}
				</Typography>
				<Stack direction="row" spacing={2}>
					<Button variant="outlined" onClick={() => window.location.reload()}>
						Tentar novamente
					</Button>
					<Button variant="contained" onClick={() => navigate("/")}>
						Ir para o início
					</Button>
				</Stack>
			</Box>
		</Container>
	);
};

export default ErrorBoundary;
