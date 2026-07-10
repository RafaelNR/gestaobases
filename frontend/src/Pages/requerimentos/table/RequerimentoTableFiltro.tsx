import SearchIcon from "@mui/icons-material/Search";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import {
	Box,
	Button,
	Grid,
	MenuItem,
	Paper,
	Select,
	Stack,
	Typography,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import AutocompleteAmbulanciaController from "@/Components/Autocomplete/AutoCompleteAmbulanciasController";
import AutocompleteBaseController from "@/Components/Autocomplete/AutoCompleteBasesController";
import AutocompleteFacilitadorController from "@/Components/Autocomplete/AutoCompleteFacilitadorController";
import DataPickController from "@/Components/DatePick/DatePickController";
import type {
	FiltroRequerimentos,
	RequerimentoStatus,
	TipoRequerimento,
} from "@/Types/Requerimento";
import { STATUS_REQUERIMENTO_LABELS } from "@/Types/Requerimento";
import {
	cleanRequerimentoFiltro,
	type RequerimentoFiltroFormValues,
} from "./RequerimentoTableFiltro.helpers";
import SelectStatusController from "@/Components/Select/SelectStatusController";
import TextFieldController from "@/Components/TextField/TextFieldController";

type Props = {
	tipo: TipoRequerimento;
	onFilterChange: (filtro: FiltroRequerimentos) => void;
};

const DEFAULT_FILTER_VALUES: RequerimentoFiltroFormValues = {
	status: "",
	base: "",
	userId: "",
	ambulanciaId: "",
	data_inicial: "",
	data_final: "",
	numero: undefined,
};

const STATUS_OPTIONS = Object.entries(STATUS_REQUERIMENTO_LABELS).map(
	([value, label]) => ({
		value: value as RequerimentoStatus,
		label,
	}),
);

export default function RequerimentoTableFiltro({
	tipo,
	onFilterChange,
}: Props) {
	const methods = useForm<RequerimentoFiltroFormValues>({
		defaultValues: DEFAULT_FILTER_VALUES,
	});

	const submitFiltro = (values: RequerimentoFiltroFormValues) => {
		onFilterChange(cleanRequerimentoFiltro(values));
	};

	const clearFiltro = () => {
		methods.reset(DEFAULT_FILTER_VALUES);
		onFilterChange({});
	};

	return (
		<Paper
			component="form"
			elevation={0}
			onSubmit={methods.handleSubmit(submitFiltro)}
			sx={{
				width: "100%",
				p: 2,
				border: "1px solid",
				borderColor: "divider",
				borderRadius: 2,
			}}
		>
			<FormProvider {...methods}>
				<Stack spacing={1.5}>
					<Typography variant="subtitle2" fontWeight={700}>
						Filtros
					</Typography>

					<Grid container spacing={1.5}>
						<Grid size={{ xs: 12, md: 6, lg: 1 }}>
							<TextFieldController name="numero" label="Número" size="small" />
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 1 }}>
							<SelectStatusController />
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}>
							<AutocompleteBaseController />
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}>
							<AutocompleteFacilitadorController />
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}>
							<AutocompleteAmbulanciaController />
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}>
							<DataPickController
								name="data_inicial"
								label="Data inicial"
								fullWidth
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 6, lg: 2 }}>
							<DataPickController
								name="data_final"
								label="Data final"
								fullWidth
							/>
						</Grid>
					</Grid>

					<Stack direction="row" spacing={1} justifyContent="flex-end">
						<Button
							type="button"
							variant="outlined"
							startIcon={<FilterAltOffIcon />}
							onClick={clearFiltro}
						>
							Limpar
						</Button>
						<Button
							type="submit"
							variant="contained"
							startIcon={<SearchIcon />}
						>
							Filtrar
						</Button>
					</Stack>
				</Stack>
			</FormProvider>
		</Paper>
	);
}
