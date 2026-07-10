import { Box, Stack, Typography, alpha, useTheme } from "@mui/material";
import { AssignmentTurnedIn } from "@mui/icons-material";
import type { Requerimento } from "@/Types/Requerimento";
import ChipStatusRequerimento from "@/Components/Chip/ChipStatusRequerimento";

export function RequerimentoStatusItem({
	status,
}: {
	status: Requerimento["status"];
}) {
	const theme = useTheme();

	return (
		<Stack
			direction="row"
			spacing={1.25}
			alignItems="center"
			sx={{
				minHeight: 64,
				p: 1.5,
				borderRadius: 1,
				backgroundColor: alpha(theme.palette.success.main, 0.045),
				border: `1px solid ${alpha(theme.palette.success.main, 0.16)}`,
				marginBottom: 1,
			}}
		>
			<Box
				sx={{
					width: 32,
					height: 32,
					borderRadius: 1,
					display: "grid",
					placeItems: "center",
					color: "success.dark",
					backgroundColor: alpha(theme.palette.success.main, 0.12),
					flexShrink: 0,
				}}
			>
				<AssignmentTurnedIn fontSize="small" />
			</Box>
			<Box minWidth={0}>
				<Typography
					variant="caption"
					color="text.secondary"
					fontWeight={700}
					textTransform="uppercase"
				>
					Status
				</Typography>
				<Box mt={0.25}>
					<ChipStatusRequerimento status={status} size="small" />
				</Box>
			</Box>
		</Stack>
	);
}
