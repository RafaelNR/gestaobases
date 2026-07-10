import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import AssignmentIcon from "@mui/icons-material/Assignment";

import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import useSnackBar from "@/Hooks/useSnackBar";
import { useUpdateReceituario } from "@/Hooks/useReceituarios";
import { useGetMedicos } from "@/Hooks/useMedicos";
import { useGetBases } from "@/Hooks/useBases";
import { useGetAmbulancias } from "@/Hooks/useAmbulancias";
import type { Receituario, ReceituarioSchemaInput } from "@/Types/Receituario";
import Form from "../components/Form";
import { receituarioSchema } from "@/Schemas/Receituario.schemas";


const FORM_ID = "receituario-edit-form";

export default function EditReceituario({
	open,
	onClose,
	receituario,
}: {
	open: boolean;
	onClose: () => void;
	receituario: Receituario | null;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdateReceituario();
	const { data: medicos = [] } = useGetMedicos();
	const { data: bases = [] } = useGetBases();
	const { data: ambulancias = [] } = useGetAmbulancias();

	const methods = useForm<ReceituarioSchemaInput>({
		resolver: zodResolver(receituarioSchema),
		values: receituario
			? {
					data: receituario.data?.slice(0, 10) ?? "",
					data_ocorrencia: receituario.data_ocorrencia?.slice(0, 10) ?? "",
					ocorrencia: String(receituario.ocorrencia),
					medico: receituario.medico,
					base: receituario.base,
					ambulancia: receituario.ambulancia,
					requerimento: receituario.requerimento ?? "",
					obs: receituario.obs ?? "",
				}
			: {
					data: "",
					data_ocorrencia: "",
					ocorrencia: "",
					medico: "",
					base: "",
					ambulancia: "",
					requerimento: "",
					obs: "",
				},
	});
	const { handleSubmit, reset, formState: { isSubmitting } } = methods;

	const onSubmit: SubmitHandler<ReceituarioSchemaInput> = useCallback(
		async (values) => {
			if (!receituario) return;
			await mutateAsync({
				id: receituario.id,
				...values,
				ocorrencia: Number(values.ocorrencia),
				requerimento: values.requerimento || undefined,
				obs: values.obs || undefined,
				data_ocorrencia: values.data_ocorrencia || undefined,
			});
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[receituario],
	);

	const onError: SubmitErrorHandler<ReceituarioSchemaInput> = useCallback(() => {
		handleSnackBar({ type: "error", message: "Preencha os campos obrigatórios." });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClose = () => {
		reset();
		onClose();
	};

	return (
		<AppDialog
			open={open}
			onClose={handleClose}
			title={`Editar Receituário ${receituario?.numero ?? ""}`}
			icon={<AssignmentIcon />}
			maxWidth="md"
			actions={
				<>
					<Button onClick={handleClose} disabled={isSubmitting}>
						Cancelar
					</Button>
					<LoadingButton
						type="submit"
						form={FORM_ID}
						variant="contained"
						loading={isSubmitting}
						startIcon={<SaveIcon />}
					>
						Salvar
					</LoadingButton>
				</>
			}
		>
			<MyFormProvider
				id={FORM_ID}
				methods={methods}
				isSubmitting={isSubmitting}
				onSubmit={handleSubmit(onSubmit, onError)}
				Form={
					<Form
						medicos={medicos as any[]}
						bases={bases as any[]}
						ambulancias={ambulancias as any[]}
					/>
				}
			/>
		</AppDialog>
	);
}
