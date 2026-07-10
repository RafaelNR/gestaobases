import { FC } from "react";
import { TextField, TextFieldProps, InputAdornment } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type IFormInputProps = {
	name: string;
	required?: boolean;
	maxValue?: number;
} & TextFieldProps;

const Input: FC<IFormInputProps> = ({
	name,
	required = false,
	...otherProps
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => {
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
						required={required}
						error={!!errors[name]}
						helperText={errors[name] ? (errors[name]?.message as string) : ""}
						{...otherProps}
						{...field}
					/>
				);
			}}
		/>
	);
};

export default Input;
