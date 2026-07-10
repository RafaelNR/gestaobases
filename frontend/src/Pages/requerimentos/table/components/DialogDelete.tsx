import { Delete, Send } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import AppDialog from "@/Components/Dialog/AppDialog";
import useDialog from "@/Hooks/useDialog";
import { useExcluirRequerimento } from "@/Hooks/useRequerimentos";
import { Requerimento, TipoRequerimento } from "@/Types/Requerimento";

export default function DialogDelete() {
	const { modal, selected, handleCloseDialog } = useDialog();

	/* ── Mutações ── */
	const deleteMut = useExcluirRequerimento(selected?.tipo as TipoRequerimento);

	/* ── Enviar requerimento ── */
	async function handleDelete(req: Requerimento) {
		await deleteMut.mutateAsync(req.id);
		handleCloseDialog();
	}

	return (
		<AppDialog
			open={modal === "delete-confirm"}
			onClose={handleCloseDialog}
			title="Excluir requerimento"
			icon={<Delete color="primary" />}
			maxWidth="xs"
			actions={
				<>
					<Button onClick={handleCloseDialog} disabled={deleteMut.isPending}>
						Cancelar
					</Button>
					<LoadingButton
						variant="contained"
						startIcon={<Delete />}
						loading={deleteMut.isPending}
						onClick={() => selected && handleDelete(selected as Requerimento)}
					>
						Confirmar exclusão
					</LoadingButton>
				</>
			}
		>
			<Typography variant="body2" color="text.secondary">
				Excluir o requerimento #{selected?.numero} ?
			</Typography>
		</AppDialog>
	);
}
