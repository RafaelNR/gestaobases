import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Box,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import {
	Menu as MenuIcon,
	Home,
	Assignment,
	Search,
	AccountBox,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const navigation = [
	{ name: "Início", href: "/", icon: Home },
	{ name: "Entrar", href: "/login", icon: AccountBox },
	{ name: "Registrar", href: "/registrar", icon: AccountBox },
	{ name: "Nova Manifestação", href: "/manifestacao", icon: Assignment },
	{ name: "Consultar Manifestação", href: "/consultar", icon: Search },
];

const Navbar = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleNavigation = (href: string) => {
		navigate(href);
		if (isMobile) {
			setMobileOpen(false);
		}
	};

	const drawer = (
		<Box sx={{ width: 250 }}>
			<List>
				{navigation.map((item) => {
					const Icon = item.icon;
					const isActive = location.pathname === item.href;

					return (
						<ListItem
							key={item.name}
							onClick={() => handleNavigation(item.href)}
							sx={{
								cursor: "pointer",
								color: isActive ? "primary.main" : "write",
								backgroundColor: isActive ? "primary.light" : "transparent",
								"&:hover": {
									backgroundColor: isActive ? "primary.light" : "grey.100",
								},
								borderRadius: 1,
								mx: 1,
								my: 0.5,
							}}
						>
							<ListItemIcon>
								<Icon color={isActive ? "primary" : "inherit"} />
							</ListItemIcon>
							<ListItemText
								primary={item.name}
								sx={{
									"& .MuiListItemText-primary": {
										color: isActive ? "primary.main" : "write",
										fontWeight: isActive ? 600 : 400,
									},
								}}
							/>
						</ListItem>
					);
				})}
			</List>
		</Box>
	);

	return (
		<>
			<AppBar position="sticky" elevation={0}>
				<Toolbar>
					{isMobile && (
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
					)}

					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							fontWeight: 600,
							cursor: "pointer",
						}}
						onClick={() => handleNavigation("/")}
					></Typography>

					{!isMobile && (
						<Box sx={{ display: "flex", gap: 1 }}>
							{navigation.map((item) => {
								const isActive = location.pathname === item.href;
								return (
									<Button
										key={item.name}
										color="inherit"
										onClick={() => handleNavigation(item.href)}
										sx={{
											color: isActive ? "white" : "black",
											backgroundColor: isActive
												? "rgba(255, 255, 255, 0.1)"
												: "transparent",
											"&:hover": {
												backgroundColor: "rgba(255, 255, 255, 0.2)",
											},
											borderRadius: 2,
											px: 2,
											fontWeight: isActive ? 600 : 400,
										}}
									>
										{item.name}
									</Button>
								);
							})}
						</Box>
					)}
				</Toolbar>
			</AppBar>

			<Drawer
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: "block", md: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: 250,
					},
				}}
			>
				{drawer}
			</Drawer>
		</>
	);
};

export default Navbar;
