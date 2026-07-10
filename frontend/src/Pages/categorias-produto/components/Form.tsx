import FormInput from "@/Components/TextField/TextFieldController";
import { Stack } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function Form() {
	const { control } = useFormContext();

	return (
		<Stack spacing={2.5}>
			<FormInput
				name="nome"
				label="Nome da Categoria"
				required
				fullWidth
				autoFocus
				inputProps={{ maxLength: 100 }}
			/>
			<Controller
				name="active"
				control={control}
				render={({ field }) => (
					<FormControlLabel
						control={
							<Switch
								checked={!!field.value}
								onChange={(e) => field.onChange(e.target.checked)}
							/>
						}
						label="Categoria ativa"
					/>
				)}
			/>
		</Stack>
	);
}
