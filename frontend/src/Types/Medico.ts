import { TypeOf } from "zod";
import { medicoSchema } from "@/Schemas/Medico.schemas";

export type MedicoSchemaInput = TypeOf<typeof medicoSchema>;

export type Medico = {
	id: string;
	nome: string;
	crm: string;
	telefone?: string | null;
	email?: string | null;
	user: string;
	created_at: string;
	updated_at: string;
};
