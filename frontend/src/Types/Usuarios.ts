import { TypeOf } from "zod";
import {
	usuarioUpdateSchema,
	usuarioInsertSchema,
	perfilSchema,
} from "@/Schemas/Usuarios.schemas";
import { Base } from "./Base";
import { Setor } from "./Setor";
import { Cargo } from "./Cargo";

export type UsuarioUpdateSchemaInput = TypeOf<typeof usuarioUpdateSchema>;
export type UsuarioInsertSchemaInput = TypeOf<typeof usuarioInsertSchema>;
export type PerfilSchemaInput = TypeOf<typeof perfilSchema>;

export type Usuario = {
	id: string;
	nome: string;
	username: string;
	email?: string;
	telefone?: string | null | undefined;
	password: string;
	active: string;
	baseId: string;
	setorId: string;
	cargoId: string;
	created_at: string;
	updated_at: string;
	Base: Pick<Base, "nome">;
	Setor: Pick<Setor, "nome" | "nomeVisivel">;
	Cargo: Pick<Cargo, "nome" | "nomeVisivel">;
};
