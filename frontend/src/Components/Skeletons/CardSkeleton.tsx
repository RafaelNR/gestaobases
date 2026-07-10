import { Skeleton, Card, CardContent, Stack } from "@mui/material";

interface CardSkeletonProps {
	count?: number;
}

export function CardSkeleton({ count = 4 }: CardSkeletonProps) {
	return (
		<Stack direction="row" flexWrap="wrap" gap={2}>
			{Array.from({ length: count }).map((_, i) => (
				<Card key={i} sx={{ minWidth: 220, flex: "1 1 220px" }}>
					<CardContent>
						<Skeleton variant="text" width="60%" height={20} sx={{ mb: 1 }} />
						<Skeleton variant="text" width="40%" height={40} />
						<Skeleton variant="text" width="80%" height={16} sx={{ mt: 1 }} />
					</CardContent>
				</Card>
			))}
		</Stack>
	);
}
