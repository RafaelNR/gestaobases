import { TypeOf } from "zod";
import { receituarioSchema } from "@/Schemas/Receituario.schemas";

export type ReceituarioSchemaInput = TypeOf<typeof receituarioSchema>;

export type StatusReceituario = 'Aberto' | 'Finalizado' | 'Cancelado';
export type UnidadeMedicamento = 'ampolas' | 'ml';
export type TipoAdministracao = 'EV' | 'IM' | 'SC' | 'IN' | 'IR' | 'IO';
export type TipoDiluente = 'agua_destilada' | 'nacl09';

export type ReceituarioMedicamento = {
	id: string;
	receituario: string;
	medicamento: string;
	qnt: number;
	unidade: UnidadeMedicamento;
	administracao: TipoAdministracao;
	diluente?: TipoDiluente | null;
	qnt_diluente?: number | null;
	qnt_tempo?: number | null;
	user: string;
	obs?: string | null;
	created_at: string;
	updated_at: string;
	Medicamento?: { id: string; nome: string; codigo: string; especificacao: string } | null;
};

export type Receituario = {
	id: string;
	numero: string;
	requerimento?: string | null;
	status: StatusReceituario;
	data: string;
	ocorrencia: number;
	data_ocorrencia: string;
	medico: string;
	base: string;
	ambulancia: string;
	obs?: string | null;
	user: string;
	created_at: string;
	updated_at: string;
	ReceituarioMedicamentos: ReceituarioMedicamento[];
	Medico?: { nome: string; crm: string } | null;
	Base?: { id: string; nome: string } | null;
	Ambulancia?: { id: string; nome: string; tipo: string } | null;
};

export const ADMINISTRACAO_LABELS: Record<TipoAdministracao, string> = {
	EV: 'Endovenosa',
	IM: 'Intramuscular',
	SC: 'Subcutânea',
	IN: 'Inalação',
	IR: 'Retal',
	IO: 'Intraóssea',
};

export const DILUENTE_LABELS: Record<TipoDiluente, string> = {
	agua_destilada: 'Água Destilada',
	nacl09: 'NaCl 0,9%',
};

export const UNIDADE_LABELS: Record<UnidadeMedicamento, string> = {
	ampolas: 'Ampola(s)',
	ml: 'mL',
};
