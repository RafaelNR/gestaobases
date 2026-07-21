import SearchIcon from "@mui/icons-material/Search";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import { Button, Grid, MenuItem, Paper, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import dayjs from "dayjs";
import DataPickController from "@/Components/DatePick/DatePickController";
import AutocompleteBaseController from "@/Components/Autocomplete/AutoCompleteBasesController";
import TextFieldController from "@/Components/TextField/TextFieldController";
import { validadeOptions } from "@/Components/Chip/ChipStatusValidade";
import type { RelatorioEstoqueFiltro } from "@/Types/Relatorios";

type FormValues = RelatorioEstoqueFiltro & { baseId: string };

function dateValue(value: unknown) {
	if (!value) return undefined;
	const parsed = dayjs(value as string);
	return parsed.isValid() ? parsed.format("YYYY-MM-DD") : undefined;
}

export default function FiltroRelatorioEstoque({
	onChange,
	value,
}: {
	onChange: (value: RelatorioEstoqueFiltro) => void;
	value: RelatorioEstoqueFiltro;
}) {
	const methods = useForm<FormValues>({
		defaultValues: { ...value, baseId: value.baseId ?? "" },
	});

	const submit = (values: FormValues) =>
		onChange({
			baseId: values.baseId,
			page: 1,
			limit: values.limit ?? 20,
			dataInicial: dateValue(values.dataInicial),
			dataFinal: dateValue(values.dataFinal),
			tipo: values.tipo || undefined,
			itemTipo: values.itemTipo || undefined,
			search: values.search?.trim() || undefined,
			validade: values.validade || undefined,
		});

	const clear = () => {
		methods.reset({ baseId: "", page: 1, limit: 20 });
		onChange({});
	};

	return (
		<Paper component="form" onSubmit={methods.handleSubmit(submit)} sx={{ p: 2 }}>
			<FormProvider {...methods}>
				<Stack spacing={1.5}>
					<Typography variant="subtitle2" fontWeight={700}>Filtros</Typography>
					<Grid container spacing={1.5}>
						<Grid size={{ xs: 12, md: 6, lg: 3 }}>
							<AutocompleteBaseController keyName="baseId" label="Base obrigatória" allBases />
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}><DataPickController name="dataInicial" label="Data inicial" fullWidth /></Grid>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}><DataPickController name="dataFinal" label="Data final" fullWidth /></Grid>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}>
							<TextFieldController name="tipo" label="Tipo" select>
								<MenuItem value="">Todos</MenuItem>
								{["Entrada", "Saida", "AjusteEntrada", "AjusteSaida", "Perda", "Vencimento", "TransferenciaEntrada", "TransferenciaSaida", "Devolucao", "Desabilitado"].map((tipo) => <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>)}
							</TextFieldController>
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}>
							<TextFieldController name="itemTipo" label="Item" select>
								<MenuItem value="">Todos</MenuItem><MenuItem value="produto">Produtos</MenuItem><MenuItem value="medicamento">Medicamentos</MenuItem>
							</TextFieldController>
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 3 }}><TextFieldController name="search" label="Buscar item ou código" /></Grid>
						<Grid size={{ xs: 12, md: 6, lg: 3 }}>
							<TextFieldController name="validade" label="Validade" select>
								<MenuItem value="">Todas</MenuItem>{validadeOptions.map((option) => <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>)}
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
