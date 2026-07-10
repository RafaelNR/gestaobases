import UsuariosTable from "./Table.usuarios";
import DialogUsuario from "./Dialog";
import { DialogProvider } from "@/Contexts/DialogContext";

export default function UsuariosPage() {
	return (
		<DialogProvider>
			<>
				<UsuariosTable />
				<DialogUsuario />
			</>
		</DialogProvider>
	);
}
