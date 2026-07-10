import { DialogProvider } from "@/Contexts/DialogContext";
import RequerimentoTable from "../table/RequerimentoTable";

export default function AlmoxarifadoRequerimentosGestaoPage() {
	return (
		<DialogProvider>
			<RequerimentoTable tipo="Almoxarifado" />
		</DialogProvider>
	);
}
