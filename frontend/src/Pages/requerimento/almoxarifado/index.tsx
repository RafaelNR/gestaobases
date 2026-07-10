import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import useAuth from "@/Hooks/useAuth";
import { getRequerimentoFormSchema } from "@/Schemas/Requerimento.schemas";
import type { RequerimentoAlmCMEFormValues } from "@/Types/Requerimento";
import RequerimentoPage from "@/Pages/requerimento/shared/RequerimentoPage";
import { buildRequerimentoDefaultValues } from "@/Pages/requerimento/shared/formDefaults";
import { useEffect } from "react";

export default function AlmoxarifadoRequerimentosPage() {
	const { user } = useAuth();
	const methods = useForm<RequerimentoAlmCMEFormValues>({
		resolver: zodResolver(getRequerimentoFormSchema("Almoxarifado")),
		defaultValues: buildRequerimentoDefaultValues("Almoxarifado", user),
	});

	useEffect(() => {
		if (user) {
			methods.setValue("setor", user?.Setor.nome ?? "");
			methods.setValue("base", user?.Base.nome ?? "");
		}
	}, [user]);

	return (
		<FormProvider {...methods}>
			<RequerimentoPage />
		</FormProvider>
	);
}
