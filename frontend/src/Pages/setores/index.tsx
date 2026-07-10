import SetoresTable from "./Table.setores";
import DialogSetor from "./Dialog";
import { DialogProvider } from "@/Contexts/DialogContext";

export default function SetoresPage() {
	return (
		<DialogProvider>
			<SetoresTable />
			<DialogSetor />
		</DialogProvider>
	);
}
