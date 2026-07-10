import { useDeleteCategoriasMedicamento } from "@/Hooks/useCategoriasMedicamento";
import type { CategoriasMedicamento } from "@/Types/Medicamento";
import CreateCategoriasMedicamento from "./new";
import UpdateCategoriasMedicamento from "./edit";
import DeleteCategoriasMedicamento from "./delete";
import useDialog from "@/Hooks/useDialog";

export default function DialogCategoriasMedicamento() {
	const deleteMutation = useDeleteCategoriasMedicamento();
	const { modal, selected, handleCloseDialog } = useDialog();
	const categoria = selected as CategoriasMedicamento | null;

	const handleDelete = async () => {
		if (!categoria) return;
		await deleteMutation.mutateAsync(categoria.id);
		handleCloseDialog();
	};

	switch (modal) {
		case "create":
			return (
				<CreateCategoriasMedicamento
					open={modal === "create"}
					onClose={handleCloseDialog}
				/>
			);
		case "edit":
			return (
				<UpdateCategoriasMedicamento
					open={modal === "edit"}
					onClose={handleCloseDialog}
					categoria={categoria as CategoriasMedicamento}
				/>
			);
		case "delete":
			return (
				<DeleteCategoriasMedicamento
					open={modal === "delete"}
					onClose={handleCloseDialog}
					onConfirm={handleDelete}
					categoria={categoria}
					isPending={deleteMutation.isPending}
				/>
			);
	}
}
