import { CircularProgress, Container } from "@mui/material";

export function SuspenseLoading() {
	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<CircularProgress />
		</Container>
	);
}
