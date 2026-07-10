import { TypeOf } from "zod";
import { cargoInsertSchema, cargoUpdateSchema } from "@/Schemas/Cargo.schemas";
import { Setor } from "./Setor";

export type CargoSchemaInsert = TypeOf<typeof cargoInsertSchema>;
export type CargoSchemaUpdate = TypeOf<typeof cargoUpdateSchema>;

export type Cargo = {
	id: string;
	nome: string;
	nomeVisivel: string;
	setor: string;
	created_at: string;
	updated_at: string;
	Setor: Pick<Setor, "nomeVisivel">;
};
