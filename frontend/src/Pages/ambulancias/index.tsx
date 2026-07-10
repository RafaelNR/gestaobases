import AmbulanciaTable from "./Table.ambulancias";
import DialogAmbulancia from "./Dialog";
import { DialogProvider } from "@/Contexts/DialogContext";

export default function AmbulanciaPage() {
	return (
		<DialogProvider>
			<AmbulanciaTable />
			<DialogAmbulancia />
		</DialogProvider>
	);
}
