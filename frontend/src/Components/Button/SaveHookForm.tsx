/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

export default ({
	isSubmitting,
	label = "Salvar",
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
			sx={{ width: 100 }}
			startIcon={<SaveIcon />}
		>
			{label}
		</LoadingButton>
	);
};
