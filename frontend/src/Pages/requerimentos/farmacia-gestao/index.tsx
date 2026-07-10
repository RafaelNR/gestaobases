import { DialogProvider } from "@/Contexts/DialogContext";
import RequerimentoTable from "../table/RequerimentoTable";

export default function FarmaciaRequerimentosGestaoPage() {
	return (
		<DialogProvider>
			<RequerimentoTable tipo="Farmacia" />
		</DialogProvider>
	);
}
