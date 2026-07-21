import EventBusyIcon from "@mui/icons-material/EventBusy";
import {
	Alert,
	Box,
	Card,
	CardContent,
	CardHeader,
	CircularProgress,
	Divider,
	Stack,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLotesProximosVencimento } from "@/Hooks/useDashBoard";
import useLocalStore from "@/Hooks/useLocalStore";
import type { PeriodoVencimentoDashboard } from "@/Types/DashboardEstoque";
import { DateFormatUTC } from "@/Utils/dates";
import ChipStatusValidade from "@/Components/Chip/ChipStatusValidade";

const PERIODOS: PeriodoVencimentoDashboard[] = [15, 30, 45, 60];
const STORAGE_KEY = "dashboard.proximosVencimentos.dias";

export default function ProximosVencimentosCard() {
	const { getData, setData } = useLocalStore();
	const [dias, setDias] = useState<PeriodoVencimentoDashboard>(() => {
		const valorSalvo = Number(getData(STORAGE_KEY));

		return PERIODOS.includes(valorSalvo as PeriodoVencimentoDashboard)
			? (valorSalvo as PeriodoVencimentoDashboard)
			: PERIODOS[0];
	});
	const { data = [], isLoading, isError } = useLotesProximosVencimento(dias);

	useEffect(() => {
		setData(STORAGE_KEY, String(dias));
	}, [dias, setData]);

	return (
		<Card
			elevation={0}
			sx={{
				border: "1px solid",
				borderColor: "divider",
				borderRadius: 3,
				height: "100%",
			}}
		>
			<CardHeader
				avatar={<EventBusyIcon color="warning" />}
				title="Lotes próximos do vencimento"
				subheader={`Próximos ${dias} dias`}
				action={
					<ToggleButtonGroup
						aria-label="Período dos lotes próximos do vencimento"
						color="primary"
						exclusive
						onChange={(_, value: PeriodoVencimentoDashboard | null) =>
							value && setDias(value)
						}
						size="small"
						value={dias}
					>
						{PERIODOS.map((periodo) => (
							<ToggleButton key={periodo} value={periodo} sx={{ px: 1 }}>
								{periodo}D
							</ToggleButton>
						))}
					</ToggleButtonGroup>
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
						Não foi possível carregar os lotes próximos do vencimento.
					</Alert>
				)}
				{!isLoading && !isError && data.length === 0 && (
					<Alert severity="info">
						Nenhum lote vence nos próximos {dias} dias.
					</Alert>
				)}
				{!isLoading && !isError && data.length > 0 && (
					<Stack divider={<Divider flexItem />} spacing={1.25}>
						{data.map((lote) => (
							<Stack
								key={lote.id}
								direction="row"
								justifyContent="space-between"
								spacing={2}
							>
								<Box minWidth={0}>
									<Typography variant="body2" fontWeight={700} noWrap>
										{lote.item}
									</Typography>
									<Typography variant="caption" color="text.secondary">
										Lote {lote.lote || "sem identificação"} · {lote.quantidade}{" "}
										item(s). · {lote.base}
									</Typography>
								</Box>
								<Box minWidth={0}>
									<ChipStatusValidade status={lote.status} />
									<Typography
										variant="body2"
										color="warning.dark"
										fontWeight={700}
										whiteSpace="nowrap"
									>
										Validate: {DateFormatUTC(lote.validade, "DD/MM/YYYY")}
									</Typography>
								</Box>
							</Stack>
						))}
					</Stack>
				)}
			</CardContent>
		</Card>
	);
}
