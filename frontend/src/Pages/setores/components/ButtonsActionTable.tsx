import EditIcon from "@mui/icons-material/Edit";

import TableActionButtons from "@/Components/Table/TableActionButtons";
import { SETORES_PERMISSIONS } from "@/Guard/PermissionGroups";
import useDialog from "@/Hooks/useDialog";
import type { Setor } from "@/Types/Setor";

type Props = {
	row: Setor;
};

export default function ButtonActionTable({ row }: Props) {
	const { handleClickOpenDialog } = useDialog();

	return (
		<TableActionButtons
			ariaLabel={`Ações da setor ${row.nome}`}
			actions={[
				{
					id: "edit",
					label: "Editar",
					icon: <EditIcon fontSize="small" />,
					color: "primary",
					permission: SETORES_PERMISSIONS.EDIT,
					onClick: () => handleClickOpenDialog({ m: "edit", s: row }),
				},
			]}
		/>
	);
}
