import RequerimentoTable from "../table/RequerimentoTable";
import { DialogProvider } from "@/Contexts/DialogContext";

export default function CmeRequerimentosGestaoPage() {
	return (
		<DialogProvider>
			<RequerimentoTable tipo="CME" />
		</DialogProvider>
	);
}
