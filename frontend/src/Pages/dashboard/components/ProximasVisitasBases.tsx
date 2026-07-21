import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useEffect, useMemo, useState } from "react";
import {
	Alert,
	Box,
	Card,
	CardContent,
	CardHeader,
	Chip,
	CircularProgress,
	Divider,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useProximasVisitas } from "@/Hooks/useDashBoard";
import useLocalStore from "@/Hooks/useLocalStore";
import type { ProximaVisitaBase } from "@/Types/VisitaBase";

type Layout = "destaque" | "timeline" | "grade";

const PERIODOS = [3, 7, 15, 30];
const STORAGE_KEY = "dashboard.proximasVisitasBases.dias";

function dataCivil(data: string | Date) {
	return dayjs(String(data).slice(0, 10));
}

const PRIORIDADE: Record<
	ProximaVisitaBase["prioridade"],
	{ label: string; color: "error" | "warning" | "success"; background: string }
> = {
	vermelho: {
		label: "Sem requerimento",
		color: "error",
		background: "rgba(211, 47, 47, 0.08)",
	},
	amarelo: {
		label: "Sem requerimento na semana",
		color: "warning",
		background: "rgba(237, 108, 2, 0.10)",
	},
	verde: {
		label: "Requerimento recebido",
		color: "success",
		background: "rgba(46, 125, 50, 0.10)",
	},
};

function StatusChip({ visita }: { visita: ProximaVisitaBase }) {
	const prioridade = PRIORIDADE[visita.prioridade];

	return (
		<Chip
			size="small"
			color={prioridade.color}
			label={prioridade.label}
			sx={{ fontWeight: 700 }}
		/>
	);
}

function VisitaDetalhes({ visita }: { visita: ProximaVisitaBase }) {
	return (
		<Box>
			<Typography fontWeight={800}>{visita.base}</Typography>
			<Typography variant="body2" color="text.secondary">
				Descrição: {visita.descricao || " - "}
			</Typography>
		</Box>
	);
}

function VisitaLinha({ visita }: { visita: ProximaVisitaBase }) {
	const prioridade = PRIORIDADE[visita.prioridade];

	return (
		<Stack
			direction={{ xs: "column", sm: "row" }}
			spacing={1}
			alignItems={{ sm: "center" }}
			justifyContent="space-between"
			sx={{
				p: 1.25,
				borderRadius: 2,
				backgroundColor: prioridade.background,
			}}
		>
			<Stack direction="row" spacing={1.25} alignItems="center">
				<Box
					sx={{
						width: 10,
						height: 10,
						borderRadius: "50%",
						backgroundColor: `${prioridade.color}.main`,
					}}
				/>
				<Box>
					<Typography variant="caption" color="text.secondary" fontWeight={700}>
							{dataCivil(visita.data).format("DD/MM/YYYY")}
					</Typography>
					<VisitaDetalhes visita={visita} />
				</Box>
			</Stack>
			<StatusChip visita={visita} />
		</Stack>
	);
}

function DestaqueLayout({ visitas }: { visitas: ProximaVisitaBase[] }) {
	const [proxima, ...restantes] = visitas;
	const prioridade = PRIORIDADE[proxima.prioridade];

	return (
		<Stack spacing={1.5}>
			<Box
				sx={{
					p: 2,
					borderRadius: 2.5,
					background: `linear-gradient(135deg, ${prioridade.background}, rgba(255,255,255,0.75))`,
					border: "1px solid",
					borderColor: `${prioridade.color}.main`,
				}}
			>
				<Typography variant="overline" color="text.secondary" fontWeight={800}>
					Próxima visita
				</Typography>
				<Stack
					direction={{ xs: "column", sm: "row" }}
					spacing={1.5}
					alignItems={{ sm: "center" }}
					justifyContent="space-between"
					mt={0.5}
				>
					<Box>
						<Typography variant="h6" fontWeight={900}>
							{proxima.base}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{dataCivil(proxima.data).format("dddd, DD/MM/YYYY")}
							{proxima.descricao ? ` · ${proxima.descricao}` : ""}
						</Typography>
					</Box>
					<StatusChip visita={proxima} />
				</Stack>
			</Box>
			{restantes.map((visita) => (
				<VisitaLinha key={visita.id} visita={visita} />
			))}
		</Stack>
	);
}

function TimelineLayout({ visitas }: { visitas: ProximaVisitaBase[] }) {
	const grupos = useMemo(() => {
		return visitas.reduce<Map<string, ProximaVisitaBase[]>>((mapa, visita) => {
			const chave = dataCivil(visita.data).format("YYYY-MM-DD");
			mapa.set(chave, [...(mapa.get(chave) ?? []), visita]);
			return mapa;
		}, new Map());
	}, [visitas]);

	return (
		<Stack spacing={1.5}>
			{Array.from(grupos.entries()).map(([data, visitasDoDia]) => (
				<Box key={data} sx={{ position: "relative", pl: 3 }}>
					<Box
						sx={{
							position: "absolute",
							left: 7,
							top: 4,
							bottom: 0,
							width: 2,
							backgroundColor: "divider",
						}}
					/>
					<Typography variant="subtitle2" fontWeight={900} mb={0.75}>
						{dataCivil(data).format("DD/MM/YYYY")}
					</Typography>
					<Stack spacing={0.75}>
						{visitasDoDia.map((visita) => (
							<Box key={visita.id} sx={{ position: "relative" }}>
								<Box
									sx={{
										position: "absolute",
										left: -29,
										top: 15,
										width: 10,
										height: 10,
										borderRadius: "50%",
										backgroundColor: `${PRIORIDADE[visita.prioridade].color}.main`,
									}}
								/>
								<VisitaLinha visita={visita} />
							</Box>
						))}
					</Stack>
				</Box>
			))}
		</Stack>
	);
}

