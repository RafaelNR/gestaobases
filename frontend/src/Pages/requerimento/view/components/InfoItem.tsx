import { Box, Stack, Typography, alpha, useTheme } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";

type InfoItemProps = {
	icon: SvgIconComponent;
	label: string;
	value: string;
};

export default function InfoItem({ icon: Icon, label, value }: InfoItemProps) {
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
				backgroundColor: alpha(theme.palette.primary.main, 0.035),
				border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
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
					color: "primary.main",
					backgroundColor: alpha(theme.palette.primary.main, 0.1),
					flexShrink: 0,
				}}
			>
				<Icon fontSize="small" />
			</Box>
			<Box minWidth={0}>
				<Typography
					variant="caption"
					color="text.secondary"
					fontWeight={700}
					textTransform="uppercase"
				>
					{label}
				</Typography>
				<Typography
					variant="body2"
					fontWeight={700}
					color="text.primary"
					sx={{ wordBreak: "break-word" }}
				>
					{value}
				</Typography>
			</Box>
		</Stack>
	);
}
