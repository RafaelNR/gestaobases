import * as React from "react";
import { Paper } from "@mui/material";

const FormPaper = ({ children, ...rest }: { children: React.ReactNode }) => {
	return (
		<Paper elevation={1} {...rest}>
			{children}
		</Paper>
	);
};

export default FormPaper;
