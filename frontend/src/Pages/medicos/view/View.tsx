import type { Medico } from "@/Types/Medico";
import AppDialog from "@/Components/Dialog/AppDialog";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Stack, Typography } from "@mui/material";
import useDialog from "@/Hooks/useDialog";
import { DateFormat } from "@/Utils/dates";

export default function DialogMedico({
	medico,
	open,
	onClose,
	handleClickOpenDialog,
}: {
	medico: Medico;
	open: boolean;
	onClose: () => void;
	handleClickOpenDialog: (data: any) => void;
}) {
	return (
		<AppDialog
			open={open}
			onClose={onClose}
			title="Detalhes do Médico"
			icon={<LocalHospitalIcon />}
			maxWidth="sm"
			actions={
				<>
					<Button onClick={onClose}>Fechar</Button>
					<Button
						variant="outlined"
						startIcon={<EditIcon />}
						onClick={() => handleClickOpenDialog({ m: "edit", s: medico })}
					>
						Editar
					</Button>
				</>
			}
		>
			{medico && (
				<Stack spacing={2}>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Nome
						</Typography>
						<Typography variant="body1" fontWeight={600} mt={0.3}>
							{medico.nome}
						</Typography>
					</Box>
					<Box sx={{ display: "flex", gap: 4 }}>
						<Box>
							<Typography variant="caption" color="text.secondary">
								CRM
							</Typography>
							<Typography
								variant="body2"
								sx={{ fontFamily: "monospace" }}
								mt={0.3}
							>
								{medico.crm}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Telefone
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{medico.telefone ?? "—"}
							</Typography>
						</Box>
					</Box>
					<Box sx={{ display: "flex", gap: 3 }}>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Criado em
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{DateFormat(medico.created_at)}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Atualizado em
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{DateFormat(medico.updated_at)}
							</Typography>
						</Box>
					</Box>
				</Stack>
			)}
		</AppDialog>
	);
}
