import type { ReactNode } from "react";
import type { Permission } from "@/Guard";

export type TableActionColor =
	| "default"
	| "info"
	| "primary"
	| "success"
	| "warning"
	| "error";

export type TableAction = {
	id: string;
	label: string;
	icon: ReactNode;
	onClick: () => void;
	permission?: Permission;
	color?: TableActionColor;
	disabled?: boolean;
	hidden?: boolean;
};

export function getAllowedTableActions(
	actions: readonly TableAction[],
	can: (permission: Permission) => boolean,
): TableAction[] {
	return actions.filter((action) => {
		if (action.hidden) return false;
		if (!action.permission) return true;

		return can(action.permission);
	});
}
