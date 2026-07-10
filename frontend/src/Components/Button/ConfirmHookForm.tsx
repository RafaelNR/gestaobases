/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingButton } from "@mui/lab";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

export default ({
	isSubmitting,
	label = "Confirmar",
}: {
	isSubmitting: any;
	label?: string;
}) => {
	return (
		<LoadingButton
			variant="contained"
			fullWidth
			type="submit"
			color="success"
			loading={isSubmitting}
			sx={{ width: 150 }}
			startIcon={<ThumbUpAltIcon />}
		>
			{label}
		</LoadingButton>
	);
};
