import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import BusinessIcon from "@mui/icons-material/Business";

import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import useSnackBar from "@/Hooks/useSnackBar";
import { useUpdateBase } from "@/Hooks/useBases";
import type { Base, BaseUpdateInput } from "@/Types/Base";
import Form from "../components/Form";
import { baseUpdateSchema } from "@/Schemas/Base.schemas";

const FORM_ID = "base-edit-form";

export default function EditBase({
	open,
	onClose,
	base,
}: {
	open: boolean;
	onClose: () => void;
	base: Base | null;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdateBase();

	const methods = useForm<BaseUpdateInput>({
		resolver: zodResolver(baseUpdateSchema),
		values: base
			? {
					id: base.id,
					nome: base.nome,
					tipo_ambulancias: base.tipo_ambulancias,
				}
			: { id: "", nome: "", tipo_ambulancias: "USB" },
	});

	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<BaseUpdateInput> = useCallback(
		async (values) => {
			if (!base) return;
			await mutateAsync({ ...values, id: base.id });
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[base],
	);

	const onError: SubmitErrorHandler<BaseUpdateInput> = useCallback(() => {
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
			title="Editar Base"
			icon={<BusinessIcon />}
			maxWidth="xs"
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
				Form={<Form />}
				onSubmit={handleSubmit(onSubmit, onError)}
			/>
		</AppDialog>
	);
}
