import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import TableActionButtons from "@/Components/Table/TableActionButtons";
import { USUARIOS_PERMISSIONS } from "@/Guard/PermissionGroups";
import useDialog from "@/Hooks/useDialog";
import { Usuario } from "@/Types/Usuarios";

type Props = {
	row: Usuario;
};

export default function ButtonActionTable({ row }: Props) {
	const { handleClickOpenDialog } = useDialog();

	return (
		<TableActionButtons
			ariaLabel={`Ações da categoria ${row.nome}`}
			actions={[
				{
					id: "view",
					label: "Visualizar",
					icon: <VisibilityIcon fontSize="small" />,
					color: "primary",
					permission: USUARIOS_PERMISSIONS.VIEW,
					onClick: () => handleClickOpenDialog({ m: "view", s: row }),
				},
				{
					id: "edit",
					label: "Editar",
					icon: <EditIcon fontSize="small" />,
					color: "primary",
					permission: USUARIOS_PERMISSIONS.EDIT,
					onClick: () => handleClickOpenDialog({ m: "edit", s: row }),
				},
				{
					id: "delete",
					label: "Desabilitar",
					icon: <DeleteIcon fontSize="small" />,
					color: "error",
					permission: USUARIOS_PERMISSIONS.DELETE,
					onClick: () => handleClickOpenDialog({ m: "delete", s: row }),
				},
			]}
		/>
	);
}
