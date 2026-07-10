import { useCallback } from "react";
import {
	Box,
	Typography,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	CircularProgress,
} from "@mui/material";
import MyCard from "@/Components/Card/Card";
import { requerimentosService } from "@/Service/Requerimentos.service";
import useSnackBar from "@/Hooks/useSnackBar";
import { useQuery } from "@tanstack/react-query";
import { DateFormat } from "@/Utils/dates";
import LinearPrevisao from "@/Components/Linear/LinearPrevisao";
import { Requerimento } from "@/Types/Requerimentos";
import { StatusRequerimento } from "@/Types/StatusRequerimento";
import ChipStatusRequerimento from "@/Components/Chip/ChipStatusRequerimento";
import { Link } from "react-router-dom";

export default function DashboardManifestacoes() {
	const { handleSnackBarError } = useSnackBar();

	const getRequerimentosNovos = useCallback(async () => {
		try {
			const Dados = await requerimentosService.getRequerimentosFilter<
				Requerimento[]
			>({
				status: StatusRequerimento.Recebida,
			});

			if (Dados) {
				return Dados;
			}

			throw new Error("Erro em carregar requerimentos.");
		} catch (error) {
			console.log(error);
			handleSnackBarError(error, "Erro em carregar requerimentos");
		}
		//eslint-disable-next-line
	}, []);

	const { data: requerimentos, isLoading } = useQuery({
		queryKey: [`dash-requerimentos-novos`],
		queryFn: () => getRequerimentosNovos(),
	});

	return (
		<>
			<MyCard
				sx={{
					borderRadius: 2,
					boxShadow: 3,
					overflowX: "auto",
					height: "500px",
				}}
				titulo="Novos Requerimentos"
			>
				{!isLoading && (!requerimentos || requerimentos.length === 0) && (
					<Box textAlign="center" p={2}>
						<Typography variant="body2" color="textSecondary">
							Nenhuma manifestação nova encontrada.
						</Typography>
					</Box>
				)}
				{isLoading ? (
					<CircularProgress />
				) : (
					requerimentos &&
					requerimentos.length > 0 && (
						<Table sx={{}}>
							<TableHead>
								<TableRow>
									<TableCell sx={{ fontWeight: "bold" }}>Protocolo</TableCell>
									<TableCell sx={{ fontWeight: "bold" }} align="center">
										Tipo
									</TableCell>
									<TableCell sx={{ fontWeight: "bold" }} align="center">
										Previsão Resposta
									</TableCell>
									<TableCell sx={{ fontWeight: "bold" }} align="center">
										Requerente
									</TableCell>
									<TableCell sx={{ fontWeight: "bold" }} align="center">
										Paciente
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{requerimentos &&
									requerimentos.length > 0 &&
									requerimentos.map((m) => (
										<TableRow
											key={m.uuid}
											hover
											component={Link}
											to={`/requerimentos/view/${m.uuid}`}
										>
											<TableCell>{m.protocolo}</TableCell>
											<TableCell align="center">
												<ChipStatusRequerimento status={m.status} />
											</TableCell>
											<TableCell align="center">
												<LinearPrevisao
													created_at={m.created_at}
													previsao={m.previsao_resposta as unknown as string}
												/>
											</TableCell>

											<TableCell align="center">{m.requerente}</TableCell>
											<TableCell align="center">{m.paciente}</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					)
				)}
			</MyCard>
		</>
	);
}
