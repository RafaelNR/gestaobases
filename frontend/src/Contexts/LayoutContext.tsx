/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, JSX, useState } from "react";

//* TYPE
// import { ILayout, ILayoutContext } from "../Types/Layout";

const LayoutContext = createContext({} as any);

const LayoutProvider = ({ children }: { children: JSX.Element }) => {
	const [pageTitle, setPageTitle] = useState(null);
	const [pageSubTitle, setPageSubTitle] = useState(null);
	const [option, setOption] = useState<
		"Login" | "Registrar" | "Recuperar" | undefined
	>(undefined);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<LayoutContext.Provider
			value={{
				pageTitle,
				pageSubTitle,
				setPageTitle,
				setPageSubTitle,
				option,
				setOption,
				isMobile,
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
};

export { LayoutContext, LayoutProvider };
