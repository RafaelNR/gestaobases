import { useDeleteMedico } from "@/Hooks/useMedicos";
import type { Medico } from "@/Types/Medico";
import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import AppDialog from "@/Components/Dialog/AppDialog";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Stack, Typography } from "@mui/material";
import NewMedico from "./new";
import EditMedico from "./edit";
import useDialog from "@/Hooks/useDialog";

function formatDate(iso: string) {
	return new Date(iso).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
}

export default function DialogMedico() {
	const deleteMutation = useDeleteMedico();
	const { modal, selected, handleCloseDialog, handleClickOpenDialog } = useDialog();

	const handleDelete = async () => {
		if (!selected) return;
		await deleteMutation.mutateAsync(selected.id);
		handleCloseDialog();
	};

	switch (modal) {
		case "create":
			return <NewMedico open={modal === "create"} onClose={handleCloseDialog} />;
		case "edit":
			return (
				<EditMedico
					open={modal === "edit"}
					onClose={handleCloseDialog}
					medico={selected as Medico}
				/>
			);
		case "view": {
			const medico = selected as Medico | null;
			return (
				<AppDialog
					open={modal === "view"}
					onClose={handleCloseDialog}
					title="Detalhes do Médico"
					icon={<LocalHospitalIcon />}
					maxWidth="sm"
					actions={
						<>
							<Button onClick={handleCloseDialog}>Fechar</Button>
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
							<Box>
								<Typography variant="caption" color="text.secondary">
									E-mail
								</Typography>
								<Typography variant="body2" mt={0.3}>
									{medico.email ?? "—"}
								</Typography>
							</Box>
							<Box sx={{ display: "flex", gap: 3 }}>
								<Box>
									<Typography variant="caption" color="text.secondary">
										Criado em
									</Typography>
									<Typography variant="body2" mt={0.3}>
										{formatDate(medico.created_at)}
									</Typography>
								</Box>
								<Box>
									<Typography variant="caption" color="text.secondary">
										Atualizado em
									</Typography>
									<Typography variant="body2" mt={0.3}>
										{formatDate(medico.updated_at)}
									</Typography>
								</Box>
							</Box>
						</Stack>
					)}
				</AppDialog>
			);
		}
		case "delete":
			return (
				<ConfirmDeleteDialog
					open={modal === "delete"}
					onClose={handleCloseDialog}
					onConfirm={handleDelete}
					title="Excluir Médico"
					entityName={(selected as Medico | null)?.nome}
					isPending={deleteMutation.isPending}
					message={
						<>
							Tem certeza que deseja excluir o médico{" "}
							<strong>{(selected as Medico | null)?.nome}</strong>? Médicos com receituários
							vinculados não poderão ser excluídos.
						</>
					}
				/>
			);
	}
}
