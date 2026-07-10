import { Cargo } from "../../../backend/dist/generated/prisma/client";
import { Base } from "./Base";
import { Setor } from "./Setor";

export interface AuthSessionResponse {
	authenticated?: true;
	refreshed?: true;
}

export interface AuthUser {
	id: string;
	nome: string;
	username: string;
	email?: string;
	telefone?: string;
	setor: string;
	cargo: string;
	base: string;
	baseId: string;
	setorId: string;
	cargoId: string;
}

export interface UserMe {
	id: string;
	nome: string;
	username: string;
	email?: string;
	telefone?: string;
	setorId: string;
	cargoId: string;
	baseId: string;
	Base: Pick<Base, "nome" | "tipo_ambulancias">;
	Setor: Pick<Setor, "nome" | "nomeVisivel">;
	Cargo: Pick<Cargo, "nome" | "nomeVisivel">;
}
