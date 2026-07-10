import { z } from "zod";

export const produtoInsertSchema = z.object({
	nome: z.string().min(2, "Mínimo 2 caracteres").max(150),
	codigo: z.preprocess(
		(value) => (value === "" ? undefined : Number(value)),
		z.number("Código obrigatório").int().positive(),
	),
	unidade: z.enum(["Unidade", "Pacote", "Kit", "Caixa"]),
	categoria: z.string().min(1, "Selecione uma categoria"),
	usa: z.boolean().default(false),
	cme: z.boolean().default(false),
	fora_alx: z.boolean().default(false),
	ordem: z.coerce.number().min(0),
	descricao: z.string().max(500).optional().or(z.literal("")).nullable(),
});

export const produtoUpdateSchema = z
	.object({
		id: z.uuid("Identificador inválido"),
	})
	.extend(produtoInsertSchema.shape);
