//* COMPONENTS
import { Box, CircularProgress } from "@mui/material";

import { FormProvider } from "react-hook-form";

export default function MyFormProvider({
	methods,
	isSubmitting,
	Form,
	onSubmit,
	id,
}: {
	methods: any;
	isSubmitting: boolean;
	onSubmit: any;
	Form: any;
	id?: string;
}) {
	return (
		<FormProvider {...methods}>
			{isSubmitting ? (
				<Box
					sx={{
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<CircularProgress />
				</Box>
			) : (
				<Box
					component="form"
					id={id}
					noValidate
					autoComplete="off"
					onSubmit={onSubmit}
					width="100%"
				>
					{Form}
				</Box>
			)}
		</FormProvider>
	);
}
