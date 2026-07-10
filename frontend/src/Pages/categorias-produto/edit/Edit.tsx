import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import CategoryIcon from "@mui/icons-material/Category";

import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import useSnackBar from "@/Hooks/useSnackBar";
import { useUpdateCategoriaProduto } from "@/Hooks/useCategoriasProduto";
import type { CategoriaProduto, CategoriaProdutoSchemaInput } from "@/Types/Produto";
import Form from "../components/Form";
import { categoriaProdutoSchema } from "@/Schemas/Categoria.schemas";


const FORM_ID = "cat-produto-edit-form";

export default function EditCategoriaProduto({
	open,
	onClose,
	categoria,
}: {
	open: boolean;
	onClose: () => void;
	categoria: CategoriaProduto | null;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdateCategoriaProduto();

	const methods = useForm<CategoriaProdutoSchemaInput>({
		resolver: zodResolver(categoriaProdutoSchema),
		values: categoria ? { nome: categoria.nome } : { nome: "" },
	});
	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<CategoriaProdutoSchemaInput> = useCallback(
		async (values) => {
			if (!categoria) return;
			await mutateAsync({ id: categoria.id, ...values });
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[categoria],
	);

	const onError: SubmitErrorHandler<CategoriaProdutoSchemaInput> = useCallback(() => {
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
			title="Editar Categoria de Produto"
			icon={<CategoryIcon />}
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
