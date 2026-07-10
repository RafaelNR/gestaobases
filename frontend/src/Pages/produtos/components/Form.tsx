import {
	Grid,
	FormControl,
	FormControlLabel,
	Switch,
	FormLabel,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import FormInput from "@/Components/TextField/TextFieldController";
import SelectCategoriaProdutoController from "@/Components/Select/SelectCategoriaProdutoController";
import SelectUnidadeEmbalagemController from "@/Components/Select/SelectUnidadeEmbalagemController";

export default function Form() {
	const { control } = useFormContext();

	return (
		<Grid container spacing={2.5}>
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
			<Grid size={{ xs: 12, sm: 3 }}>
				<FormInput
					name="codigo"
					label="Código"
					required
					fullWidth
					inputProps={{ maxLength: 50 }}
				/>
			</Grid>

			<Grid size={{ xs: 12, sm: 4 }}>
				<SelectCategoriaProdutoController name="categoria" required />
			</Grid>
			<Grid size={{ xs: 12, sm: 4 }}>
				<SelectUnidadeEmbalagemController name="unidade" required />
			</Grid>
			<Grid size={{ xs: 12, sm: 4 }}>
				<FormInput
					name="ordem"
					label="Ordem (opcional)"
					fullWidth
					type="number"
					inputProps={{ min: 0 }}
				/>
			</Grid>
			<Grid
				size={{ xs: 12, sm: 12 }}
				sx={{ display: "flex", alignItems: "flex-end", pb: 0.5 }}
			>
				<Controller
					name="usa"
					control={control}
					render={({ field, fieldState }) => (
						<FormControl fullWidth error={!!fieldState.error}>
							<FormLabel component="legend">Só pode pedido pela USA?</FormLabel>
							<FormControlLabel
								control={
									<Switch
										checked={field.value}
										onChange={(e) => field.onChange(e.target.checked)}
									/>
								}
								label="Sim"
							/>
						</FormControl>
					)}
				/>
			</Grid>
			<Grid
				size={{ xs: 12, sm: 12 }}
				sx={{ display: "flex", alignItems: "flex-end", pb: 0.5 }}
			>
				<Controller
					name="cme"
					control={control}
					render={({ field, fieldState }) => (
						<FormControl fullWidth error={!!fieldState.error}>
							<FormLabel component="legend">Produto é do CME?</FormLabel>
							<FormControlLabel
								control={
									<Switch
										checked={field.value}
										onChange={(e) => field.onChange(e.target.checked)}
									/>
								}
								label="Sim"
							/>
						</FormControl>
					)}
				/>
			</Grid>
			<Grid
				size={{ xs: 12, sm: 12 }}
				sx={{ display: "flex", alignItems: "flex-end", pb: 0.5 }}
			>
				<Controller
					name="fora_alx"
					control={control}
					render={({ field, fieldState }) => (
						<FormControl fullWidth error={!!fieldState.error}>
							<FormLabel component="legend">
								Renderizar no PDF em outra tabela?
							</FormLabel>
							<FormControlLabel
								control={
									<Switch
										checked={field.value}
										onChange={(e) => field.onChange(e.target.checked)}
									/>
								}
								label="Sim"
							/>
						</FormControl>
					)}
				/>
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
