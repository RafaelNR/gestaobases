import AppDialog from "@/Components/Dialog/AppDialog";
import type { CategoriaProduto, Produto } from "@/Types/Produto";
import EditIcon from "@mui/icons-material/Edit";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";

type ViewProdutoProps = {
	open: boolean;
	produto: Produto | null;
	categorias?: CategoriaProduto[];
	onClose: () => void;
	onEdit: (produto: Produto) => void;
};

export default function ViewProduto({
	open,
	produto,
	categorias,
	onClose,
	onEdit,
}: ViewProdutoProps) {
	const getCategoriaName = (id: string) =>
		categorias?.find((categoria) => categoria.id === id)?.nome ?? id;

	return (
		<AppDialog
			open={open}
			onClose={onClose}
			title="Detalhes do Produto"
			icon={<InventoryIcon />}
			fullScreen
			actions={
				<>
					<Button onClick={onClose}>Fechar</Button>
					{produto && (
						<Button
							variant="outlined"
							startIcon={<EditIcon />}
							onClick={() => onEdit(produto)}
						>
							Editar
						</Button>
					)}
				</>
			}
		>
			{produto && (
				<Stack spacing={2.5}>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Nome
						</Typography>
						<Typography variant="body1" fontWeight={600} mt={0.3}>
							{produto.nome}
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
								{produto.codigo}
							</Typography>
						</Box>
						{produto.codigo_25 && (
							<Box>
								<Typography variant="caption" color="text.secondary">
									Código 25
								</Typography>
								<Typography
									variant="body2"
									sx={{ fontFamily: "monospace" }}
									mt={0.3}
								>
									{produto.codigo_25}
								</Typography>
							</Box>
						)}
						<Box>
							<Typography variant="caption" color="text.secondary">
								Tipo
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{produto.tipo}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Unidade
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{produto.unidade}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								CME
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{produto.cme ? "Sim" : "Não"}
							</Typography>
						</Box>
						<Box>
							<Typography variant="caption" color="text.secondary">
								Ordem
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{produto.ordem}
							</Typography>
						</Box>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Categoria
						</Typography>
						<Typography variant="body2" mt={0.3}>
							{getCategoriaName(produto.categoria)}
						</Typography>
					</Box>
					<Box>
						<Typography variant="caption" color="text.secondary">
							Status
						</Typography>
						<Box mt={0.5}>
							<Chip
								label={produto.active ? "Ativo" : "Inativo"}
								color={produto.active ? "success" : "default"}
								size="small"
							/>
						</Box>
					</Box>
					{produto.descricao && (
						<Box>
							<Typography variant="caption" color="text.secondary">
								Descrição
							</Typography>
							<Typography variant="body2" mt={0.3}>
								{produto.descricao}
							</Typography>
						</Box>
					)}
				</Stack>
			)}
		</AppDialog>
	);
}
