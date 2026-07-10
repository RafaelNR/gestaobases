import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import type { Medicamento } from "@/Types/Medicamento";

type DeleteMedicamentoProps = {
	open: boolean;
	medicamento: Medicamento | null;
	isPending: boolean;
	onClose: () => void;
	onConfirm: () => void;
};

export default function DeleteMedicamento({
	open,
	medicamento,
	isPending,
	onClose,
	onConfirm,
}: DeleteMedicamentoProps) {
	return (
		<ConfirmDeleteDialog
			open={open}
			onClose={onClose}
			onConfirm={onConfirm}
			title="Excluir Medicamento"
			entityName={medicamento?.nome}
			isPending={isPending}
		/>
	);
}
