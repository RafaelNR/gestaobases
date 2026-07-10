/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	SelectProps,
	OutlinedInput,
	InputLabel,
	MenuItem,
	FormControl,
	FormHelperText,
	Select,
} from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useGetCargos } from "@/Hooks/useCargos";

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
} & SelectProps;

const SelectCargosController: FC<IFormInputProps> = ({
	name,
	...otherProps
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const { data: cargos } = useGetCargos();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue=""
			render={({ field }) => (
				<>
					<InputLabel htmlFor={"label_setor_name"} sx={{ mb: 0.5 }} required>
						Cargo
					</InputLabel>
					<Select
						size="small"
						fullWidth
						labelId="label_setor"
						id="label_setor_name"
						MenuProps={MenuProps}
						{...otherProps}
						{...field}
					>
						{cargos &&
							cargos.map((cargo) => (
								<MenuItem key={cargo.nome} value={cargo.nome}>
									{cargo.nomeVisivel}
								</MenuItem>
							))}
					</Select>
					<FormHelperText>
						{errors[name] && errors[name]?.message
							? (errors[name]?.message as string)
							: ""}
					</FormHelperText>
				</>
			)}
		/>
	);
};

export default SelectCargosController;
