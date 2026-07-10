import { TypeOf } from "zod";
import { setorSchemaCreate, setorSchemaUpdate } from "@/Schemas/Setor.schemas";

export type SetorSchemaInputCreate = TypeOf<typeof setorSchemaCreate>;
export type SetorSchemaInputUpdate = TypeOf<typeof setorSchemaUpdate>;

export type Setor = {
	id: string;
	nome: string;
	nomeVisivel: string;
	created_at: string;
	updated_at: string;
};
