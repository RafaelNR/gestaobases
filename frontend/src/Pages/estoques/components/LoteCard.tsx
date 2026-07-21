import {
	Box,
	Chip,
	IconButton,
	Paper,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import useDialog from "@/Hooks/useDialog";
import { usePermissions } from "@/Hooks/usePermissions";
import { ESTOQUES_PERMISSIONS } from "@/Guard/PermissionGroups";
import type { EstoqueItem, EstoqueLote } from "@/Types/Estoque";
import ValidadeChip from "./ValidadeChip";

export default function LoteCard({
	item,
	lote,
}: {
	item: EstoqueItem;
	lote: EstoqueLote;
}) {
	const { handleClickOpenDialog } = useDialog();
	const { can } = usePermissions();
	const open = (m: string) => handleClickOpenDialog({ m, s: { item, lote } });
	return (
		<Paper variant="outlined" sx={{ p: 1.5 }}>
			<Stack
				direction={{ xs: "column", md: "row" }}
				alignItems={{ md: "center" }}
				gap={2}
			>
				<Box flex={1}>
					<Typography fontWeight={700}>
						Lote: {lote.lote || "Saldo sem lote"}
					</Typography>
					<Typography variant="caption" color="text.secondary">
						Validade:{" "}
						{lote.validade
							? new Date(lote.validade).toLocaleDateString("pt-BR", {
									timeZone: "UTC",
								})
							: "Sem validade informada"}
					</Typography>
				</Box>
				<Typography fontWeight={800}>{lote.quantidade} qnt.</Typography>
				<ValidadeChip lote={lote} />
				{lote.bloqueado && (
					<Chip
						size="small"
						icon={<LockIcon />}
						color="error"
						label="Bloqueado"
					/>
				)}
				<Stack direction="row">
					{can(ESTOQUES_PERMISSIONS.ADD_MOVIMENTAR) && (
						<Tooltip title="Movimentar">
							<IconButton onClick={() => open("movimento")}>
								<SwapVertIcon />
							</IconButton>
						</Tooltip>
					)}
					{/* {can(ESTOQUES_PERMISSIONS.BLOQUEAR) && (
						<Tooltip title="Bloquear ou desbloquear">
							<IconButton onClick={() => open("bloqueio")}>
								<LockIcon />
							</IconButton>
						</Tooltip>
					)} */}
					{can(ESTOQUES_PERMISSIONS.DESABILITAR) && lote.quantidade <= 0 && (
						<Tooltip title="Desabilitar lote">
							<IconButton onClick={() => open("desabilitar")}>
								<VisibilityOff />
							</IconButton>
						</Tooltip>
					)}
					{can(ESTOQUES_PERMISSIONS.HISTORICO) && (
						<Tooltip title="Histórico">
							<IconButton onClick={() => open("historico")}>
								<HistoryIcon />
							</IconButton>
						</Tooltip>
					)}
				</Stack>
			</Stack>
		</Paper>
	);
}
