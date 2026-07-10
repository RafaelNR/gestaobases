import { Stack } from "@mui/material";
import FormInput from "@/Components/TextField/TextFieldController";
import SelectBasesController from "@/Components/Select/SelectBasesController";
import SelectTipoAmbulanciaController from "@/Components/Select/SelectTipoAmbulanciasController";

export default function Form() {
	return (
		<Stack spacing={2.5}>
			<FormInput
				name="nome"
				label="Nome da Ambulância"
				required
				fullWidth
				autoFocus
				inputProps={{ maxLength: 100 }}
			/>

			<SelectTipoAmbulanciaController name="tipo" required />
			<SelectBasesController name="baseId" required />
		</Stack>
	);
}
