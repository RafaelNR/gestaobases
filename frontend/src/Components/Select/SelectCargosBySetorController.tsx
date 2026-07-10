/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	InputLabel,
	MenuItem,
	FormControl,
	FormHelperText,
	Select,
	FormControlProps,
} from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useGetCargosBySetor, useGetCargosBySetorId } from "@/Hooks/useCargos";

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

const SelectCargosBySetorController: FC<IFormInputProps> = ({
	name,
	keyValue = "id",
	required,
	...otherProps
}) => {
	const { control, watch } = useFormContext();
	const setor = watch("setorId");

	const { data: cargos = [] } =
		keyValue === "id"
			? useGetCargosBySetorId(setor)
			: useGetCargosBySetor(setor);

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
					disabled={!setor}
					{...otherProps}
				>
					<InputLabel
						htmlFor={"label_setor_name"}
						sx={{ mb: 0.5 }}
						required={required}
						error={!!fieldState.error}
						disabled={!setor}
					>
						Cargo
					</InputLabel>
					<Select
						label="setor"
						fullWidth
						labelId="label_setor"
						id="label_setor_name"
						MenuProps={MenuProps}
						disabled={!setor}
						{...field}
					>
						<MenuItem value="">
							<em>Sem Cargo</em>
						</MenuItem>
						{cargos &&
							cargos.map((cargo) => (
								<MenuItem
									key={cargo.nome}
									value={keyValue === "id" ? cargo.id : cargo.nome}
								>
									{cargo.nomeVisivel}
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

export default SelectCargosBySetorController;
