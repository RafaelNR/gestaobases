import { useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from "@mui/material";
import { useBloquearEstoqueLote } from "@/Hooks/useEstoques";
import type { EstoqueLote } from "@/Types/Estoque";
export default function BloqueioDialog({
	open,
	onClose,
	lote,
}: {
	open: boolean;
	onClose: () => void;
	lote: EstoqueLote | null;
}) {
	const mutation = useBloquearEstoqueLote();
	const [motivo, setMotivo] = useState("");
	const willBlock = !lote?.bloqueado;
	const submit = async () => {
		if (!lote) return;
		await mutation.mutateAsync({
			loteId: lote.id,
			bloqueado: willBlock,
			motivoBloqueio: motivo || undefined,
		});
		onClose();
	};
	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
			<DialogTitle>
				{willBlock ? "Bloquear lote" : "Desbloquear lote"}
			</DialogTitle>
			<DialogContent>
				<TextField
					fullWidth
					sx={{ mt: 1 }}
					label="Motivo"
					disabled={!willBlock}
					value={motivo}
					onChange={(e) => setMotivo(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancelar</Button>
				<Button
					color={willBlock ? "error" : "primary"}
					variant="contained"
					disabled={
						!lote ||
						mutation.isPending ||
						(willBlock && motivo.trim().length < 3)
					}
					onClick={submit}
				>
					{willBlock ? "Bloquear" : "Desbloquear"}
				</Button>
			</DialogActions>
		</Dialog>
	);
}
