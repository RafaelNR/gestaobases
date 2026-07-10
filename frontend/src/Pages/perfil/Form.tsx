/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, Grid } from "@mui/material";
//* COMPONENTS
import Save from "@/Components/Button/SaveHookForm";
import FormInput from "@/Components/TextField/TextFieldController";
import CPFController from "@/Components/TextField/CPFController";
import TelefoneInput from "@/Components/TextField/TelefoneController";

export default function MyForm({ isSubmitting }: { isSubmitting: boolean }) {
	return (
		<Box width="100%">
			<Grid container spacing={1} sx={{ p: 2 }}>
				<Grid size={{ sm: 4 }} sx={{ width: "100%" }}>
					<FormInput
						name="nome"
						required
						fullWidth
						label="Nome Completo"
						type="text"
						sx={{ mb: 2 }}
					/>
				</Grid>
				<Grid size={{ sm: 4 }} sx={{ width: "100%" }}>
					<FormInput
						name="password"
						required
						fullWidth
						label="Senha"
						type="password"
						sx={{ mb: 2 }}
					/>
				</Grid>
				<Grid size={{ sm: 3 }} sx={{ width: "100%" }}>
					<CPFController
						name="cpf"
						required
						fullWidth
						label="CPF"
						type="text"
						sx={{ mb: 2 }}
					/>
				</Grid>
				<Grid size={{ sm: 3 }} sx={{ width: "100%" }}>
					<FormInput
						name="email"
						fullWidth
						required
						label="Email"
						type="email"
						sx={{ mb: 2 }}
					/>
				</Grid>
				<Grid size={{ sm: 3 }} sx={{ width: "100%" }}>
					<TelefoneInput
						name="telefone"
						fullWidth
						label="Telefone"
						type="text"
						sx={{ mb: 2 }}
					/>
				</Grid>
				<Grid size={{ sm: 12 }} display="flex" justifyContent="flex-end"></Grid>
			</Grid>
			<Divider />
			<Box sx={{ p: 2, display: "center", justifyContent: "flex-end" }}>
				<Save isSubmitting={isSubmitting} />
			</Box>
		</Box>
	);
}
