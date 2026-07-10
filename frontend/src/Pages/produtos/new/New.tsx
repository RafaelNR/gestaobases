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
import { useCreateProduto } from "@/Hooks/useProdutos";
import Form from "../components/Form";
import { produtoInsertSchema } from "@/Schemas/Produto.schemas";
import type { ProdutoInsertSchemaInput } from "@/Types/Produto";

const FORM_ID = "produto-new-form";

export default function NewProduto({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useCreateProduto();

	const methods = useForm<ProdutoInsertSchemaInput>({
		resolver: zodResolver(produtoInsertSchema as any),
		defaultValues: {
			nome: "",
			codigo: 0,
			unidade: "Unidade",
			categoria: "",
			tipo: "USA",
			cme: false,
			ordem: 0,
			descricao: "",
		},
	});
	const {
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = methods;

	const onSubmit: SubmitHandler<ProdutoInsertSchemaInput> = useCallback(
		async (values) => {
			await mutateAsync({
				...values,
				descricao: values.descricao || null,
			});
			reset();
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	const onError: SubmitErrorHandler<ProdutoInsertSchemaInput> =
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
			title="Novo Produto"
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
