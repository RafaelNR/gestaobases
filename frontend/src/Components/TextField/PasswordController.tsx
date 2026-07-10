import {
	TextField,
	InputAdornment,
	TextFieldProps,
	IconButton,
	InputLabel,
} from "@mui/material";
import { Controller, useFormContext, UseFormSetValue } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type IProps = {
	setValue: UseFormSetValue<any>;
	label?: string;
	required?: boolean;
} & TextFieldProps;

export default function PasswordField({
	setValue,
	label = "Senha",
	name = "password",
	required,
	...otherProps
}: IProps) {
	const {
		control,
		watch,
		formState: { errors },
	} = useFormContext();

	const showPassword = watch("showPassword");

	const handleClickShowPassword = () => {
		setValue("showPassword", !showPassword);
	};

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<>
					<InputLabel
						htmlFor={name}
						sx={{ fontWeight: "bold", mb: 0.5 }}
						required={required}
						error={!!errors[name]}
					>
						{label}
					</InputLabel>
					<TextField
						id={name}
						autoComplete="current-password"
						type={showPassword ? "text" : "password"}
						variant="outlined"
						size="small"
						fullWidth
						required
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										edge="end"
										tabIndex={-1}
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
							style: {
								borderRadius: 12, // cantos arredondados
								backgroundColor: "#f9f9f9",
							},
						}}
						error={!!errors[name]}
						helperText={errors[name] ? (errors[name]?.message as string) : ""}
						{...otherProps}
						{...field}
					/>
				</>
			)}
		/>
	);
}