function GradeLayout({ visitas }: { visitas: ProximaVisitaBase[] }) {
	const grupos = useMemo(() => {
		return visitas.reduce<Map<string, ProximaVisitaBase[]>>((mapa, visita) => {
			const chave = dataCivil(visita.data).format("YYYY-MM-DD");
			mapa.set(chave, [...(mapa.get(chave) ?? []), visita]);
			return mapa;
		}, new Map());
	}, [visitas]);

	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
				gap: 1,
			}}
		>
			{Array.from(grupos.entries()).map(([data, visitasDoDia]) => (
				<Box
					key={data}
					sx={{ p: 1.5, borderRadius: 2, backgroundColor: "action.hover" }}
				>
					<Typography variant="subtitle2" fontWeight={900} mb={1}>
						{dataCivil(data).format("DD/MM/YYYY")}
					</Typography>
					<Stack spacing={0.75}>
						{visitasDoDia.map((visita) => {
							const prioridade = PRIORIDADE[visita.prioridade];
							return (
								<Box
									key={visita.id}
									sx={{
										p: 1,
										borderRadius: 1.5,
										backgroundColor: prioridade.background,
										border: "1px solid",
										borderColor: `${prioridade.color}.main`,
									}}
								>
									<VisitaDetalhes visita={visita} />
									<Box mt={0.75}>
										<StatusChip visita={visita} />
									</Box>
								</Box>
							);
						})}
					</Stack>
				</Box>
			))}
		</Box>
	);
}

export default function ProximasVisitasBases() {
	const { getData, setData } = useLocalStore();
	const [dias, setDias] = useState(() => {
		const valorSalvo = Number(getData(STORAGE_KEY));

		return PERIODOS.includes(valorSalvo) ? valorSalvo : PERIODOS[0];
	});
	const [layout, setLayout] = useState<Layout>("grade");
	const { data = [], isLoading, isError } = useProximasVisitas(dias);

	useEffect(() => {
		setData(STORAGE_KEY, String(dias));
	}, [dias, setData]);

	return (
		<Card
			elevation={0}
			sx={{ border: "1px solid", borderColor: "divider", borderRadius: 3 }}
		>
			<CardHeader
				avatar={<EventAvailableIcon color="primary" />}
				title="Próximas visitas às bases"
				subheader={`Próximos ${dias} dias, incluindo hoje`}
				action={
					<Stack
						direction="row"
						spacing={1}
						flexWrap="wrap"
						justifyContent="flex-end"
						useFlexGap
					>
						<ToggleButtonGroup
							aria-label="Período das próximas visitas"
							color="primary"
							exclusive
							onChange={(_, value: number | null) => value && setDias(value)}
							size="small"
							value={dias}
						>
							{PERIODOS.map((periodo) => (
								<ToggleButton key={periodo} value={periodo} sx={{ px: 1 }}>
									{periodo}d
								</ToggleButton>
							))}
						</ToggleButtonGroup>
						<ToggleButtonGroup
							aria-label="Modo de visualização das visitas"
							color="primary"
							exclusive
							onChange={(_, value: Layout | null) => value && setLayout(value)}
							size="small"
							value={layout}
						>
							{/* <ToggleButton value="destaque" aria-label="Visualização em destaque">
								<DashboardCustomizeIcon fontSize="small" />
							</ToggleButton>
							<ToggleButton value="timeline" aria-label="Visualização em timeline">
								<ViewTimelineIcon fontSize="small" />
							</ToggleButton> */}
							<ToggleButton value="grade" aria-label="Visualização em grade">
								<CalendarMonthIcon fontSize="small" />
							</ToggleButton>
						</ToggleButtonGroup>
					</Stack>
				}
			/>
			<Divider />
			<CardContent>
				{isLoading && (
					<Box display="flex" justifyContent="center" py={2}>
						<CircularProgress size={26} />
					</Box>
				)}
				{isError && (
					<Alert severity="error">
						Não foi possível carregar as próximas visitas.
					</Alert>
				)}
				{!isLoading && !isError && data.length === 0 && (
					<Alert severity="info">
						Nenhuma visita agendada para os próximos {dias} dias.
					</Alert>
				)}
				{!isLoading &&
					!isError &&
					data.length > 0 &&
					(layout === "destaque" ? (
						<DestaqueLayout visitas={data} />
					) : layout === "timeline" ? (
						<TimelineLayout visitas={data} />
					) : (
						<GradeLayout visitas={data} />
					))}
			</CardContent>
		</Card>
	);
}
