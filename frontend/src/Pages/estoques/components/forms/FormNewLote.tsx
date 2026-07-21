import { Stack } from "@mui/material";
import FormInput from "@/Components/TextField/TextFieldController";

export default function FormNewLote() {
	return (
		<Stack gap={2} mt={1}>
			<FormInput name="lote" label="Lote (opcional)" />
			<FormInput
				name="validade"
				label="Validade (opcional)"
				type="date"
				slotProps={{
					inputLabel: {
						shrink: true,
					},
				}}
			/>{" "}
			<FormInput
				name="quantidade"
				label="Quantidade de Entrada"
				type="number"
				required
			/>
		</Stack>
	);
}
