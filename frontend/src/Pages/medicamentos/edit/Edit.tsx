import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import useSnackBar from "@/Hooks/useSnackBar";
import { useUpdateMedicamento } from "@/Hooks/useMedicamentos";
import type { Medicamento, MedicamentoSchemaInput } from "@/Types/Medicamento";
import Form from "../components/Form";
import { medicamentoSchema } from "@/Schemas/Medicamento.schemas";
import DialogButtonsAction from "@/Components/Dialog/DialogButtons";

const FORM_ID = "medicamento-edit-form";

export default function EditMedicamento({
	open,
	onClose,
	medicamento,
}: {
	open: boolean;
	onClose: () => void;
	medicamento: Medicamento | null;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdateMedicamento();

	const methods = useForm<MedicamentoSchemaInput>({
		resolver: zodResolver(medicamentoSchema),
		values: medicamento
			? {
					nome: medicamento.nome,
					codigo: medicamento.codigo,
					especificacao: medicamento.especificacao,
					categoria: medicamento.categoria,
					descricao: medicamento.descricao ?? "",
				}
			: {
					nome: "",
					codigo: 0,
					especificacao: "",
					categoria: "",
					descricao: "",
				},
	});
	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<MedicamentoSchemaInput> = useCallback(
		async (values) => {
			if (!medicamento) return;
			await mutateAsync({
				id: medicamento.id,
				...values,
				descricao: values.descricao || null,
			});
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[medicamento],
	);

	const onError: SubmitErrorHandler<MedicamentoSchemaInput> =
		useCallback(() => {
			handleSnackBar({
				type: "error",
				message: "Preencha os campos obrigatórios.",
			});
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
			title="Editar Medicamento"
			icon={<MedicalServicesIcon />}
			maxWidth="md"
			actions={
				<DialogButtonsAction
					FORM_ID={"medicamento-edit-form"}
					handleClose={onClose}
					isSubmitting={false}
					fechar
					salvar
				/>
			}
		>
			<MyFormProvider
				id={FORM_ID}
				methods={methods}
				isSubmitting={isSubmitting}
				Form={<Form />}
				onSubmit={handleSubmit(onSubmit, onError)}
			/>
		</AppDialog>
	);
}
