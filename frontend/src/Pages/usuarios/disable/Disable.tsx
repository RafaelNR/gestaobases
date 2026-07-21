import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import type { Usuario } from "@/Types/Usuarios";

type DisableUsuarioProps = {
	open: boolean;
	usuario: Usuario | null;
	isPending: boolean;
	onClose: () => void;
	onConfirm: () => void;
};

export default function DisableUsuario({
	open,
	usuario,
	isPending,
	onClose,
	onConfirm,
}: DisableUsuarioProps) {
	return (
		<ConfirmDeleteDialog
			open={open}
			onClose={onClose}
			onConfirm={onConfirm}
			title="Desabilitar Usuário"
			entityName={usuario?.nome}
			isPending={isPending}
			confirmLabel="Desabilitar"
			message={
				<>
					Tem certeza que deseja desabilitar o usuário{" "}
					<strong>{usuario?.nome}</strong>? O usuário não poderá mais acessar o
					sistema.
				</>
			}
		/>
	);
}
