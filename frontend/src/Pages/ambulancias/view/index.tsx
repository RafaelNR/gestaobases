import AppDialog from "@/Components/Dialog/AppDialog";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Stack, Typography } from "@mui/material";
import useDialog from "@/Hooks/useDialog";
import { Ambulancia } from "@/Types/Ambulancia";
import { DateFormat } from "@/Utils/dates";

export default function ViewAmbulancia() {
	const {
		modal,
		selected: ambulancia,
		handleCloseDialog,
		handleClickOpenDialog,
	} = useDialog();

	const amb = ambulancia as Ambulancia;

	return (
		<AppDialog
			open={modal === "view"}
			onClose={handleCloseDialog}
			title="Detalhes da Ambulância"
			icon={<DirectionsCarIcon />}
			maxWidth="sm"
			actions={
				<>
					<Button onClick={handleCloseDialog}>Fechar</Button>
					<Button
						variant="outlined"
						startIcon={<EditIcon />}
						onClick={() => handleClickOpenDialog({ m: "edit", s: amb })}
					>
						Editar
					</Button>
				</>
			}
		>
			{amb && (
				<Stack spacing={2}>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Nome
						</Typography>
						<Typography variant="body1" fontWeight={600} mt={0.3}>
							{amb.nome}
						</Typography>
					</Box>
					<Box sx={{ display: "flex", gap: 4 }}>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Tipo
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{amb.tipo}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Base
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{amb.Base?.nome}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Usuário
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{amb.User?.nome}
							</Typography>
						</Box>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Criado em
						</Typography>
						<Typography variant="body2" mt={0.3}>
							{DateFormat(amb.created_at)}
						</Typography>
					</Box>
				</Stack>
			)}
		</AppDialog>
	);
}
