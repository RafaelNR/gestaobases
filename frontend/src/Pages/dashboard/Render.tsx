import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { Grid } from "@mui/system";
import {
	Box,
	Button,
	Divider,
	ListItemIcon,
	Menu,
	MenuItem,
	Stack,
	Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useMe } from "@/Hooks/useAuth";
import MetricsRequerimentos from "./components/requerimentos/MetricsRequerimentos";
import TabelaRequerimentosTipo from "./components/requerimentos/TabelaRequerimentosTipo";
import { usePermissions } from "@/Hooks/usePermissions";
import useLocalStore from "@/Hooks/useLocalStore";
import { DASHBOARD_REQUERIMENTOS_PERMISSIONS } from "@/Guard/PermissionGroups";
import type { Permission } from "@/Guard";
import type { TipoRequerimento } from "@/Types/Requerimento";
import ProximasVisitasBases from "./components/ProximasVisitasBases";
import ProximosVencimentosCard from "./components/estoque/ProximosVencimentosCard";
import UltimasMovimentacoesCard from "./components/estoque/UltimasMovimentacoesCard";

type DashboardRequerimentosFilter = "todos" | TipoRequerimento;

type DashboardOption = {
	value: DashboardRequerimentosFilter;
	label: string;
	title: string;
	countPermission: Permission;
	tablePermission: Permission;
	tipo?: TipoRequerimento;
};

const DASHBOARD_OPTIONS: DashboardOption[] = [
	{
		value: "todos",
		label: "Todos",
		title: "TODOS OS REQUERIMENTOS",
		countPermission: DASHBOARD_REQUERIMENTOS_PERMISSIONS.COUNT_ALL,
		tablePermission: DASHBOARD_REQUERIMENTOS_PERMISSIONS.TABLE_ALL,
	},
	{
		value: "Almoxarifado",
		label: "Almoxarifado",
		title: "REQUERIMENTOS DO ALMOXARIFADO",
		countPermission: DASHBOARD_REQUERIMENTOS_PERMISSIONS.COUNT_ALMOXARIFADO,
		tablePermission: DASHBOARD_REQUERIMENTOS_PERMISSIONS.TABLE_ALMOXARIFADO,
		tipo: "Almoxarifado",
	},
	{
		value: "Farmacia",
		label: "Farmácia",
		title: "REQUERIMENTOS DA FARMÁCIA",
		countPermission: DASHBOARD_REQUERIMENTOS_PERMISSIONS.COUNT_FARMACIA,
		tablePermission: DASHBOARD_REQUERIMENTOS_PERMISSIONS.TABLE_FARMACIA,
		tipo: "Farmacia",
	},
	{
		value: "CME",
		label: "CME",
		title: "REQUERIMENTOS DO CME",
		countPermission: DASHBOARD_REQUERIMENTOS_PERMISSIONS.COUNT_CME,
		tablePermission: DASHBOARD_REQUERIMENTOS_PERMISSIONS.TABLE_CME,
		tipo: "CME",
	},
];

const TABLE_OPTIONS = DASHBOARD_OPTIONS.filter(
	(option): option is DashboardOption & { tipo: TipoRequerimento } =>
		Boolean(option.tipo),
);

const STORAGE_KEY = "dashboard.requerimentos.selectedOption";

