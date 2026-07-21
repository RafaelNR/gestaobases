import useDialog from "@/Hooks/useDialog";
import { usePermissions } from "@/Hooks/usePermissions";
import { ESTOQUES_PERMISSIONS } from "@/Guard/PermissionGroups";
import type { EstoqueItem, EstoqueLote } from "@/Types/Estoque";
import NewEstoqueDialog from "./dialogs/NewEstoqueDialog";
import NewLoteDialog from "./dialogs/NewLoteDialog";
import MovimentacaoDialog from "./dialogs/MovimentacaoDialog";
import BloqueioDialog from "./dialogs/BloqueioDialog";
import HistoricoDialog from "./dialogs/HistoricoDialog";
import DesabilitarDialog from "./dialogs/DesabilitarDialog";

export type EstoqueDialogSelection = {
	item?: EstoqueItem;
	lote?: EstoqueLote;
};

export default function EstoquesDialogFactory() {
	const { modal, selected, handleCloseDialog } = useDialog();
	const { can } = usePermissions();
	const selection = selected as EstoqueDialogSelection | null;

	switch (modal) {
		case "create":
			return (
				<NewEstoqueDialog
					open={can(ESTOQUES_PERMISSIONS.NEW)}
					onClose={handleCloseDialog}
				/>
			);
		case "lote":
			return (
				<NewLoteDialog
					open={can(ESTOQUES_PERMISSIONS.ADD_LOTE)}
					onClose={handleCloseDialog}
					item={selection?.item as any}
				/>
			);
		case "movimento":
			return (
				<MovimentacaoDialog
					open={can(ESTOQUES_PERMISSIONS.ADD_MOVIMENTAR)}
					onClose={handleCloseDialog}
					lote={selection?.lote as any}
					item={selection?.item as any}
				/>
			);
		// case "bloqueio":
		// 	return (
		// 		<BloqueioDialog
		// 			open={can(ESTOQUES_PERMISSIONS.BLOQUEAR)}
		// 			onClose={handleCloseDialog}
		// 			lote={selection?.lote ?? null}
		// 		/>
		// 	);
		case "desabilitar":
			return (
				<DesabilitarDialog
					open={can(ESTOQUES_PERMISSIONS.DESABILITAR)}
					onClose={handleCloseDialog}
					lote={selection?.lote ?? null}
				/>
			);
		case "historico":
			return (
				<HistoricoDialog
					open={can(ESTOQUES_PERMISSIONS.HISTORICO)}
					onClose={handleCloseDialog}
					lote={selection?.lote ?? null}
				/>
			);
		default:
			return null;
	}
}
