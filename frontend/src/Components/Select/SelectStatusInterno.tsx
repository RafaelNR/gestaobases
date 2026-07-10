import { Select, MenuItem, InputLabel, Box } from "@mui/material";

import ChipStatusManifestacao from "../Chip/ChipStatusManifestacao";
import { StatusManifestacaoInterno } from "@/Types/StatusManifestação";
import React from "react";

const listStatus = Object.values(StatusManifestacaoInterno);
const listStatusKeys = Object.keys(StatusManifestacaoInterno);

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
				htmlFor={"label_status_interno"}
				sx={{ fontWeight: "bold", mb: 0.5 }}
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
				name="status_interno"
				labelId="label_status_interno"
				id="select-label_status_interno-id"
				onChange={handleChange}
				value={value || ""}
				renderValue={(selected) => {
					if (!selected) {
						return <span style={{ color: "#999" }}>Selecione um status</span>;
					}

					return (
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
							<ChipStatusManifestacao
								status={selected as StatusManifestacaoInterno}
							/>
						</Box>
					);
				}}
			>
				<MenuItem value="">
					<em>Selecione um status</em>
				</MenuItem>

				{listStatus.map((s, index) => (
					<MenuItem
						key={index}
						value={listStatusKeys[index]}
						disabled={indexStatus - 2 >= index}
					>
						<ChipStatusManifestacao
							status={s as StatusManifestacaoInterno}
							keys={listStatusKeys[index]}
						/>
					</MenuItem>
				))}
			</Select>
		</>
	);
}
