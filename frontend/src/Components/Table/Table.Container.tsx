import { TableContainer } from "@mui/material";
import { TableSkeleton } from "@/Components/Skeletons";

export default function MyTableContainer({
	children,
	loading = false,
	skeletonColumns = 5,
	skeletonRows = 8,
}: {
	children: JSX.Element;
	loading: boolean;
	skeletonColumns?: number;
	skeletonRows?: number;
}) {
	return (
		<TableContainer>
			{loading ? (
				<TableSkeleton rows={skeletonRows} columns={skeletonColumns} />
			) : (
				children
			)}
		</TableContainer>
	);
}
