import {
	Box,
	Grid,
	Paper,
	Stack,
	Typography,
	alpha,
	useTheme,
} from "@mui/material";
import {
	Business,
	CalendarMonth,
	DirectionsCar,
	Person,
	Workspaces,
} from "@mui/icons-material";
import type { Requerimento } from "@/Types/Requerimento";
import { DateFormat } from "@/Utils/dates";
import InfoItem from "./components/InfoItem";
import { RequerimentoNumberBadge } from "./components/RequerimentoNumberBadge";
import { RequerimentoStatusItem } from "./components/RequerimentoStatusItem";
import ObservationPanel from "./components/ObservationPanel";

export default function RequerimentoViewPage({
	requerimento,
}: {
	requerimento: Requerimento;
}) {
	const theme = useTheme();
	const observation = requerimento.obs?.trim() || "Sem observação.";

	return (
		<Paper
			variant="outlined"
			sx={{
				borderRadius: 2,
				overflow: "hidden",
				borderColor: alpha(theme.palette.primary.main, 0.16),
			}}
		>
			<Box
				sx={{
					px: { xs: 2, sm: 2.5 },
					py: 2,
					backgroundColor: alpha(theme.palette.primary.main, 0.045),
					borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
				}}
			>
				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent="space-between"
					alignItems={{ xs: "flex-start", sm: "center" }}
					spacing={1.5}
				>
					<Box>
						<Typography
							variant="overline"
							color="text.secondary"
							fontWeight={700}
						>
							Dados do requerimento
						</Typography>
						<Typography variant="body2" color="text.secondary">
							Resumo para conferência da solicitação
						</Typography>
					</Box>
				</Stack>
			</Box>
			<Box sx={{ p: { xs: 2, sm: 2.5 } }}>
				<Grid container spacing={1.5}>
					<Grid size={{ xs: 12, sm: 3 }} spacing={1} rowSpacing={2}>
						<RequerimentoNumberBadge numero={requerimento.numero} />
						<RequerimentoStatusItem status={requerimento.status} />
						<InfoItem
							icon={CalendarMonth}
							label="Data Abertura"
							value={DateFormat(requerimento.data_inicio)}
						/>
						<InfoItem
							icon={CalendarMonth}
							label="Data Finalização"
							value={
								requerimento.data_fim ? DateFormat(requerimento.data_fim) : "-"
							}
						/>
					</Grid>
					<Grid size={{ xs: 12, sm: 4, md: 3 }} spacing={1} rowSpacing={2}>
						<InfoItem
							icon={Person}
							label="Requerente"
							value={requerimento.User.nome}
						/>
						<InfoItem icon={Business} label="Base" value={requerimento.base} />
						<InfoItem
							icon={Workspaces}
							label="Setor"
							value={`${requerimento.User.Setor.nomeVisivel} - ${requerimento.User.Cargo.nomeVisivel}`}
						/>
						{requerimento.tipo === "Farmacia" && (
							<InfoItem
								icon={DirectionsCar}
								label="Ambulância"
								value={
									requerimento.Ambulancia?.nome
										? `${requerimento.Ambulancia?.tipo} - ${requerimento.Ambulancia?.nome}`
										: "-"
								}
							/>
						)}
					</Grid>
					<Grid size={{ xs: 12, sm: 4, md: 6 }}>
						<ObservationPanel
							observation={observation}
							hasObservation={Boolean(requerimento.obs?.trim())}
						/>
					</Grid>
				</Grid>
			</Box>
		</Paper>
	);
}
