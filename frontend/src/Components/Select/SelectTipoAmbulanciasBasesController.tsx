/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Select,
	FormControl,
	MenuItem,
	InputLabel,
	Box,
	FormHelperText,
	Typography,
} from "@mui/material";

import { TipoAmbulancia, TIPO_AMBULANCIA_LABELS } from "@/Types/Base";
import { Controller, useFormContext } from "react-hook-form";

export default function SelectTipoAmbulanciasBasesController() {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	return (
		<Controller
			control={control}
			name={"tipo_ambulancias"}
			render={({ field, fieldState }) => (
				<FormControl fullWidth error={!!fieldState.error}>
					<InputLabel
						htmlFor={"label_tipo_ambulancia"}
						error={!!fieldState.error}
					>
						Tipo de Ambulância
					</InputLabel>
					<Select
						fullWidth
						label="Tipo de Ambulância"
						labelId="label_tipo_ambulancia"
						id="select-label-tipo_ambulancia"
						{...field}
					>
						<MenuItem value="">
							<em>Sem Tipo de Ambulância</em>
						</MenuItem>
						{Object.keys(TIPO_AMBULANCIA_LABELS).map((s, index) => {
							return (
								<MenuItem key={index} value={s}>
									<Typography variant="body2" fontWeight={500}>
										{TIPO_AMBULANCIA_LABELS[s as TipoAmbulancia]}
									</Typography>
								</MenuItem>
							);
						})}
					</Select>
					<FormHelperText>
						{errors["status"] && errors["status"]?.message
							? (errors["status"]?.message as string)
							: ""}
					</FormHelperText>
				</FormControl>
			)}
		/>
	);
}
