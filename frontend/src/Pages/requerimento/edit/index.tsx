import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAuth from "@/Hooks/useAuth";
import { getRequerimentoFormSchema } from "@/Schemas/Requerimento.schemas";
import type { RequerimentoFormValues } from "@/Types/Requerimento";
import RequerimentoPage from "@/Pages/requerimento/shared/RequerimentoPage";
import { buildRequerimentoDefaultValues } from "@/Pages/requerimento/shared/formDefaults";
import { getTipoFromRouteParam } from "@/Pages/requerimento/shared/routeTipo";

export default function EditRequerimentoPage() {
	const { user } = useAuth();
	const { tipo: tipoParam, requerimentoId } = useParams();
	const tipo = getTipoFromRouteParam(tipoParam);
	const methods = useForm<RequerimentoFormValues>({
		resolver: zodResolver(getRequerimentoFormSchema(tipo as any) as any),
		defaultValues: buildRequerimentoDefaultValues(tipo, user),
	});

	if (!tipo || !requerimentoId) {
		return (
			<Box sx={{ p: 2 }}>
				<Typography color="error">Requerimento inválido.</Typography>
			</Box>
		);
	}

	return (
		<FormProvider {...methods}>
			<RequerimentoPage requerimentoId={requerimentoId} />
		</FormProvider>
	);
}
