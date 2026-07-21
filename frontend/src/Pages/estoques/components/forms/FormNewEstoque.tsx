import { Stack } from "@mui/material";
import AutoCompleteProdutoController from "@/Components/Autocomplete/AutoCompleteProdutoController";
import AutoCompleteMedicamentosController from "@/Components/Autocomplete/AutoCompleteMedicamentosController";
import AutoCompleteBasesController from "@/Components/Autocomplete/AutoCompleteBasesController";
import { useFormContext } from "react-hook-form";
import SelectTipoItemEstoqueController from "./SelectTipoItemEstoqueController";

export default function FormNewEstoque({
	allBases,
	addMedicamento,
	addProduto,
}: {
	allBases: boolean;
	addMedicamento: boolean;
	addProduto: boolean;
}) {
	const { watch } = useFormContext();
	const kind = watch("kind");

	return (
		<Stack gap={2} mt={1}>
			{allBases && (
				<AutoCompleteBasesController
					keyName="baseId"
					size="medium"
					allBases={allBases}
					disablePortal={false}
				/>
			)}

			<SelectTipoItemEstoqueController
				addMedicamento={addMedicamento}
				addProduto={addProduto}
			/>

			{kind === "produto"
				? addProduto && (
						<AutoCompleteProdutoController
							size="medium"
							disablePortal={false}
						/>
					)
				: addMedicamento && (
						<AutoCompleteMedicamentosController
							size="medium"
							disablePortal={false}
						/>
					)}
			{/* <FormInput
				name="quantidadeMinima"
				fullWidth
				label="Quantidade Mínima"
				type="number"
			/> */}
		</Stack>
	);
}
