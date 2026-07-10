import { useDeleteAmbulancia } from "@/Hooks/useAmbulancias";
import type { Ambulancia } from "@/Types/Ambulancia";
import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import NewAmbulancia from "./new";
import EditAmbulancia from "./edit";
import useDialog from "@/Hooks/useDialog";
import ViewAmbulancia from "./view";

export default function DialogAmbulancia() {
	const deleteMutation = useDeleteAmbulancia();
	const { modal, selected, handleCloseDialog } = useDialog();

	const handleDelete = async () => {
		if (!selected) return;
		await deleteMutation.mutateAsync(selected.id);
		handleCloseDialog();
	};

	switch (modal) {
		case "create":
			return (
				<NewAmbulancia open={modal === "create"} onClose={handleCloseDialog} />
			);
		case "edit":
			return (
				<EditAmbulancia
					open={modal === "edit"}
					onClose={handleCloseDialog}
					ambulancia={selected as Ambulancia}
				/>
			);
		case "view": {
			return <ViewAmbulancia />;
		}
		case "delete":
			return (
				<ConfirmDeleteDialog
					open={modal === "delete"}
					onClose={handleCloseDialog}
					onConfirm={handleDelete}
					title="Excluir Ambulância"
					entityName={selected?.nome}
					isPending={deleteMutation.isPending}
				/>
			);
	}
}
