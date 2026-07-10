import CategoriasMedicamentoTable from "./Table.categorias-medicamento";
import DialogCategoriasMedicamento from "./Dialog";
import { DialogProvider } from "@/Contexts/DialogContext";

export default function CategoriasMedicamentoPage() {
	return (
		<DialogProvider>
			<CategoriasMedicamentoTable />
			<DialogCategoriasMedicamento />
		</DialogProvider>
	);
}
