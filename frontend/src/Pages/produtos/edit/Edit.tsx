import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import InventoryIcon from "@mui/icons-material/Inventory";

import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import useSnackBar from "@/Hooks/useSnackBar";
import { useUpdateProduto } from "@/Hooks/useProdutos";
import type { Produto, ProdutoUpdateSchemaInput } from "@/Types/Produto";
import Form from "../components/Form";
import { produtoUpdateSchema } from "@/Schemas/Produto.schemas";

const FORM_ID = "produto-edit-form";

export default function EditProduto({
	open,
	onClose,
	produto,
}: {
	open: boolean;
	onClose: () => void;
	produto: Produto | null;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useUpdateProduto();

	const methods = useForm<ProdutoUpdateSchemaInput>({
		resolver: zodResolver(produtoUpdateSchema as any),
		values: produto as any,
	});
	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<ProdutoUpdateSchemaInput> = useCallback(
		async (values) => {
			await mutateAsync({
				...values,
				descricao: values.descricao || null,
			});
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[produto],
	);

	const onError: SubmitErrorHandler<ProdutoUpdateSchemaInput> =
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
			title="Editar Produto"
			icon={<InventoryIcon />}
			fullScreen
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
