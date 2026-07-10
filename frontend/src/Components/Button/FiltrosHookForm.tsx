/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingButton } from "@mui/lab";
import { useFormContext } from "react-hook-form";
import { ButtonGroup } from "@mui/material";

export default () => {
	const {
		formState: { isSubmitting },
		reset,
	} = useFormContext<any>();

	return (
		<ButtonGroup variant="contained" aria-label="Basic button group">
			<LoadingButton
				variant="contained"
				fullWidth
				type="submit"
				color="secondary"
				loading={isSubmitting}
				sx={{ width: 100 }}
			>
				Filtrar
			</LoadingButton>
			<LoadingButton
				variant="outlined"
				fullWidth
				color="primary"
				loading={isSubmitting}
				sx={{ width: 100 }}
				onClick={() => reset()}
			>
				Limpar
			</LoadingButton>
		</ButtonGroup>
	);
};
