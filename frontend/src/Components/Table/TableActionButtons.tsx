import { Button, ButtonGroup, Tooltip } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

import { usePermissions } from "@/Hooks/usePermissions";
import {
	getAllowedTableActions,
	type TableAction,
	type TableActionColor,
} from "./TableActionButtons.utils";

type Props = {
	actions: readonly TableAction[];
	ariaLabel?: string;
	emptyFallback?: ReactNode;
};

const ACTION_COLORS: Record<TableActionColor, string> = {
	default: "grey.600",
	info: "info.main",
	primary: "primary.main",
	success: "success.main",
	warning: "warning.main",
	error: "error.main",
};

function getButtonSx(color: TableActionColor): SxProps<Theme> {
	return {
		minWidth: 36,
		width: 36,
		height: 32,
		px: 0,
		color: "text.secondary",
		bgcolor: "background.paper",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		lineHeight: 0,
		transition: (theme) =>
			theme.transitions.create(["background-color", "color", "border-color"], {
				duration: theme.transitions.duration.shortest,
			}),
		"&:hover": {
			color: ACTION_COLORS[color],
			bgcolor: "action.hover",
			borderColor: "divider",
		},
		"&.Mui-disabled": {
			color: "action.disabled",
			bgcolor: "background.paper",
		},
	};
}

export default function TableActionButtons({
	actions,
	ariaLabel = "Ações da linha",
	emptyFallback = null,
}: Props) {
	const { can } = usePermissions();
	const visibleActions = getAllowedTableActions(actions, can);

	if (visibleActions.length === 0) return <>{emptyFallback}</>;

	return (
		<ButtonGroup
			disableElevation
			size="small"
			variant="outlined"
			aria-label={ariaLabel}
			sx={{
				bgcolor: "background.paper",
				borderRadius: 1,
				overflow: "hidden",
				boxShadow: "none",
				"& .MuiButtonGroup-grouped": {
					borderColor: "divider",
					"&:not(:last-of-type)": {
						borderRightColor: "divider",
					},
				},
			}}
		>
			{visibleActions.map((action) => (
				<Button
					key={action.id}
					aria-label={action.label}
					disabled={action.disabled}
					onClick={action.onClick}
					sx={getButtonSx(action.color ?? "default")}
				>
					<Tooltip title={action.label} arrow>
						<span
							style={{
								display: "inline-flex",
								alignItems: "center",
								justifyContent: "center",
								lineHeight: 0,
							}}
						>
							{action.icon}
						</span>
					</Tooltip>
				</Button>
			))}
		</ButtonGroup>
	);
}
