/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, Grid } from "@mui/material";
//* COMPONENTS
import FormInput from "@/Components/TextField/TextFieldController";
import TelefoneInput from "@/Components/TextField/TelefoneController";
import SelectSetoresController from "@/Components/Select/SelectSetoresController";
import SelectCargosBySetorController from "@/Components/Select/SelectCargosBySetorController";
import SelectBasesController from "@/Components/Select/SelectBasesController";

export default function MyForm() {
	return (
		<Box width="100%">
			<Grid container spacing={1} sx={{ p: 2 }}>
				<Grid size={{ sm: 6 }}>
					<FormInput
						name="nome"
						required
						fullWidth
						label="Nome Completo"
						type="text"
						sx={{ mb: 2 }}
					/>
				</Grid>
				<Grid size={{ sm: 6 }}>
					<FormInput
						name="username"
						required
						fullWidth
						label="Usuário"
						type="text"
						sx={{ mb: 2 }}
					/>
				</Grid>
				<Grid size={{ sm: 6 }}>
					<FormInput
						name="password"
						required
						fullWidth
						label="Senha"
						type="password"
						sx={{ mb: 2 }}
					/>
				</Grid>
				<Grid size={{ sm: 6 }}>
					<FormInput
						name="email"
						fullWidth
						label="Email"
						type="email"
						sx={{ mb: 2 }}
					/>
				</Grid>
				<Grid size={{ sm: 6 }}>
					<TelefoneInput
						name="telefone"
						fullWidth
						label="Telefone"
						type="text"
						sx={{ mb: 2 }}
					/>
				</Grid>
				<Grid size={{ sm: 6 }}>
					<SelectBasesController name="baseId" keyValue="id" required />
				</Grid>
				<Grid size={{ sm: 6 }}>
					<SelectSetoresController name="setorId" keyValue="id" required />
				</Grid>
				<Grid size={{ sm: 6 }}>
					<SelectCargosBySetorController
						name="cargoId"
						keyValue="id"
						required
					/>
				</Grid>
				<Grid size={{ sm: 12 }}></Grid>
				<Grid size={{ sm: 12 }} display="flex" justifyContent="flex-end"></Grid>
			</Grid>
			<Divider />
		</Box>
	);
}
