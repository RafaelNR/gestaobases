import { DialogProvider } from "@/Contexts/DialogContext";
import EstoquesDialogFactory from "./DialogFactory";
import EstoquesTable from "./Table.estoques";

export default function EstoquesPage() {
	return (
		<DialogProvider>
			<EstoquesTable />
			<EstoquesDialogFactory />
		</DialogProvider>
	);
}
