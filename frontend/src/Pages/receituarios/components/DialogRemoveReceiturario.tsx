import React, { useState } from "react";
import { Add, Delete, Edit, Visibility } from "@mui/icons-material";
import {
	Autocomplete,
	Box,
	Button,
	Chip,
	CircularProgress,
	Divider,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Tooltip,
	Typography,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SearchIcon from "@mui/icons-material/Search";
import { LoadingButton } from "@mui/lab";

import {
	useAddMedicamento,
	useChangeStatusReceituario,
	useDeleteReceituario,
	useGetReceituarios,
	useRemoveMedicamento,
} from "@/Hooks/useReceituarios";
import { useGetMedicamentos } from "@/Hooks/useMedicamentos";
import type {
	Receituario,
	ReceituarioMedicamento,
	StatusReceituario,
	TipoAdministracao,
	TipoDiluente,
	UnidadeMedicamento,
} from "@/Types/Receituario";
import {
	ADMINISTRACAO_LABELS,
	DILUENTE_LABELS,
	UNIDADE_LABELS,
} from "@/Types/Receituario";
import type { Medicamento } from "@/Types/Medicamento";
import AppDialog from "@/Components/Dialog/AppDialog";
import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";

export default function DeleteReceituario({
	open,
	onClose,
	receituario,
}: {
	open: boolean;
	onClose: () => void;
	receituario: Receituario;
}) {
	const deleteMut = useDeleteReceituario();

	async function handleDelete() {
		if (!receituario) return;
		await deleteMut.mutateAsync(receituario.id);
		onClose();
	}

	return (
		<ConfirmDeleteDialog
			open={open}
			onClose={onClose}
			onConfirm={handleDelete}
			title="Remover Receituário"
			message={
				<>
					Remover o receituário <strong>#{receituario?.numero}</strong>? Esta
					ação é irreversível.
				</>
			}
			isPending={deleteMut.isPending}
		/>
	);
}
