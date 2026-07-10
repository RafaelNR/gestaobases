import { Permission } from "@/Guard";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type IMenu = {
	Icon: null | any;
	iconIfy: string;
	primary: string;
	url: string;
	attentionColor?: string;
	isOpen: boolean;
	permission?: Permission;
	subMenu: IMenu[];
	divider: boolean;
};

export type IMenuContext = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	Menus: IMenu[];
	selected: string;
	toggleDrawerMenu: () => void;
	handleToggleSubMenu: (props: any) => () => void;
};
