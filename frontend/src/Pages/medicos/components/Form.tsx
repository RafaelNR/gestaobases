import { Grid } from "@mui/material";
import FormInput from "@/Components/TextField/TextFieldController";

export default function Form() {
	return (
		<Grid container spacing={2}>
			<Grid size={{ xs: 12 }}>
				<FormInput
					name="nome"
					label="Nome Completo"
					required
					fullWidth
					autoFocus
					inputProps={{ maxLength: 100 }}
				/>
			</Grid>
			<Grid size={{ xs: 12, sm: 6 }}>
				<FormInput
					name="crm"
					label="CRM"
					required
					fullWidth
					placeholder="Ex: 12345/SP"
					inputProps={{ maxLength: 20 }}
				/>
			</Grid>
			<Grid size={{ xs: 12, sm: 6 }}>
				<FormInput
					name="telefone"
					label="Telefone (opcional)"
					fullWidth
					inputProps={{ maxLength: 20 }}
				/>
			</Grid>
			<Grid size={{ xs: 12 }}>
				<FormInput
					name="email"
					label="E-mail (opcional)"
					fullWidth
					type="email"
					inputProps={{ maxLength: 150 }}
				/>
			</Grid>
		</Grid>
	);
}
