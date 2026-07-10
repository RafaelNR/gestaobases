import { Box, CircularProgress } from "@mui/material";

export function MyCircularProgress() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: 400,
			}}
		>
			<CircularProgress />
		</Box>
	);
}
