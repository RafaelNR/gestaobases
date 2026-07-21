import { ArrowBack, Edit } from "@mui/icons-material";
import {
	Box,
	Button,
	ButtonGroup,
	CircularProgress,
	Stack,
	Typography,
} from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useAuth from "@/Hooks/useAuth";
import { useGetRequerimento } from "@/Hooks/useRequerimentos";
import { getTipoFromRouteParam } from "../shared/routeTipo";
import { usePermissions } from "@/Hooks/usePermissions";
import { useEffect, useMemo } from "react";
import RequerimentoViewPage from "./RequerimentoView";
import RequerimentoItens from "./RequerimentoItens";
import Header from "./components/Header";

export default function Index() {
	const navigate = useNavigate();
	const { tipo: tipoParam, requerimentoId } = useParams();
	const { user } = useAuth();
	const tipo = getTipoFromRouteParam(tipoParam);
	const { data: requerimento, isLoading } = useGetRequerimento(
		tipo ?? "Almoxarifado",
		requerimentoId,
	);
	const { can } = usePermissions();

	useEffect(() => {
		if (user && requerimento) {
			if (can("requerimentos:view:any")) {
				return;
			}

			if (
				(can("requerimentos:view:base") &&
					user?.Base.nome === requerimento.base) ||
				(can("requerimentos:view:setor") &&
					user.Setor.nome === requerimento.setor)
			) {
				return;
			}

			navigate("/requerimentos");
		}
	}, [user, requerimento, can, navigate]);

	if (isLoading) {
		return (
			<Box display="flex" justifyContent="center" py={6}>
				<CircularProgress />
			</Box>
		);
	}

	if (!requerimento) {
		return (
			<Stack
				direction={{ xs: "column", sm: "column" }}
				spacing={1}
				width={{ xs: "100%", sm: "auto" }}
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				<Typography
					color="text.secondary"
					component="h4"
					fontWeight="bold"
					textAlign="center" /*  */
				>
					Requerimento não encontrado ou sem permissão de acesso.
				</Typography>
				<Button
					variant="outlined"
					startIcon={<ArrowBack />}
					onClick={() => navigate(`/requerimentos/gestao/${tipoParam}`)}
					sx={{ width: 200 }}
				>
					Voltar
				</Button>
			</Stack>
		);
	}

	return (
		<Box sx={{ p: 2 }}>
			<Stack spacing={2.5}>
				<Header requerimento={requerimento} tipo={tipo} />

				<RequerimentoViewPage requerimento={requerimento} />
				<RequerimentoItens requerimento={requerimento} tipo={tipo} />
			</Stack>
		</Box>
	);
}
