import { Button, CircularProgress, DialogContentText } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import AppDialog from "./AppDialog";

interface ConfirmDeleteDialogProps {
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title?: string;
	entityName?: string;
	message?: React.ReactNode;
	isPending?: boolean;
}

export default function ConfirmDeleteDialog({
	open,
	onClose,
	onConfirm,
	title = "Excluir registro",
	entityName,
	message,
	isPending = false,
}: ConfirmDeleteDialogProps) {
	return (
		<AppDialog
			open={open}
			onClose={onClose}
			title={title}
			icon={<WarningAmberIcon color="error" />}
			maxWidth="xs"
			actions={
				<>
					<Button onClick={onClose} disabled={isPending}>
						Cancelar
					</Button>
					<Button
						variant="contained"
						color="error"
						onClick={onConfirm}
						disabled={isPending}
						startIcon={
							isPending ? (
								<CircularProgress size={16} color="inherit" />
							) : undefined
						}
					>
						Excluir
					</Button>
				</>
			}
		>
			<DialogContentText>
				{message ?? (
					<>
						Tem certeza que deseja excluir
						{entityName ? (
							<>
								{" "}
								<strong>{entityName}</strong>
							</>
						) : (
							" este registro"
						)}
						? Esta ação não pode ser desfeita.
					</>
				)}
			</DialogContentText>
		</AppDialog>
	);
}
