import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import VisibilityIcon from "@mui/icons-material/Visibility";

import TableActionButtons from "@/Components/Table/TableActionButtons";
import { PRODUTOS_PERMISSIONS } from "@/Guard/PermissionGroups";
import useDialog from "@/Hooks/useDialog";
import type { Produto } from "@/Types/Produto";

type Props = {
	row: Produto;
};

export default function ButtonActionTable({ row }: Props) {
	const { handleClickOpenDialog } = useDialog();

	return (
		<TableActionButtons
			ariaLabel={`Ações do produto ${row.nome}`}
			actions={[
				{
					id: "view",
					label: "Visualizar",
					icon: <VisibilityIcon fontSize="small" />,
					color: "info",
					permission: PRODUTOS_PERMISSIONS.VIEW,
					onClick: () => handleClickOpenDialog({ m: "view", s: row }),
				},
				{
					id: "edit",
					label: "Editar",
					icon: <EditIcon fontSize="small" />,
					color: "primary",
					permission: PRODUTOS_PERMISSIONS.EDIT,
					onClick: () => handleClickOpenDialog({ m: "edit", s: row }),
				},
				{
					id: "toggle-active",
					label: row.active ? "Desativar" : "Ativar",
					icon: <PowerSettingsNewIcon fontSize="small" />,
					color: row.active ? "warning" : "success",
					permission: PRODUTOS_PERMISSIONS.TOGGLE_ACTIVE,
					onClick: () =>
						handleClickOpenDialog({
							m: "toggle-active",
							s: row,
						}),
				},
				{
					id: "delete",
					label: "Excluir",
					icon: <DeleteIcon fontSize="small" />,
					color: "error",
					permission: PRODUTOS_PERMISSIONS.DELETE,
					onClick: () => handleClickOpenDialog({ m: "delete", s: row }),
				},
			]}
		/>
	);
}
