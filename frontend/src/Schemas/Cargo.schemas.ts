import { z } from "zod";

export const cargoInsertSchema = z.object({
	nome: z
		.string("Campo nome é obrigatório")
		.min(2, "Mínimo 2 caracteres")
		.max(100),
	nomeVisivel: z
		.string("Campo nome é obrigatório")
		.min(2, "Mínimo 2 caracteres")
		.max(100),
	setor: z.string("Setor é requerido").min(2, "Mínimo 2 caracteres").max(255),
});

export const cargoUpdateSchema = z
	.object({
		id: z
			.string("Identificador é obrigatório")
			.min(2, "Mínimo 2 caracteres")
			.max(100),
	})
	.extend(cargoInsertSchema.shape);
