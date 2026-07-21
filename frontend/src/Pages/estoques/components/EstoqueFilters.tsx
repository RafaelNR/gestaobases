import { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
} from "@mui/material";
import AutocompleteBaseController from "@/Components/Autocomplete/AutoCompleteBasesController";
import type { StatusValidadeEstoque } from "@/Types/Estoque";
import { validadeOptions } from "./ValidadeChip";
import { usePermissions } from "@/Hooks/usePermissions";
import { ESTOQUES_PERMISSIONS } from "@/Guard/PermissionGroups";

export type EstoqueFiltersValue = {
	search: string;
	tipo: "" | "produto" | "medicamento";
	status: "" | StatusValidadeEstoque;
	baseId: string;
};

export default function EstoqueFilters({
	value,
	onChange,
}: {
	value: EstoqueFiltersValue;
	onChange: (value: EstoqueFiltersValue) => void;
}) {
	const { can } = usePermissions();
	const methods = useForm<EstoqueFiltersValue>({ defaultValues: value });

	useEffect(() => {
		methods.reset(value);
	}, [methods, value]);

	const clear = () => {
		const empty: EstoqueFiltersValue = {
			search: "",
			tipo: "",
			status: "",
			baseId: "",
		};
		methods.reset(empty);
		onChange(empty);
	};

	return (
		<FormProvider {...methods}>
			<Stack
				component="form"
				onSubmit={methods.handleSubmit(onChange)}
				direction={{ xs: "column", md: "row" }}
				gap={1}
				alignItems={{ md: "center" }}
			>
				<Controller
					name="search"
					control={methods.control}
					render={({ field }) => (
						<TextField
							{...field}
							size="small"
							label="Buscar produto ou medicamento"
							sx={{ minWidth: { md: 280 } }}
						/>
					)}
				/>
				<Controller
					name="tipo"
					control={methods.control}
					render={({ field }) => (
						<FormControl size="small" sx={{ minWidth: 130 }}>
							<InputLabel>Tipo</InputLabel>
							<Select {...field} label="Tipo">
								<MenuItem value="">Todos</MenuItem>
								<MenuItem value="produto">Produtos</MenuItem>
								<MenuItem value="medicamento">Medicamentos</MenuItem>
							</Select>
						</FormControl>
					)}
				/>
				<Controller
					name="status"
					control={methods.control}
					render={({ field }) => (
						<FormControl size="small" sx={{ minWidth: 170 }}>
							<InputLabel>Validade</InputLabel>
							<Select {...field} label="Validade">
								<MenuItem value="">Todas</MenuItem>
								{validadeOptions.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					)}
				/>
				{can(ESTOQUES_PERMISSIONS.BASES) && (
					<AutocompleteBaseController
						keyName="baseId"
						label="Base"
						allBases
						sx={{ minWidth: { md: 190 } }}
					/>
				)}
				<Stack direction="row" gap={1}>
					<Button type="submit" variant="contained">
						Filtrar
					</Button>
					<Button type="button" variant="outlined" onClick={clear}>
						Limpar
					</Button>
				</Stack>
			</Stack>
		</FormProvider>
	);
}
