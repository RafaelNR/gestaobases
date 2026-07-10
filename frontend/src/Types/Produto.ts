import { TypeOf } from "zod";
import { categoriaProdutoSchema } from "@/Schemas/Categoria.schemas";
import {
	produtoInsertSchema,
	produtoUpdateSchema,
} from "@/Schemas/Produto.schemas";
import { Usuario } from "./Usuarios";

export type CategoriaProdutoSchemaInput = TypeOf<typeof categoriaProdutoSchema>;
export type ProdutoInsertSchemaInput = TypeOf<typeof produtoInsertSchema>;
export type ProdutoUpdateSchemaInput = TypeOf<typeof produtoUpdateSchema>;

export type Unidade = "Unidade" | "Pacote" | "Kit" | "Caixa";

export type CategoriaProduto = {
	id: string;
	nome: string;
	user: string;
	active: boolean;
	User: Pick<Usuario, "nome">;
	created_at: string;
	updated_at: string;
};

export type Produto = {
	id: string;
	nome: string;
	codigo: number;
	unidade: Unidade;
	categoria: string;
	usa: boolean;
	cme: boolean;
	fora_alx: boolean;
	ordem: number;
	user: string;
	descricao?: string | null;
	active: boolean;
	User: Pick<Usuario, "nome">;
	created_at: string;
	updated_at: string;
};
