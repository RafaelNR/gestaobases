import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
	Box,
	Collapse,
	Divider,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip,
	alpha,
} from "@mui/material";
import { ListItemButtonProps } from "@mui/material/ListItemButton";
import {
	bindHover,
	bindPopover,
	bindTrigger,
	usePopupState,
} from "material-ui-popup-state/hooks";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { Icon } from "@iconify/react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import useMenu from "@/Hooks/useMenu";
import { usePermissions } from "@/Hooks/usePermissions";
import { IMenu } from "@/Types/Menu";
import appBar from "/images/logos/appBar.png";
import appBarFull from "/images/logos/logo_icone.png";

interface MyListItemButton extends ListItemButtonProps {
	open?: boolean;
	to?: string;
	attentionColor?: string;
}

const MyListItemButton = styled(ListItemButton, {
	shouldForwardProp: (prop) => prop !== "open" && prop !== "attentionColor",
})<MyListItemButton>(({ attentionColor, open, selected, theme }) => {
	const primary = attentionColor ?? theme.palette.primary.main;

	return {
		position: "relative",
		margin: "3px 10px",
		borderRadius: 8,
		display: "flex",
		justifyContent: open ? "flex-start" : "center",
		alignItems: "center",
		minHeight: 47,
		padding: open ? "9px 12px" : "10px 8px",
		overflow: "hidden",
		color: "rgba(255,255,255,0.82)",
		transition:
			"background-color 0.18s ease, color 0.18s ease, transform 0.18s ease",
		backgroundColor:
			attentionColor && !selected ? alpha(primary, 0.1) : undefined,
		"&::before": {
			content: '""',
			position: "absolute",
			left: 0,
			top: 8,
			bottom: 8,
			width: 3,
			borderRadius: "0 999px 999px 0",
			backgroundColor: selected || attentionColor ? primary : "transparent",
			transition: "background-color 0.18s ease",
		},
		"&:hover": {
			backgroundColor: alpha(primary, 0.12),
			transform: open ? "translateX(2px)" : "none",
			"& .MuiListItemIcon-root": { color: primary },
			"& .MuiTypography-root": { color: "#ffffff" },
		},
		"& .MuiListItemIcon-root": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			minWidth: open ? 38 : "auto",
			color: selected || attentionColor ? primary : "rgba(255,255,255,0.62)",
			transition: "color 0.15s ease, marginLeft 0.15s ease",
			"& svg": {
				fontSize: 20,
			},
		},
		"&.Mui-selected": {
			backgroundColor: alpha(primary, 0.18),
			"&:hover": {
				backgroundColor: alpha(primary, 0.24),
			},
			"& .MuiTypography-root": {
				color: "#ffffff",
				fontWeight: 700,
			},
		},
		"& .MuiTypography-root": {
			fontSize: "0.875rem",
			display: open ? "block" : "none",
			color: selected ? "#ffffff" : "rgba(255,255,255,0.8)",
			fontWeight: selected ? 700 : 500,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis",
		},
	};
});

const SidebarDivider = () => (
	<Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mx: 1.5, my: 1 }} />
);

function isMenuSelected(menu: IMenu, selected: string) {
	return (
		menu.url === selected ||
		menu.subMenu.some((submenu) => submenu.url === selected)
	);
}

export const ListMenu = ({ open }: { open: boolean }) => {
	const { Menus, selected } = useMenu();
	const { can } = usePermissions();

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				minHeight: 0,
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: open ? "flex-start" : "center",
					height: 64,
					px: open ? 2.5 : 1,
					flexShrink: 0,
				}}
			>
				<Box
					component="img"
					src={open ? appBarFull : appBar}
					alt="Logo"
					loading="lazy"
					sx={{
						height: open ? 38 : 34,
						objectFit: "contain",
						maxWidth: open ? 160 : 40,
						filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.22))",
						transition: "height 0.2s ease, max-width 0.2s ease",
					}}
				/>
			</Box>

			<SidebarDivider />

			<Box
				sx={{
					flex: 1,
					minHeight: 0,
					overflowY: "auto",
					pb: 1,
					"&::-webkit-scrollbar": { width: 6 },
					"&::-webkit-scrollbar-thumb": {
						bgcolor: "rgba(255,255,255,0.16)",
						borderRadius: 999,
					},
				}}
			>
				{Menus.map((menu, index) => (
					<React.Fragment key={menu.primary + index}>
						{menu.subMenu.length > 0
							? open
								? menu.permission &&
									can(menu.permission) && (
										<MenuWithSubMenuOpen menu={menu} open={open} />
									)
								: menu.permission &&
									can(menu.permission) && (
										<MenuWithSubMenu
											menu={menu}
											open={open}
											selected={selected}
										/>
									)
							: menu.permission &&
								can(menu.permission) && (
									<MyMenu menu={menu} open={open} selected={selected} />
								)}
					</React.Fragment>
				))}
			</Box>
		</Box>
	);
};

