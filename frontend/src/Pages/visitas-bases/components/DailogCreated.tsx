import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Stack,
} from "@mui/material";
import { useCreateVisitaBase } from "@/Hooks/useVisitasBases";
import {
	FormProvider,
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisitaCreateSchemaInput } from "@/Types/VisitaBase";
import FormInput from "@/Components/TextField/TextFieldController";
import SelectBasesController from "@/Components/Select/SelectBasesController";
import useDialog from "@/Contexts/DialogContext";
import { useCallback } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import snackBar from "@/Hooks/useSnackBar";
import SelectOutroMotivoController from "./SelectOutroMotivoController";
import dayjs from "dayjs";
import { visitaCreateSchema } from "@/Schemas/Visitas.schemas";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import useLayout from "@/Hooks/useLayout";

export default function DialogCreated() {
	const createMut = useCreateVisitaBase();
	const { modal, id, selected, handleCloseDialog } = useDialog();
	const isEditing = Boolean(id);
	const { isMobile } = useLayout();
	const isSaving = createMut.isPending;
	const isBusy = isSaving;

	const methods = useForm<VisitaCreateSchemaInput>({
		resolver: zodResolver(visitaCreateSchema as any),
		values: {
			data: dayjs(selected?.data as string)
				.locale("pt-br")
				.toDate(),
			base: selected?.base ?? undefined,
			outro_motivo: selected?.outro_motivo ?? undefined,
			descricao: selected?.descricao ?? undefined,
		},
	});

	const onSubmit: SubmitHandler<VisitaCreateSchemaInput> = useCallback(
		async (values: VisitaCreateSchemaInput) => {
			await createMut.mutateAsync(values);

			handleCloseDialog();
			methods.reset();
		},
		[createMut, handleCloseDialog, id, methods],
	);

	const onError: SubmitErrorHandler<VisitaCreateSchemaInput> = (errors) => {
		console.log(errors);
		// console.warn("Falha na validação da visita.", {
		// 	tipo,
		// 	campos: Object.keys(errors),
		// });

		console.log(methods.getValues());

		snackBar.error("Teste");
	};

	return (
		<FormProvider {...methods}>
			<Dialog
				open={modal === "created"}
				onClose={() => handleCloseDialog()}
				maxWidth="xs"
				fullWidth
			>
				<DialogTitle>
					{isEditing ? "Editar Agendamento" : "Criar Agendamento"} -{" "}
					{dayjs(selected?.data as string)
						.locale("pt-br")
						.format("DD/MM/YYYY")}
				</DialogTitle>
				<DialogContent>
					<Stack spacing={2} mt={1}>
						{isMobile && (
							<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
								<Controller
									name="data"
									control={methods.control}
									render={({ field, fieldState }) => (
										<DatePicker
											label="Data da visita"
											value={field.value ? dayjs(field.value) : null}
											onChange={(date) => field.onChange(date?.toDate() ?? null)}
											minDate={dayjs()}
											slotProps={{
												textField: {
													fullWidth: true,
													size: "small",
													error: Boolean(fieldState.error),
													helperText: fieldState.error?.message,
												},
											}}
										/>
									)}
								/>
							</LocalizationProvider>
						)}
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
