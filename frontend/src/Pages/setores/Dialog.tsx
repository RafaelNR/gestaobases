import { useDeleteSetor } from "@/Hooks/useSetores";
import type { Setor } from "@/Types/Setor";
import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import NewSetor from "./new";
import EditSetor from "./edit";
import useDialog from "@/Hooks/useDialog";
import ViewSetor from "./view/View";

export default function DialogSetor() {
	const deleteMutation = useDeleteSetor();
	const { modal, selected, handleCloseDialog } = useDialog();

	const handleDelete = async () => {
		if (!selected) return;
		await deleteMutation.mutateAsync(selected.id);
		handleCloseDialog();
	};

	switch (modal) {
		case "create":
			return <NewSetor open={modal === "create"} onClose={handleCloseDialog} />;
		case "edit":
			return (
				<EditSetor
					open={modal === "edit"}
					onClose={handleCloseDialog}
					setor={selected as Setor}
				/>
			);
		case "view": {
			return <ViewSetor />;
		}
		case "delete":
			return (
				<ConfirmDeleteDialog
					open={modal === "delete"}
					onClose={handleCloseDialog}
					onConfirm={handleDelete}
					title="Excluir Setor"
					entityName={(selected as Setor | null)?.nome}
					isPending={deleteMutation.isPending}
				/>
			);
	}
}
