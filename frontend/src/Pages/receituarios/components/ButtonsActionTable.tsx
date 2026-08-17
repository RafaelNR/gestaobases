import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import TableActionButtons from "@/Components/Table/TableActionButtons";
import { RECEITUARIOS_PERMISSIONS } from "@/Guard/PermissionGroups";
import useDialog from "@/Hooks/useDialog";
import { Receituario } from "@/Types/Receituario";

type Props = {
	row: Receituario;
};

export default function ButtonActionTable({ row }: Props) {
	const { handleClickOpenDialog } = useDialog();

	return (
		<TableActionButtons
			ariaLabel={`Ações do receituário ${row.numero}`}
			actions={[
				{
					id: "view",
					label: "Detalhes",
					icon: <VisibilityIcon fontSize="small" />,
					color: "primary",
					permission: RECEITUARIOS_PERMISSIONS.VIEW,
					onClick: () => handleClickOpenDialog({ m: "view", s: row }),
				},
				{
					id: "edit",
					label: "Editar",
					icon: <EditIcon fontSize="small" />,
					color: "primary",
					permission: RECEITUARIOS_PERMISSIONS.EDIT,
					onClick: () => handleClickOpenDialog({ m: "edit", s: row }),
				},
				{
					id: "delete",
					label: "Desabilitar",
					icon: <DeleteIcon fontSize="small" />,
					color: "error",
					permission: RECEITUARIOS_PERMISSIONS.DELETE,
					onClick: () => handleClickOpenDialog({ m: "delete", s: row }),
				},
			]}
		/>
	);
}
