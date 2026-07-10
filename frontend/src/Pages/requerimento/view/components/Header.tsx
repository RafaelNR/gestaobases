import { ArrowBack, Edit } from "@mui/icons-material";
import { Button, ButtonGroup, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "@/Hooks/useAuth";
import { usePermissions } from "@/Hooks/usePermissions";
import { useEffect, useMemo } from "react";
import { DownloadPDFButton } from "./pdf/DownloadButtonPDF";
import { ViewButtonPDF } from "./pdf/ViewButtonPDF";
import { Requerimento, TipoRequerimento } from "@/Types/Requerimento";

export default function RequerimentoHeader({
	requerimento,
	tipo,
}: {
	requerimento: Requerimento;
	tipo: TipoRequerimento;
}) {
	const navigate = useNavigate();
	const { tipo: tipoParam, requerimentoId } = useParams();
	const { user } = useAuth();
	const { can } = usePermissions();

	const canEdit = useMemo(() => {
		if (
			can("requerimentos:editAny") &&
			!["Finalizado", "Cancelado"].includes(requerimento.status)
		) {
			return true;
		}

		if (
			can("requerimentos:edit") &&
			requerimento.status === "Rascunho" &&
			user?.id === requerimento.userId &&
			!["Finalizado", "Cancelado"].includes(requerimento.status)
		) {
			return true;
		}

		return false;
	}, [can, requerimento, user]);

	const printedBy = user?.nome ?? user?.username ?? "Usuário autenticado";

	return (
		<Stack
			direction={{ xs: "column", sm: "row" }}
			justifyContent="space-between"
			alignItems={{ xs: "flex-start", sm: "center" }}
			gap={1.5}
		>
			<Stack
				direction={{ xs: "column", sm: "row" }}
				spacing={1}
				width={{ xs: "100%", sm: "auto" }}
			>
				<Button
					variant="outlined"
					startIcon={<ArrowBack />}
					onClick={() => navigate(`/requerimentos/gestao/${tipoParam}`)}
				>
					Voltar
				</Button>
			</Stack>
			<Stack
				direction={{ xs: "column", sm: "row" }}
				spacing={1}
				width={{ xs: "100%", sm: "auto" }}
			>
				<ButtonGroup variant="contained" aria-label="Basic button group">
					{canEdit && (
						<Button
							variant="outlined"
							color="primary"
							startIcon={<Edit />}
							onClick={() =>
								navigate(`/requerimentos/${tipoParam}/edit/${requerimentoId}`)
							}
						>
							Editar
						</Button>
					)}

					{can("requerimentos:pdf") && (
						<DownloadPDFButton
							requerimento={requerimento}
							tipo={tipo}
							printedBy={printedBy}
						/>
					)}

					{can("requerimentos:pdf") && (
						<ViewButtonPDF
							requerimento={requerimento}
							tipo={tipo}
							printedBy={printedBy}
						/>
					)}
				</ButtonGroup>
			</Stack>
		</Stack>
	);
}
