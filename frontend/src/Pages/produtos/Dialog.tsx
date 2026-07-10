import { useDeleteProduto, useToggleActiveProduto } from "@/Hooks/useProdutos";
import { useGetCategoriasProduto } from "@/Hooks/useCategoriasProduto";
import type { Produto } from "@/Types/Produto";
import CreateProduto from "./new";
import UpdateProduto from "./edit";
import ViewProduto from "./view";
import DeleteProduto from "./delete";
import ToggleActiveProduto from "./toggle-active";
import useDialog from "@/Hooks/useDialog";

export default function DialogProduto() {
	const deleteMutation = useDeleteProduto();
	const toggleMutation = useToggleActiveProduto();
	const { data: categorias } = useGetCategoriasProduto();
	const { modal, selected, handleCloseDialog, handleClickOpenDialog } =
		useDialog();
	const produto = selected as Produto | null;

	const handleDelete = async () => {
		if (!produto) return;
		await deleteMutation.mutateAsync(produto.id);
		handleCloseDialog();
	};

	const handleToggleActive = async () => {
		if (!produto) return;
		await toggleMutation.mutateAsync(produto.id);
		handleCloseDialog();
	};

	switch (modal) {
		case "create":
			return (
				<CreateProduto open={modal === "create"} onClose={handleCloseDialog} />
			);
		case "edit":
			return (
				<UpdateProduto
					open={modal === "edit"}
					onClose={handleCloseDialog}
					produto={produto as Produto}
				/>
			);
		case "view":
			return (
				<ViewProduto
					open={modal === "view"}
					onClose={handleCloseDialog}
					produto={produto}
					categorias={categorias}
					onEdit={(p) => handleClickOpenDialog({ m: "edit", s: p })}
				/>
			);
		case "delete":
			return (
				<DeleteProduto
					open={modal === "delete"}
					onClose={handleCloseDialog}
					onConfirm={handleDelete}
					produto={produto}
					isPending={deleteMutation.isPending}
				/>
			);
		case "toggle-active":
			return (
				<ToggleActiveProduto
					open={modal === "toggle-active"}
					onClose={handleCloseDialog}
					onConfirm={handleToggleActive}
					produto={produto}
					isPending={toggleMutation.isPending}
				/>
			);
	}
}
