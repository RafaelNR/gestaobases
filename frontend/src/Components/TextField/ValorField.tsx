import { FC } from "react";
import { TextField, TextFieldProps, InputAdornment } from "@mui/material";

type IFormInputProps = {
	error?: string;
} & TextFieldProps;

const Input: FC<IFormInputProps> = ({ error, ...otherProps }) => {
	return (
		<TextField
			type="text"
			variant="outlined"
			fullWidth
			InputProps={{
				startAdornment: (
					<InputAdornment position="start" sx={{ fontSize: "22px" }}>
						R$
					</InputAdornment>
				),
			}}
			required
			error={!!error}
			helperText={error ? (error as string) : ""}
			{...otherProps}
		/>
	);
};

export default Input;