export default function Render() {
	const { data: user } = useMe();
	const { can } = usePermissions();
	const { getData, setData } = useLocalStore();
	const [selectedFilter, setSelectedFilter] =
		useState<DashboardRequerimentosFilter>(() => {
			const valorSalvo = getData(STORAGE_KEY);

			return DASHBOARD_OPTIONS.some((option) => option.value === valorSalvo)
				? (valorSalvo as DashboardRequerimentosFilter)
				: "todos";
		});
	const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(
		null,
	);
	const filterMenuOpen = Boolean(filterAnchorEl);

	useEffect(() => {
		setData(STORAGE_KEY, selectedFilter);
	}, [selectedFilter, setData]);

	const allowedOptions = useMemo(
		() =>
			DASHBOARD_OPTIONS.filter(
				(option) => can(option.countPermission) || can(option.tablePermission),
			),
		[can],
	);

	useEffect(() => {
		if (allowedOptions.length === 0) return;

		const selectedIsAllowed = allowedOptions.some(
			(option) => option.value === selectedFilter,
		);

		if (!selectedIsAllowed) {
			setSelectedFilter(allowedOptions[0].value);
		}
	}, [allowedOptions, selectedFilter]);

	const selectedOption = allowedOptions.find(
		(option) => option.value === selectedFilter,
	);

	const handleFilterMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
		setFilterAnchorEl(event.currentTarget);
	};

	const handleFilterMenuClose = () => {
		setFilterAnchorEl(null);
	};

	const handleFilterChange = (value: DashboardRequerimentosFilter) => {
		setSelectedFilter(value);
		handleFilterMenuClose();
	};

	const canViewSelectedMetrics = selectedOption
		? can(selectedOption.countPermission)
		: false;

	const visibleTables =
		selectedFilter === "todos"
			? TABLE_OPTIONS.filter(
					(option) =>
						can(DASHBOARD_REQUERIMENTOS_PERMISSIONS.TABLE_ALL) ||
						can(option.tablePermission),
				)
			: selectedOption?.tipo && can(selectedOption.tablePermission)
				? [selectedOption as DashboardOption & { tipo: TipoRequerimento }]
				: [];

	return (
		<Grid container spacing={3}>
			{/* Saudação */}
			<Grid size={{ xs: 12 }}>
				<Typography variant="h5" fontWeight={700}>
					Olá, {user?.nome} 👋
				</Typography>
			</Grid>

			{allowedOptions.length > 0 && selectedOption && (
				<>
					<Grid size={{ xs: 12 }}>
						<Stack
							direction={{ xs: "column", sm: "row" }}
							alignItems={{ xs: "stretch", sm: "center" }}
							justifyContent="space-between"
							spacing={2}
						>
							<Box>
								<Typography variant="subtitle2" color="text.secondary">
									{selectedOption.title}
								</Typography>
								<Typography variant="body2" color="text.secondary" mt={0.5}>
									Acompanhe os dados conforme sua permissão.
								</Typography>
							</Box>

							<Box>
								<Button
									id="dashboard-requerimentos-filter-button"
									aria-controls={
										filterMenuOpen
											? "dashboard-requerimentos-filter-menu"
											: undefined
									}
									aria-haspopup="true"
									aria-expanded={filterMenuOpen ? "true" : undefined}
									variant="outlined"
									color="inherit"
									endIcon={<KeyboardArrowDownIcon />}
									onClick={handleFilterMenuOpen}
									sx={{
										minWidth: 220,
										justifyContent: "space-between",
										borderColor: "divider",
										color: "text.primary",
										bgcolor: "background.paper",
										textTransform: "none",
										fontWeight: 700,
										px: 1.5,
										"&:hover": {
											borderColor: "primary.main",
											bgcolor: "action.hover",
										},
									}}
								>
									Visualizar: {selectedOption.label}
								</Button>
								<Menu
									id="dashboard-requerimentos-filter-menu"
									anchorEl={filterAnchorEl}
									open={filterMenuOpen}
									onClose={handleFilterMenuClose}
									MenuListProps={{
										"aria-labelledby": "dashboard-requerimentos-filter-button",
									}}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "right",
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									slotProps={{
										paper: {
											sx: {
												mt: 1,
												minWidth: 220,
												border: "1px solid",
												borderColor: "divider",
											},
										},
									}}
								>
									{allowedOptions.map((option) => (
										<MenuItem
											key={option.value}
											selected={option.value === selectedFilter}
											onClick={() => handleFilterChange(option.value)}
										>
											<ListItemIcon sx={{ minWidth: 32 }}>
												{option.value === selectedFilter && (
													<CheckIcon fontSize="small" color="primary" />
												)}
											</ListItemIcon>
											{option.label}
										</MenuItem>
									))}
								</Menu>
							</Box>
						</Stack>
					</Grid>

					{canViewSelectedMetrics && (
						<Grid size={{ xs: 12 }}>
							<MetricsRequerimentos tipo={selectedOption.tipo} />
						</Grid>
					)}

					<Grid size={{ xs: 12 }}>
						<Divider />
					</Grid>
				</>
			)}

			{/* Tabelas por tipo */}
			{visibleTables.map((option) => (
				<Grid
					key={option.value}
					size={{
						xs: 12,
						md: selectedFilter === "todos" ? 4 : 12,
					}}
				>
					<TabelaRequerimentosTipo tipo={option.tipo} titulo={option.label} />
				</Grid>
			))}

			<Grid size={{ xs: 12 }}>
				<Divider />
			</Grid>

			{can(DASHBOARD_REQUERIMENTOS_PERMISSIONS.CARD_VISITAS) && (
				<>
					<Grid size={{ xs: 12 }}>
						<ProximasVisitasBases />
					</Grid>

					<Grid size={{ xs: 12 }}>
						<Divider />
					</Grid>
				</>
			)}

			{can(DASHBOARD_REQUERIMENTOS_PERMISSIONS.CARD_VENCIMENTOS) && (
				<Grid size={{ xs: 12, md: 6 }}>
					<ProximosVencimentosCard />
				</Grid>
			)}
			{can(DASHBOARD_REQUERIMENTOS_PERMISSIONS.CARD_MOVIMENTACOES) && (
				<Grid size={{ xs: 12, md: 6 }}>
					<UltimasMovimentacoesCard />
				</Grid>
			)}
		</Grid>
	);
}
