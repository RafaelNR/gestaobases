import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import VisibilityIcon from "@mui/icons-material/Visibility";

import TableActionButtons from "@/Components/Table/TableActionButtons";
import { AMBULANCIAS_PERMISSIONS } from "@/Guard/PermissionGroups";
import useDialog from "@/Hooks/useDialog";
import type { Ambulancia } from "@/Types/Ambulancia";

type Props = {
	row: Ambulancia;
};

export default function ButtonActionTable({ row }: Props) {
	const { handleClickOpenDialog } = useDialog();

	return (
		<TableActionButtons
			ariaLabel={`Ações da ambulância ${row.nome}`}
			actions={[
				{
					id: "view",
					label: "Visualizar",
					icon: <VisibilityIcon fontSize="small" />,
					color: "info",
					permission: AMBULANCIAS_PERMISSIONS.VIEW,
					onClick: () => handleClickOpenDialog({ m: "view", s: row }),
				},
				{
					id: "edit",
					label: "Editar",
					icon: <EditIcon fontSize="small" />,
					color: "primary",
					permission: AMBULANCIAS_PERMISSIONS.EDIT,
					onClick: () => handleClickOpenDialog({ m: "edit", s: row }),
				},
				{
					id: "delete",
					label: "Excluir",
					icon: <DeleteIcon fontSize="small" />,
					color: "error",
					permission: AMBULANCIAS_PERMISSIONS.DELETE,
					onClick: () => handleClickOpenDialog({ m: "delete", s: row }),
				},
			]}
		/>
	);
}
