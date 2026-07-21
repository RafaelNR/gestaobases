import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import {
	Autocomplete,
	Box,
	TextField,
	type TextFieldProps,
} from "@mui/material";

import type { Medicamento } from "@/Types/Medicamento";
import { useGetMedicamentos } from "@/Hooks/useMedicamentos";

interface FormValues {
	medicamentoId: string;
}

type AutocompleteMedicamentosControllerProps = Omit<
	TextFieldProps,
	"name" | "value" | "onChange"
> & {
	disablePortal?: boolean;
};

function findMedicamentoById(
	medicamentos: Medicamento[],
	medicamentoId?: string,
): Medicamento | null {
	if (!medicamentoId) return null;

	return (
		medicamentos.find((medicamento) => medicamento.id === medicamentoId) ?? null
	);
}

function getMedicamentoOptionLabel(option: Medicamento): string {
	return `${option.codigo} - ${option.nome}`;
}

export default function AutocompleteMedicamentosController(
	{ disablePortal = true, ...props }: AutocompleteMedicamentosControllerProps,
) {
	const fieldName = "medicamentoId" as const;

	const { control, setValue } = useFormContext<FormValues>();

	const value = useWatch({
		control,
		name: fieldName,
	});

	const [open, setOpen] = useState(false);

	const {
		data: medicamentos = [],
		isLoading,
		isSuccess,
	} = useGetMedicamentos();

	const selectedMedicamento = findMedicamentoById(medicamentos, value);

	useEffect(() => {
		if (isSuccess && value && !selectedMedicamento) {
			setValue(fieldName, "", {
				shouldValidate: true,
				shouldDirty: true,
			});
		}
	}, [isSuccess, selectedMedicamento, setValue, value]);

	return (
		<Autocomplete<Medicamento, false, false, false>
			fullWidth
			disablePortal={disablePortal}
			open={open}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			value={selectedMedicamento}
			options={medicamentos}
			loading={isLoading}
			loadingText="Carregando medicamentos..."
			noOptionsText="Nenhum medicamento encontrado"
			getOptionLabel={getMedicamentoOptionLabel}
			isOptionEqualToValue={(option, selectedValue) =>
				option.id === selectedValue.id
			}
			onChange={(_event, newValue) => {
				setValue(fieldName, newValue?.id ?? "", {
					shouldValidate: true,
					shouldDirty: true,
					shouldTouch: true,
				});
			}}
			renderOption={(optionProps, option) => (
				<Box component="li" {...optionProps} key={option.id}>
					{getMedicamentoOptionLabel(option)}
				</Box>
			)}
			renderInput={(params) => (
				<TextField
					{...params}
					name={fieldName}
					label="Medicamentos"
					size="small"
					{...props}
				/>
			)}
		/>
	);
}
