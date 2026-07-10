import { z } from "zod";

export const medicamentoSchema = z.object({
	nome: z.string().min(2, "Mínimo 2 caracteres").max(150),
	codigo: z.number().min(1, "Código obrigatório").max(99999),
	especificacao: z.string().min(1, "Especificação obrigatória").max(200),
	categoria: z.string().min(1, "Selecione uma categoria"),
	descricao: z.string().max(500).optional().or(z.literal("")),
});
