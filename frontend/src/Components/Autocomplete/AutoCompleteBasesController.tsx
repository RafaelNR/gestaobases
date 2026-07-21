/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { TextField, Box, TextFieldProps } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

//* SERVICE
import { useGetBases } from "@/Hooks/useBases";
import { Base } from "@/Types/Base";

type BaseOption = Base | string | null | undefined;

type Props = {
	keyName?: "base" | "baseId";
	allBases?: boolean;
	disablePortal?: boolean;
} & TextFieldProps;

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

export default function AutocompleteBaseController({
	keyName = "base",
	allBases = true,
	disablePortal = true,
	...rest
}: Props) {
	const { control, setValue } = useFormContext();

	const value: string = useWatch({
		control,
		name: keyName,
	});

	const [open, setOpen] = useState(false);

	const { data: bases = [], isLoading } = useGetBases({
		enabled: open && allBases,
	});

	const selectedBase = findBaseById(bases, value);

	return (
		<Autocomplete<Base, false, false, false>
			autoFocus={false}
			fullWidth
			disablePortal={disablePortal}
			size="small"
			open={open}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			value={selectedBase}
			noOptionsText="Sem Base"
			onChange={(_event, newValue) => {
				setValue(keyName, newValue?.id ?? "", {
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
					name={keyName}
					label="Bases"
					size="small"
					inputProps={{
						...params.inputProps,
						autoFocus: false,
						size: "small",
					}}
					{...rest}
				/>
			)}
		/>
	);
}
