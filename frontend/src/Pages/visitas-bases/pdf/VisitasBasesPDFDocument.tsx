import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import type { VisitaBase } from "@/Types/VisitaBase";
import { DateFormat } from "@/Utils/dates";
import type { VisitasBasesCalendarFilters } from "../types";

const WEEK_DAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MAX_VISITAS_PER_DAY = 5;

const styles = StyleSheet.create({
	page: {
		padding: 24,
		fontFamily: "Helvetica",
		fontSize: 8,
		color: "#1f2933",
	},
	header: {
		borderBottomWidth: 2,
		borderBottomColor: "#0B132B",
		paddingBottom: 8,
		marginBottom: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	headerLeft: { flex: 1 },
	title: {
		fontSize: 15,
		fontFamily: "Helvetica-Bold",
		color: "#0B132B",
	},
	subtitle: {
		fontSize: 8,
		color: "#52616f",
		marginTop: 2,
	},
	monthBadge: {
		alignItems: "flex-end",
	},
	monthTitle: {
		fontSize: 13,
		fontFamily: "Helvetica-Bold",
		color: "#ff781d",
		textTransform: "capitalize",
	},
	monthCount: {
		fontSize: 8,
		color: "#52616f",
		marginTop: 2,
	},
	summaryRow: {
		flexDirection: "row",
		marginBottom: 8,
	},
	summaryCard: {
		flex: 1,
		borderWidth: 1,
		borderColor: "#d7dde8",
		backgroundColor: "#f8fafc",
		padding: 6,
		marginRight: 6,
	},
	summaryCardLast: {
		marginRight: 0,
	},
	summaryLabel: {
		fontSize: 7,
		color: "#667085",
		textTransform: "uppercase",
		marginBottom: 2,
	},
	summaryValue: {
		fontSize: 10,
		fontFamily: "Helvetica-Bold",
		color: "#0B132B",
	},
	calendar: {
		borderWidth: 1,
		borderColor: "#0B132B",
	},
	weekHeader: {
		flexDirection: "row",
		backgroundColor: "#0B132B",
	},
	weekHeaderCell: {
		width: "14.2857%",
		paddingVertical: 5,
		paddingHorizontal: 4,
		borderRightWidth: 1,
		borderRightColor: "#24304a",
	},
	weekHeaderCellLast: {
		borderRightWidth: 0,
	},
	weekHeaderText: {
		color: "#ffffff",
		fontSize: 7,
		fontFamily: "Helvetica-Bold",
		textAlign: "center",
		textTransform: "uppercase",
	},
	weekRow: {
		flexDirection: "row",
		minHeight: 78,
		borderTopWidth: 1,
		borderTopColor: "#d7dde8",
	},
	dayCell: {
		width: "14.2857%",
		minHeight: 78,
		padding: 4,
		borderRightWidth: 1,
		borderRightColor: "#d7dde8",
	},
	dayCellLast: {
		borderRightWidth: 0,
	},
	dayCellMuted: {
		backgroundColor: "#f2f4f7",
		color: "#98a2b3",
	},
	dayCellToday: {
		backgroundColor: "#fff7ed",
	},
	dayNumber: {
		fontSize: 8,
		fontFamily: "Helvetica-Bold",
		marginBottom: 3,
	},
	eventPill: {
		backgroundColor: "#ff781d",
		color: "#ffffff",
		paddingVertical: 2,
		paddingHorizontal: 3,
		marginBottom: 2,
	},
	eventText: {
		fontSize: 6,
		fontFamily: "Helvetica-Bold",
		color: "#ffffff",
	},
	eventObs: {
		fontSize: 5,
		color: "#ffffff",
		marginTop: 1,
	},
	moreText: {
		fontSize: 6,
		color: "#667085",
		marginTop: 1,
	},
	emptyText: {
		fontSize: 7,
		color: "#98a2b3",
		marginTop: 2,
	},
	footer: {
		position: "absolute",
		left: 24,
		right: 24,
		bottom: 16,
		borderTopWidth: 1,
		borderTopColor: "#cfd8dc",
		paddingTop: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		color: "#78909c",
		fontSize: 7,
	},
});

type CalendarDay = {
	date: dayjs.Dayjs;
	inCurrentMonth: boolean;
	visitas: VisitaBase[];
};

type CalendarMonth = {
	key: string;
	label: string;
	days: CalendarDay[];
	visitas: VisitaBase[];
};

function getVisitaNome(visita: VisitaBase) {
	return visita.base ?? visita.outro_motivo ?? "Visita";
}

function getDateKey(visita: VisitaBase) {
	return visita.data.slice(0, 10);
}

function sortVisitasByDate(visitas: VisitaBase[]) {
	return [...visitas].sort(
		(a, b) => new Date(a.data).getTime() - new Date(b.data).getTime(),
	);
}

function toTitleCase(value: string) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

function buildCalendarMonth(
	monthKey: string,
	visitas: VisitaBase[],
): CalendarMonth {
	const monthStart = dayjs(`${monthKey}-01`);
	const gridStart = monthStart.startOf("week");
	const visitasByDay = sortVisitasByDate(visitas).reduce<
		Record<string, VisitaBase[]>
	>((acc, visita) => {
		const dateKey = getDateKey(visita);
		acc[dateKey] = [...(acc[dateKey] ?? []), visita];
		return acc;
	}, {});

	const days = Array.from({ length: 42 }, (_, index) => {
		const date = gridStart.add(index, "day");
		const dateKey = date.format("YYYY-MM-DD");

		return {
			date,
			inCurrentMonth: date.format("YYYY-MM") === monthKey,
			visitas: visitasByDay[dateKey] ?? [],
		};
	});

	return {
		key: monthKey,
		label: toTitleCase(monthStart.locale("pt-br").format("MMMM [de] YYYY")),
		days,
		visitas: sortVisitasByDate(
			visitas.filter((visita) => visita.data.slice(0, 7) === monthKey),
		),
	};
}

function chunkWeeks(days: CalendarDay[]) {
	const weeks: CalendarDay[][] = [];

	for (let index = 0; index < days.length; index += 7) {
		weeks.push(days.slice(index, index + 7));
	}

	return weeks;
}

function renderEvent(visita: VisitaBase) {
	const hasDescricao = Boolean(visita.descricao?.trim());

	return (
		<View key={visita.id} style={styles.eventPill}>
			<Text style={styles.eventText}>{getVisitaNome(visita)}</Text>
			{hasDescricao && <Text style={styles.eventObs}>{visita.descricao}</Text>}
		</View>
	);
}

export function VisitasBasesPDFDocument({
	visitas,
	filters,
	printedBy,
}: {
	visitas: VisitaBase[];
	filters: VisitasBasesCalendarFilters;
	printedBy: string;
}) {
	const monthKey = `${filters.ano}-${String(filters.mes).padStart(2, "0")}`;
	const sortedVisitas = sortVisitasByDate(visitas);
	const month = buildCalendarMonth(monthKey, sortedVisitas);

	return (
		<Document title="Calendário de visitas às bases">
			<Page
				key={month.key}
				size="A4"
				orientation="landscape"
				style={styles.page}
				wrap={false}
			>
				<View style={styles.header}>
					<View style={styles.headerLeft}>
						<Text style={styles.title}>Calendário de visitas às bases</Text>
						<Text style={styles.subtitle}>
							Emitido em {DateFormat(new Date())} por {printedBy}
						</Text>
					</View>
					<View style={styles.monthBadge}>
						<Text style={styles.monthTitle}>{month.label}</Text>
						<Text style={styles.monthCount}>
							{month.visitas.filter((e) => e.base).length} Visitas a bases no
							mês
						</Text>
					</View>
				</View>

				<View style={styles.calendar}>
					<View style={styles.weekHeader}>
						{WEEK_DAYS.map((day, index) => (
							<View
								key={day}
								style={[
									styles.weekHeaderCell,
									index === WEEK_DAYS.length - 1 &&
										(styles.weekHeaderCellLast as any),
								]}
							>
								<Text style={styles.weekHeaderText}>{day}</Text>
							</View>
						))}
					</View>

					{chunkWeeks(month.days).map((week, weekIndex) => (
						<View key={`${month.key}-${weekIndex}`} style={styles.weekRow}>
							{week.map((day, dayIndex) => {
								const visibleVisitas = day.visitas.slice(
									0,
									MAX_VISITAS_PER_DAY,
								);
								const hiddenVisits = day.visitas.length - visibleVisitas.length;
								const isToday = day.date.isSame(dayjs(), "day");

								return (
									<View
										key={day.date.format("YYYY-MM-DD")}
										style={
											[
												styles.dayCell,
												dayIndex === week.length - 1 && styles.dayCellLast,
												!day.inCurrentMonth && styles.dayCellMuted,
												isToday && styles.dayCellToday,
											] as any
										}
									>
										<Text style={styles.dayNumber}>{day.date.format("D")}</Text>

										{visibleVisitas.length > 0 ? (
											visibleVisitas.map(renderEvent)
										) : (
											<Text style={styles.emptyText}> </Text>
										)}

										{hiddenVisits > 0 && (
											<Text style={styles.moreText}>
												+{hiddenVisits} visitas
											</Text>
										)}
									</View>
								);
							})}
						</View>
					))}
				</View>
			</Page>
		</Document>
	);
}
