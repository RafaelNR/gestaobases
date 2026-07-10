//* COMPONENTES
import Perfil from "./Perfil";

//* CONTEXT
import { LoadingProvider } from "@/Contexts/LoadingContext";

//* HOOKS
import usePerfil from "@/Hooks/usePerfil";
import { useQuery as Query } from "@/Hooks/useQuery";
import { useQuery } from "@tanstack/react-query";

export default function Index() {
	const {
		user: { uuid },
		confirmToken,
	} = usePerfil();
	const { querys } = Query();
	const token = querys.get("token");

	if (token) {
		useQuery({
			queryKey: ["confirm-token"],
			queryFn: () => confirmToken(token),
			enabled: !!token,
		});
	}

	return (
		<LoadingProvider>
			<Perfil uuid={uuid} />
		</LoadingProvider>
	);
}
