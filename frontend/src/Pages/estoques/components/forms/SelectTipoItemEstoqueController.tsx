/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Select,
	FormControl,
	MenuItem,
	InputLabel,
	FormHelperText,
} from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";

export default function SelectTipoItemEstoqueController({
	addMedicamento,
	addProduto,
}: {
	addMedicamento: boolean;
	addProduto: boolean;
}) {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	return (
		<Controller
			control={control}
			name={"kind"}
			render={({ field, fieldState }) => (
				<FormControl fullWidth error={!!fieldState.error}>
					<InputLabel htmlFor={"label_kind"} error={!!fieldState.error}>
						Tipo Item
					</InputLabel>
					<Select
						size="medium"
						fullWidth
						label="Tipo Item"
						labelId="label_kind"
						id="select-label_kind_kind"
						{...field}
					>
						<MenuItem value="">
							<em>Sem Tipo</em>
						</MenuItem>
						{addProduto && <MenuItem value="produto">Produto</MenuItem>}
						{addMedicamento && (
							<MenuItem value="medicamento">Medicamento</MenuItem>
						)}
					</Select>
					<FormHelperText>
						{errors["kind"] && errors["kind"]?.message
							? (errors["kind"]?.message as string)
							: ""}
					</FormHelperText>
				</FormControl>
			)}
		/>
	);
}
