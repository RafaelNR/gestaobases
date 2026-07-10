import { Suspense } from "react";
import { SuspenseLoading } from "@/Components/Templates/SuspenseLoading";
//* ROTAS
// import RoutesAuth from "./RoutesAuth";
// import RouteNotAuth from "./RouteNotAuth";
import RouteCreateNotAuth from "./RouteNotAuth";
import RouteCreateAuth from "./RouterAuth";

import { RouterProvider } from "react-router-dom";
import { LayoutProvider } from "@/Contexts/LayoutContext";
// import { LayoutProvider } from "@/Contexts/";

//* HOOK
import useAuth from "@/Hooks/useAuth";

export default function Index() {
	const { isLoading, logado } = useAuth();

	if (isLoading) {
		return <SuspenseLoading />;
	}

	return (
		<LayoutProvider>
			<Suspense fallback={<SuspenseLoading />}>
				<RouterProvider
					router={logado ? RouteCreateAuth : RouteCreateNotAuth}
				/>
			</Suspense>
		</LayoutProvider>
	);
}
