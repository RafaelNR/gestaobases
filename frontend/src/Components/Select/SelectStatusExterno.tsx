import { Select, MenuItem, InputLabel, Box } from "@mui/material";

import ChipStatusManifestacao from "../Chip/ChipStatusManifestacao";
import { StatusManifestacaoExterno } from "@/Types/StatusManifestação";
import React from "react";

const listStatus = Object.values(StatusManifestacaoExterno);
const listStatusKeys = Object.keys(StatusManifestacaoExterno);

export default function SelectStatusExterno({
	handleChange,
	value,
	currStatus,
}: {
	handleChange: any;
	value?: string;
	currStatus?: string;
}) {
	const indexStatus = React.useMemo(
		() => listStatus.findIndex((v) => v === currStatus),
		[currStatus],
	);

	return (
		<>
			<InputLabel
				htmlFor={"label_status_externo"}
				sx={{ fontWeight: "bold", mb: 0.5 }}
			>
				Status Manifestante
			</InputLabel>
			<Select
				size="small"
				sx={{
					borderRadius: 3,
					backgroundColor: "#f9f9f9",
				}}
				fullWidth
				name="status_externo"
				labelId="label_status_externo"
				id="select-label-status-externo-id"
				onChange={handleChange}
				value={value || ""}
				renderValue={(selected) => {
					if (!selected) {
						return <span style={{ color: "#999" }}>Selecione um status</span>;
					}

					return (
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
							<ChipStatusManifestacao
								status={selected as StatusManifestacaoExterno}
							/>
						</Box>
					);
				}}
			>
				<MenuItem value="">
					<em>Selecione um status</em>
				</MenuItem>
				{listStatus.map((s, index) => {
					return (
						<MenuItem
							key={index}
							value={listStatusKeys[index]}
							disabled={indexStatus - 2 >= index ? true : false}
						>
							<ChipStatusManifestacao
								status={s as StatusManifestacaoExterno}
								keys={listStatusKeys[index]}
							/>
						</MenuItem>
					);
				})}
			</Select>
		</>
	);
}
