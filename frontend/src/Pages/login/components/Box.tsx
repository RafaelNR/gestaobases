import { Typography, Box, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FormLogin from "./FormLogin";

export default function LoginBox() {
	const theme = useTheme();

	return (
		<Paper
			elevation={0}
			sx={{
				width: { xs: "100%", sm: 420 },
				p: { xs: 3, sm: 5 },
				borderRadius: 4,
				background: "transparent",
				// bgcolor: "rgba(255,255,255,0.93)",
				// backdropFilter: "blur(14px)",
				// boxShadow: "0 8px 40px rgba(0,0,0,0.22)",
			}}
		>
			<Typography
				component="h1"
				variant="h5"
				sx={{
					fontWeight: "bold",
					color: theme.palette.primary.main,
					textAlign: "center",
					mb: 1,
				}}
			>
				Acesse sua conta
			</Typography>

			<FormLogin />
		</Paper>
	);
}
