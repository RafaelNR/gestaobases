import { DialogProvider } from "@/Contexts/DialogContext";
import CargosDialogFactory from "./DialogFactory";
import CargosTable from "./Table.cargos";

export default function CargosPage() {
	return (
		<DialogProvider>
			<CargosTable />
			<CargosDialogFactory />
		</DialogProvider>
	);
}
