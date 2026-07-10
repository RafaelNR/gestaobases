import { Download } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import { pdf } from "@react-pdf/renderer";
import { useCallback, useState } from "react";
import type { VisitaBase } from "@/Types/VisitaBase";
import { DateFormat } from "@/Utils/dates";
import snackBar from "@/Hooks/useSnackBar";
import { VisitasBasesPDFDocument } from "./VisitasBasesPDFDocument";
import type { VisitasBasesCalendarFilters } from "../types";

export function VisitasBasesPDFButton({
	visitas,
	filters,
	printedBy,
	disabled,
}: {
	visitas: VisitaBase[];
	filters: VisitasBasesCalendarFilters;
	printedBy: string;
	disabled?: boolean;
}) {
	const [loading, setLoading] = useState(false);
	const fileDate = DateFormat(new Date(), "YYYY-MM-DD");
	const fileName = `calendario-visitas-bases-${fileDate}.pdf`;

	const handleDownload = useCallback(async () => {
		try {
			setLoading(true);

			const blob = await pdf(
				<VisitasBasesPDFDocument
					visitas={visitas}
					filters={filters}
					printedBy={printedBy}
				/>,
			).toBlob();
			const fileURL = window.URL.createObjectURL(blob);
			window.open(fileURL);
			// window.URL.revokeObjectURL(blob);
			window.URL.revokeObjectURL(fileURL);
		} catch (error) {
			console.log(error);
			snackBar.error("Erro ao gerar PDF.");
		} finally {
			setLoading(false);
		}
	}, [fileName, filters, printedBy, visitas]);

	return (
		<Button
			variant="outlined"
			startIcon={
				loading ? <CircularProgress size={16} color="inherit" /> : <Download />
			}
			size="small"
			disabled={disabled || loading}
			onClick={handleDownload}
		>
			{loading ? "Gerando..." : "PDF"}
		</Button>
	);
}
