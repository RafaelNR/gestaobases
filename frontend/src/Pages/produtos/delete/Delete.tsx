import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import type { Produto } from "@/Types/Produto";

type DeleteProdutoProps = {
	open: boolean;
	produto: Produto | null;
	isPending: boolean;
	onClose: () => void;
	onConfirm: () => void;
};

export default function DeleteProduto({
	open,
	produto,
	isPending,
	onClose,
	onConfirm,
}: DeleteProdutoProps) {
	return (
		<ConfirmDeleteDialog
			open={open}
			onClose={onClose}
			onConfirm={onConfirm}
			title="Excluir Produto"
			entityName={produto?.nome}
			isPending={isPending}
		/>
	);
}
