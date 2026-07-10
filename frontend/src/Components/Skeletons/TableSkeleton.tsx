import { Skeleton, Stack, Box } from "@mui/material";

interface TableSkeletonProps {
	rows?: number;
	columns?: number;
}

export function TableSkeleton({ rows = 8, columns = 5 }: TableSkeletonProps) {
	return (
		<Box>
			{/* Header */}
			<Stack direction="row" spacing={2} sx={{ mb: 1, px: 2, py: 1 }}>
				{Array.from({ length: columns }).map((_, i) => (
					<Skeleton key={i} variant="text" width={`${100 / columns}%`} height={32} />
				))}
			</Stack>
			{/* Rows */}
			{Array.from({ length: rows }).map((_, rowIdx) => (
				<Stack
					key={rowIdx}
					direction="row"
					spacing={2}
					sx={{ px: 2, py: 0.75 }}
				>
					{Array.from({ length: columns }).map((_, colIdx) => (
						<Skeleton
							key={colIdx}
							variant="text"
							width={`${100 / columns}%`}
							height={28}
						/>
					))}
				</Stack>
			))}
		</Box>
	);
}
