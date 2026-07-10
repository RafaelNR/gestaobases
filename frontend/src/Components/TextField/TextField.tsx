import { InputLabel, TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";

type IFormInputProps = {
	name: string;
	title: string;
} & TextFieldProps;

const TextFieldInput: FC<IFormInputProps> = ({
	name,
	title,
	size = "small",
	...otherProps
}) => {
	return (
		<>
			<InputLabel htmlFor={"label"} sx={{ fontWeight: "bold", mb: 0.5 }}>
				{title}
			</InputLabel>
			<TextField
				size={size}
				InputProps={{
					style: {
						borderRadius: 12, // cantos arredondados
						backgroundColor: "#f9f9f9",
					},
				}}
				fullWidth
				name={name}
				{...otherProps}
			/>
		</>
	);
};

export default TextFieldInput;
