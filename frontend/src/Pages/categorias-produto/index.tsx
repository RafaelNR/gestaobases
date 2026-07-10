import CategoriasProdutoTable from "./Table.categorias-produto";
import DialogCategoriaProduto from "./Dialog";
import { DialogProvider } from "@/Contexts/DialogContext";

export default function CategoriasProdutoPage() {
	return (
		<DialogProvider>
			<CategoriasProdutoTable />
			<DialogCategoriaProduto />
		</DialogProvider>
	);
}
