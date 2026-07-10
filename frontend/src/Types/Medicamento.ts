import { TypeOf } from "zod";
import { categoriaMedicamentoSchema } from "@/Schemas/Categoria.schemas";
import { medicamentoSchema } from "@/Schemas/Medicamento.schemas";
import { Usuario } from "./Usuarios";

export type CategoriaMedicamentoSchemaInput = TypeOf<
	typeof categoriaMedicamentoSchema
>;
export type MedicamentoSchemaInput = TypeOf<typeof medicamentoSchema>;

export type CategoriaMedicamento = {
	id: string;
	nome: string;
	active: boolean;
	userId: string;
	User: Pick<Usuario, "nome">;
	created_at: string;
	updated_at: string;
};

export type Medicamento = {
	id: string;
	nome: string;
	codigo: number;
	especificacao: string;
	categoria: string;
	userId: string;
	descricao?: string | null;
	active: boolean;
	User: Pick<Usuario, "nome">;
	created_at: string;
	updated_at: string;
};
