import { useDeleteMedico } from "@/Hooks/useMedicos";
import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import NewReceituario from "./new";
import EditReceituario from "./edit";
import ViewReceituario from "./view";
import DeleteReceituario from "./components/DialogRemoveReceiturario";
import useDialog from "@/Hooks/useDialog";
import { Receituario } from "@/Types/Receituario";

export default function DialogReceituario() {
	const deleteMutation = useDeleteMedico();
	const { modal, selected, handleCloseDialog, handleClickOpenDialog } =
		useDialog();

	const handleDelete = async () => {
		if (!selected) return;
		await deleteMutation.mutateAsync(selected.id);
		handleCloseDialog();
	};

	switch (modal) {
		case "create":
			return (
				<NewReceituario open={modal === "create"} onClose={handleCloseDialog} />
			);
		case "edit":
			return (
				<EditReceituario
					open={modal === "edit"}
					onClose={handleCloseDialog}
					receituario={selected as Receituario}
				/>
			);
		case "view": {
			return (
				<ViewReceituario
					open={modal === "view"}
					onClose={handleCloseDialog}
					handleClickOpenDialog={handleClickOpenDialog}
					receituario={selected as Receituario}
				/>
			);
		}
		case "delete":
			return (
				<DeleteReceituario
					open={modal === "delete"}
					onClose={handleCloseDialog}
					receituario={selected as Receituario}
				/>
			);
	}
}
