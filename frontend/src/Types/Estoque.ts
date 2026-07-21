import {
	estoqueCreateSchema,
	loteCreateSchema,
	movimentacaoCreatedSchema,
} from "@/Schemas/Estoque.schemas";
import { Base } from "./Base";
import z from "zod";
import { Usuario } from "./Usuarios";

export type StatusValidadeEstoque =
	| "SemValidade"
	| "Regular"
	| "Atencao"
	| "Alerta"
	| "Vencido";
export type TipoMovimentacaoEstoque =
	| "Entrada"
	| "Saida"
	| "AjusteEntrada"
	| "AjusteSaida"
	| "Perda"
	| "Vencimento"
	| "TransferenciaEntrada"
	| "TransferenciaSaida"
	| "Devolucao"
	| "Desabilitado";

export const tiposMovimentacaoEstoque = [
	"Entrada",
	"Saida",
	"AjusteEntrada",
	"AjusteSaida",
	"Perda",
	"Vencimento",
	"TransferenciaEntrada",
	"TransferenciaSaida",
	"Devolucao",
	"Desabilitado",
] as const;

export type EstoqueCreateSchemaInput = z.infer<typeof estoqueCreateSchema>;
export type EstoqueLoteCreateSchemaInput = z.infer<typeof loteCreateSchema>;
export type MovimentacaoCreateSchemaInput = z.infer<
	typeof movimentacaoCreatedSchema
>;

// Estoque
export interface EstoqueItem {
	id: string;
	baseId: string;
	quantidadeMinima: number;
	ativo: boolean;
	quantidadeTotal: number;
	proximaValidade: string | null;
	proximaValidadeStatus: StatusValidadeEstoque | null;
	validadeResumo: Record<StatusValidadeEstoque, number>;
	Produto: { id: string; nome: string; codigo: number } | null;
	Medicamento: {
		id: string;
		nome: string;
		codigo: number;
		especificacao: string;
	} | null;
	Base: Pick<Base, "nome">;
}

// Estoque Lote
export interface EstoqueLote {
	id: string;
	estoqueId: string;
	lote: string | null;
	validade: string | null;
	quantidade: number;
	bloqueado: boolean;
	motivoBloqueio: string | null;
	status: StatusValidadeEstoque;
	diasParaVencer: number | null;
	disponivelParaSaida: boolean;
}

export interface EstoquePage {
	items: EstoqueItem[];
	page: number;
	limit: number;
	total: number;
	pages: number;
}
export interface EstoqueQuery {
	page?: number;
	limit?: number;
	baseId?: string;
	search?: string;
	tipo?: "produto" | "medicamento";
	status?: StatusValidadeEstoque;
}
export interface EstoqueMovimentacao {
	id: string;
	tipo: TipoMovimentacaoEstoque;
	quantidade: number;
	saldoAnterior: number;
	saldoPosterior: number;
	observacao: string | null;
	created_at: string;
	User: Pick<Usuario, "nome">;
}
