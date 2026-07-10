import { useCallback } from "react";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import WorkIcon from "@mui/icons-material/Work";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import AppDialog from "@/Components/Dialog/AppDialog";
import MyFormProvider from "@/Components/Form/FormProvider";
import { useUpdateCargo } from "@/Hooks/useCargos";
import useSnackBar from "@/Hooks/useSnackBar";
import { cargoInsertSchema } from "@/Schemas/Cargo.schemas";
import type { Cargo, CargoSchemaInsert } from "@/Types/Cargo";
import CargoForm from "./Form";

const FORM_ID = "cargo-edit-form";

export default function DialogEdit({
	open,
	onClose,
	cargo,
}: {
	open: boolean;
	onClose: () => void;
	cargo: Cargo | null;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdateCargo();

	const methods = useForm<CargoSchemaInsert>({
		resolver: zodResolver(cargoInsertSchema),
		values: cargo
			? {
					nome: cargo.nome,
					nomeVisivel: cargo.nomeVisivel,
					setor: cargo.setor,
				}
			: { nome: "", nomeVisivel: "", setor: "" },
	});

	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<CargoSchemaInsert> = useCallback(
		async (values) => {
			if (!cargo) return;
			await mutateAsync({ id: cargo.id, ...values });
			onClose();
		},
		[cargo, mutateAsync, onClose],
	);

	const onError: SubmitErrorHandler<CargoSchemaInsert> = useCallback(() => {
		handleSnackBar({
			type: "error",
			message: "Preencha os campos obrigatórios.",
		});
	}, [handleSnackBar]);

	const handleClose = () => {
		reset();
		onClose();
	};

	return (
		<AppDialog
			open={open}
			onClose={handleClose}
			title="Editar Cargo"
			icon={<WorkIcon />}
			maxWidth="sm"
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
				Form={<CargoForm />}
				onSubmit={handleSubmit(onSubmit, onError)}
			/>
		</AppDialog>
	);
}
