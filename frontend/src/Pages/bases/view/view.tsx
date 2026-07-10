import type { Base } from "@/Types/Base";
import AppDialog from "@/Components/Dialog/AppDialog";
import BusinessIcon from "@mui/icons-material/Business";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Stack, Typography } from "@mui/material";
import useDialog from "@/Hooks/useDialog";
import { DateFormat } from "@/Utils/dates";

export default function ViewBase() {
	const { modal, selected, handleCloseDialog, handleClickOpenDialog } =
		useDialog();

	const base = selected as Base | null;

	return (
		<AppDialog
			open={modal === "view"}
			onClose={handleCloseDialog}
			title="Detalhes da Base"
			icon={<BusinessIcon />}
			maxWidth="xs"
			actions={
				<>
					<Button onClick={handleCloseDialog}>Fechar</Button>
					<Button
						variant="outlined"
						startIcon={<EditIcon />}
						onClick={() => handleClickOpenDialog({ m: "edit", s: base })}
					>
						Editar
					</Button>
				</>
			}
		>
			{base && (
				<Stack spacing={2}>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Nome
						</Typography>
						<Typography variant="body1" fontWeight={600} mt={0.3}>
							{base.nome}
						</Typography>
					</Box>
					<Box sx={{ display: "flex", gap: 3 }}>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Criado em
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{DateFormat(base.created_at)}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Atualizado em
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{DateFormat(base.updated_at)}
							</Typography>
						</Box>
					</Box>
				</Stack>
			)}
		</AppDialog>
	);
}
