import { useState } from "react";
import {
	Box,
	Button,
	Chip,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Switch,
	TextField,
	Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import { useUpdateUsuario } from "@/Hooks/useUsuarios";
import { useGetBases } from "@/Hooks/useBases";
import { useGetSetores } from "@/Hooks/useSetores";
import type { Usuario } from "@/Types/Usuarios";
import useDialog from "@/Hooks/useDialog";
import NewUsuario from "./new";
import EditUsuario from "./edit";

export default function DialogUsuario() {
	const { modal, selected, handleCloseDialog } = useDialog();

	// const handleDelete = async () => {
	// 	if (!selected) return;
	// 	await deleteMutation.mutateAsync(selected.id);
	// 	handleCloseDialog();
	// };

	console.log(modal);

	switch (modal) {
		case "create":
			return (
				<NewUsuario open={modal === "create"} onClose={handleCloseDialog} />
			);

		case "edit":
			return (
				<EditUsuario
					open={modal === "edit"}
					onClose={handleCloseDialog}
					usuario={selected as Usuario}
				/>
			);

		default:
			break;
	}

	// return (
	// 	<>
	// 		{/* Modal: Visualizar */}
	// 		<Dialog
	// 			open={modal === "view"}
	// 			onClose={handleCloseAll}
	// 			maxWidth="sm"
	// 			fullWidth
	// 		>
	// 			<DialogTitle>
	// 				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
	// 					<PersonIcon color="primary" />
	// 					Detalhes do Usuário
	// 				</Box>
	// 			</DialogTitle>
	// 			<DialogContent dividers>
	// 				{usuario && (
	// 					<Stack spacing={2} sx={{ pt: 1 }}>
	// 						<Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
	// 							<Box sx={{ flex: 1, minWidth: 160 }}>
	// 								<Typography variant="caption" color="text.secondary">
	// 									Nome
	// 								</Typography>
	// 								<Typography variant="body1" fontWeight={600} mt={0.3}>
	// 									{usuario.nome}
	// 								</Typography>
	// 							</Box>
	// 							<Box sx={{ flex: 1, minWidth: 160 }}>
	// 								<Typography variant="caption" color="text.secondary">
	// 									Username
	// 								</Typography>
	// 								<Typography
	// 									variant="body2"
	// 									sx={{ fontFamily: "monospace" }}
	// 									mt={0.3}
	// 								>
	// 									{usuario.username}
	// 								</Typography>
	// 							</Box>
	// 						</Box>
	// 						<Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
	// 							<Box sx={{ flex: 1, minWidth: 160 }}>
	// 								<Typography variant="caption" color="text.secondary">
	// 									Email
	// 								</Typography>
	// 								<Typography variant="body2" mt={0.3}>
	// 									{usuario.email ?? "-"}
	// 								</Typography>
	// 							</Box>
	// 							<Box sx={{ flex: 1, minWidth: 160 }}>
	// 								<Typography variant="caption" color="text.secondary">
	// 									Telefone
	// 								</Typography>
	// 								<Typography variant="body2" mt={0.3}>
	// 									{usuario.telefone ?? "-"}
	// 								</Typography>
	// 							</Box>
	// 						</Box>
	// 						<Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
	// 							<Box sx={{ flex: 1, minWidth: 120 }}>
	// 								<Typography variant="caption" color="text.secondary">
	// 									Base
	// 								</Typography>
	// 								<Typography variant="body2" mt={0.3}>
	// 									{usuario.base ?? "-"}
	// 								</Typography>
	// 							</Box>
	// 							<Box sx={{ flex: 1, minWidth: 120 }}>
	// 								<Typography variant="caption" color="text.secondary">
	// 									Setor
	// 								</Typography>
	// 								<Typography variant="body2" mt={0.3}>
	// 									{usuario.setor ?? "-"}
	// 								</Typography>
	// 							</Box>
	// 							<Box sx={{ flex: 1, minWidth: 120 }}>
	// 								<Typography variant="caption" color="text.secondary">
	// 									Cargo
	// 								</Typography>
	// 								<Box mt={0.5}>
	// 									<Chip
	// 										label={usuario.Cargo?.nome ?? "-"}
	// 										size="small"
	// 										variant="outlined"
	// 									/>
	// 								</Box>
	// 							</Box>
	// 						</Box>
	// 						<Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
	// 							<Box>
	// 								<Typography variant="caption" color="text.secondary">
	// 									Status
	// 								</Typography>
	// 								<Box mt={0.5}>{statusChip(usuario.active)}</Box>
	// 							</Box>
	// 							<Box sx={{ ml: "auto" }}>
	// 								<Typography variant="caption" color="text.secondary">
	// 									Criado em
	// 								</Typography>
	// 								<Typography variant="body2" mt={0.3}>
	// 									{formatDate(usuario.created_at)}
	// 								</Typography>
	// 							</Box>
	// 						</Box>
	// 					</Stack>
	// 				)}
	// 			</DialogContent>
	// 			<DialogActions sx={{ px: 3, pb: 2 }}>
	// 				<Button onClick={handleCloseAll}>Fechar</Button>
	// 				<Button
	// 					variant="outlined"
	// 					startIcon={<EditIcon />}
	// 					onClick={() => usuario && handleOpenEdit(usuario)}
	// 				>
	// 					Editar
	// 				</Button>
	// 			</DialogActions>
	// 		</Dialog>

	// 		{/* Modal: Editar */}
	// 		<Dialog
	// 			open={modal === "edit"}
	// 			onClose={handleCloseAll}
	// 			maxWidth="sm"
	// 			fullWidth
	// 		>
	// 			<DialogTitle>Editar Usuário</DialogTitle>
	// 			<DialogContent>
	// 				<Stack spacing={2} sx={{ mt: 1 }}>
	// 					<TextField
	// 						label="Nome Completo"
	// 						value={(form.nome as string) ?? ""}
	// 						onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
	// 						fullWidth
	// 						autoFocus
	// 					/>
	// 					<TextField
	// 						label="Email"
	// 						type="email"
	// 						value={(form.email as string) ?? ""}
	// 						onChange={(e) =>
	// 							setForm((f) => ({ ...f, email: e.target.value }))
	// 						}
	// 						fullWidth
	// 					/>
	// 					<TextField
	// 						label="Telefone"
	// 						value={(form.telefone as string) ?? ""}
	// 						onChange={(e) =>
	// 							setForm((f) => ({ ...f, telefone: e.target.value }))
	// 						}
	// 						fullWidth
	// 					/>
	// 					<FormControl fullWidth>
	// 						<InputLabel>Base</InputLabel>
	// 						<Select
	// 							label="Base"
	// 							value={(form.base as string) ?? ""}
	// 							onChange={(e) =>
	// 								setForm((f) => ({ ...f, base: e.target.value }))
	// 							}
	// 						>
	// 							{bases?.map((b) => (
	// 								<MenuItem key={b.id} value={b.nome}>
	// 									{b.nome}
	// 								</MenuItem>
	// 							))}
	// 						</Select>
	// 					</FormControl>
	// 					<FormControl fullWidth>
	// 						<InputLabel>Setor</InputLabel>
	// 						<Select
	// 							label="Setor"
	// 							value={(form.setor as string) ?? ""}
	// 							onChange={(e) =>
	// 								setForm((f) => ({ ...f, setor: e.target.value }))
	// 							}
	// 						>
	// 							<MenuItem value="">
	// 								<em>Nenhum</em>
	// 							</MenuItem>
	// 							{setores?.map((s) => (
	// 								<MenuItem key={s.id} value={s.nome}>
	// 									{s.nome}
	// 								</MenuItem>
	// 							))}
	// 						</Select>
	// 					</FormControl>
	// 					<FormControlLabel
	// 						control={
	// 							<Switch
	// 								checked={(form.active as boolean) ?? true}
	// 								onChange={(e) =>
	// 									setForm((f) => ({ ...f, active: e.target.checked }))
	// 								}
	// 								color="success"
	// 							/>
	// 						}
	// 						label="Usuário ativo"
	// 					/>
	// 				</Stack>
	// 			</DialogContent>
	// 			<DialogActions sx={{ px: 3, pb: 2 }}>
	// 				<Button onClick={handleCloseAll} disabled={updateUsuario.isPending}>
	// 					Cancelar
	// 				</Button>
	// 				<Button
	// 					variant="contained"
	// 					onClick={handleUpdate}
	// 					disabled={updateUsuario.isPending || !(form.nome as string)?.trim()}
	// 				>
	// 					{updateUsuario.isPending ? (
	// 						<CircularProgress size={20} />
	// 					) : (
	// 						"Salvar"
	// 					)}
	// 				</Button>
	// 			</DialogActions>
	// 		</Dialog>
	// 	</>
	// );
}
