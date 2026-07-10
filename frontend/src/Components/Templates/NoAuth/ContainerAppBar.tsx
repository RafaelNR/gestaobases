import { Box, Container, Typography } from "@mui/material";

import NavBar from "./AppBar";

export default function MyContainer({
	children,
}: {
	children: React.ReactNode;
	navbar?: boolean;
}) {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<NavBar />
			<Container>
				{children}
				<Box sx={{ textAlign: "center", mb: 2, mt: 2 }}>
					<Typography sx={{ fontSize: 12 }}>
						© CISRU CENTRO SUL - {new Date().getFullYear()}
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}
