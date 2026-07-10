import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import type { CategoriaProduto } from "@/Types/Produto";

type DeleteCategoriaProdutoProps = {
	open: boolean;
	categoria: CategoriaProduto | null;
	isPending: boolean;
	onClose: () => void;
	onConfirm: () => void;
};

export default function DeleteCategoriaProduto({
	open,
	categoria,
	isPending,
	onClose,
	onConfirm,
}: DeleteCategoriaProdutoProps) {
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
					<strong>{categoria?.nome}</strong>? Categorias com produtos vinculados
					não poderão ser excluídas.
				</>
			}
		/>
	);
}
