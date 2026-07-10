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
import { useGetBases } from "@/Hooks/useBases";
import { useGetCategoriasMedicamento } from "@/Hooks/useCategoriasMedicamento";

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

const SelectCategoriaMedicamentoController: FC<IFormInputProps> = ({
	name,
	required = true,
	...otherProps
}) => {
	const { control } = useFormContext();

	const { data: categorias } = useGetCategoriasMedicamento();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue=""
			render={({ field, fieldState }) => (
				<FormControl fullWidth error={!!fieldState.error}>
					<InputLabel
						htmlFor={"label_categoria_medicamento_name"}
						sx={{ mb: 0.5 }}
						required={required}
						error={!!fieldState.error}
					>
						Categoria de medicamento
					</InputLabel>
					<Select
						label="Categoria de medicamento"
						fullWidth
						labelId="label_categoria_medicamento"
						id="label_categoria_medicamento_name"
						MenuProps={MenuProps}
						required={required}
						{...otherProps}
						{...field}
					>
						<MenuItem value="">
							<em>Sem categoria</em>
						</MenuItem>
						{categorias
							?.filter((c) => c.active)
							.map((c) => (
								<MenuItem key={c.id} value={c.nome}>
									{c.nome}
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

export default SelectCategoriaMedicamentoController;
