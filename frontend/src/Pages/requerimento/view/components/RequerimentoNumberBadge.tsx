import { Box, Stack, Typography, alpha, useTheme } from "@mui/material";
import { Tag } from "@mui/icons-material";

export function RequerimentoNumberBadge({ numero }: { numero: number }) {
	const theme = useTheme();

	return (
		<Box
			sx={{
				minHeight: 64,
				p: 1.5,
				borderRadius: 1,
				position: "relative",
				overflow: "hidden",
				backgroundColor: "primary.main",
				color: "primary.contrastText",
				border: `1px solid ${alpha(theme.palette.primary.dark, 0.35)}`,
				"&::after": {
					content: '""',
					position: "absolute",
					inset: 0,
					background: `linear-gradient(135deg, ${alpha(
						theme.palette.common.white,
						0.2,
					)} 0%, transparent 42%)`,
					pointerEvents: "none",
				},
				marginBottom: 1,
			}}
		>
			<Stack direction="row" spacing={1.25} alignItems="center">
				<Box
					sx={{
						width: 38,
						height: 38,
						borderRadius: 1,
						display: "grid",
						placeItems: "center",
						backgroundColor: alpha(theme.palette.common.white, 0.16),
						border: `1px solid ${alpha(theme.palette.common.white, 0.24)}`,
						flexShrink: 0,
						zIndex: 1,
					}}
				>
					<Tag fontSize="small" />
				</Box>
				<Box sx={{ minWidth: 0, zIndex: 1 }}>
					<Typography
						variant="caption"
						fontWeight={800}
						textTransform="uppercase"
						sx={{ color: alpha(theme.palette.common.white, 0.78) }}
					>
						Número do requerimento
					</Typography>
					<Typography variant="h5" fontWeight={900} lineHeight={1}>
						#{numero}
					</Typography>
				</Box>
			</Stack>
		</Box>
	);
}
