import {
	visitaCreateSchema,
	visitaUpdateSchema,
} from "@/Schemas/Visitas.schemas";
import { TypeOf } from "zod";
import { Usuario } from "./Usuarios";
import type { TipoRequerimento } from "./Requerimento";

export type VisitaCreateSchemaInput = TypeOf<typeof visitaCreateSchema>;

export type VisitaUpdateSchemaInput = TypeOf<typeof visitaUpdateSchema>;

export type VisitaBase = {
	id: string;
	data: string;
	base?: string;
	outro_motivo?: string;
	descricao?: string | null;
	User: Pick<Usuario, "nome">;
	created_at: string;
	updated_at: string;
};

export type ProximaVisitaBase = {
	id: string;
	data: string;
	base: string;
	descricao: string | null;
	requerimentoId: string | null;
	tipo: TipoRequerimento | null;
	requerimentoRecebidoNaSemana: boolean;
	prioridade: "vermelho" | "amarelo" | "verde";
};
