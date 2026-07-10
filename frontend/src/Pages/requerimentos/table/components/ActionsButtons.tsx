import { useNavigate } from "react-router-dom";
import { Edit, Send, Delete } from "@mui/icons-material";
import {
	Button,
	ButtonGroup,
	IconButton,
	Stack,
	SxProps,
	Theme,
	Tooltip,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Requerimento, TipoRequerimento } from "@/Types/Requerimento";
import useDialog from "@/Hooks/useDialog";
import { useEnviarRequerimento } from "@/Hooks/useRequerimentos";
import { usePermissions } from "@/Hooks/usePermissions";
import useAuth from "@/Hooks/useAuth";
import { useMemo } from "react";

function getButtonSx(color: string): SxProps<Theme> {
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
			color: color,
			bgcolor: "action.hover",
			borderColor: "divider",
		},
		"&.Mui-disabled": {
			color: "action.disabled",
			bgcolor: "background.paper",
		},
	};
}

export default function ActionsButtons({
	tipo,
	req,
}: {
	tipo: string;
	req: Requerimento;
}) {
	const navigate = useNavigate();
	const { handleClickOpenDialog } = useDialog();
	const { can } = usePermissions();
	const { user } = useAuth();

	function navigateToRequerimentoView(req: Requerimento) {
		navigate(`/requerimentos/${tipo.toLowerCase()}/view/${req.id}`);
	}

	function navigateToRequerimentoEdit(req: Requerimento) {
		navigate(`/requerimentos/${tipo.toLowerCase()}/edit/${req.id}`);
	}

	/* ── Mutações ── */
	const enviarMut = useEnviarRequerimento(tipo as TipoRequerimento);

	const canEdit = useMemo(() => {
		if (can("requerimentos:editAny")) {
			return true;
		}

		if (
			can("requerimentos:edit") &&
			req.status === "Rascunho" &&
			user?.id === req.userId
		) {
			return true;
		}

		return false;
	}, [can, req, user]);

	const canView = useMemo(() => {
		if (can("requerimentos:viewAny")) {
			return true;
		}

		if (
			can("requerimentos:view") &&
			user?.Base.nome === req.base &&
			user.Setor.nome === req.setor
		) {
			return true;
		}

		return false;
	}, [can, req, user]);

	const canDelete = useMemo(() => {
		if (req.status !== "Rascunho") {
			return false;
		}

		if (can("requerimentos:deleteAny")) {
			return true;
		}

		if (can("requerimentos:delete") && user?.id === req.userId) {
			return true;
		}

		return false;
	}, [can, req, user]);

	const canSendAlmoxarifado = useMemo(() => {
		if (
			can("requerimentos:send:almoxarifado") &&
			req.status === "Rascunho" &&
			req.userId === user?.id
		) {
			return true;
		}

		return false;
	}, [can, req, user]);

	const canSendCme = useMemo(() => {
		if (
			can("requerimentos:send:cme") &&
			req.status === "Rascunho" &&
			req.userId === user?.id
		) {
			return true;
		}

		return false;
	}, [can, req]);

	const canSendFarmacia = useMemo(() => {
		if (
			can("requerimentos:send:farmacia") &&
			req.status === "Rascunho" &&
			req.userId === user?.id
		) {
			return true;
		}

		return false;
	}, [can, req, user]);

	return (
		<ButtonGroup
			disableElevation
			size="small"
			variant="outlined"
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
			{canView && (
				<Button
					onClick={() => navigateToRequerimentoView(req)}
					sx={getButtonSx("info")}
				>
					<Tooltip title="Detalhes">
						<AssignmentIcon fontSize="small" />
					</Tooltip>
				</Button>
			)}
			{canEdit &&
				req?.status &&
				!["Finalizado", "Cancelado"].includes(req?.status) && (
					<Button
						onClick={() => navigateToRequerimentoEdit(req)}
						sx={getButtonSx("success")}
					>
						<Tooltip title="Editar">
							<Edit fontSize="small" />
						</Tooltip>
					</Button>
				)}
			{canDelete &&
				req?.status &&
				!["Finalizado", "Cancelado"].includes(req?.status) && (
					<Button
						onClick={() => {
							handleClickOpenDialog({
								m: "delete-confirm",
								ID: req.id,
								s: req,
							});
						}}
						sx={getButtonSx("error")}
					>
						<Tooltip title="Excluir">
							<Delete fontSize="small" />
						</Tooltip>
					</Button>
				)}
			{canSendAlmoxarifado && tipo === "almoxarifado" && (
				<Button
					onClick={() => {
						handleClickOpenDialog({
							m: "send-confirm",
							ID: req.id,
							s: req,
						});
					}}
					color="info"
					disabled={enviarMut.isPending}
				>
					<Tooltip title="Enviar para o almoxarifado">
						<Send fontSize="small" />
					</Tooltip>
				</Button>
			)}
			{canSendCme && tipo === "cme" && (
				<Button
					onClick={() => {
						handleClickOpenDialog({
							m: "send-confirm",
							ID: req.id,
							s: req,
						});
					}}
					color="info"
					disabled={enviarMut.isPending}
				>
					<Tooltip title="Enviar para o CME">
						<Send fontSize="small" />
					</Tooltip>
				</Button>
			)}

			{canSendFarmacia && tipo === "farmacia" && (
				<Button
					onClick={() => {
						handleClickOpenDialog({
							m: "send-confirm",
							ID: req.id,
							s: req,
						});
					}}
					color="info"
					disabled={enviarMut.isPending}
				>
					<Tooltip title="Enviar para a farmácia">
						<Send fontSize="small" />
					</Tooltip>
				</Button>
			)}
		</ButtonGroup>
	);
}
