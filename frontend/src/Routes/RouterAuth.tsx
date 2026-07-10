import {
	createBrowserRouter,
	Navigate,
	Outlet,
} from "react-router-dom";
import { Suspense, useEffect } from "react";
import { Box } from "@mui/material";
import type { ReactNode } from "react";

//* COMPONENTS (snackbar renderizado diretamente, sem Provider)
import CustomizedSnackbars from "@/Components/Templates/SnackBar";

//* COMPONENTS
import DrawerMenu from "@/Components/Templates/DrawerMenu";
import Container from "@/Components/Templates/Container";
import { SuspenseLoading } from "@/Components/Templates/SuspenseLoading";
import ErrorBoundary from "@/Components/Templates/ErrorBoundary";

//* PAGES
import { Pages } from "@/Pages/Pages";
import Logout from "@/Pages/logout";

//* HOOKS / LIB / GUARD
import { useMe } from "@/Hooks/useAuth";
import { hasPermission, type Permission } from "@/Guard";
import { clearUser } from "@/Lib/UserCache";
import { getQueryClient } from "@/Providers/QueryProvider";

document.title = "CISRU PEDIDOS - Sistema de Pedidos Bases Descentralizadas";

// ─── Router (criado uma única vez fora do ciclo React) ────────────────────────

const router = createBrowserRouter([
	{
		id: "root",
		path: "/",
		Component: AuthLayout,
		ErrorBoundary,
		children: Pages.map((page) => ({
			path: page.path,
			element: (
				<PermissionGuard permission={page.permission}>
					<page.Element />
				</PermissionGuard>
			),
		})),
	},
	{
		id: "logout",
		path: "/logout",
		Component: Logout,
	},
	{
		path: "*",
		element: <Navigate to="/" replace />,
	},
]);

export default router;

// ─── AuthLayout ───────────────────────────────────────────────────────────────
// Verifica autenticação via hook e renderiza o layout autenticado.

function AuthLayout() {
	const { data: user, isError, isLoading } = useMe();

	useEffect(() => {
		if (!isLoading && (!user || isError)) {
			clearUser();
			getQueryClient().clear();
		}
	}, [user, isError, isLoading]);

	if (isLoading) return <SuspenseLoading />;
	if (!user) return null;

	return (
		<>
			<CustomizedSnackbars />
			<Box sx={{ display: "flex" }}>
				<DrawerMenu />
				<Container>
					<Suspense fallback={<SuspenseLoading />}>
						<Outlet />
					</Suspense>
				</Container>
			</Box>
		</>
	);
}

// ─── PermissionGuard ──────────────────────────────────────────────────────────
// Protege cada página individualmente com base na permissão do usuário.
// useMe() usa o cache do React Query — sem requisição extra.

function PermissionGuard({
	permission,
	children,
}: {
	permission: Permission;
	children: ReactNode;
}) {
	const { data: user } = useMe();

	// AuthLayout já garantiu que user existe; aguarda o dado para não piscar
	if (!user) return <SuspenseLoading />;

	if (!hasPermission(user, permission)) {
		return <Navigate to="/logout" replace />;
	}

	return <>{children}</>;
}
