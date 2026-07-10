import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import FormInput from "@/Components/TextField/TextFieldController";
import { useGetCategoriasMedicamento } from "@/Hooks/useCategoriasMedicamento";
import SelectCategoriaMedicamentoController from "@/Components/Select/SelectCategoriaMedicamentoController";

export default function Form() {
	const { control } = useFormContext();
	const { data: categorias } = useGetCategoriasMedicamento();

	return (
		<Grid container spacing={2}>
			<Grid size={{ xs: 12, sm: 6 }}>
				<FormInput
					name="nome"
					label="Nome"
					required
					fullWidth
					autoFocus
					inputProps={{ maxLength: 150 }}
				/>
			</Grid>
			<Grid size={{ xs: 12, sm: 6 }}>
				<FormInput
					name="codigo"
					label="Código"
					required
					fullWidth
					inputProps={{ maxLength: 50 }}
				/>
			</Grid>
			<Grid size={{ xs: 12, sm: 6 }}>
				<FormInput
					name="especificacao"
					label="Especificação"
					required
					fullWidth
					inputProps={{ maxLength: 200 }}
				/>
			</Grid>
			<Grid size={{ xs: 12, sm: 6 }}>
				<SelectCategoriaMedicamentoController name="categoria" required />
			</Grid>
			<Grid size={{ xs: 12 }}>
				<FormInput
					name="descricao"
					label="Descrição (opcional)"
					fullWidth
					multiline
					rows={3}
					inputProps={{ maxLength: 500 }}
				/>
			</Grid>
		</Grid>
	);
}
