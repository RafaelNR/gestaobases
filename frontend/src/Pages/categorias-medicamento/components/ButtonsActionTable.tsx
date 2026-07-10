import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import VisibilityIcon from "@mui/icons-material/Visibility";

import TableActionButtons from "@/Components/Table/TableActionButtons";
import { CATEGORIAS_MEDICAMENTO_PERMISSIONS } from "@/Guard/PermissionGroups";
import useDialog from "@/Hooks/useDialog";
import type { CategoriaMedicamento } from "@/Types/Medicamento";

type Props = {
	row: CategoriaMedicamento;
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
					permission: CATEGORIAS_MEDICAMENTO_PERMISSIONS.EDIT,
					onClick: () => handleClickOpenDialog({ m: "edit", s: row }),
				},
				{
					id: "toggle-active",
					label: row.active ? "Desativar" : "Ativar",
					icon: <PowerSettingsNewIcon fontSize="small" />,
					color: row.active ? "warning" : "success",
					permission: CATEGORIAS_MEDICAMENTO_PERMISSIONS.TOGGLE_ACTIVE,
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
					permission: CATEGORIAS_MEDICAMENTO_PERMISSIONS.DELETE,
					onClick: () => handleClickOpenDialog({ m: "delete", s: row }),
				},
			]}
		/>
	);
}
