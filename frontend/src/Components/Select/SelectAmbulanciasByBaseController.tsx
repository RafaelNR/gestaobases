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
import { useGetAmbulanciasOrBase } from "@/Hooks/useAmbulancias";

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
	keyBase?: string;
	required?: boolean;
} & FormControlProps;

const SelectAmbulanciasController: FC<IFormInputProps> = ({
	name,
	keyBase = "base",
	required = true,
	...otherProps
}) => {
	const { control, watch } = useFormContext();
	const base = watch(keyBase);

	const { data: ambulancias } = useGetAmbulanciasOrBase(base, {
		enabled: !!base,
	});

	console.log(base, ambulancias);

	return (
		<Controller
			control={control}
			name={name}
			defaultValue=""
			render={({ field, fieldState }) => (
				<FormControl fullWidth error={!!fieldState.error} {...otherProps}>
					<InputLabel
						htmlFor={"label_ambulancia_name"}
						sx={{ mb: 0.5 }}
						required={required}
						error={!!fieldState.error}
					>
						Ambulancia
					</InputLabel>
					<Select
						label="Ambulancia"
						fullWidth
						labelId="label_ambulancia"
						id="label_ambulancia_name"
						MenuProps={MenuProps}
						required={required}
						{...field}
					>
						<MenuItem value="">
							<em>Sem Ambulancia</em>
						</MenuItem>
						{ambulancias &&
							ambulancias.map((ambulancia) => (
								<MenuItem key={ambulancia.nome} value={ambulancia.id}>
									{ambulancia.tipo} - {ambulancia.nome}
								</MenuItem>
							))}
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

export default SelectAmbulanciasController;
