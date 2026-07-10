import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import {
	Autocomplete,
	Button,
	Chip,
	Divider,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteIcon from "@mui/icons-material/Delete";

import MyFormProvider from "@/Components/Form/FormProvider";
import AppDialog from "@/Components/Dialog/AppDialog";
import useSnackBar from "@/Hooks/useSnackBar";
import { useCreateReceituario } from "@/Hooks/useReceituarios";
import { useGetMedicamentos } from "@/Hooks/useMedicamentos";
import { useGetMedicos } from "@/Hooks/useMedicos";
import { useGetBases } from "@/Hooks/useBases";
import { useGetAmbulancias } from "@/Hooks/useAmbulancias";
import type { Medicamento } from "@/Types/Medicamento";
import type { TipoAdministracao, TipoDiluente, UnidadeMedicamento, ReceituarioSchemaInput } from "@/Types/Receituario";
import { ADMINISTRACAO_LABELS, DILUENTE_LABELS, UNIDADE_LABELS } from "@/Types/Receituario";
import Form from "../components/Form";
import { receituarioSchema } from "@/Schemas/Receituario.schemas";


const FORM_ID = "receituario-new-form";

const ADMINISTRACAO_OPTIONS: TipoAdministracao[] = ["EV", "IM", "SC", "IN", "IR", "IO"];
const UNIDADE_OPTIONS: UnidadeMedicamento[] = ["ampolas", "ml"];
const DILUENTE_OPTIONS: TipoDiluente[] = ["agua_destilada", "nacl09"];

const emptyMedForm = {
	medicamento: null as Medicamento | null,
	qnt: 1,
	unidade: "ampolas" as UnidadeMedicamento,
	administracao: "EV" as TipoAdministracao,
	diluente: "" as TipoDiluente | "",
	qnt_diluente: "",
	qnt_tempo: "",
	obs: "",
};

export default function NewReceituario({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const { handleSnackBar } = useSnackBar();
	const { mutateAsync } = useCreateReceituario();
	const { data: medicamentos = [] } = useGetMedicamentos();
	const { data: medicos = [] } = useGetMedicos();
	const { data: bases = [] } = useGetBases();
	const { data: ambulancias = [] } = useGetAmbulancias();

	const [medForm, setMedForm] = useState({ ...emptyMedForm });
	const [pendingMeds, setPendingMeds] = useState<any[]>([]);

	const methods = useForm<ReceituarioSchemaInput>({
		resolver: zodResolver(receituarioSchema),
		defaultValues: {
			data: "",
			data_ocorrencia: "",
			ocorrencia: "",
			medico: "",
			base: "",
			ambulancia: "",
			requerimento: "",
			obs: "",
		},
	});
	const { handleSubmit, reset, formState: { isSubmitting } } = methods;

	function addPending() {
		if (!medForm.medicamento || medForm.qnt < 1) return;
		setPendingMeds((prev) => [
			...prev,
			{
				medicamento: medForm.medicamento!.id,
				_nome: medForm.medicamento!.nome,
				qnt: medForm.qnt,
				unidade: medForm.unidade,
				administracao: medForm.administracao,
				diluente: medForm.diluente || undefined,
				qnt_diluente: medForm.qnt_diluente ? Number(medForm.qnt_diluente) : undefined,
				qnt_tempo: medForm.qnt_tempo ? Number(medForm.qnt_tempo) : undefined,
				obs: medForm.obs || undefined,
			},
		]);
		setMedForm({ ...emptyMedForm });
	}

	const onSubmit: SubmitHandler<ReceituarioSchemaInput> = useCallback(
		async (values) => {
			await mutateAsync({
				...values,
				ocorrencia: Number(values.ocorrencia),
				requerimento: values.requerimento || undefined,
				obs: values.obs || undefined,
				data_ocorrencia: values.data_ocorrencia || undefined,
				medicamentos: pendingMeds.map(({ _nome: _, ...rest }) => rest),
			});
			reset();
			setPendingMeds([]);
			setMedForm({ ...emptyMedForm });
			onClose();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[pendingMeds],
	);

	const onError: SubmitErrorHandler<ReceituarioSchemaInput> = useCallback(() => {
		handleSnackBar({ type: "error", message: "Preencha os campos obrigatórios." });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClose = () => {
		reset();
		setPendingMeds([]);
		setMedForm({ ...emptyMedForm });
		onClose();
	};

	return (
		<AppDialog
			open={open}
			onClose={handleClose}
			title="Novo Receituário"
			icon={<AssignmentIcon />}
			maxWidth="md"
			actions={
				<>
					<Button onClick={handleClose} disabled={isSubmitting}>
						Cancelar
					</Button>
					<LoadingButton
						type="submit"
						form={FORM_ID}
						variant="contained"
						loading={isSubmitting}
						startIcon={<SaveIcon />}
					>
						Salvar
					</LoadingButton>
				</>
			}
		>
			<MyFormProvider
				id={FORM_ID}
				methods={methods}
				isSubmitting={isSubmitting}
				onSubmit={handleSubmit(onSubmit, onError)}
				Form={
					<Stack spacing={2}>
						<Form medicos={medicos as any[]} bases={bases as any[]} ambulancias={ambulancias as any[]} />

						<Divider />
						<Typography variant="subtitle2">Medicamentos</Typography>

						{/* Med Form */}
						<Stack spacing={1.5}>
							<Autocomplete
								options={medicamentos as Medicamento[]}
								getOptionLabel={(o) => `${o.nome} (${o.codigo})`}
								value={medForm.medicamento}
								onChange={(_, v) => setMedForm((f) => ({ ...f, medicamento: v }))}
								renderInput={(params) => (
									<TextField {...params} label="Medicamento" size="small" />
								)}
							/>
							<Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
								<TextField
									label="Qtd"
									type="number"
									size="small"
									sx={{ width: 80 }}
									value={medForm.qnt}
									onChange={(e) =>
										setMedForm((f) => ({ ...f, qnt: Math.max(1, Number(e.target.value)) }))
									}
								/>
								<FormControl size="small" sx={{ width: 120 }}>
									<InputLabel>Unidade</InputLabel>
									<Select
										value={medForm.unidade}
										label="Unidade"
										onChange={(e) =>
											setMedForm((f) => ({ ...f, unidade: e.target.value as UnidadeMedicamento }))
										}
									>
										{UNIDADE_OPTIONS.map((u) => (
											<MenuItem key={u} value={u}>
												{UNIDADE_LABELS[u]}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<FormControl size="small" sx={{ width: 100 }}>
									<InputLabel>Via</InputLabel>
									<Select
										value={medForm.administracao}
										label="Via"
										onChange={(e) =>
											setMedForm((f) => ({
												...f,
												administracao: e.target.value as TipoAdministracao,
											}))
										}
									>
										{ADMINISTRACAO_OPTIONS.map((a) => (
											<MenuItem key={a} value={a}>
												{ADMINISTRACAO_LABELS[a]}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								<FormControl size="small" sx={{ width: 150 }}>
									<InputLabel>Diluente</InputLabel>
									<Select
										value={medForm.diluente}
										label="Diluente"
										onChange={(e) =>
											setMedForm((f) => ({
												...f,
												diluente: e.target.value as TipoDiluente | "",
											}))
										}
									>
										<MenuItem value="">Nenhum</MenuItem>
										{DILUENTE_OPTIONS.map((d) => (
											<MenuItem key={d} value={d}>
												{DILUENTE_LABELS[d]}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								{medForm.diluente && (
									<TextField
										label="Volume (ml)"
										type="number"
										size="small"
										sx={{ width: 110 }}
										value={medForm.qnt_diluente}
										onChange={(e) =>
											setMedForm((f) => ({ ...f, qnt_diluente: e.target.value }))
										}
									/>
								)}
								<TextField
									label="Tempo (min)"
									type="number"
									size="small"
									sx={{ width: 110 }}
									value={medForm.qnt_tempo}
									onChange={(e) =>
										setMedForm((f) => ({ ...f, qnt_tempo: e.target.value }))
									}
								/>
							</Stack>
							<TextField
								label="Obs do medicamento"
								size="small"
								fullWidth
								value={medForm.obs}
								onChange={(e) => setMedForm((f) => ({ ...f, obs: e.target.value }))}
							/>
							<Button
								variant="outlined"
								size="small"
								onClick={addPending}
								disabled={!medForm.medicamento}
								sx={{ alignSelf: "flex-start" }}
							>
								+ Adicionar Medicamento
							</Button>
						</Stack>

						{/* Pending meds list */}
						{pendingMeds.length > 0 && (
							<Stack spacing={1}>
								<Typography variant="caption" color="text.secondary">
									{pendingMeds.length} medicamento(s) adicionado(s)
								</Typography>
								{pendingMeds.map((m, i) => (
									<Chip
										key={i}
										label={`${m._nome} — ${m.qnt} ${m.unidade} | ${ADMINISTRACAO_LABELS[m.administracao as TipoAdministracao] ?? m.administracao}`}
										onDelete={() =>
											setPendingMeds((prev) => prev.filter((_, j) => j !== i))
										}
										deleteIcon={
											<Tooltip title="Remover">
												<DeleteIcon />
											</Tooltip>
										}
										sx={{ justifyContent: "space-between", height: "auto", py: 0.5 }}
									/>
								))}
							</Stack>
						)}
					</Stack>
				}
			/>
		</AppDialog>
	);
}
