//* COMPONENTES
import Perfil from "./Perfil";

//* HOOKS
import { useMe } from "@/Hooks/useAuth";

export default function Index() {
	const { data: user } = useMe();

	if (!user) return null;

	return <Perfil user={user} />;
}
