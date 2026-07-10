/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	SelectProps,
	InputLabel,
	MenuItem,
	FormControl,
	FormHelperText,
	Select,
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
} & SelectProps;

const SelectTipoAmbulanciaController: FC<IFormInputProps> = ({
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
				<FormControl fullWidth error={!!fieldState.error}>
					<InputLabel
						htmlFor={"label_ta_name"}
						sx={{ mb: 0.5 }}
						required={required}
						error={!!fieldState.error}
					>
						Tipo de Ambulância
					</InputLabel>
					<Select
						label="Tipo de Ambulância"
						fullWidth
						labelId="label_tipo"
						id="label_ta_name"
						MenuProps={MenuProps}
						required={required}
						{...otherProps}
						{...field}
					>
						<MenuItem value="">
							<em>Sem tipo</em>
						</MenuItem>
						<MenuItem value="USA">USA</MenuItem>
						<MenuItem value="USB">USB</MenuItem>
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

export default SelectTipoAmbulanciaController;
