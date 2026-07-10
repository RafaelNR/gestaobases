import { Download } from "@mui/icons-material";
import { pdf } from "@react-pdf/renderer";
import { Button, CircularProgress } from "@mui/material";
import {
	TIPO_LABELS,
	type Requerimento,
	type TipoRequerimento,
} from "@/Types/Requerimento";
import { RequerimentoPDFDocument } from "./PDF";
import React from "react";
import ButtonLoading from "@/Components/Button/Loading";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export function ViewButtonPDF({
	requerimento,
	tipo,
	printedBy,
}: {
	requerimento: Requerimento;
	tipo: TipoRequerimento;
	printedBy: string;
}) {
	const [loading, setLoading] = React.useState(false);

	const handleClick = React.useCallback(() => {
		setLoading(true);

		if (requerimento && printedBy) {
			pdf(
				<RequerimentoPDFDocument
					requerimento={requerimento}
					tipo={tipo}
					printedBy={printedBy}
				/>,
			)
				.toBlob()
				.then((blob: Blob) => {
					const fileURL = window.URL.createObjectURL(blob);
					window.open(fileURL);
					// window.URL.revokeObjectURL(blob);
					window.URL.revokeObjectURL(fileURL);
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setLoading(false);
				});
			return;
		}

		setLoading(false);
	}, [requerimento, printedBy]);

	return (
		<ButtonLoading
			loading={loading}
			variant="contained"
			aria-label="pdf"
			color="secondary"
			startIcon={<PictureAsPdfIcon />}
			onClick={handleClick}
			// target="_blank"
			disabled={requerimento ? false : true}
		>
			PDF
		</ButtonLoading>
	);
}
