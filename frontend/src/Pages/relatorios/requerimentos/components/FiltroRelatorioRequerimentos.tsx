import SearchIcon from "@mui/icons-material/Search";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { Button, Grid, MenuItem, Paper, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import dayjs from "dayjs";
import DataPickController from "@/Components/DatePick/DatePickController";
import SelectBasesController from "@/Components/Select/SelectBasesController";
import SelectAmbulanciasController from "@/Components/Select/SelectAmbulanciasController";
import TextFieldController from "@/Components/TextField/TextFieldController";
import type {
	RelatorioGeralRequerimentosFiltro,
} from "@/Types/Relatorios";
import type { TipoRequerimento } from "@/Types/Requerimento";

type FormValues = RelatorioGeralRequerimentosFiltro;

function dateValue(value: unknown): string | undefined {
	if (!value) return undefined;
	const parsed = dayjs(value as string);
	return parsed.isValid() ? parsed.format("YYYY-MM-DD") : undefined;
}

export default function FiltroRelatorioRequerimentos({
	onChange,
}: {
	onChange: (filtro: RelatorioGeralRequerimentosFiltro) => void;
}) {
	const methods = useForm<FormValues>({
		defaultValues: { base: "", ambulanciaId: "", tipo: undefined },
	});

	const submit = (values: FormValues) => {
		onChange({
			base: values.base || undefined,
			ambulanciaId: values.ambulanciaId || undefined,
			tipo: values.tipo || undefined,
			dataInicial: dateValue(values.dataInicial),
			dataFinal: dateValue(values.dataFinal),
		});
	};

	const clear = () => {
		methods.reset({ base: "", ambulanciaId: "", tipo: undefined });
		onChange({});
	};

	return (
		<Paper component="form" onSubmit={methods.handleSubmit(submit)} sx={{ p: 2, mb: 2 }}>
			<FormProvider {...methods}>
				<Stack spacing={1.5}>
					<Typography variant="subtitle2" fontWeight={700}>Filtros</Typography>
					<Grid container spacing={1.5}>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}><DataPickController name="dataInicial" label="Data inicial" fullWidth /></Grid>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}><DataPickController name="dataFinal" label="Data final" fullWidth /></Grid>
						<Grid size={{ xs: 12, md: 6, lg: 3 }}><SelectBasesController name="base" keyValue="nome" required={false} /></Grid>
						<Grid size={{ xs: 12, md: 6, lg: 3 }}><SelectAmbulanciasController name="ambulanciaId" required={false} /></Grid>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}>
							<TextFieldController name="tipo" label="Tipo" select>
								<MenuItem value=""><em>Todos</em></MenuItem>
								<MenuItem value={"Almoxarifado" satisfies TipoRequerimento}>Almoxarifado</MenuItem>
								<MenuItem value={"Farmacia" satisfies TipoRequerimento}>Farmácia</MenuItem>
								<MenuItem value={"CME" satisfies TipoRequerimento}>CME</MenuItem>
							</TextFieldController>
						</Grid>
					</Grid>
					<Stack direction="row" spacing={1} justifyContent="flex-end">
						<Button type="button" variant="outlined" startIcon={<FilterAltOffIcon />} onClick={clear}>Limpar</Button>
						<Button type="submit" variant="contained" startIcon={<SearchIcon />}>Filtrar</Button>
					</Stack>
				</Stack>
			</FormProvider>
		</Paper>
	);
}
