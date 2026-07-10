import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import TableActionButtons from "@/Components/Table/TableActionButtons";
import { BASES_PERMISSIONS } from "@/Guard/PermissionGroups";
import useDialog from "@/Hooks/useDialog";
import type { Base } from "@/Types/Base";

type Props = {
	row: Base;
};

export default function ButtonActionTable({ row }: Props) {
	const { handleClickOpenDialog } = useDialog();

	return (
		<TableActionButtons
			ariaLabel={`Ações da base ${row.nome}`}
			actions={[
				{
					id: "view",
					label: "Visualizar",
					icon: <VisibilityIcon fontSize="small" />,
					color: "info",
					permission: BASES_PERMISSIONS.VIEW,
					onClick: () => handleClickOpenDialog({ m: "view", s: row }),
				},
				{
					id: "edit",
					label: "Editar",
					icon: <EditIcon fontSize="small" />,
					color: "primary",
					permission: BASES_PERMISSIONS.EDIT,
					onClick: () => handleClickOpenDialog({ m: "edit", s: row }),
				},
			]}
		/>
	);
}
