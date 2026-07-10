import AppDialog from "@/Components/Dialog/AppDialog";
import DialogButtonsAction from "@/Components/Dialog/DialogButtons";
import type { Medicamento } from "@/Types/Medicamento";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";

type ViewMedicamentoProps = {
	open: boolean;
	medicamento: Medicamento | null;
	onClose: () => void;
	onEdit: (medicamento: Medicamento) => void;
};

function formatDate(iso: string) {
	return new Date(iso).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
}

export default function ViewMedicamento({
	open,
	medicamento,
	onClose,
}: ViewMedicamentoProps) {
	return (
		<AppDialog
			open={open}
			onClose={onClose}
			title="Detalhes do Medicamento"
			icon={<MedicalServicesIcon />}
			maxWidth="md"
			actions={
				<DialogButtonsAction
					FORM_ID={"medicamento-new-form"}
					handleClose={onClose}
					isSubmitting={false}
					fechar
				/>
			}
		>
			{medicamento && (
				<Stack spacing={2}>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Nome
						</Typography>
						<Typography variant="body1" fontWeight={600} mt={0.3}>
							{medicamento.nome}
						</Typography>
					</Box>
					<Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Código
							</Typography>
							<Typography
								variant="body2"
								sx={{ fontFamily: "monospace" }}
								mt={0.3}
							>
								{medicamento.codigo}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Categoria
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{medicamento.categoria}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Status
							</Typography>
							<Box mt={0.5}>
								<Chip
									label={medicamento.active ? "Ativo" : "Inativo"}
									color={medicamento.active ? "success" : "default"}
									size="small"
								/>
							</Box>
						</Box>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Especificação
						</Typography>
						<Typography variant="body2" mt={0.3}>
							{medicamento.especificacao}
						</Typography>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Descrição
						</Typography>
						<Typography variant="body2" mt={0.3}>
							{medicamento.descricao}
						</Typography>
					</Box>
					<Box sx={{ display: "flex", gap: 3 }}>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Criado em
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{formatDate(medicamento.created_at)}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Atualizado em
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{formatDate(medicamento.updated_at)}
							</Typography>
						</Box>
					</Box>
				</Stack>
			)}
		</AppDialog>
	);
}
