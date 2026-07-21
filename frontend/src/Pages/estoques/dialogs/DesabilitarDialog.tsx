import { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Typography,
} from "@mui/material";
import { useDesabilitarEstoqueLote } from "@/Hooks/useEstoques";
import type { EstoqueLote } from "@/Types/Estoque";
export default function DesabilitarDialog({
	open,
	onClose,
	lote,
}: {
	open: boolean;
	onClose: () => void;
	lote: EstoqueLote | null;
}) {
	const mutation = useDesabilitarEstoqueLote();
	const submit = async () => {
		if (!lote) return;
		await mutation.mutateAsync({
			loteId: lote.id,
		});
		onClose();
	};
	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
			<DialogTitle>Desabilitar Lote do Estoque - {lote?.lote}</DialogTitle>
			<DialogContent>
				<Typography>
					Você tem certeza que deseja desabilitar o lote do estoque?{" "}
				</Typography>
				<Typography>
					Caso venha a adicionar novas quantidades deste item, o lote será
					habilitado novamente.
				</Typography>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancelar</Button>
				<Button
					color="error"
					variant="contained"
					disabled={!lote || mutation.isPending}
					onClick={submit}
				>
					Desabilitar
				</Button>
			</DialogActions>
		</Dialog>
	);
}
