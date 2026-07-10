import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";

import ContainerNotAuth from "@/Components/Templates/NoAuth/Container";
import ContainerAppBar from "@/Components/Templates/NoAuth/ContainerAppBar";

import Index from "../Pages/index";
import Login from "../Pages/login";
// import RegistroConfirm from "../Pages/registro/confirm";
// import Registro from "../Pages/registro";
// import RecuperarSenha from "../Pages/recuperarSenha";

// Layout wrappers
const NotAuthLayout = () => (
	<ContainerNotAuth>
		<Outlet />
	</ContainerNotAuth>
);

const AppLayout = () => (
	<ContainerAppBar>
		<Outlet />
	</ContainerAppBar>
);

const router = createBrowserRouter([
	{
		element: <NotAuthLayout />,
		children: [
			{ path: "/", element: <Index /> },
			{ path: "/login", element: <Login /> },
		],
	},

	// {
	// 	element: <AppLayout />,
	// 	children: [
	// 		{ path: "/requerimento", element: <Requerimento /> },
	// 		{ path: "/manifestacao", element: <Manifestacao /> },
	// 		{ path: "/negativa", element: <Negativas /> },

	// 		{ path: "/consultar/:protocolo?", element: <Protocolo /> },
	// 		// { path: "/consultar/:tipo?/:protocolo?", element: <Protocolo /> },
	// 	],
	// },

	{
		path: "*",
		element: <Navigate to="/login" replace />,
	},
]);

export default router;
