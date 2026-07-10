import { TypeOf } from "zod";
import {
	ambulanciaFormSchema,
	ambulanciaInsertSchema,
	ambulanciaUpdateSchema,
} from "@/Schemas/Ambulancia.schemas";
import { Base } from "./Base";
import { Usuario } from "./Usuarios";

export enum TipoUnidade {
	USA = "USA",
	USB = "USB",
}

export type AmbulanciaInsertSchemaInput = TypeOf<typeof ambulanciaInsertSchema>;
export type AmbulanciaUpdateSchemaInput = TypeOf<typeof ambulanciaUpdateSchema>;
export type AmbulanciaFormSchemaInput = TypeOf<typeof ambulanciaFormSchema>;

export type Ambulancia = {
	id: string;
	nome: string;
	tipo: TipoUnidade;
	baseId: string;
	Base: Pick<Base, "nome">;
	User: Pick<Usuario, "nome">;
	created_at: string;
	updated_at: string;
};
