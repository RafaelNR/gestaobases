import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import {
	Autocomplete,
	Box,
	TextField,
	type TextFieldProps,
} from "@mui/material";

import type { Produto } from "@/Types/Produto";
import { useGetProdutos } from "@/Hooks/useProdutos";

interface FormValues {
	produtoId: string;
}

type AutocompleteProdutoControllerProps = Omit<
	TextFieldProps,
	"name" | "value" | "onChange"
> & {
	disablePortal?: boolean;
};

function findProdutoById(
	produtos: Produto[],
	produtoId?: string,
): Produto | null {
	if (!produtoId) return null;

	return produtos.find((produto) => produto.id === produtoId) ?? null;
}

function getProdutoOptionLabel(option: Produto): string {
	return `${option.codigo} - ${option.nome}`;
}

export default function AutocompleteProdutoController(
	{ disablePortal = true, ...props }: AutocompleteProdutoControllerProps,
) {
	const fieldName = "produtoId" as const;

	const { control, setValue } = useFormContext<FormValues>();

	const value = useWatch({
		control,
		name: fieldName,
	});

	const [open, setOpen] = useState(false);

	const { data: produtos = [], isLoading, isSuccess } = useGetProdutos();

	const selectedProduto = findProdutoById(produtos, value);

	useEffect(() => {
		// Só verifica se o produto existe depois que a consulta terminar.
		if (isSuccess && value && !selectedProduto) {
			setValue(fieldName, "", {
				shouldValidate: true,
				shouldDirty: true,
			});
		}
	}, [isSuccess, selectedProduto, setValue, value]);

	return (
		<Autocomplete<Produto, false, false, false>
			fullWidth
			disablePortal={disablePortal}
			open={open}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			value={selectedProduto}
			options={produtos}
			loading={isLoading}
			loadingText="Carregando produtos..."
			noOptionsText="Nenhum produto encontrado"
			getOptionLabel={getProdutoOptionLabel}
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
					{getProdutoOptionLabel(option)}
				</Box>
			)}
			renderInput={(params) => (
				<TextField
					{...params}
					name={fieldName}
					label="Produtos"
					size="small"
					{...props}
				/>
			)}
		/>
	);
}
