import { Stack } from "@mui/material";
import FormInput from "@/Components/TextField/TextFieldController";

export default function Form() {
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
				label="Nome Visivel"
				required
				fullWidth
				inputProps={{ maxLength: 100 }}
			/>
		</Stack>
	);
}
