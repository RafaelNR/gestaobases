import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { Image } from "@mui/icons-material";
import dayjs from "dayjs";
import { DialogProvider } from "@/Contexts/DialogContext";
import MyFullCalendar from "./FullCalendar";
import { DialogFactory } from "./DialogFactory";
import { usePermissions } from "@/Hooks/usePermissions";
import { useGetVisitasBases } from "@/Hooks/useVisitasBases";
import { VisitasBasesPDFButton } from "./pdf";
import type { VisitasBasesCalendarFilters } from "./types";

type PrintableUser = {
	nome?: string;
	name?: string;
	email?: string;
};

function getPrintedBy(user: unknown) {
	const printableUser = user as PrintableUser | null | undefined;

	return (
		printableUser?.nome ??
		printableUser?.name ??
		printableUser?.email ??
		"Usuário"
	);
}

export default function VisitasBasesPage() {
	const calendarWrapRef = useRef<HTMLDivElement>(null);
	const { can, user } = usePermissions();
	const [calendarFilters, setCalendarFilters] =
		useState<VisitasBasesCalendarFilters>(() => ({
			mes: dayjs().month() + 1,
			ano: dayjs().year(),
		}));
	const { data: visitas = [], isLoading } = useGetVisitasBases(calendarFilters);

	async function handleExportImage() {
		const el = calendarWrapRef.current;
		if (!el) return;
		const canvas = await html2canvas(el, { scale: 2, useCORS: true });
		const link = document.createElement("a");
		link.download = `calendario-visitas-${new Date().toISOString().slice(0, 7)}.png`;
		link.href = canvas.toDataURL("image/png");
		link.click();
	}

	return (
		<>
			<Stack
				direction={{ xs: "column", sm: "row" }}
				justifyContent="space-between"
				alignItems="center"
				mb={2}
				gap={1}
				className="no-print"
			>
				<Typography variant="h6"></Typography>
				<Stack direction="row" spacing={1} sx={{ width: { xs: "100%", sm: "auto" } }}>
					{can("visitas-bases:imagem") && (
						<Tooltip title="Exportar como imagem">
							<Button
								variant="outlined"
								startIcon={<Image />}
								size="small"
								onClick={handleExportImage}
								sx={{ flex: { xs: 1, sm: "initial" } }}
							>
								Imagem
							</Button>
						</Tooltip>
					)}
					{can("visitas-bases:pdf") && (
						<Tooltip title="Baixar calendário em PDF">
							<span>
								<VisitasBasesPDFButton
									visitas={visitas}
									filters={calendarFilters}
									printedBy={getPrintedBy(user)}
									disabled={isLoading}
								/>
							</span>
						</Tooltip>
					)}
				</Stack>
			</Stack>

			<DialogProvider>
				<Box
					ref={calendarWrapRef}
					className="fc-print-area"
					sx={{ "& .fc": { fontFamily: "inherit" } }}
				>
					<MyFullCalendar
						visitas={visitas}
						filters={calendarFilters}
						onFiltersChange={setCalendarFilters}
					/>
					<DialogFactory />
				</Box>
			</DialogProvider>
		</>
	);
}
