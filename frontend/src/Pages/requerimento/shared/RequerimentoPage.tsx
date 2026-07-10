import { useEffect, useMemo, useRef, useState } from "react";
import { Badge, Box, Drawer, Fab, Grid, Skeleton } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import type {
	RequerimentoCreatePayload,
	RequerimentoFormValues,
	RequerimentoItemEntry,
} from "@/Types/Requerimento";
import FormRequerimento from "./components/FormRequerimento";
import Catalogo from "./components/Catalogo";
import Carrinho from "./components/Carrinho";
import useAuth from "@/Hooks/useAuth";
import { buildRequerimentoDefaultValues } from "./formDefaults";
import {
	getRequerimentoLocalDraftKey,
	loadRequerimentoLocalDraft,
	removeRequerimentoLocalDraft,
	saveRequerimentoLocalDraft,
} from "./localDraftStorage";
import { useGetRequerimento } from "@/Hooks/useRequerimentos";
import useLayout from "@/Hooks/useLayout";
import RequerimentoViewPage from "../view/RequerimentoView";
import { useNavigate } from "react-router";

export type CartItem = {
	requerimentoItemId?: string;
	itemId: string;
	nome: string;
	codigo: number;
	categoria: string;
	quantidade: number;
	ocorrencia?: string;
};

//
function hasLocalDraftContent(
	values: RequerimentoFormValues,
	defaultValues: RequerimentoFormValues,
	cart: CartItem[],
) {
	return (
		cart.length > 0 ||
		Boolean(values.obs?.trim()) ||
		Boolean(values.ambulancia) ||
		values.base !== defaultValues.base ||
		values.setor !== defaultValues.setor
	);
}

type Props = {
	requerimentoId?: string;
};

// Cria o carrinho a partir do requerimento
function buildCartFromRequerimentoItems(items: RequerimentoItemEntry[]) {
	return items
		.filter((item) => item.ativo)
		.map((item) => {
			const produto = item.Produto;
			const medicamento = item.Medicamento;

			return {
				requerimentoItemId: item.id,
				itemId: item.medicamentoId ?? item.produtoId ?? "",
				nome: medicamento?.nome ?? produto?.nome ?? "Item sem nome",
				codigo: Number(medicamento?.codigo ?? produto?.codigo ?? 0),
				categoria: medicamento?.especificacao ?? produto?.unidade ?? "-",
				quantidade: item.quantidade,
				ocorrencia: item.ocorrencia ?? "",
			};
		})
		.filter((item) => item.itemId);
}

