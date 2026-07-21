import PersonIcon from "@mui/icons-material/Person";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

import AppDialog from "@/Components/Dialog/AppDialog";
import ChipAtivoInativo from "@/Components/Chip/ChipAtivoInativo";
import useDialog from "@/Hooks/useDialog";
import type { Usuario } from "@/Types/Usuarios";
import { DateFormat } from "@/Utils/dates";

function Detail({ label, value }: { label: string; value: ReactNode }) {
	return (
		<Box>
			<Typography variant="caption" color="text.secondary">
				{label}
			</Typography>
			<Typography variant="body2" mt={0.3} sx={{ wordBreak: "break-word" }}>
				{value || "-"}
			</Typography>
		</Box>
	);
}

export default function ViewUsuario() {
	const { modal, selected, handleCloseDialog } = useDialog();
	const usuario = selected as Usuario | null;

	return (
		<AppDialog
			open={modal === "view"}
			onClose={handleCloseDialog}
			title="Detalhes do Usuário"
			icon={<PersonIcon />}
			maxWidth="sm"
			actions={<Button onClick={handleCloseDialog}>Fechar</Button>}
		>
			{usuario && (
				<Stack spacing={2.5}>
					<Box>
						<Typography variant="subtitle2" color="text.secondary" mb={1.5}>
							Identificação
						</Typography>
						<Stack spacing={1.5}>
							<Detail label="Nome completo" value={usuario.nome} />
							<Detail label="Usuário" value={usuario.username} />
							<Box>
								<Typography variant="caption" color="text.secondary">
									Status
								</Typography>
								<Box mt={0.5}>
									<ChipAtivoInativo active={usuario.active} />
								</Box>
							</Box>
						</Stack>
					</Box>

					<Divider />

					<Box>
						<Typography variant="subtitle2" color="text.secondary" mb={1.5}>
							Contato
						</Typography>
						<Stack spacing={1.5}>
							<Detail label="E-mail" value={usuario.email} />
							<Detail label="Telefone" value={usuario.telefone} />
						</Stack>
					</Box>

					<Divider />

					<Box>
						<Typography variant="subtitle2" color="text.secondary" mb={1.5}>
							Lotação
						</Typography>
						<Stack spacing={1.5}>
							<Detail label="Base" value={usuario.Base?.nome} />
							<Detail
								label="Setor"
								value={
									<Chip
										label={usuario.Setor?.nomeVisivel || usuario.Setor?.nome || "-"}
										size="small"
										variant="outlined"
									/>
								}
							/>
							<Detail
								label="Cargo"
									value={
										<Chip
											label={usuario.Cargo?.nomeVisivel || usuario.Cargo?.nome || "-"}
											size="small"
											variant="outlined"
										/>
									}
							/>
						</Stack>
					</Box>

					<Divider />

					<Stack direction="row" spacing={3}>
						<Detail label="Criado em" value={DateFormat(usuario.created_at)} />
						<Detail label="Atualizado em" value={DateFormat(usuario.updated_at)} />
					</Stack>
				</Stack>
			)}
		</AppDialog>
	);
}
