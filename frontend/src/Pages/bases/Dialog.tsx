import { useDeleteBase } from "@/Hooks/useBases";
import type { Base } from "@/Types/Base";
import ConfirmDeleteDialog from "@/Components/Dialog/ConfirmDeleteDialog";
import AppDialog from "@/Components/Dialog/AppDialog";
import BusinessIcon from "@mui/icons-material/Business";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, Stack, Typography } from "@mui/material";
import NewBase from "./new";
import EditBase from "./edit";
import useDialog from "@/Hooks/useDialog";
import ViewBase from "./view/view";

function formatDate(iso: string) {
	return new Date(iso).toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});
}

export default function DialogBase() {
	const deleteMutation = useDeleteBase();
	const { modal, selected, handleCloseDialog } = useDialog();

	const handleDelete = async () => {
		if (!selected) return;
		await deleteMutation.mutateAsync(selected.id);
		handleCloseDialog();
	};

	switch (modal) {
		case "create":
			return <NewBase open={modal === "create"} onClose={handleCloseDialog} />;
		case "edit":
			return (
				<EditBase
					open={modal === "edit"}
					onClose={handleCloseDialog}
					base={selected as Base}
				/>
			);
		case "view":
			return <ViewBase />;
		case "delete":
			return (
				<ConfirmDeleteDialog
					open={modal === "delete"}
					onClose={handleCloseDialog}
					onConfirm={handleDelete}
					title="Excluir Base"
					entityName={(selected as Base | null)?.nome}
					isPending={deleteMutation.isPending}
					message={
						<>
							Tem certeza que deseja excluir a base{" "}
							<strong>{(selected as Base | null)?.nome}</strong>? Bases com
							usuários ou requerimentos vinculados não poderão ser excluídas.
						</>
					}
				/>
			);
	}
}
