import SelectTipoAmbulanciasBasesController from "@/Components/Select/SelectTipoAmbulanciasBasesController";
import FormInput from "@/Components/TextField/TextFieldController";
import { Stack } from "@mui/material";

export default function Form() {
	return (
		<Stack spacing={2}>
			<FormInput
				name="nome"
				label="Nome da Base"
				required
				fullWidth
				autoFocus
				inputProps={{ maxLength: 100 }}
			/>
			<SelectTipoAmbulanciasBasesController />
		</Stack>
	);
}
