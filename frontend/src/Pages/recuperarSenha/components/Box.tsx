/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert } from "@mui/material";
//** CONTEXTS
import useRegistro from "@/Hooks/useRegistro";
import { Stack } from "@mui/system";

export default function Principal({ children }: { children: React.ReactNode }) {
	const { alerta } = useRegistro();

	return (
		<Stack
			justifyContent={"center"}
			alignItems="center"
			display={"flex"}
			direction={{ xs: "column", sm: "column" }}
			spacing={2}
			height={"100%"}
		>
			{alerta && (
				<Alert severity="error" sx={{ width: "100%", mb: 1 }}>
					{alerta}
				</Alert>
			)}
			{children}
		</Stack>
	);
}
