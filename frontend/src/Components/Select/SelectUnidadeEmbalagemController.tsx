/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	SelectProps,
	InputLabel,
	MenuItem,
	FormHelperText,
	Select,
	FormControl,
} from "@mui/material";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
			borderRadius: 3,
		},
	},
};

type IFormInputProps = { required?: boolean; name: string } & SelectProps;

const SelectUnidadeEmbalagemController: FC<IFormInputProps> = ({
	required = true,
	name,
	...otherProps
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue=""
			render={({ field, fieldState }) => (
				<FormControl fullWidth error={!!fieldState.error}>
					<InputLabel
						htmlFor={"label_tipo_name"}
						sx={{ mb: 0.5 }}
						required={required}
						error={!!fieldState.error}
					>
						Unidade Embalagem
					</InputLabel>
					<Select
						label="Unidade Embalagem"
						fullWidth
						labelId="label_tipo_name"
						id="tipo"
						MenuProps={MenuProps}
						{...otherProps}
						{...field}
					>
						<MenuItem value="">Sem unidade</MenuItem>
						<MenuItem value="Unidade">Unidade</MenuItem>
						<MenuItem value="Pacote">Pacote</MenuItem>
						<MenuItem value="Kit">Kit</MenuItem>
						<MenuItem value="Caixa">Caixa</MenuItem>
					</Select>
					<FormHelperText error={Boolean(errors["unidade"])}>
						{errors["unidade"] && errors["unidade"]?.message
							? (errors["unidade"]?.message as string)
							: ""}
					</FormHelperText>
				</FormControl>
			)}
		/>
	);
};

export default SelectUnidadeEmbalagemController;
