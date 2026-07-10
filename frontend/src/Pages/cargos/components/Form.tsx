import { Stack } from "@mui/material";

import SelectSetoresController from "@/Components/Select/SelectSetoresController";
import FormInput from "@/Components/TextField/TextFieldController";

export default function CargoForm() {
	return (
		<Stack spacing={2.5}>
			<FormInput
				name="nome"
				label="Nome na Permissão"
				required
				fullWidth
				autoFocus
				inputProps={{ maxLength: 100 }}
			/>
			<FormInput
				name="nomeVisivel"
				label="Nome Visível"
				required
				fullWidth
				inputProps={{ maxLength: 100 }}
			/>
			<SelectSetoresController name="setor" required keyValue="nome" />
		</Stack>
	);
}
