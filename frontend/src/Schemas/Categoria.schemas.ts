import { z } from "zod";

export const categoriaProdutoSchema = z.object({
	nome: z.string().min(2, "Mínimo 2 caracteres").max(100),
});

export const categoriaMedicamentoSchema = z.object({
	nome: z.string().min(2, "Mínimo 2 caracteres").max(100),
	active: z.boolean(),
});
