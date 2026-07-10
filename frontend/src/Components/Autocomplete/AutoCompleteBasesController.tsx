/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { TextField, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

//* SERVICE
import { useGetBases } from "@/Hooks/useBases";
import { Base } from "@/Types/Base";

type BaseOption = Base | string | null | undefined;

function findBaseById(
	bases: Base[] | undefined,
	baseId: string | null | undefined,
): Base | null {
	if (!baseId) return null;

	return bases?.find((base) => base.id === baseId) ?? null;
}

function getBaseOptionLabel(option: BaseOption): string {
	if (!option) return "";

	return typeof option === "object" ? `${option.nome}` : option;
}

export default function AutocompleteBaseController() {
	const { control, setValue } = useFormContext();

	const value: string = useWatch({
		control,
		name: "base",
	});

	const [open, setOpen] = useState(false);

	const { data: bases = [], isLoading } = useGetBases({
		enabled: open,
	});

	const selectedBase = findBaseById(bases, value);

	return (
		<Autocomplete<Base, false, false, false>
			autoFocus={false}
			fullWidth
			disablePortal
			size="small"
			open={open}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			value={selectedBase}
			noOptionsText="Sem Base"
			onChange={(_event, newValue) => {
				setValue("base", newValue?.id ?? "", {
					shouldValidate: true,
					shouldDirty: true,
				});
			}}
			isOptionEqualToValue={(option, value) => option.id === value.id}
			getOptionLabel={getBaseOptionLabel}
			id="auto-complete-base"
			loading={isLoading}
			options={bases}
			renderOption={(props, option) => (
				<Box component="li" {...props}>
					{getBaseOptionLabel(option)}
				</Box>
			)}
			renderInput={(params) => (
				<TextField
					{...params}
					name="base"
					label="Bases"
					size="small"
					inputProps={{
						...params.inputProps,
						autoFocus: false,
						size: "small",
					}}
				/>
			)}
		/>
	);
}
