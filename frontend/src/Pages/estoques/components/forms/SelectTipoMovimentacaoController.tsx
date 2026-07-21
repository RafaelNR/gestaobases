import {
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";
import type { EstoqueLote, TipoMovimentacaoEstoque } from "@/Types/Estoque";
import { permiteMovimentacao } from "../../estoque.helpers";
import { Controller, useFormContext } from "react-hook-form";

const tipos = {
	Entrada: "Entrada",
	Saida: "Saida",
	AjusteEntrada: "Ajuste de Entrada",
	AjusteSaida: "Ajuste de Saida",
	Perda: "Perda",
	Vencimento: "Vencimento",
	// TransferenciaEntrada: "Transferencia de Entrada",
	// TransferenciaSaida: "Transferencia de Saida",
	Devolucao: "Devolução",
};

type TipoMovimentacaoEstoqueOption = {
	value: TipoMovimentacaoEstoque;
	label: string;
};

const tiposList: TipoMovimentacaoEstoqueOption[] = Object.entries(tipos).map(
	([value, label]) => ({
		value: value as TipoMovimentacaoEstoque,
		label,
	}),
);

export default function SelectTipoMovimentacaoController({
	lote,
}: {
	lote: EstoqueLote | null;
}) {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<Controller
			control={control}
			name={"tipo"}
			render={({ field, fieldState }) => (
				<FormControl fullWidth error={!!fieldState.error} required>
					<InputLabel
						htmlFor={"label_tipo"}
						error={!!fieldState.error}
						required
					>
						Tipo
					</InputLabel>
					<Select
						size="medium"
						fullWidth
						label="Tipo"
						labelId="label_tipo"
						id="select-label_tipo_tipo"
						required
						{...field}
					>
						{tiposList.map((value) => (
							<MenuItem
								key={value.value}
								value={value.value}
								disabled={lote ? !permiteMovimentacao(lote, value.value) : true}
							>
								{value.label}
							</MenuItem>
						))}
					</Select>
					<FormHelperText>
						{errors["tipo"] && errors["tipo"]?.message
							? (errors["tipo"]?.message as string)
							: ""}
					</FormHelperText>
				</FormControl>
			)}
		/>
	);
}
