import MedicamentosTable from "./Table.medicamentos";
import DialogMedicamento from "./Dialog";
import { DialogProvider } from "@/Contexts/DialogContext";

export default function MedicamentosPage() {
	return (
		<DialogProvider>
			<MedicamentosTable />
			<DialogMedicamento />
		</DialogProvider>
	);
}
