import { ButtonProps, LinearProgress } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import UploadIcon from "@mui/icons-material/Upload";

type Props = {
	children: string | React.ElementType;
	loading: boolean;
	progress?: number;
} & ButtonProps;

export default function ButtonUpload({
	children,
	loading,
	...otherProps
}: Props) {
	return (
		<LoadingButton
			startIcon={<UploadIcon />}
			variant="contained"
			loading={loading}
			{...otherProps}
		>
			{children}
		</LoadingButton>
	);
}

export function ButtonUploadProgress({
	progress = 0,
	children,
	loading,
	...otherProps
}: Props) {
	return (
		<>
			{loading && (
				<LinearProgress variant="determinate" value={progress} sx={{ mb: 1 }} />
			)}

			<LoadingButton
				startIcon={<UploadIcon />}
				variant="contained"
				loading={loading}
				{...otherProps}
			>
				{children}
			</LoadingButton>
		</>
	);
}
