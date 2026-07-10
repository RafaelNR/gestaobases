import {
	Switch,
	SwitchProps,
	FormControl,
	Stack,
	Typography,
	FormLabel,
	FormHelperText,
} from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

type IFormInputProps = {
	name: string;
} & SwitchProps;

const FormInput: FC<IFormInputProps> = ({ name, ...otherProps }) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue=""
			render={({ field: { onChange, value, ...field } }) => (
				<FormControl error={!!errors[name]} required>
					<FormLabel component="legend" sx={{ fontWeight: "bold", mb: 0.5 }}>
						Cargo de Gerência
					</FormLabel>
					<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
						<Typography>Não</Typography>
						<Switch
							{...otherProps}
							{...field}
							checked={value}
							onChange={onChange}
						/>
						<Typography>Sim</Typography>
					</Stack>
					<FormHelperText>
						{errors[name] ? (errors[name]?.message as string) : ""}
					</FormHelperText>
				</FormControl>
			)}
		/>
	);
};

export default FormInput;