const MenuWithSubMenuOpen = ({
	menu,
	open,
}: {
	menu: IMenu;
	open: boolean;
}) => {
	const { selected, handleToggleSubMenu } = useMenu();
	const active = isMenuSelected(menu, selected);

	return (
		<React.Fragment>
			<MyListItemButton
				onClick={handleToggleSubMenu(menu.primary)}
				open={open}
				selected={active}
				aria-expanded={menu.isOpen}
			>
				<ListItemIcon>
					{menu.Icon ? (
						<menu.Icon />
					) : (
						<Icon icon={menu.iconIfy} width="20" height="20" />
					)}
				</ListItemIcon>
				<ListItemText primary={menu.primary} />
				{menu.isOpen ? (
					<ExpandLess
						sx={{
							color: active ? "primary.main" : "rgba(255,255,255,0.62)",
							fontSize: 18,
							flexShrink: 0,
						}}
					/>
				) : (
					<ExpandMore
						sx={{
							color: active ? "primary.main" : "rgba(255,255,255,0.62)",
							fontSize: 18,
							flexShrink: 0,
						}}
					/>
				)}
			</MyListItemButton>
			{menu.divider && <SidebarDivider />}
			<Collapse in={menu.isOpen} timeout="auto" unmountOnExit>
				<Box
					sx={(theme) => ({
						position: "relative",
						py: 0.25,
						my: 0.25,
						backgroundColor: alpha(theme.palette.secondary.light, 0.3),
					})}
				>
					{menu.subMenu.map((submenu) => (
						<SubMenuOpen
							key={submenu.primary}
							submenu={submenu}
							selected={selected}
						/>
					))}
				</Box>
			</Collapse>
		</React.Fragment>
	);
};

const SubMenuOpen = ({
	submenu,
	selected,
}: {
	submenu: IMenu;
	selected: string;
}) => {
	const active = submenu.url === selected;

	return (
		<MyListItemButton
			component={Link}
			to={submenu.url}
			selected={active}
			open={true}
			sx={(theme) => ({
				minHeight: 38,
				width: "auto",
				backgroundColor: active
					? alpha(theme.palette.primary.main, 0.16)
					: "transparent",
				"&:hover": {
					backgroundColor: alpha(theme.palette.primary.main, 0.12),
				},
				"&::after": {
					content: '""',
					position: "absolute",
					left: -6,
					top: "50%",
					width: active ? 7 : 5,
					height: active ? 7 : 5,
					backgroundColor: active
						? theme.palette.primary.main
						: "rgba(255,255,255,0.18)",
					transform: "translateY(-50%)",
				},
				"& .MuiListItemIcon-root": {
					minWidth: 34,
					color: active ? "primary.main" : "rgba(255,255,255,0.48)",
				},
				"& .MuiTypography-root": {
					fontSize: "0.82rem",
					color: active ? "#ffffff" : "rgba(255,255,255,0.62)",
				},
			})}
		>
			<ListItemIcon>
				{submenu.Icon ? (
					<submenu.Icon />
				) : (
					<Icon icon={submenu.iconIfy} width="18" height="18" />
				)}
			</ListItemIcon>
			<ListItemText primary={submenu.primary} />
		</MyListItemButton>
	);
};

const MenuWithSubMenu = ({
	menu,
	selected,
	open,
}: {
	menu: IMenu;
	open: boolean;
	selected: string;
}) => {
	const popupState = usePopupState({
		variant: "popover",
		popupId: `drawer-menu-${menu.primary}`,
	});
	const active = isMenuSelected(menu, selected);

	return (
		<React.Fragment>
			<MyListItemButton
				{...bindHover(popupState)}
				{...bindTrigger(popupState)}
				open={open}
				selected={active}
			>
				<ListItemIcon>
					{menu.Icon ? (
						<menu.Icon />
					) : (
						<Icon icon={menu.iconIfy} width="20" height="20" />
					)}
				</ListItemIcon>
			</MyListItemButton>
			{menu.divider && <SidebarDivider />}
			<HoverPopover
				sx={(theme) => ({
					left: 0,
					"& .MuiPaper-root": {
						backgroundColor: `${theme.palette.secondary.light} !important`,
						color: "#ffffff",
					},
				})}
				elevation={8}
				{...bindPopover(popupState)}
				anchorOrigin={{ vertical: "center", horizontal: "right" }}
				transformOrigin={{ vertical: "center", horizontal: "left" }}
				PaperProps={{
					sx: {
						backgroundColor: "secondary.main",
						borderRadius: 2,
						overflow: "hidden",
						border: "1px solid rgba(255,255,255,0.1)",
						boxShadow: "0 18px 48px rgba(0,0,0,0.34)",
					},
				}}
			>
				{menu.subMenu.map((submenu, index) => (
					<Tooltip
						title={submenu.primary}
						key={submenu.primary}
						placement="right"
					>
						<MyListItemButton
							key={index}
							component={Link}
							to={submenu.url}
							selected={submenu.url === selected}
							open={true}
							sx={{ minHeight: 38 }}
						>
							<ListItemIcon>
								{submenu.Icon ? (
									<submenu.Icon />
								) : (
									<Icon icon={submenu.iconIfy} width="18" height="18" />
								)}
							</ListItemIcon>
							<ListItemText primary={submenu.primary} />
						</MyListItemButton>
					</Tooltip>
				))}
			</HoverPopover>
		</React.Fragment>
	);
};

const MyMenu = ({
	menu,
	open,
	selected,
}: {
	menu: IMenu;
	open: boolean;
	selected: string;
}) => {
	const { setOpen } = useMenu();

	return (
		<React.Fragment>
			<Tooltip title={!open ? menu.primary : ""} placement="right" arrow>
				<MyListItemButton
					component={Link}
					to={menu.url}
					onClick={() => setOpen(false)}
					selected={selected === menu.url}
					open={open}
					attentionColor={menu.attentionColor}
				>
					<ListItemIcon>
						{menu.Icon ? (
							<menu.Icon />
						) : (
							<Icon icon={menu.iconIfy} width="20" height="20" />
						)}
					</ListItemIcon>
					{open && <ListItemText primary={menu.primary} />}
				</MyListItemButton>
			</Tooltip>
			{menu.divider && <SidebarDivider />}
		</React.Fragment>
	);
};
