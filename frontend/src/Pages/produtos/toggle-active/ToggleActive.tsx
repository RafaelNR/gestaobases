import AppDialog from "@/Components/Dialog/AppDialog";
import type { Produto } from "@/Types/Produto";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Button, CircularProgress, DialogContentText } from "@mui/material";

type ToggleActiveProdutoProps = {
	open: boolean;
	produto: Produto | null;
	isPending: boolean;
	onClose: () => void;
	onConfirm: () => void;
};

export default function ToggleActiveProduto({
	open,
	produto,
	isPending,
	onClose,
	onConfirm,
}: ToggleActiveProdutoProps) {
	const action = produto?.active ? "desativar" : "ativar";
	const title = produto?.active ? "Desativar Produto" : "Ativar Produto";

	return (
		<AppDialog
			open={open}
			onClose={onClose}
			title={title}
			icon={<PowerSettingsNewIcon color={produto?.active ? "warning" : "success"} />}
			maxWidth="xs"
			actions={
				<>
					<Button onClick={onClose} disabled={isPending}>
						Cancelar
					</Button>
					<Button
						variant="contained"
						color={produto?.active ? "warning" : "success"}
						onClick={onConfirm}
						disabled={isPending}
						startIcon={
							isPending ? (
								<CircularProgress size={16} color="inherit" />
							) : undefined
						}
					>
						{produto?.active ? "Desativar" : "Ativar"}
					</Button>
				</>
			}
		>
			<DialogContentText>
				Tem certeza que deseja {action}{" "}
				{produto?.nome ? <strong>{produto.nome}</strong> : "este produto"}?
			</DialogContentText>
		</AppDialog>
	);
}
