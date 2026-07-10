import {
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	Stack,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import TextFieldController from "@/Components/TextField/TextFieldController";

interface ReceituarioFormProps {
	medicos: any[];
	bases: any[];
	ambulancias: any[];
}

export default function ReceituarioForm({ medicos, bases, ambulancias }: ReceituarioFormProps) {
	const { control, formState: { errors } } = useFormContext();

	return (
		<Stack spacing={2}>
			<Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
				<TextFieldController name="data" label="Data" type="date" required />
				<TextFieldController name="ocorrencia" label="Nº Ocorrência" type="number" required />
				<TextFieldController name="data_ocorrencia" label="Data Ocorrência" type="date" />
			</Stack>

			<Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
				<Controller
					control={control}
					name="medico"
					render={({ field }) => (
						<FormControl fullWidth size="small" error={!!errors.medico}>
							<InputLabel required>Médico</InputLabel>
							<Select {...field} label="Médico">
								{medicos.map((m: any) => (
									<MenuItem key={m.id} value={m.nome}>
										{m.nome} — CRM {m.crm}
									</MenuItem>
								))}
							</Select>
							{errors.medico && (
								<FormHelperText>{errors.medico.message as string}</FormHelperText>
							)}
						</FormControl>
					)}
				/>
				<Controller
					control={control}
					name="base"
					render={({ field }) => (
						<FormControl fullWidth size="small" error={!!errors.base}>
							<InputLabel required>Base</InputLabel>
							<Select {...field} label="Base">
								{bases.map((b: any) => (
									<MenuItem key={b.id} value={b.id}>
										{b.nome}
									</MenuItem>
								))}
							</Select>
							{errors.base && (
								<FormHelperText>{errors.base.message as string}</FormHelperText>
							)}
						</FormControl>
					)}
				/>
				<Controller
					control={control}
					name="ambulancia"
					render={({ field }) => (
						<FormControl fullWidth size="small" error={!!errors.ambulancia}>
							<InputLabel required>Ambulância</InputLabel>
							<Select {...field} label="Ambulância">
								{ambulancias.map((a: any) => (
									<MenuItem key={a.id} value={a.id}>
										{a.nome} ({a.tipo})
									</MenuItem>
								))}
							</Select>
							{errors.ambulancia && (
								<FormHelperText>{errors.ambulancia.message as string}</FormHelperText>
							)}
						</FormControl>
					)}
				/>
			</Stack>

			<TextFieldController name="requerimento" label="Nº Requerimento (opcional)" />
			<TextFieldController name="obs" label="Observação (opcional)" multiline minRows={2} />
		</Stack>
	);
}
