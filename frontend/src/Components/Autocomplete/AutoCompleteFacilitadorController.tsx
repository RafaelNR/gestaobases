/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { TextField, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { Usuario } from "@/Types/Usuarios";

//* SERVICE
import { useGetUsuariosByCargoOrBase } from "@/Hooks/useUsuarios";

type UsuarioOption = Usuario | string | null | undefined;

export function filterUsuariosByBase(
	usuarios: Usuario[] | undefined,
	base: string | null | undefined,
): Usuario[] {
	if (!usuarios?.length) return [];
	if (!base) return usuarios;

	return usuarios.filter((usuario) => usuario.Base?.nome === base);
}

function findUsuarioById(
	usuarios: Usuario[] | undefined,
	usuarioId: string | null | undefined,
): Usuario | null {
	if (!usuarioId) return null;

	return usuarios?.find((usuario) => usuario.id === usuarioId) ?? null;
}

function getUsuarioOptionLabel(option: UsuarioOption): string {
	if (!option) return "";

	return typeof option === "object" ? `${option.nome}` : option;
}

export default function AutocompleteFacilitadorController() {
	const { control, setValue } = useFormContext();
	const value: string = useWatch({
		control,
		name: "userId",
	});
	const base: string = useWatch({
		control,
		name: "base",
	});
	const [open, setOpen] = useState(false);

	const { data: usuarios = [], isLoading } = useGetUsuariosByCargoOrBase(
		"Facilitador",
		base,
		{
			enabled: open || !!base ? true : false,
		},
	);
	const selectedUsuario = findUsuarioById(usuarios, value);

	useEffect(() => {
		if (value && !selectedUsuario) {
			setValue("userId", "", {
				shouldValidate: true,
				shouldDirty: true,
			});
		}
	}, [selectedUsuario, setValue, value]);

	return (
		<Autocomplete<Usuario, false, false, false>
			autoFocus={false}
			fullWidth
			disablePortal
			open={open}
			onOpen={() => {
				setOpen(true);
			}}
			onClose={() => {
				setOpen(false);
			}}
			value={selectedUsuario}
			noOptionsText="Sem Facilitador"
			onChange={(_event, newValue) => {
				setValue("userId", newValue?.id ?? "", {
					shouldValidate: true,
					shouldDirty: true,
				});
			}}
			isOptionEqualToValue={(option, value) => {
				return option.id === value.id;
			}}
			getOptionLabel={getUsuarioOptionLabel}
			id="auto-complete-usuarios"
			loading={isLoading}
			options={usuarios}
			renderOption={(props, option) => (
				<Box component="li" {...props}>
					{getUsuarioOptionLabel(option)}
				</Box>
			)}
			renderInput={(params) => {
				return (
					<TextField
						{...params}
						name="userId"
						label="Facilitadores"
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
