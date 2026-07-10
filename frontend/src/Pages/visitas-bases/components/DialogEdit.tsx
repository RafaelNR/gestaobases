import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Stack,
} from "@mui/material";
import {
	useCreateVisitaBase,
	useDeleteVisitaBase,
	useUpdateVisitaBase,
} from "@/Hooks/useVisitasBases";
import type { VisitaUpdateSchemaInput } from "@/Types/VisitaBase";
import {
	FormProvider,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { visitaUpdateSchema } from "@/Schemas/Visitas.schemas";
import FormInput from "@/Components/TextField/TextFieldController";
import SelectBasesController from "@/Components/Select/SelectBasesController";
import useDialog from "@/Contexts/DialogContext";
import { useCallback } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import snackBar from "@/Hooks/useSnackBar";
import SelectOutroMotivoController from "./SelectOutroMotivoController";
import dayjs from "dayjs";

export default function DialogCreated() {
	const updateMut = useUpdateVisitaBase();
	const deleteMut = useDeleteVisitaBase();
	const { modal, id, selected, handleCloseDialog } = useDialog();
	const isEditing = Boolean(id);
	const isSaving = updateMut.isPending;
	const isDeleting = deleteMut.isPending;
	const isBusy = isSaving || isDeleting;

	const methods = useForm<VisitaUpdateSchemaInput>({
		resolver: zodResolver(visitaUpdateSchema as any),
		values: {
			id: id as string,
			data: selected?.data,
			base: selected?.base ?? undefined,
			outro_motivo: selected?.outro_motivo ?? undefined,
			descricao: selected?.descricao ?? undefined,
		},
	});

	const onSubmit: SubmitHandler<VisitaUpdateSchemaInput> = useCallback(
		async (values: VisitaUpdateSchemaInput) => {
			console.log(values);
			await updateMut.mutateAsync(values);
			handleCloseDialog();
			methods.reset();
		},
		[handleCloseDialog, id, methods, updateMut],
	);

	const handleDelete = useCallback(async () => {
		if (!id) return;

		const confirmed = window.confirm("Deseja remover esta visita?");
		if (!confirmed) return;

		await deleteMut.mutateAsync(String(id));
		handleCloseDialog();
		methods.reset();
	}, [deleteMut, handleCloseDialog, id, methods]);

	const onError: SubmitErrorHandler<VisitaUpdateSchemaInput> = (errors) => {
		console.log(errors);
		snackBar.error("Erro em salvar visita. Verifique os campos obrigatórios.");
	};

	return (
		<FormProvider {...methods}>
			<Dialog
				open={modal === "updated"}
				onClose={() => handleCloseDialog()}
				maxWidth="xs"
				fullWidth
			>
				<DialogTitle>
					Editar Agendamento -{" "}
					{dayjs(selected?.data as string)
						.locale("pt-br")
						.format("DD/MM/YYYY")}
				</DialogTitle>
				<DialogContent>
					<Stack spacing={2} mt={1}>
						<SelectBasesController
							name="base"
							fullWidth
							required={false}
							keyValue="nome"
						/>
						<SelectOutroMotivoController
							name="outro_motivo"
							fullWidth
							required={false}
						/>
						<FormInput
							name="descricao"
							label="Observações da visita"
							fullWidth
						/>
					</Stack>
				</DialogContent>
				<DialogActions>
					{isEditing && (
						<LoadingButton
							color="error"
							variant="outlined"
							loading={isDeleting}
							disabled={isBusy}
							onClick={handleDelete}
						>
							Remover
						</LoadingButton>
					)}
					<Button onClick={() => handleCloseDialog()} disabled={isBusy}>
						Cancelar
					</Button>
					<LoadingButton
						variant="contained"
						loading={isSaving}
						disabled={isBusy}
						onClick={methods.handleSubmit(onSubmit, onError)}
					>
						Salvar
					</LoadingButton>
				</DialogActions>
			</Dialog>
		</FormProvider>
	);
}
