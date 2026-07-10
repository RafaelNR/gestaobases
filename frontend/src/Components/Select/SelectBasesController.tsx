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
import { useGetBases } from "@/Hooks/useBases";

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
	keyValue?: "id" | "nome";
	required?: boolean;
} & FormControlProps;

const SelectBasesController: FC<IFormInputProps> = ({
	name,
	required = true,
	keyValue = "id",
	...otherProps
}) => {
	const { control } = useFormContext();

	const { data: bases } = useGetBases();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue=""
			render={({ field, fieldState }) => (
				<FormControl fullWidth error={!!fieldState.error} {...otherProps}>
					<InputLabel
						htmlFor={"label_base_name"}
						sx={{ mb: 0.5 }}
						required={required}
						error={!!fieldState.error}
					>
						Base Descentralizada
					</InputLabel>
					<Select
						label="Base Descentralizada"
						fullWidth
						labelId="label_base"
						id="label_base_name"
						MenuProps={MenuProps}
						required={required}
						{...field}
					>
						<MenuItem value="">
							<em>Sem base</em>
						</MenuItem>
						{bases &&
							bases.map((base) => (
								<MenuItem
									key={base.nome}
									value={keyValue === "id" ? base.id : base.nome}
								>
									{base.nome}
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

export default SelectBasesController;