export default function RequerimentoPage({ requerimentoId }: Props) {
	const { user } = useAuth();
	const navigate = useNavigate();
	const [cart, setCart] = useState<CartItem[]>([]);
	const [mobileCartOpen, setMobileCartOpen] = useState(false);
	const { isMobile } = useLayout();
	const loadedDraftKeyRef = useRef<string | null>(null);
	const loadedRequerimentoIdRef = useRef<string | null>(null);
	const { control, reset, watch } = useFormContext<RequerimentoFormValues>();
	const formValues = useWatch({ control });
	const tipo = watch("tipo");

	// Busca o requerimento no banco de dados
	const { data: requerimento, isLoading } = requerimentoId
		? useGetRequerimento(tipo, requerimentoId)
		: { data: undefined, isLoading: false };

	// Nome da chave que será usada no local storage
	// Requerimento ID se for editar o requerimento
	// Se for novo requerimento, usa "novo"
	const localDraftKey = useMemo(
		() =>
			getRequerimentoLocalDraftKey(
				tipo,
				`${user?.id}:${requerimentoId ?? "novo"}`,
			),
		[tipo, user?.id, requerimentoId],
	);

	useEffect(() => {
		if (requerimentoId) return;
		if (loadedDraftKeyRef.current === localDraftKey) return;

		const defaultValues = buildRequerimentoDefaultValues(tipo, user);

		// Carrega o requerimento salvo no local storage
		const savedDraft = loadRequerimentoLocalDraft(localDraftKey);

		if (savedDraft?.values.tipo === tipo) {
			reset({
				...defaultValues,
				...savedDraft.values,
				tipo,
			});
			setCart(savedDraft.cart);
		} else {
			reset(defaultValues);
			setCart([]);
		}

		loadedDraftKeyRef.current = localDraftKey;
	}, [localDraftKey, requerimentoId, reset, tipo, user]);

	useEffect(() => {
		if (!requerimento || loadedRequerimentoIdRef.current === requerimento.id) {
			return;
		}

		// Redireciona para a página de visualização se o requerimento já estiver finalizado
		if (["Finalizado", "Cancelado"].includes(requerimento.status)) {
			navigate(
				`/requerimentos/${requerimento.tipo.toLowerCase()}/view/${requerimento.id}`,
			);
		}

		const defaultValues = buildRequerimentoDefaultValues(tipo, user);
		const savedDraft = loadRequerimentoLocalDraft(localDraftKey);
		const hasSavedDraft = savedDraft?.values.tipo === tipo;
		const databaseValues: RequerimentoFormValues = {
			...defaultValues,
			id: requerimento.id,
			base: requerimento.base ?? user?.Base?.nome,
			setor: requerimento.setor ?? user?.Setor?.nome,
			tipo,
			obs: requerimento.obs ?? "",
			ambulancia: requerimento.ambulanciaId ?? "",
		};

		reset({
			...databaseValues,
			...(hasSavedDraft ? savedDraft.values : {}),
			id: requerimento.id,
			tipo,
		});
		setCart(
			hasSavedDraft
				? savedDraft.cart
				: requerimento.RequerimentoItems &&
					  requerimento.RequerimentoItems.length > 0
					? buildCartFromRequerimentoItems(requerimento.RequerimentoItems)
					: [],
		);

		loadedDraftKeyRef.current = localDraftKey;
		loadedRequerimentoIdRef.current = requerimento.id;
	}, [localDraftKey, requerimento, reset, tipo, user]);

	useEffect(() => {
		if (loadedDraftKeyRef.current !== localDraftKey) return;

		const defaultValues = buildRequerimentoDefaultValues(tipo, user);
		const currentValues = {
			...defaultValues,
			...formValues,
			tipo,
		};

		// Remove o requerimento do localstore se não tiver conteúdo
		if (!hasLocalDraftContent(currentValues, defaultValues, cart)) {
			removeRequerimentoLocalDraft(localDraftKey);
			return;
		}

		// Salva no localstore o carrinho
		saveRequerimentoLocalDraft(localDraftKey, currentValues, cart);
	}, [cart, formValues, localDraftKey, tipo, user]);

	function resetForm() {
		if (requerimentoId) {
			removeRequerimentoLocalDraft(localDraftKey);
			setMobileCartOpen(false);
			return;
		}

		setCart([]);
		reset(buildRequerimentoDefaultValues(tipo, user));
		removeRequerimentoLocalDraft(localDraftKey);
		setMobileCartOpen(false);
	}

	function buildPayload(
		values: RequerimentoFormValues,
	): RequerimentoCreatePayload {
		const itens = cart.map((c) =>
			tipo === "Farmacia"
				? {
						id: c.requerimentoItemId,
						medicamentoId: c.itemId,
						quantidade: c.quantidade,
						ocorrencia: c.ocorrencia || undefined,
					}
				: {
						id: c.requerimentoItemId,
						produtoId: c.itemId,
						quantidade: c.quantidade,
					},
		);

		return {
			base: values.base,
			setor: values.setor,
			tipo: values.tipo,
			status: values.status,
			obs: values.obs || undefined,
			ambulanciaId: tipo === "Farmacia" ? values.ambulancia : undefined,
			itens,
		};
	}

	if (isLoading) {
		return (
			<Box sx={{ p: 2 }}>
				<Skeleton variant="rectangular" width={200} height={40} />
			</Box>
		);
	}

	return (
		<Box sx={{ p: 2 }}>
			{requerimento ? (
				<RequerimentoViewPage requerimento={requerimento} />
			) : (
				<FormRequerimento tipo={tipo} />
			)}
			<Grid container spacing={2} sx={{ alignItems: "flex-start", mt: 1 }}>
				<Grid size={{ xs: 12, md: 8 }}>
					<Catalogo tipo={tipo} cart={cart} setCart={setCart} />
				</Grid>

				<Grid
					size={{ xs: 12, md: 4 }}
					sx={{
						display: { xs: "none", md: "block" },
						alignSelf: "flex-start",
					}}
				>
					<Box>
						<Carrinho
							tipo={tipo}
							buildPayload={buildPayload}
							cart={cart}
							setCart={setCart}
							resetForm={resetForm}
							requerimento={requerimento}
						/>
					</Box>
				</Grid>
			</Grid>

			{isMobile && (
				<>
					<Fab
						color="primary"
						aria-label="Abrir carrinho"
						onClick={() => setMobileCartOpen(true)}
						sx={{
							position: "fixed",
							right: 16,
							bottom: 16,
							display: { xs: "flex", md: "none" },
							zIndex: (theme) => theme.zIndex.drawer + 1,
						}}
					>
						<Badge badgeContent={cart.length} color="error">
							<ShoppingCartIcon />
						</Badge>
					</Fab>

					<Drawer
						anchor="bottom"
						open={mobileCartOpen}
						onClose={() => setMobileCartOpen(false)}
						sx={{
							display: { xs: "block", md: "none" },
							"& .MuiDrawer-paper": {
								borderTopLeftRadius: 8,
								borderTopRightRadius: 8,
								maxHeight: "88dvh",
								p: 2,
							},
						}}
					>
						<Carrinho
							tipo={tipo}
							buildPayload={buildPayload}
							cart={cart}
							setCart={setCart}
							resetForm={resetForm}
							requerimento={requerimento}
						/>
					</Drawer>
				</>
			)}
		</Box>
	);
}
