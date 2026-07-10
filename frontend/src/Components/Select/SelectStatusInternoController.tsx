/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Select,
	FormControl,
	MenuItem,
	InputLabel,
	Box,
	FormHelperText,
} from "@mui/material";

import ChipStatusManifestacao from "../Chip/ChipStatusManifestacao";
import { StatusManifestacaoInterno } from "@/Types/StatusManifestação";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const listStatus = Object.values(StatusManifestacaoInterno);
const listStatusKeys = Object.keys(StatusManifestacaoInterno);

export default function SelectStatusInterno({
	InputChange,
}: {
	InputChange?: (event: any) => void | undefined;
}) {
	const {
		watch,
		setValue,
		formState: { errors },
	} = useFormContext();
	const currStatus = watch("status_interno");

	const indexStatus = React.useMemo(
		() => listStatusKeys.findIndex((v) => v === currStatus),
		[currStatus],
	);

	const handleChange = (e: any) => {
		if (
			e.target.value === "Cancelada" ||
			e.target.value === "Finalizada" ||
			e.target.value === "Respondida"
		) {
			setValue("status_interno", e.target.value);
			setValue("status_externo", e.target.value);
		} else {
			setValue("status_interno", e.target.value);
		}
	};

	return (
		<>
			<InputLabel
				htmlFor={"label_status_interno"}
				sx={{ fontWeight: "bold", mb: 0.5 }}
				required
			>
				Status Interno
			</InputLabel>
			<Select
				size="small"
				sx={{
					borderRadius: 3,
					backgroundColor: "#f9f9f9",
				}}
				fullWidth
				labelId="label_status_interno"
				id="select-label-status-interno-id"
				onChange={InputChange ?? handleChange}
				value={currStatus}
				renderValue={(selected) => (
					<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
						<ChipStatusManifestacao
							status={selected as StatusManifestacaoInterno}
						/>
					</Box>
				)}
			>
				{listStatus.map((s, index) => {
					return (
						<MenuItem
							key={index}
							value={listStatusKeys[index]}
							disabled={indexStatus - 2 >= index ? true : false}
						>
							<ChipStatusManifestacao
								status={s as StatusManifestacaoInterno}
								keys={listStatusKeys[index]}
							/>
						</MenuItem>
					);
				})}
			</Select>
			<FormHelperText>
				{errors["status_interno"] && errors["status_interno"]?.message
					? (errors["status_interno"]?.message as string)
					: ""}
			</FormHelperText>
		</>
	);
}
