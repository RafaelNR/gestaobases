import {
	useDeleteMedicamento,
	useToggleActiveMedicamento,
} from "@/Hooks/useMedicamentos";
import type { Medicamento } from "@/Types/Medicamento";
import CreateMedicamento from "./new";
import UpdateMedicamento from "./edit";
import ViewMedicamento from "./view";
import DeleteMedicamento from "./delete";
import ToggleActiveMedicamento from "./toggle-active";
import useDialog from "@/Hooks/useDialog";
import { usePermissions } from "@/Hooks/usePermissions";

export default function DialogMedicamento() {
	const { can } = usePermissions();
	const deleteMutation = useDeleteMedicamento();
	const toggleMutation = useToggleActiveMedicamento();
	const { modal, selected, handleCloseDialog, handleClickOpenDialog } =
		useDialog();
	const medicamento = selected as Medicamento | null;

	const handleDelete = async () => {
		if (!medicamento) return;
		await deleteMutation.mutateAsync(medicamento.id);
		handleCloseDialog();
	};

	const handleToggleActive = async () => {
		if (!medicamento) return;
		await toggleMutation.mutateAsync(medicamento.id);
		handleCloseDialog();
	};

	switch (modal) {
		case "create":
			return (
				<CreateMedicamento
					open={modal === "create" && can("medicamentos:new")}
					onClose={handleCloseDialog}
				/>
			);
		case "edit":
			return (
				<UpdateMedicamento
					open={modal === "edit" && can("medicamentos:edit")}
					onClose={handleCloseDialog}
					medicamento={medicamento as Medicamento}
				/>
			);
		case "view":
			return (
				<ViewMedicamento
					open={modal === "view" && can("medicamentos:view")}
					onClose={handleCloseDialog}
					medicamento={medicamento}
					onEdit={(med) => handleClickOpenDialog({ m: "edit", s: med })}
				/>
			);
		case "delete":
			return (
				<DeleteMedicamento
					open={modal === "delete" && can("medicamentos:deletar")}
					onClose={handleCloseDialog}
					onConfirm={handleDelete}
					medicamento={medicamento}
					isPending={deleteMutation.isPending}
				/>
			);
		case "toggle-active":
			return (
				<ToggleActiveMedicamento
					open={modal === "toggle-active" && can("medicamentos:toggleActive")}
					onClose={handleCloseDialog}
					onConfirm={handleToggleActive}
					medicamento={medicamento}
					isPending={toggleMutation.isPending}
				/>
			);
	}
}
