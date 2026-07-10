import LoginBox from "./components/Box";
import { Box, Grid, Typography } from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import TuneIcon from "@mui/icons-material/Tune";
import SecurityIcon from "@mui/icons-material/Security";
import BoltIcon from "@mui/icons-material/Bolt";

const features = [
	{
		icon: <AccountTreeIcon sx={{ fontSize: 28, color: "primary.main" }} />,
		label: "Organização",
	},
	{
		icon: <TuneIcon sx={{ fontSize: 28, color: "primary.main" }} />,
		label: "Controle",
	},
	{
		icon: <SecurityIcon sx={{ fontSize: 28, color: "primary.main" }} />,
		label: "Segurança",
	},
	{
		icon: <BoltIcon sx={{ fontSize: 28, color: "primary.main" }} />,
		label: "Agilidade",
	},
];

export default function Login() {
	return (
		<Box
			sx={{
				width: "100%",
				minHeight: "100vh",
				display: "flex",
				alignItems: "stretch",
			}}
		>
			{/* ── Painel esquerdo — hero ───────────────────────────────────── */}
			<Box
				sx={{
					flex: "0 0 55%",
					display: { xs: "none", md: "flex" },
					flexDirection: "column",
					justifyContent: "center",
					px: { md: 8, lg: 12 },
					py: 6,
					color: "white",
				}}
			>
				<Typography
					variant="h3"
					fontWeight="bold"
					sx={{
						color: "secondary.main",
					}}
				>
					SISTEMA DE
				</Typography>
				<Typography
					fontWeight="bold"
					sx={{
						mb: 2,
						fontSize: "100px",
						lineHeight: 1,
						color: "primary.main",
					}}
				>
					PEDIDOS
				</Typography>

				<Typography
					sx={{
						mb: 6,
						fontWeight: 400,
						fontSize: "20px",
						opacity: 0.92,
						color: "secondary.main",
					}}
				>
					Gerencie requerimentos de forma ágil,
					<br />
					segura e eficiente
				</Typography>

				<LoginBox />

				<Grid container spacing={0.5} width={"400px"}>
					{features.map(({ icon, label }) => (
						<Grid size={3} key={label}>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: 0.5,
									borderRadius: 3,
									p: 2,
									flexDirection: "column",
								}}
							>
								{icon}
								<Typography
									fontWeight={600}
									fontSize={15}
									sx={{ color: "secondary.main" }}
								>
									{label}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>

				<Box sx={{ textAlign: "center", mb: 2, mt: 2, width: "400px" }}>
					<Typography sx={{ fontSize: 12, color: "secondary.main" }}>
						© CISRU CENTRO SUL - {new Date().getFullYear()}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
