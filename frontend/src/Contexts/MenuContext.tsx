/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useCallback } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

//* LIST
import MenuList from "../Store/Menu";

import { IMenuContext, IMenu } from "../Types/Menu";

const MenuContext = createContext({} as IMenuContext);

const MenuProvider = ({ children }: { children: React.JSX.Element }) => {
	const location = useLocation();
	const [open, setOpen] = React.useState(false);
	const selected = React.useMemo(() => location.pathname, [location.pathname]);
	const [Menus, SetMenus] = React.useState<IMenu[]>(MenuList);

	const toggleDrawerMenu = useCallback(() => {
		setOpen(!open);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open]);

	const handleToggleSubMenu = useCallback(
		(props: string) => () => {
			SetMenus((menu) => {
				return menu.map((e) => {
					return e.primary === props ? { ...e, isOpen: !e.isOpen } : e;
				});
			});
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},
		[],
	);

	return (
		<MenuContext.Provider
			value={{
				open,
				setOpen,
				Menus,
				selected,
				toggleDrawerMenu,
				handleToggleSubMenu,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

MenuProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { MenuContext, MenuProvider };
