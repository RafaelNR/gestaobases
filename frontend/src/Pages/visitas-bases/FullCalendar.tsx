import { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import type {
	DatesSetArg,
	EventClickArg,
	EventContentArg,
	EventHoveringArg,
	EventInput,
} from "@fullcalendar/core";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TodayIcon from "@mui/icons-material/Today";
import type { VisitaBase } from "@/Types/VisitaBase";
import useDialog from "@/Contexts/DialogContext";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import snackBar from "@/Hooks/useSnackBar";
import {
	Box,
	Button,
	Chip,
	IconButton,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { usePermissions } from "@/Hooks/usePermissions";
import PopperEvent from "./PopperEvent";
import type { VisitasBasesCalendarFilters } from "./types";

const BASE_COLORS_OBJ: Record<string, string> = {
	Barbacena: "#1976d2",
	Congonhas: "#7b1fa2",
	"São João Del Rei": "#f57c00",
	"Alto Rio Doce": "#1976d2",
	Piranga: "#388e3c",
	Tiradentes: "#7b1fa2",
	"Resende Costa": "#f57c00",
	"Entre Rios de Minas": "#7b1fa2",
	"Conselheiro Lafaiete": "#388e3c",
	"Lagoa Dourada": "#f57c00",
	Nazareno: "#f57c00",
	Barroso: "#1976d2",
	"Madre de Deus de Minas": "#f57c00",
	"Bom Sucesso": "#f57c00",
	Carandaí: "#1976d2",
	"São Tiago": "#f57c00",
	"Rio Espera": "#388e3c",
	"Ouro Branco": "#7b1fa2",
	Ibertioga: "#1976d2",
};

const FALLBACK_EVENT_COLOR = "#d32f2f";

type HoveredVisita = {
	anchorEl: HTMLElement;
	visita: VisitaBase;
	color: string;
};

function getBaseColor(base: string): string {
	if (!base) return FALLBACK_EVENT_COLOR;

	return BASE_COLORS_OBJ[base] ?? FALLBACK_EVENT_COLOR;
}

function toEvents(visitas: VisitaBase[]): EventInput[] {
	return visitas.map((v) => ({
		id: v.id,
		title: v.base ?? v.outro_motivo,
		start: v.data.slice(0, 10),
		backgroundColor: v.base ? getBaseColor(v.base) : FALLBACK_EVENT_COLOR,
		borderColor: v.base ? getBaseColor(v.base) : FALLBACK_EVENT_COLOR,
		extendedProps: {
			descricao: v.descricao,
			hasDescricao: Boolean(v.descricao?.trim()),
			outro_motivo: v.outro_motivo,
			base: v.base,
			data: v.data,
		},
	}));
}

function getVisitaTitle(visita: VisitaBase): string {
	return visita.base ?? visita.outro_motivo ?? "Visita";
}

function getVisitaColor(visita: VisitaBase): string {
	return visita.base ? getBaseColor(visita.base) : FALLBACK_EVENT_COLOR;
}

function getMobileVisitaDate(visita: VisitaBase): string {
	return dayjs(visita.data).locale("pt-br").format("DD/MM - dddd");
}

function renderEventContent(eventInfo: EventContentArg) {
	const hasDescricao = Boolean(eventInfo.event.extendedProps.hasDescricao);

	return (
		<Box
			component="span"
			className="visit-event-content"
			title={
				hasDescricao
					? `${eventInfo.event.title} - possui descrição`
					: eventInfo.event.title
			}
		>
			{hasDescricao && (
				<DescriptionOutlinedIcon
					className="visit-event-description-icon"
					titleAccess="Possui descrição"
				/>
			)}
			<Box component="span" className="visit-event-title">
				{eventInfo.event.title}
			</Box>
		</Box>
	);
}

type MyFullCalendarProps = {
	visitas: VisitaBase[];
	filters: VisitasBasesCalendarFilters;
	onFiltersChange: (filters: VisitasBasesCalendarFilters) => void;
};

type MobileVisitasAgendaProps = MyFullCalendarProps & {
	onCreate: (date: string) => void;
	onEdit: (visita: VisitaBase) => void;
};

function MobileVisitasAgenda({
	visitas,
	filters,
	onFiltersChange,
	onCreate,
	onEdit,
}: MobileVisitasAgendaProps) {
	const orderedVisitas = [...visitas].sort(
		(a, b) => dayjs(a.data).valueOf() - dayjs(b.data).valueOf(),
	);
	const monthDate = dayjs()
		.year(filters.ano)
		.month(filters.mes - 1)
		.date(1);

	function changeMonth(amount: number) {
		const nextMonth = monthDate.add(amount, "month");
		onFiltersChange({ mes: nextMonth.month() + 1, ano: nextMonth.year() });
	}

	function goToToday() {
		const today = dayjs();
		onFiltersChange({ mes: today.month() + 1, ano: today.year() });
	}

	return (
		<Box
			sx={(theme) => ({
				backgroundColor: "background.paper",
				border: `1px solid ${theme.palette.divider}`,
				borderRadius: 2,
				boxShadow: `0 10px 28px ${alpha(theme.palette.common.black, 0.08)}`,
				p: 1.5,
			})}
		>
			<Stack spacing={1.5}>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<IconButton
						aria-label="Mês anterior"
						onClick={() => changeMonth(-1)}
						size="small"
					>
						<ChevronLeftIcon />
					</IconButton>
					<Typography variant="h6" fontWeight={800} textTransform="capitalize">
						{monthDate.locale("pt-br").format("MMMM [de] YYYY")}
					</Typography>
					<IconButton
						aria-label="Próximo mês"
						onClick={() => changeMonth(1)}
						size="small"
					>
						<ChevronRightIcon />
					</IconButton>
				</Stack>

				<Stack direction="row" spacing={1}>
					<Button
						variant="outlined"
						size="small"
						startIcon={<TodayIcon />}
						onClick={goToToday}
						sx={{ flex: 1 }}
					>
						Hoje
					</Button>
					<Button
						variant="contained"
						size="small"
						startIcon={<AddIcon />}
						onClick={() => onCreate(monthDate.format("YYYY-MM-DD"))}
						sx={{ flex: 1 }}
					>
						Nova visita
					</Button>
				</Stack>

				{orderedVisitas.length === 0 ? (
					<Box sx={{ py: 6, textAlign: "center" }}>
						<Typography color="text.secondary">
							Nenhuma visita agendada neste mês.
						</Typography>
					</Box>
				) : (
					<Stack spacing={1}>
						{orderedVisitas.map((visita) => {
							const color = getVisitaColor(visita);

							return (
								<Box
									key={visita.id}
									onClick={() => onEdit(visita)}
									role="button"
									tabIndex={0}
									onKeyDown={(event) => {
										if (event.key === "Enter" || event.key === " ") {
											event.preventDefault();
											onEdit(visita);
										}
									}}
									sx={(theme) => ({
										alignItems: "center",
										border: `1px solid ${alpha(color, 0.28)}`,
										borderLeft: `5px solid ${color}`,
										borderRadius: 1.5,
										cursor: "pointer",
										display: "flex",
										gap: 1,
										justifyContent: "space-between",
										p: 1.25,
										transition: "background-color 160ms ease",
										"&:hover, &:focus-visible": {
											backgroundColor: alpha(theme.palette.primary.main, 0.05),
											outline: "none",
										},
									})}
								>
									<Box sx={{ minWidth: 0 }}>
										<Typography variant="caption" color="text.secondary" fontWeight={700}>
											{getMobileVisitaDate(visita)}
										</Typography>
										<Typography variant="body1" fontWeight={800} noWrap>
											{getVisitaTitle(visita)}
										</Typography>
										{visita.descricao?.trim() && (
											<Typography variant="body2" color="text.secondary" noWrap>
												{visita.descricao}
											</Typography>
										)}
									</Box>
									<Chip
										size="small"
										label={visita.base ? "Base" : "Outro"}
										sx={{
											backgroundColor: color,
											color: "common.white",
											fontWeight: 800,
											flexShrink: 0,
										}}
									/>
								</Box>
							);
						})}
					</Stack>
				)}
			</Stack>
		</Box>
	);
}

export default function MyFullCalendar({
	visitas,
	filters,
	onFiltersChange,
}: MyFullCalendarProps) {
	const { can } = usePermissions();
	const { handleClickOpenDialog } = useDialog();
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const calendarRef = useRef<FullCalendar>(null);
	const [hoveredVisita, setHoveredVisita] = useState<HoveredVisita | null>(
		null,
	);

	function handleDateClick(event: DateClickArg) {
		const hoje = dayjs().startOf("day");
		const dataClicada = dayjs(event.date).startOf("day");

		if (dataClicada.isBefore(hoje)) {
			snackBar.error("Não é possível agendar em datas passadas.");
			return;
		}

		if (!can("visitas-bases:new")) {
			snackBar.error("Você não tem permissão para criar visitas.");
			return;
		}

		handleClickOpenDialog({
			m: "created",
			ID: "",
			s: {
				data: event.dateStr,
				base: null,
				outro_motivo: null,
				descricao: null,
			},
		});
	}

	// quando clicar em um evento
	function handleEventClick(event: EventClickArg) {
		const visita = visitas.find((v) => v.id === event.event.id);

		if (!visita) {
			snackBar.error("Visita não encontrada para edição.");
			return;
		}

		if (!can("visitas-bases:edit")) {
			snackBar.error("Você não tem permissão para atualizar visitas.");
			return;
		}

		handleClickOpenDialog({
			m: "updated",
			ID: visita.id,
			s: {
				data: visita.data,
				base: visita.base ?? null,
				outro_motivo: visita.outro_motivo ?? null,
				descricao: visita.descricao ?? "",
			},
		});
	}

	// quando passo mouse em cima de um evento
	function handleEventMouseEnter(event: EventHoveringArg) {
		const visita = visitas.find((v) => v.id === event.event.id);
		if (!visita) return;

		if (!can("visitas-bases:view")) {
			snackBar.error("Você não tem permissão para visualizar visitas.");
			return;
		}

		setHoveredVisita({
			anchorEl: event.el,
			visita,
			color: getVisitaColor(visita),
		});
	}

	function handleEventMouseLeave() {
		setHoveredVisita(null);
	}

	function handleMobileCreate(date: string) {
		if (!can("visitas-bases:new")) {
			snackBar.error("Você não tem permissão para criar visitas.");
			return;
		}

		handleClickOpenDialog({
			m: "created",
			ID: "",
			s: { data: date, base: null, outro_motivo: null, descricao: null },
		});
	}

	function handleMobileEdit(visita: VisitaBase) {
		if (!can("visitas-bases:edit")) {
			snackBar.error("Você não tem permissão para atualizar visitas.");
			return;
		}

		handleClickOpenDialog({
			m: "updated",
			ID: visita.id,
			s: {
				data: visita.data,
				base: visita.base ?? null,
				outro_motivo: visita.outro_motivo ?? null,
				descricao: visita.descricao ?? "",
			},
		});
	}

	// quando trocar de mes
	function handleDatesSet(event: DatesSetArg) {
		const currentMonth = dayjs(event.view.currentStart);
		const nextFilters = {
			mes: currentMonth.month() + 1,
			ano: currentMonth.year(),
		};

		if (filters.mes === nextFilters.mes && filters.ano === nextFilters.ano) {
			return;
		}

		onFiltersChange(nextFilters);
	}

	const events = toEvents(visitas);

	if (isMobile) {
		return (
			<MobileVisitasAgenda
				visitas={visitas}
				filters={filters}
				onFiltersChange={onFiltersChange}
				onCreate={handleMobileCreate}
				onEdit={handleMobileEdit}
			/>
		);
	}

	return (
		<Box
			sx={(theme) => ({
				color: "text.primary",
				backgroundColor: "background.paper",
				border: `1px solid ${theme.palette.divider}`,
				borderRadius: 2,
				boxShadow:
					theme.palette.mode === "dark"
						? `0 18px 40px ${alpha(theme.palette.common.black, 0.28)}`
						: `0 14px 36px ${alpha(theme.palette.common.black, 0.08)}`,
				display: "flex",
				flexDirection: "column",
				height: {
					xs: "auto",
					md: "calc(100dvh)",
				},
				minHeight: {
					xs: "calc(100dvh - 280px)",
					md: 620,
				},
				overflow: "hidden",
				p: { xs: 1, sm: 2 },

				"& .fc": {
					color: theme.palette.text.primary,
					display: "flex",
					flex: 1,
					flexDirection: "column",
					minHeight: 0,
				},

				"& .fc-header-toolbar": {
					alignItems: { xs: "stretch", sm: "center" },
					flex: "0 0 auto",
					flexDirection: { xs: "column", sm: "row" },
					gap: 1.5,
					mb: "1rem !important",
				},

				"& .fc-toolbar-title": {
					color: theme.palette.text.primary,
					fontSize: { xs: "1.25rem", sm: "1.6rem", md: "2rem" },
					fontWeight: 700,
					lineHeight: 1.15,
					textAlign: { xs: "center", sm: "left" },
					textTransform: "capitalize",
				},

				"& .fc-toolbar-chunk": {
					display: "flex",
					justifyContent: { xs: "center", sm: "flex-start" },
				},

				"& .fc-button-group": {
					boxShadow: "none",
				},

				"& .fc-button": {
					backgroundColor: theme.palette.primary.main,
					borderColor: theme.palette.primary.main,
					boxShadow: "none !important",
					color: theme.palette.getContrastText(theme.palette.primary.main),
					fontWeight: 700,
					minHeight: 36,
					padding: "0.35rem 0.75rem",
					textTransform: "capitalize",
					borderRadius: "8px",
				},

				"& .fc-button:hover, & .fc-button:focus-visible": {
					backgroundColor: theme.palette.primary.dark,
					borderColor: theme.palette.primary.dark,
					boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.22)} !important`,
				},

				"& .fc-button-primary:not(:disabled).fc-button-active": {
					backgroundColor: theme.palette.primary.dark,
					borderColor: theme.palette.primary.dark,
				},

				"& .fc-button:disabled": {
					backgroundColor: alpha(theme.palette.primary.main, 0.2),
					borderColor: "transparent",
					color: alpha(
						theme.palette.getContrastText(theme.palette.primary.main),
						0.7,
					),
					opacity: 1,
				},

				"& .fc-scrollgrid": {
					borderColor: `${theme.palette.divider} !important`,
					borderRadius: 1,
					height: "100% !important",
					overflow: "hidden",
				},

				"& .fc-scrollgrid-section > *": {
					borderColor: `${theme.palette.divider} !important`,
				},

				"& .fc-theme-standard td": {
					borderColor: `${theme.palette.divider} !important`,
				},
				"& .fc-theme-standard th": {
					borderColor: `${alpha(theme.palette.secondary.main, 0.8)} !important`,
				},

				"& .fc-view-harness": {
					flex: "1 1 auto",
					minHeight: {
						xs: "calc(100dvh - 280px)",
						sm: "calc(100dvh - 250px)",
						md: 0,
					},
				},

				"& .fc-view-harness-passive": {
					minHeight: "inherit",
				},

				"& .fc-daygrid-body, & .fc-daygrid-body table": {
					height: "100% !important",
					width: "100% !important",
				},

				"& .fc-daygrid-day-frame": {
					minHeight: { xs: 92, sm: 106, md: 150 },
				},

				"& .fc-daygrid-day": {
					backgroundColor: theme.palette.background.paper,
					cursor: "pointer",
					transition: "background-color 160ms ease",
				},

				"& .fc-daygrid-day:hover": {
					backgroundColor: alpha(theme.palette.primary.main, 0.045),
				},

				"& .fc-day-today": {
					backgroundColor: `${alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.18 : 0.1)} !important`,
				},

				"& .fc-daygrid-day-number": {
					color: theme.palette.text.primary,
					fontWeight: 700,
					padding: "8px",
				},

				"& .fc-day-other .fc-daygrid-day-number": {
					color: theme.palette.text.secondary,
					opacity: 0.62,
				},

				"& .fc-event": {
					borderRadius: "6px",
					boxShadow:
						theme.palette.mode === "dark"
							? `0 1px 0 ${alpha(theme.palette.common.white, 0.12)} inset`
							: "none",
					color: theme.palette.common.white,
					fontSize: "0.8rem",
					fontWeight: 700,
					lineHeight: 1.25,
					padding: "3px 6px",
				},

				"& .fc-event-title": {
					overflow: "hidden",
					textOverflow: "ellipsis",
				},

				"& .visit-event-content": {
					alignItems: "center",
					display: "flex",
					gap: 0.5,
					minWidth: 0,
					width: "100%",
				},

				"& .visit-event-description-icon": {
					color: "inherit",
					flex: "0 0 auto",
					fontSize: 14,
					opacity: 0.95,
				},

				"& .visit-event-title": {
					minWidth: 0,
					overflow: "hidden",
					textOverflow: "ellipsis",
					whiteSpace: "nowrap",
				},

				"& .fc-day-disabled": {
					opacity: 0.8,
					cursor: "not-allowed",
					backgroundColor: `${alpha(theme.palette.text.disabled, theme.palette.mode === "dark" ? 0.08 : 0.08)} !important`,
				},
				"& .fc-col-header-cell .fc-scrollgrid-sync-inner": {
					backgroundColor:
						theme.palette.mode === "dark"
							? alpha(theme.palette.secondary.main, 1)
							: alpha(theme.palette.secondary.main, 1),
					color: "white",
					padding: "10px 6px",
					borderColor: `${theme.palette.divider} !important`,
				},
				"& .fc-col-header-cell .fc-scrollgrid-sync-inner .fc-col-header-cell-cushion":
					{
						color: "white",
						fontWeight: 800,
						textTransform: "uppercase",
					},
			})}
		>
			<FullCalendar
				ref={calendarRef}
				plugins={[dayGridPlugin, interactionPlugin]}
				initialView="dayGridMonth"
				locale={ptBrLocale}
				events={events}
				dateClick={(e) => can("visitas-bases:new") && handleDateClick(e)}
				datesSet={handleDatesSet}
				eventClick={(e) => can("visitas-bases:edit") && handleEventClick(e)}
				eventContent={renderEventContent}
				eventMouseEnter={handleEventMouseEnter}
				eventMouseLeave={handleEventMouseLeave}
				showNonCurrentDates={false}
				fixedWeekCount={false}
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "",
				}}
				eventDisplay="block"
				eventTimeFormat={{ hour: undefined }}
				displayEventTime={false}
				expandRows
				height="100%"
				dayMaxEvents={5}
				dayCellClassNames={(arg) => {
					const hoje = dayjs().startOf("day");
					const data = dayjs(arg.date).startOf("day");

					return data.isBefore(hoje) ? ["fc-day-disabled"] : [];
				}}
			/>
			<PopperEvent hoveredVisita={hoveredVisita} />
		</Box>
	);
}
