import assert from "node:assert/strict";

import { MEDICAMENTOS_PERMISSIONS } from "@/Guard/PermissionGroups";
import {
	getAllowedTableActions,
	type TableAction,
} from "./TableActionButtons.utils";

const actions: TableAction[] = [
	{
		id: "view",
		label: "Visualizar",
		icon: "view",
		onClick: () => undefined,
		permission: MEDICAMENTOS_PERMISSIONS.VIEW,
	},
	{
		id: "edit",
		label: "Editar",
		icon: "edit",
		onClick: () => undefined,
		permission: MEDICAMENTOS_PERMISSIONS.EDIT,
	},
	{
		id: "internal",
		label: "Ação interna",
		icon: "internal",
		onClick: () => undefined,
	},
	{
		id: "hidden",
		label: "Oculta",
		icon: "hidden",
		onClick: () => undefined,
		hidden: true,
	},
];

const allowed = getAllowedTableActions(
	actions,
	(permission) => permission === MEDICAMENTOS_PERMISSIONS.VIEW,
);

assert.deepEqual(
	allowed.map((action) => action.id),
	["view", "internal"],
);
