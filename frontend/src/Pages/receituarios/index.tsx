import ReceituariosTable from "./Table";
import { DialogProvider } from "@/Contexts/DialogContext";
import Dialog from "./Dialog";

export default function idnex() {
	return (
		<DialogProvider>
			<>
				<ReceituariosTable />
				<Dialog />
			</>
		</DialogProvider>
	);
}
