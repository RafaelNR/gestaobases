/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Select,
	FormControl,
	MenuItem,
	InputLabel,
	Box,
	FormHelperText,
} from "@mui/material";

import ChipStatusRequerimento from "../Chip/ChipStatusRequerimento";
import {
	RequerimentoStatus,
	STATUS_REQUERIMENTO_LABELS,
} from "@/Types/Requerimento";
import { Controller, useFormContext } from "react-hook-form";

export default function SelectStatusController() {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	return (
		<Controller
			control={control}
			name={"status"}
			render={({ field, fieldState }) => (
				<FormControl fullWidth error={!!fieldState.error}>
					<InputLabel htmlFor={"label_status"} error={!!fieldState.error}>
						Status
					</InputLabel>
					<Select
						size="small"
						fullWidth
						label="Status"
						labelId="label_status"
						id="select-label_status_status-status"
						renderValue={(selected) => (
							<Box>
								<ChipStatusRequerimento
									status={selected as RequerimentoStatus}
								/>
							</Box>
						)}
						{...field}
					>
						<MenuItem value="">
							<em>Sem Status</em>
						</MenuItem>
						{Object.keys(STATUS_REQUERIMENTO_LABELS).map((s, index) => {
							return (
								<MenuItem key={index} value={s}>
									<ChipStatusRequerimento status={s as RequerimentoStatus} />
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
