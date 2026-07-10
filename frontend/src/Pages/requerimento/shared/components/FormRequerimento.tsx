import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

import type { TipoRequerimento } from "@/Types/Requerimento";
import FormInput from "@/Components/TextField/TextFieldController";
import SelectSetoresController from "@/Components/Select/SelectSetoresController";
import SelectBasesController from "@/Components/Select/SelectBasesController";
import { usePermissions } from "@/Hooks/usePermissions";
import useAuth from "@/Hooks/useAuth";
import SelectAmbulanciasByBaseController from "@/Components/Select/SelectAmbulanciasByBaseController";

interface FormRequerimentoProps {
	tipo: TipoRequerimento;
}

type RequerenteInfoProps = {
	label: string;
	value?: string | null;
};

function RequerenteInfo({ label, value }: RequerenteInfoProps) {
	return (
		<Box
			sx={{
				borderLeft: 3,
				borderColor: "primary.main",
				pl: 1.25,
			}}
		>
			<Typography
				variant="caption"
				color="text.secondary"
				sx={{ display: "block", lineHeight: 1.2 }}
			>
				{label}
			</Typography>
			<Typography variant="body2" fontWeight={600}>
				{value?.trim() || "Não informado"}
			</Typography>
		</Box>
	);
}

export default function FormRequerimento({ tipo }: FormRequerimentoProps) {
	const { can } = usePermissions();
	const { user } = useAuth();
	const canSelectSetor = can("requerimentos:open:setores");
	const canSelectBase = can("requerimentos:open:bases");
	const nomeRequerente = user?.nome;
	const setorRequerente = user?.Setor?.nomeVisivel ?? user?.Setor?.nome;
	const baseRequerente = user?.Base?.nome;

	return (
		<Paper
			variant="outlined"
			sx={{
				mb: 2,
				overflow: "hidden",
				borderColor: "divider",
			}}
		>
			<Grid container>
				<Grid
					size={{ xs: 12, md: 4, lg: 3 }}
					sx={{
						bgcolor: "action.hover",
						borderRight: { xs: 0, md: 1 },
						borderBottom: { xs: 1, md: 0 },
						borderColor: "divider",
						p: 2,
					}}
				>
					<Stack spacing={1.75}>
						<Box>
							<Typography variant="overline" color="text.secondary">
								Abertura
							</Typography>
							<Typography variant="subtitle1" fontWeight={700}>
								Quem está abrindo
							</Typography>
						</Box>

						<RequerenteInfo label="Requerente" value={nomeRequerente} />

						{!canSelectSetor && (
							<RequerenteInfo label="Setor" value={setorRequerente} />
						)}

						{!canSelectBase && (
							<RequerenteInfo label="Base" value={baseRequerente} />
						)}

						{(canSelectSetor || canSelectBase) && (
							<Stack spacing={1.25} sx={{ pt: 0.5 }}>
								{canSelectSetor && (
									<SelectSetoresController name="setor" required />
								)}
								{canSelectBase && (
									<SelectBasesController name="base" keyValue="nome" required />
								)}
							</Stack>
						)}
					</Stack>
				</Grid>

				<Grid size={{ xs: 12, md: 8, lg: 9 }} sx={{ p: 2 }}>
					<Stack spacing={1.5}>
						<Box>
							<Typography variant="overline" color="text.secondary">
								Solicitação
							</Typography>
							<Typography variant="subtitle1" fontWeight={700}>
								Dados do pedido
							</Typography>
						</Box>

						{tipo === "Farmacia" && user?.baseId && (
							<Box sx={{ maxWidth: { xs: "100%", md: 420 } }}>
								<SelectAmbulanciasByBaseController
									name="ambulancia"
									required
									sx={{ mb: 0 }}
								/>
							</Box>
						)}

						<FormInput
							name="obs"
							label="Observações adicionais do pedido"
							fullWidth
							autoFocus
							multiline
							rows={tipo === "Farmacia" ? 4 : 5}
							maxRows={8}
						/>
					</Stack>
				</Grid>
			</Grid>
		</Paper>
	);
}
