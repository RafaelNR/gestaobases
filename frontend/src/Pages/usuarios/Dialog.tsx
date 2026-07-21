import type { Usuario } from "@/Types/Usuarios";
import useDialog from "@/Hooks/useDialog";
import NewUsuario from "./new";
import EditUsuario from "./edit";
import ViewUsuario from "./view/View";
import DisableUsuario from "./disable/Disable";
import { useBlockUsuario } from "@/Hooks/useUsuarios";

export default function DialogUsuario() {
	const { modal, selected, handleCloseDialog } = useDialog();
	const blockMutation = useBlockUsuario();

	const handleDisable = async () => {
		if (!selected) return;
		await blockMutation.mutateAsync(selected.id);
		handleCloseDialog();
	};

	switch (modal) {
		case "view":
			return <ViewUsuario />;

		case "create":
			return (
				<NewUsuario open={modal === "create"} onClose={handleCloseDialog} />
			);

		case "edit":
			return (
				<EditUsuario
					open={modal === "edit"}
					onClose={handleCloseDialog}
					usuario={selected as Usuario}
				/>
			);
		case "delete":
			return (
				<DisableUsuario
					open={modal === "delete"}
					usuario={selected as Usuario | null}
					onClose={handleCloseDialog}
					onConfirm={handleDisable}
					isPending={blockMutation.isPending}
				/>
			);

		default:
			break;
	}
}
