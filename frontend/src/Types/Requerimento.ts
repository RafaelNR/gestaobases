import {
	requerimentoAlmCMEFormSchema,
	requerimentoFarmaciaFormSchema,
	requerimentoFiltroSchema,
} from "@/Schemas/Requerimento.schemas";
import { TypeOf } from "zod";
import { Usuario } from "./Usuarios";
import { Ambulancia } from "./Ambulancia";
import { Produto } from "./Produto";
import { Medicamento } from "./Medicamento";

export type RequerimentoStatus =
	| "Rascunho"
	| "Recebido"
	| "Analise"
	| "Separacao"
	| "Finalizado"
	| "Cancelado";

export const STATUS_REQUERIMENTO_LABELS: Record<RequerimentoStatus, string> = {
	Rascunho: "Rascunho",
	Recebido: "Recebido",
	Analise: "Em análise",
	Separacao: "Em separação",
	Finalizado: "Finalizado",
	Cancelado: "Cancelado",
};

export type CountRequerimentos = {
	status: RequerimentoStatus;
	_count: {
		status: number;
	};
};

export type TipoRequerimento = "Almoxarifado" | "Farmacia" | "CME";

export const TIPO_LABELS: Record<TipoRequerimento, string> = {
	Almoxarifado: "Almoxarifado",
	Farmacia: "Farmácia",
	CME: "CME",
};

export const TIPO_LABELS_PDF: Record<TipoRequerimento, string> = {
	Almoxarifado: "do Almoxarifado",
	Farmacia: "da Farmácia",
	CME: "do CME",
};

export type RequerimentoItemEntry = {
	id: string;
	requerimento: string;
	produtoId?: string | null;
	medicamentoId?: string | null;
	quantidade: number;
	ocorrencia?: string | null;
	user: string;
	ativo: boolean;
	deleted_at?: string | null;
	deleted_by?: string | null;
	created_at: string;
	updated_at: string;
	Produto?: Pick<
		Produto,
		"id" | "nome" | "codigo" | "unidade" | "categoria" | "ordem" | "fora_alx"
	> | null;
	Medicamento?: Pick<
		Medicamento,
		"id" | "nome" | "codigo" | "especificacao" | "categoria"
	> | null;
	DeletedBy?: { nome: string; username: string } | null;
};

export type RequerimentoStatusLog = {
	id: string;
	requerimento: string;
	status: RequerimentoStatus;
	user?: string;
	userId?: string;
	created_at: string;
};

export type Requerimentos = {
	id: string;
	numero: number;
	tipo: TipoRequerimento;
	status: RequerimentoStatus;
	data_inicio: string;
	data_fim: string;
	obs?: string | null;
	base: string;
	setor: string;
	userId: string;
	ambulanciaId?: string | null;
	User: Pick<Usuario, "nome" | "Setor" | "Cargo">;
	created_at: string;
	updated_at: string;
	Ambulancia?: Pick<Ambulancia, "id" | "nome" | "tipo"> | null;
	_count?: {
		RequerimentoItems: number;
	};
};

export type Requerimento = {
	id: string;
	numero: number;
	tipo: TipoRequerimento;
	status: RequerimentoStatus;
	data_inicio: string;
	data_fim: string;
	obs?: string | null;
	base: string;
	setor: string;
	userId: string;
	ambulanciaId?: string | null;
	User: Pick<Usuario, "nome" | "Setor" | "Cargo">;
	created_at: string;
	updated_at: string;
	Ambulancia?: Pick<Ambulancia, "id" | "nome" | "tipo"> | null;
	RequerimentoItems?: RequerimentoItemEntry[];
	RequerimentoStatus?: RequerimentoStatusLog[];
	_count?: {
		RequerimentoItems: number;
	};
};

export type RequerimentoItemPayload =
	| {
			id?: string;
			produtoId: string;
			quantidade: number;
	  }
	| {
			id?: string;
			medicamentoId: string;
			quantidade: number;
			ocorrencia?: string;
	  };

export type RequerimentoCreatePayload = {
	base: string;
	setor: string;
	obs?: string;
	status: RequerimentoStatus;
	ambulanciaId?: string;
	tipo: string;
	itens: RequerimentoItemPayload[];
};

export type RequerimentoFormValues = {
	id?: string;
	base: string;
	setor: string;
	status: RequerimentoStatus;
	obs?: string;
	ambulancia?: string;
	tipo: TipoRequerimento;
};

export type RequerimentoAlmCMEFormValues = TypeOf<
	typeof requerimentoAlmCMEFormSchema
>;
export type RequerimentoFarmaciaFormValues = TypeOf<
	typeof requerimentoFarmaciaFormSchema
>;

export type FiltroRequerimentos = TypeOf<typeof requerimentoFiltroSchema>;

export type RequerimentoCartFormItem = {
	id?: string;
	produtoId?: string;
	medicamentoId?: string;
	quantidade: number;
	ocorrencia?: string;
};

export type RequerimentoCarrinhoFormValues = RequerimentoFormValues & {
	itens: RequerimentoCartFormItem[];
};
