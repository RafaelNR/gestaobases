import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import { useDeleteCargo } from "@/Hooks/useCargos";
import useDialog from "@/Hooks/useDialog";
import type { Cargo } from "@/Types/Cargo";
import DialogCreated from "./components/DialogCreated";
import DialogEdit from "./components/DialogEdit";

export default function CargosDialogFactory() {
	const deleteMutation = useDeleteCargo();
	const { modal, selected, handleCloseDialog } = useDialog();
	const cargo = selected as Cargo | null;

	const handleDelete = async () => {
		if (!cargo) return;
		await deleteMutation.mutateAsync(cargo.id);
		handleCloseDialog();
	};

	switch (modal) {
		case "created":
			return (
				<DialogCreated open={modal === "created"} onClose={handleCloseDialog} />
			);
		case "edit":
			return (
				<DialogEdit
					open={modal === "edit"}
					onClose={handleCloseDialog}
					cargo={cargo}
				/>
			);
		case "delete":
			return (
				<ConfirmDeleteDialog
					open={modal === "delete"}
					onClose={handleCloseDialog}
					onConfirm={handleDelete}
					title="Excluir Cargo"
					entityName={cargo?.nomeVisivel ?? cargo?.nome}
					isPending={deleteMutation.isPending}
					message={
						<>
							Tem certeza que deseja excluir o cargo{" "}
							<strong>{cargo?.nomeVisivel ?? cargo?.nome}</strong>? Cargos com
							usuários ou requerimentos vinculados não poderão ser excluídos.
						</>
					}
				/>
			);
		default:
			return null;
	}
}
