/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	SelectProps,
	OutlinedInput,
	InputLabel,
	MenuItem,
	FormControl,
	FormHelperText,
	Select,
	FormControlProps,
} from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

type IFormInputProps = {
	name: string;
	required?: boolean;
} & FormControlProps;

const SelectOutroMotivoController: FC<IFormInputProps> = ({
	name,
	required = true,
	...otherProps
}) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue=""
			render={({ field, fieldState }) => (
				<FormControl fullWidth error={!!fieldState.error} {...otherProps}>
					<InputLabel
						htmlFor={"label_outro_motivo_name"}
						sx={{ fontWeight: "bold", mb: 0.5 }}
						required={required}
						error={!!fieldState.error}
					>
						Outro Motivo
					</InputLabel>
					<Select
						label="Outro Motivo"
						fullWidth
						labelId="label_outro_motivo"
						id="label_outro_motivo_name"
						MenuProps={MenuProps}
						required={required}
						{...field}
					>
						<MenuItem value="">
							<em>Sem Motivo</em>
						</MenuItem>
						<MenuItem key={"Feriado"} value={"Feriado"}>
							Feriado
						</MenuItem>
						<MenuItem key={"Ponto Facultativo"} value={"Ponto Facultativo"}>
							Ponto Facultativo
						</MenuItem>
						<MenuItem key={"Expediente Interno"} value={"Expediente Interno"}>
							Expediente Interno
						</MenuItem>
					</Select>
					<FormHelperText error={!!fieldState.error}>
						{fieldState.error && fieldState.error?.message
							? (fieldState.error?.message as string)
							: ""}
					</FormHelperText>
				</FormControl>
			)}
		/>
	);
};

export default SelectOutroMotivoController;
