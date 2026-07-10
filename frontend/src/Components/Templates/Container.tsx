import { Container, Box, useMediaQuery, Theme, useTheme } from "@mui/material";
import CustomizedSnackbars from "./SnackBar";
import HeaderPage from "./HeaderPage";
import { JSX } from "react";
import { DRAWER_CLOSED_WIDTH } from "./AppBar";

export default function MyContainer({ children }: { children: JSX.Element }) {
	const theme = useTheme();
	const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

	return (
		<Container
			maxWidth={false}
			disableGutters
			sx={{
				backgroundColor: theme.palette.background.main,
				flexGrow: 1,
				minHeight: "100vh",
				marginLeft: mdDown ? 0 : `${DRAWER_CLOSED_WIDTH}px`,
				paddingTop: "64px",
				overflowY: "hidden",
			}}
		>
			<HeaderPage />
			<Box
				sx={{
					p: { xs: 2, sm: 3 },
					bgcolor: "transparent",
				}}
			>
				{children}
			</Box>
			<CustomizedSnackbars />
		</Container>
	);
}
