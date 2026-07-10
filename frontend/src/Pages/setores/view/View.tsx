import type { Setor } from "@/Types/Setor";
import AppDialog from "@/Components/Dialog/AppDialog";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Stack, Typography } from "@mui/material";
import useDialog from "@/Hooks/useDialog";
import { DateFormat } from "@/Utils/dates";

export default function ViewSetor() {
	const { modal, selected, handleCloseDialog, handleClickOpenDialog } =
		useDialog();

	const setor = selected as Setor | null;
	return (
		<AppDialog
			open={modal === "view"}
			onClose={handleCloseDialog}
			title="Detalhes do Setor"
			icon={<ApartmentIcon />}
			maxWidth="sm"
			actions={
				<>
					<Button onClick={handleCloseDialog}>Fechar</Button>
					<Button
						variant="outlined"
						startIcon={<EditIcon />}
						onClick={() => handleClickOpenDialog({ m: "edit", s: setor })}
					>
						Editar
					</Button>
				</>
			}
		>
			{setor && (
				<Stack spacing={2}>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Nome
						</Typography>
						<Typography variant="body1" fontWeight={600} mt={0.3}>
							{setor.nome}
						</Typography>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Nome Vísivel
						</Typography>
						<Typography variant="body1" fontWeight={600} mt={0.3}>
							{setor.nomeVisivel}
						</Typography>
					</Box>
					<Box sx={{ display: "flex", gap: 3 }}>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Criado em
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{DateFormat(setor.created_at)}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Atualizado em
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{DateFormat(setor.updated_at)}
							</Typography>
						</Box>
					</Box>
				</Stack>
			)}
		</AppDialog>
	);
}
