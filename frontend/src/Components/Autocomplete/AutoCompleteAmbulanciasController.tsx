import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { TextField, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

//* SERVICE
import { useGetAmbulanciasOrBase } from "@/Hooks/useAmbulancias";
import type { Ambulancia } from "@/Types/Ambulancia";

type AmbulanciaOption = Ambulancia | string | null | undefined;

function findAmbulanciaById(
	ambulancias: Ambulancia[] | undefined,
	ambulanciaId: string | null | undefined,
): Ambulancia | null {
	if (!ambulanciaId) return null;

	return (
		ambulancias?.find((ambulancia) => ambulancia.id === ambulanciaId) ?? null
	);
}

function getAmbulanciaOptionLabel(option: AmbulanciaOption): string {
	if (!option) return "";

	return typeof option === "object"
		? `${option.tipo} - ${option.nome}`
		: option;
}

export default function AutocompleteAmbulanciaController() {
	const { control, setValue } = useFormContext();
	const value: string = useWatch({
		control,
		name: "ambulanciaId",
	});
	const base: string | undefined = useWatch({
		control,
		name: "base",
	});
	const [open, setOpen] = useState(false);

	const { data: ambulancias, isLoading } = useGetAmbulanciasOrBase(base, {
		enabled: open || !!base ? true : false,
	});
	const options = ambulancias && ambulancias.length > 0 ? ambulancias : [];
	const selectedAmbulancia = findAmbulanciaById(options, value);

	return (
		<Autocomplete<Ambulancia, false, false, false>
			autoFocus={false}
			fullWidth
			size="small"
			disablePortal
			open={open}
			onOpen={() => {
				setOpen(true);
			}}
			onClose={() => {
				setOpen(false);
			}}
			value={selectedAmbulancia}
			noOptionsText="Sem Ambulância"
			onChange={(_event, newValue) => {
				setValue("ambulanciaId", newValue?.id ?? "", {
					shouldValidate: true,
					shouldDirty: true,
				});
			}}
			isOptionEqualToValue={(option, value) => {
				return option.id === value.id;
			}}
			getOptionLabel={getAmbulanciaOptionLabel}
			id="auto-complete-ambulancias"
			loading={isLoading}
			options={options}
			renderOption={(props, option) => (
				<Box component="li" {...props}>
					{getAmbulanciaOptionLabel(option)}
				</Box>
			)}
			renderInput={(params) => {
				return (
					<TextField
						{...params}
						name="ambulanciaId"
						label="Ambulâncias"
						size="small"
						inputProps={{
							...params.inputProps,
							autoFocus: false,
							size: "small",
						}}
					/>
				);
			}}
		/>
	);
}
