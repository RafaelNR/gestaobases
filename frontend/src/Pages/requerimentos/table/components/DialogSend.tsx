import { Send } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import AppDialog from "@/Components/Dialog/AppDialog";
import useDialog from "@/Hooks/useDialog";
import { useEnviarRequerimento } from "@/Hooks/useRequerimentos";
import { Requerimento, TipoRequerimento } from "@/Types/Requerimento";

export default function DialogSend() {
	const { modal, selected, handleCloseDialog } = useDialog();

	/* ── Mutações ── */
	const enviarMut = useEnviarRequerimento(selected?.tipo as TipoRequerimento);

	/* ── Enviar requerimento ── */
	async function handleEnviar(req: Requerimento) {
		await enviarMut.mutateAsync(req.id);
		handleCloseDialog();
	}

	return (
		<AppDialog
			open={modal === "send-confirm"}
			onClose={handleCloseDialog}
			title="Enviar requerimento"
			icon={<Send color="primary" />}
			maxWidth="xs"
			actions={
				<>
					<Button onClick={handleCloseDialog} disabled={enviarMut.isPending}>
						Cancelar
					</Button>
					<LoadingButton
						variant="contained"
						startIcon={<Send />}
						loading={enviarMut.isPending}
						onClick={() => selected && handleEnviar(selected as Requerimento)}
					>
						Confirmar envio
					</LoadingButton>
				</>
			}
		>
			<Typography variant="body2" color="text.secondary">
				Enviar o requerimento #{selected?.numero} para processamento?
			</Typography>
		</AppDialog>
	);
}
