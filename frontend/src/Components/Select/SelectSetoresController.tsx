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
import { useQuery } from "@tanstack/react-query";
import { setoresService } from "@/Service/Setores.service";
import { Setor } from "@/Types/Setor";
import { useGetSetores } from "@/Hooks/useSetores";

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

const SelectSetoresController: FC<IFormInputProps> = ({
	name,
	keyValue = "id",
	required = true,
	...otherProps
}) => {
	const { control } = useFormContext();

	const { data: setores } = useGetSetores();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue=""
			render={({ field, fieldState }) => (
				<FormControl
					fullWidth
					error={!!fieldState.error}
					required={required}
					{...otherProps}
				>
					<InputLabel
						htmlFor={"label_setor_name"}
						sx={{ mb: 0.5 }}
						required={required}
						error={!!fieldState.error}
					>
						Setor
					</InputLabel>
					<Select
						label="setor"
						fullWidth
						labelId="label_setor"
						id="label_setor_name"
						MenuProps={MenuProps}
						{...field}
					>
						<MenuItem value="">
							<em>Sem Setor</em>
						</MenuItem>
						{setores &&
							setores.map((setor) => (
								<MenuItem
									key={setor.nome}
									value={keyValue === "id" ? setor.id : setor.nome}
								>
									{setor.nomeVisivel}
								</MenuItem>
							))}
					</Select>
					<FormHelperText error={!!fieldState.error}>
						{fieldState.error?.message as string}
					</FormHelperText>
				</FormControl>
			)}
		/>
	);
};

export default SelectSetoresController;
