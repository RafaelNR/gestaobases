import React, { useCallback } from "react";
import { Box, Divider, Stack, Tooltip, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

import { useChangeStatusRequerimento } from "@/Hooks/useRequerimentos";
import snackBar from "@/Hooks/useSnackBar";
import type {
	RequerimentoCreatePayload,
	RequerimentoFormValues,
	Requerimento,
	TipoRequerimento,
	RequerimentoStatus,
} from "@/Types/Requerimento";
import ChipStatusRequerimento from "@/Components/Chip/ChipStatusRequerimento";
import { CartItem } from "../RequerimentoPage";
import { usePermissions } from "@/Hooks/usePermissions";
import { Permission } from "@/Guard";

type StatusAction = {
	status: Extract<
		RequerimentoStatus,
		"Analise" | "Separacao" | "Finalizado" | "Cancelado"
	>;
	label: string;
	description: string;
	color: "warning" | "secondary" | "success" | "error";
	permission: Permission;
	icon: React.ReactNode;
};

const STATUS_ACTIONS: StatusAction[] = [
	{
		status: "Analise",
		label: "Análise",
		description: "Enviar para conferência do setor responsável.",
		color: "warning",
		permission: "requerimentos:status:analise",
		icon: <ManageSearchIcon />,
	},
	{
		status: "Separacao",
		label: "Separação",
		description: "Indicar que os itens estão em separação.",
		color: "secondary",
		permission: "requerimentos:status:separacao",
		icon: <Inventory2Icon />,
	},
	{
		status: "Finalizado",
		label: "Finalizado",
		description: "Encerrar o atendimento do requerimento.",
		color: "success",
		permission: "requerimentos:status:finalizado",
		icon: <CheckCircleIcon />,
	},
	{
		status: "Cancelado",
		label: "Cancelado",
		description: "Cancelar o andamento do requerimento.",
		color: "error",
		permission: "requerimentos:status:cancelado",
		icon: <CancelIcon />,
	},
];

interface ButtonsStatusProps {
	tipo: TipoRequerimento;
	requerimento?: Requerimento;
}

export default function ButtonsStatus({
	tipo,
	requerimento,
}: ButtonsStatusProps) {
	const { can } = usePermissions();
	const changeStatusMutation = useChangeStatusRequerimento(tipo);

	const currentStatus = requerimento?.status;
	const isTerminalStatus =
		currentStatus === "Finalizado" || currentStatus === "Cancelado";

	const handleChangeStatus = useCallback(
		async (status: RequerimentoStatus) => {
			const id = requerimento?.id;
			if (!id) {
				snackBar.error("Requerimento não encontrado para alterar status.");
				return;
			}

			await changeStatusMutation.mutateAsync({ id, status });
		},
		[changeStatusMutation, requerimento?.id],
	);

	return (
		<Box
			sx={{
				border: "1px solid",
				borderColor: "divider",
				borderRadius: 1,
				bgcolor: "background.paper",
				p: 1.5,
			}}
		>
			<Stack
				direction={{ xs: "column", sm: "row" }}
				alignItems={{ xs: "flex-start", sm: "center" }}
				justifyContent="space-between"
				gap={1}
			>
				<Box>
					<Typography
						variant="caption"
						color="text.secondary"
						sx={{ fontWeight: 700, textTransform: "uppercase" }}
					>
						Status do requerimento
					</Typography>
				</Box>

				{currentStatus ? (
					<ChipStatusRequerimento status={currentStatus} />
				) : null}
			</Stack>

			<Divider sx={{ my: 1.5 }} />

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: {
						xs: "repeat(2, minmax(0, 1fr))",
						md: "repeat(4, minmax(0, 1fr))",
					},
					gap: 1,
				}}
			>
				{!isTerminalStatus &&
					STATUS_ACTIONS.map((action) => {
						const isCurrentStatus = currentStatus === action.status;
						const isLoading =
							changeStatusMutation.isPending &&
							changeStatusMutation.variables?.status === action.status;
						const isDisabled =
							!requerimento?.id ||
							isCurrentStatus ||
							isTerminalStatus ||
							changeStatusMutation.isPending;

						if (!can(action.permission)) {
							return;
						}

						return (
							<Tooltip key={action.status} title={action.description} arrow>
								<span>
									<LoadingButton
										fullWidth
										size="small"
										color={action.color}
										variant={isCurrentStatus ? "contained" : "contained"}
										loading={isLoading}
										disabled={isDisabled}
										startIcon={action.icon}
										onClick={() => void handleChangeStatus(action.status)}
										sx={{
											minHeight: 38,
											justifyContent: "flex-start",
											textTransform: "none",
											px: 1.25,
										}}
									>
										{action.label}
									</LoadingButton>
								</span>
							</Tooltip>
						);
					})}
			</Box>
		</Box>
	);
}
