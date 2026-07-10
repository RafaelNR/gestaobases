import { z } from "zod";
import { TipoUnidade } from "@/Types/Ambulancia";

export const ambulanciaInsertSchema = z.object({
	nome: z
		.string({
			error: "Nome é requerido.",
		})
		.min(5, "Nome deve conter pelo menos 5 caracteres.")
		.max(190, "Nome deve conter no max. 190 caracteres."),
	tipo: z.enum(TipoUnidade, {
		error: "Tipo é requerido.",
	}),
	baseId: z.string("Base é requerida."),
});

export const ambulanciaUpdateSchema = ambulanciaInsertSchema.extend({
	id: z.string("ID é requerido."),
});

export const ambulanciaFormSchema = z.object({
	nome: z.string().min(2, "Mínimo 2 caracteres").max(100),
	tipo: z.enum(["USA", "USB"]),
	base: z.string().min(1, "Selecione uma base"),
});
