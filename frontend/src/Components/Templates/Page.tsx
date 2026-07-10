import { ErrorBoundary } from "react-error-boundary";
import { Typography, Alert, Grid } from "@mui/material";

//* IMAGE
import Error from "/images/error.png";

function fallbackRender({ error }: { error: TypeError }) {
	return (
		<Grid container sx={{ height: "70vh" }}>
			<Grid
				size={6}
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Typography sx={{ fontSize: 18 }}>
					Tivemos um erro em carregar a página.
				</Typography>
				<Typography>
					Tente recarregar a página se o problema persistir, comunique o
					administrador do sistema
				</Typography>
				{import.meta.env.DEV && (
					<Alert sx={{ color: "red", mt: 10 }} severity="error">
						{error.message}
					</Alert>
				)}
			</Grid>
			<Grid
				size={6}
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<img src={Error} loading="lazy" alt="logo" width="500px" />
			</Grid>
		</Grid>
	);
}

export default function Index({ children }: { children: React.ReactNode }) {
	return (
		<ErrorBoundary fallbackRender={fallbackRender}>{children}</ErrorBoundary>
	);
}
