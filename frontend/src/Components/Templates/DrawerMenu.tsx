import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { List } from "@mui/material";
import { ListMenu } from "./ListDrawerMenu";
import AppBar, { DRAWER_OPEN_WIDTH, DRAWER_CLOSED_WIDTH } from "./AppBar";
import { MenuProvider } from "@/Contexts/MenuContext";
import useMenu from "@/Hooks/useMenu";

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	"& .MuiDrawer-paper": {
		backgroundColor: theme.palette.secondary.main,
		borderRight: "none",
		position: "fixed",
		overflowX: "hidden",
		width: DRAWER_OPEN_WIDTH,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: "border-box",
		...(!open && {
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: DRAWER_CLOSED_WIDTH,
			[theme.breakpoints.down("md")]: {
				width: 0,
			},
		}),
	},
}));

function DrawerContent() {
	const { open } = useMenu();
	return (
		<Drawer variant="permanent" open={open}>
			<List component="nav" disablePadding sx={{ width: "100%", height: "100%" }}>
				<ListMenu open={open} />
			</List>
		</Drawer>
	);
}

export default function MenuContent() {
	return (
		<MenuProvider>
			<>
				<DrawerContent />
				<AppBar />
			</>
		</MenuProvider>
	);
}
