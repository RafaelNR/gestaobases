import AppDialog from "@/Components/Dialog/AppDialog";
import type { Medicamento } from "@/Types/Medicamento";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Button, CircularProgress, DialogContentText } from "@mui/material";

type ToggleActiveMedicamentoProps = {
	open: boolean;
	medicamento: Medicamento | null;
	isPending: boolean;
	onClose: () => void;
	onConfirm: () => void;
};

export default function ToggleActiveMedicamento({
	open,
	medicamento,
	isPending,
	onClose,
	onConfirm,
}: ToggleActiveMedicamentoProps) {
	const action = medicamento?.active ? "desativar" : "ativar";
	const title = medicamento?.active
		? "Desativar Medicamento"
		: "Ativar Medicamento";

	return (
		<AppDialog
			open={open}
			onClose={onClose}
			title={title}
			icon={
				<PowerSettingsNewIcon
					color={medicamento?.active ? "warning" : "success"}
				/>
			}
			maxWidth="xs"
			actions={
				<>
					<Button onClick={onClose} disabled={isPending}>
						Cancelar
					</Button>
					<Button
						variant="contained"
						color={medicamento?.active ? "warning" : "success"}
						onClick={onConfirm}
						disabled={isPending}
						startIcon={
							isPending ? (
								<CircularProgress size={16} color="inherit" />
							) : undefined
						}
					>
						{medicamento?.active ? "Desativar" : "Ativar"}
					</Button>
				</>
			}
		>
			<DialogContentText>
				Tem certeza que deseja {action}{" "}
				{medicamento?.nome ? (
					<strong>{medicamento.nome}</strong>
				) : (
					"este medicamento"
				)}
				?
			</DialogContentText>
		</AppDialog>
	);
}
