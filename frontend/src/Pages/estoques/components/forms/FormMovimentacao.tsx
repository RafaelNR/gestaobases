import { Alert, Stack } from "@mui/material";
import FormInput from "@/Components/TextField/TextFieldController";
import { useFormContext } from "react-hook-form";
import SelectTipoMovimentacaoController from "./SelectTipoMovimentacaoController";
import type { EstoqueLote } from "@/Types/Estoque";

export default function FormMovimentacao({ lote }: { lote: EstoqueLote }) {
	const { watch } = useFormContext();
	const tipo = watch("tipo");
	const needsObservation = ![
		"Entrada",
		"Saida",
		"TransferenciaEntrada",
		"TransferenciaSaida",
	].includes(tipo);

	const destructive = ["Perda", "Vencimento", "Devolucao"].includes(tipo);

	return (
		<Stack gap={2} mt={1}>
			<SelectTipoMovimentacaoController lote={lote} />
			<FormInput name="quantidade" label="Quantidade" type="number" required />
			<FormInput
				label={`Observação`}
				multiline
				minRows={2}
				name="observacao"
				required={needsObservation}
			/>

			{destructive && (
				<Alert severity="warning">
					Esta operação reduz definitivamente o saldo do lote.
				</Alert>
			)}
		</Stack>
	);
}
