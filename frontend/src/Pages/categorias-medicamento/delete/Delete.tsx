import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import type { CategoriasMedicamento } from "@/Types/Medicamento";

type DeleteCategoriaMedicamentoProps = {
	open: boolean;
	categoria: CategoriasMedicamento | null;
	isPending: boolean;
	onClose: () => void;
	onConfirm: () => void;
};

export default function DeleteCategoriaMedicamento({
	open,
	categoria,
	isPending,
	onClose,
	onConfirm,
}: DeleteCategoriaMedicamentoProps) {
	return (
		<ConfirmDeleteDialog
			open={open}
			onClose={onClose}
			onConfirm={onConfirm}
			title="Excluir Categoria"
			entityName={categoria?.nome}
			isPending={isPending}
			message={
				<>
					Tem certeza que deseja excluir a categoria{" "}
					<strong>{categoria?.nome}</strong>? Categorias com medicamentos
					vinculados não poderão ser excluídas.
				</>
			}
		/>
	);
}
