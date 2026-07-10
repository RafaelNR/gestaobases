import { useDeleteCategoriaProduto } from "@/Hooks/useCategoriasProduto";
import type { CategoriaProduto } from "@/Types/Produto";
import CreateCategoriaProduto from "./new";
import UpdateCategoriaProduto from "./edit";
import DeleteCategoriaProduto from "./delete";
import useDialog from "@/Hooks/useDialog";

export default function DialogCategoriaProduto() {
	const deleteMutation = useDeleteCategoriaProduto();
	const { modal, selected, handleCloseDialog } = useDialog();
	const categoria = selected as CategoriaProduto | null;

	const handleDelete = async () => {
		if (!categoria) return;
		await deleteMutation.mutateAsync(categoria.id);
		handleCloseDialog();
	};

	switch (modal) {
		case "create":
			return (
				<CreateCategoriaProduto
					open={modal === "create"}
					onClose={handleCloseDialog}
				/>
			);
		case "edit":
			return (
				<UpdateCategoriaProduto
					open={modal === "edit"}
					onClose={handleCloseDialog}
					categoria={categoria as CategoriaProduto}
				/>
			);
		case "delete":
			return (
				<DeleteCategoriaProduto
					open={modal === "delete"}
					onClose={handleCloseDialog}
					onConfirm={handleDelete}
					categoria={categoria}
					isPending={deleteMutation.isPending}
				/>
			);
	}
}
