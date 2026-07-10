import React from "react";
import { useLocation } from "react-router-dom";

export function useQuery() {
	const { search } = useLocation();

	const querys = React.useMemo(() => new URLSearchParams(search), [search]);

	return {
		querys,
	};
}
