import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import TableActionButtons from "@/Components/Table/TableActionButtons";
import { CATEGORIAS_PRODUTO_PERMISSIONS } from "@/Guard/PermissionGroups";
import useDialog from "@/Hooks/useDialog";
import { CategoriaProduto } from "@/Types/Produto";

type Props = {
	row: CategoriaProduto;
};

export default function ButtonActionTable({ row }: Props) {
	const { handleClickOpenDialog } = useDialog();

	return (
		<TableActionButtons
			ariaLabel={`Ações da categoria ${row.nome}`}
			actions={[
				{
					id: "edit",
					label: "Editar",
					icon: <EditIcon fontSize="small" />,
					color: "primary",
					permission: CATEGORIAS_PRODUTO_PERMISSIONS.EDIT,
					onClick: () => handleClickOpenDialog({ m: "edit", s: row }),
				},
				{
					id: "delete",
					label: "Desabilitar",
					icon: <DeleteIcon fontSize="small" />,
					color: "error",
					permission: CATEGORIAS_PRODUTO_PERMISSIONS.DELETE,
					onClick: () => handleClickOpenDialog({ m: "delete", s: row }),
				},
			]}
		/>
	);
}
