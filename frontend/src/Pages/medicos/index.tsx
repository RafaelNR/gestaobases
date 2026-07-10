import MedicosTable from "./Table.medicos";
import DialogMedico from "./Dialog";
import { DialogProvider } from "@/Contexts/DialogContext";

export default function MedicosPage() {
	return (
		<DialogProvider>
			<MedicosTable />
			<DialogMedico />
		</DialogProvider>
	);
}
