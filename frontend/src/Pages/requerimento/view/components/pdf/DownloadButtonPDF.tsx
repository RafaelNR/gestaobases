import { Download } from "@mui/icons-material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button, CircularProgress } from "@mui/material";
import {
	TIPO_LABELS,
	type Requerimento,
	type TipoRequerimento,
} from "@/Types/Requerimento";
import { RequerimentoPDFDocument } from "./PDF";

export function DownloadPDFButton({
	requerimento,
	tipo,
	printedBy,
}: {
	requerimento: Requerimento;
	tipo: TipoRequerimento;
	printedBy: string;
}) {
	return (
		<PDFDownloadLink
			document={
				<RequerimentoPDFDocument
					requerimento={requerimento}
					tipo={tipo}
					printedBy={printedBy}
				/>
			}
			fileName={`requerimento-${TIPO_LABELS[tipo].toLowerCase()}-${requerimento.numero}.pdf`}
			style={{ textDecoration: "none" }}
		>
			{({ loading }) => (
				<Button
					variant="contained"
					startIcon={
						loading ? (
							<CircularProgress size={16} color="inherit" />
						) : (
							<Download />
						)
					}
					disabled={loading}
				>
					{loading ? "Gerando..." : "Baixar PDF"}
				</Button>
			)}
		</PDFDownloadLink>
	);
}
