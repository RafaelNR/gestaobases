import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100vh",
	backgroundImage: "url('/images/logos/background.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
}));

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function MyContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down("sm"));
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			{children}
		</Container>
	);
}
