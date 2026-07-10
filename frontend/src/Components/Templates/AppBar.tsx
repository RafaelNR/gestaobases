import { styled, Theme } from "@mui/material/styles";
import { AppBar, Toolbar, IconButton, useMediaQuery, Box } from "@mui/material";
import { AppBarOwnProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuUser from "./MenuUser";
import SwitchDarkMode from "./SwitchDarkMode";
import useMenu from "@/Hooks/useMenu";

export const DRAWER_OPEN_WIDTH = 260;
export const DRAWER_CLOSED_WIDTH = 68;

interface MyAppBarOwnProps extends AppBarOwnProps {
	open?: boolean;
}

const StyledAppBar = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<MyAppBarOwnProps>(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1a1f3a" : "#ffffff",
	color: theme.palette.mode === "dark" ? "#e2e8f0" : "#1a202c",
	boxShadow: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
	zIndex: theme.zIndex.appBar,
}));

export default function MenuAppBar() {
	const { open, toggleDrawerMenu } = useMenu();
	const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

	return (
		<StyledAppBar position="fixed" elevation={0}>
			<Toolbar
				sx={{
					ml: open ? `${DRAWER_OPEN_WIDTH}px` : mdDown ? 0 : `${DRAWER_CLOSED_WIDTH}px`,
					transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
					minHeight: "64px !important",
					px: { xs: 1, sm: 2 },
				}}
			>
				<IconButton
					onClick={toggleDrawerMenu}
					aria-label="toggle navigation"
					sx={{
						color: "inherit",
						borderRadius: 1.5,
						p: 1,
						"&:hover": { bgcolor: "action.hover" },
					}}
				>
					{open ? <MenuOpenIcon /> : <MenuIcon />}
				</IconButton>

				{import.meta.env.DEV && !mdDown && (
					<Box
						sx={{
							ml: 1.5,
							px: 1.5,
							py: 0.4,
							bgcolor: "#fff3cd",
							color: "#856404",
							borderRadius: 1,
							fontSize: "0.7rem",
							fontWeight: 700,
							letterSpacing: 1,
						}}
					>
						DEV
					</Box>
				)}

				<Box sx={{ flex: 1 }} />

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						mr: 0.75,
					}}
				>
					<SwitchDarkMode />
				</Box>

				<MenuUser />
			</Toolbar>
		</StyledAppBar>
	);
}
