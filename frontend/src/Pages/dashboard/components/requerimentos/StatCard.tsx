import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

/* ── Card de métrica simples ─────────────────────────────── */
export default function StatCard({
	label,
	value,
	icon,
	color,
	sub,
}: {
	label: string;
	value: number;
	icon: React.ReactNode;
	color: string;
	sub?: string;
}) {
	return (
		<Card
			elevation={0}
			sx={{
				border: "1px solid",
				borderColor: "divider",
				borderRadius: 2,
				height: "100%",
			}}
		>
			<CardContent>
				<Stack direction="row" alignItems="center" spacing={2}>
					<Box
						sx={{
							width: 48,
							height: 48,
							borderRadius: 2,
							bgcolor: `${color}18`,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color,
							flexShrink: 0,
						}}
					>
						{icon}
					</Box>
					<Box>
						<Typography variant="h4" fontWeight={700} lineHeight={1.2}>
							{value}
						</Typography>
						<Typography
							variant="body2"
							fontWeight={600}
							color="text.primary"
							mt={0.3}
						>
							{label}
						</Typography>
						{sub && (
							<Typography variant="caption" color="text.secondary">
								{sub}
							</Typography>
						)}
					</Box>
				</Stack>
			</CardContent>
		</Card>
	);
}
