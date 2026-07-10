import BasesTable from "./Table.bases";
import DialogBase from "./Dialog";
import { DialogProvider } from "@/Contexts/DialogContext";

export default function BasesPage() {
	return (
		<DialogProvider>
			<BasesTable />
			<DialogBase />
		</DialogProvider>
	);
}
