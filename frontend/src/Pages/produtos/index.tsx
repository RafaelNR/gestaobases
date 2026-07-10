import ProdutosTable from "./Table.produtos";
import DialogProduto from "./Dialog";
import { DialogProvider } from "@/Contexts/DialogContext";

export default function ProdutosPage() {
	return (
		<DialogProvider>
			<ProdutosTable />
			<DialogProduto />
		</DialogProvider>
	);
}
