import { Box, Stack, Typography, alpha, useTheme } from "@mui/material";
import { Notes } from "@mui/icons-material";

export default function ObservationPanel({
	observation,
	hasObservation,
}: {
	observation: string;
	hasObservation: boolean;
}) {
	const theme = useTheme();

	return (
		<Stack
			direction="row"
			spacing={1.25}
			alignItems="flex-start"
			sx={{
				minHeight: "100%",
				p: 1.5,
				borderRadius: 1,
				backgroundColor: alpha(theme.palette.warning.main, 0.045),
				border: `1px solid ${alpha(theme.palette.warning.main, 0.18)}`,
			}}
		>
			<Box
				sx={{
					width: 32,
					height: 32,
					borderRadius: 1,
					display: "grid",
					placeItems: "center",
					color: "warning.dark",
					backgroundColor: alpha(theme.palette.warning.main, 0.14),
					flexShrink: 0,
				}}
			>
				<Notes fontSize="small" />
			</Box>
			<Box minWidth={0}>
				<Typography
					variant="caption"
					color="text.secondary"
					fontWeight={700}
					textTransform="uppercase"
				>
					Observação
				</Typography>
				<Typography
					variant="body2"
					color={hasObservation ? "text.primary" : "text.secondary"}
					sx={{ mt: 0.25, whiteSpace: "pre-wrap", wordBreak: "break-word" }}
				>
					{observation}
				</Typography>
			</Box>
		</Stack>
	);
}
