import { Box, CircularProgress, Grid } from "@mui/material";
import { useCountRequerimentos } from "@/Hooks/useDashBoard";
import type {
	CountRequerimentos,
	RequerimentoStatus,
	TipoRequerimento,
} from "@/Types/Requerimento";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import StatCard from "./StatCard";

type StatusMetric = {
	status: RequerimentoStatus;
	label: string;
	color: string;
	sub: string;
	icon: React.ReactNode;
};

const STATUS_METRICS: StatusMetric[] = [
	{
		status: "Recebido",
		label: "Recebidos",
		color: "#1976d2",
		sub: "Aguardando processamento",
		icon: <MoveToInboxIcon />,
	},
	{
		status: "Separacao",
		label: "Separação",
		color: "#ed6c02",
		sub: "Itens em separação",
		icon: <Inventory2Icon />,
	},
	{
		status: "Finalizado",
		label: "Finalizados",
		color: "#2e7d32",
		sub: "Requerimentos concluídos",
		icon: <CheckCircleIcon />,
	},
];

function getStatusCount(
	data: CountRequerimentos[] | undefined,
	status: RequerimentoStatus,
) {
	return data?.find((item) => item.status === status)?._count.status ?? 0;
}

/* ── Componente principal ─────────────────────────────────── */
export default function MetricsRequerimentos({
	tipo,
}: {
	tipo?: TipoRequerimento;
}) {
	const result = useCountRequerimentos(tipo);
	const isLoading = result.isLoading;

	if (isLoading) {
		return (
			<Box display="flex" justifyContent="center" py={3}>
				<CircularProgress size={28} />
			</Box>
		);
	}

	return (
		<Grid container spacing={2}>
			{STATUS_METRICS.map((metric) => (
				<Grid key={metric.status} size={{ xs: 12, sm: 4 }}>
					<StatCard
						label={metric.label}
						value={getStatusCount(result.data, metric.status)}
						icon={metric.icon}
						color={metric.color}
						sub={metric.sub}
					/>
				</Grid>
			))}
		</Grid>
	);
}
