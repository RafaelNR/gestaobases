import React, { useEffect } from "react";
import { SuspenseLoading } from "@/Components/Templates/SuspenseLoading";

//* CONTEXT
import { useLogout } from "@/Hooks/useAuth";

function Logout() {
	const { mutate: logout } = useLogout();

	useEffect(() => {
		logout();
	}, [logout]);

	return <SuspenseLoading />;
}

export default React.memo(Logout);
