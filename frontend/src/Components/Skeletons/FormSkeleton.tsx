import { Skeleton, Stack } from "@mui/material";

interface FormSkeletonProps {
	fields?: number;
}

export function FormSkeleton({ fields = 6 }: FormSkeletonProps) {
	return (
		<Stack spacing={2.5}>
			{Array.from({ length: fields }).map((_, i) => (
				<Stack key={i} spacing={0.5}>
					<Skeleton variant="text" width="30%" height={18} />
					<Skeleton variant="rounded" width="100%" height={40} />
				</Stack>
			))}
			<Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ pt: 1 }}>
				<Skeleton variant="rounded" width={100} height={36} />
				<Skeleton variant="rounded" width={100} height={36} />
			</Stack>
		</Stack>
	);
}
