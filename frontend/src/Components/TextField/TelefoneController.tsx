import React from "react";
import { TextField, InputLabel, SxProps, TextFieldProps } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";
import { applyMaskTelefone } from "@/Utils/functions";

type FormPros = {
	name: string;
	label: string;
	nameValue?: string;
	required?: boolean;
} & TextFieldProps;

export default function MyOutlinedInputTelefone({
	name,
	label,
	nameValue = "telefone",
	required = false,
	...otherProps
}: FormPros) {
	const {
		control,
		setValue,
		formState: { errors },
	} = useFormContext();

	const clear = React.useCallback((value: string) => {
		return value && value.replace(/[^0-9]/g, "");
	}, []);
	const TYPES = React.useMemo(
		() => ({
			FIXO: "(99)9999-9999",
			CELULAR: "(99)99999-9999",
		}),
		[],
	);
	// eslint-disable-next-line
	const MAX_LENGTH = React.useMemo(() => clear(TYPES.CELULAR).length, []);
	const onLocalChange = React.useCallback((ev: any) => {
		let value = clear(ev.target.value);
		const mask = getMask(value);

		let nextLength = value.length;

		if (nextLength > MAX_LENGTH) return;
		value = applyMaskTelefone(value, TYPES[mask]);

		setValue(nameValue, value);
		// eslint-disable-next-line
	}, []);
	const getMask = React.useCallback((value: string) => {
		return value.length > 10 ? "CELULAR" : "FIXO";
	}, []);

	return (
		<Controller
			control={control}
			name={name}
			defaultValue=""
			render={({ field }) => (
				<>
					<TextField
						{...otherProps}
						{...field}
						variant="outlined"
						id={`textField-outlined-${name}`}
						onChange={onLocalChange}
						fullWidth
						required={required}
						label={label}
						error={!!errors[name]}
						helperText={errors[name] ? (errors[name]?.message as string) : ""}
					/>
				</>
			)}
		/>
	);
}
