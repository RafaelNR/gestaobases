import { useDeleteMedico } from "@/Hooks/useMedicos";
import type { Medico } from "@/Types/Medico";
import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import NewMedico from "./new";
import EditMedico from "./edit";
import ViewMedico from "./view";
import useDialog from "@/Hooks/useDialog";

export default function DialogMedico() {
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
				<NewMedico open={modal === "create"} onClose={handleCloseDialog} />
			);
		case "edit":
			return (
				<EditMedico
					open={modal === "edit"}
					onClose={handleCloseDialog}
					medico={selected as Medico}
				/>
			);
		case "view": {
			return (
				<ViewMedico
					open={modal === "view"}
					onClose={handleCloseDialog}
					handleClickOpenDialog={handleClickOpenDialog}
					medico={selected as Medico}
				/>
			);
		}
		case "delete":
			return (
				<ConfirmDeleteDialog
					open={modal === "delete"}
					onClose={handleCloseDialog}
					onConfirm={handleDelete}
					title="Excluir Médico"
					entityName={(selected as Medico | null)?.nome}
					isPending={deleteMutation.isPending}
					message={
						<>
							Tem certeza que deseja excluir o médico{" "}
							<strong>{(selected as Medico | null)?.nome}</strong>? Médicos com
							receituários vinculados não poderão ser excluídos.
						</>
					}
				/>
			);
	}
}
