/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Select,
	MenuItem,
	InputLabel,
	Box,
	FormHelperText,
} from "@mui/material";

import ChipStatusRequerimento from "../Chip/ChipStatusRequerimento";
import { Controller, useFormContext } from "react-hook-form";
import { STATUS_REQUERIMENTO_LABELS } from "@/Types/Requerimento";
import { useMemo } from "react";

export default function SelectStatusRequerimentoController() {
	const {
		control,
		watch,
		formState: { errors },
	} = useFormContext();
	const currStatus = useMemo(() => watch("status"), []);

	return (
		<Controller
			control={control}
			name={"status"}
			defaultValue={STATUS_REQUERIMENTO_LABELS.Rascunho}
			render={({ field }) => (
				<>
					<InputLabel
						htmlFor={"select-label-status"}
						sx={{ mb: 0.5 }}
						error={!!errors["status"]}
						required
					>
						Status Requerimento
					</InputLabel>
					<Select
						{...field}
						sx={{
							borderRadius: 3,
							backgroundColor: "#f9f9f9",
						}}
						size="small"
						fullWidth
						labelId="select-label-status"
						id="select-label-tipo-manifestacao-id"
						value={field.value ?? ""}
						renderValue={(selected) =>
							selected ? (
								<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
									<ChipStatusRequerimento status={selected as any} />
								</Box>
							) : (
								"Selecione um status"
							)
						}
					>
						{Object.keys(STATUS_REQUERIMENTO_LABELS).map((s, index) => {
							return (
								<MenuItem
									key={s}
									value={s}
									disabled={
										Object.keys(STATUS_REQUERIMENTO_LABELS).indexOf(
											currStatus,
										) > index
									}
								>
									<ChipStatusRequerimento
										status={s as keyof typeof STATUS_REQUERIMENTO_LABELS}
									/>
								</MenuItem>
							);
						})}
					</Select>
					<FormHelperText>
						{errors["status"] && errors["status"]?.message
							? (errors["status"]?.message as string)
							: ""}
					</FormHelperText>
				</>
			)}
		/>
	);
}
