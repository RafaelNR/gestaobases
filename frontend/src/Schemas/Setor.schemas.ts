import { z } from "zod";

export const setorSchemaCreate = z.object({
	nome: z
		.string("Campo nome é obrigatório")
		.min(2, "Mínimo 2 caracteres")
		.max(100),
	nomeVisivel: z
		.string("Campo nome é obrigatório")
		.min(2, "Mínimo 2 caracteres")
		.max(100),
});

export const setorSchemaUpdate = z.object({
	id: z.uuid(),
	nome: z
		.string("Campo nome é obrigatório")
		.min(2, "Mínimo 2 caracteres")
		.max(100),
	nomeVisivel: z
		.string("Campo nome é obrigatório")
		.min(2, "Mínimo 2 caracteres")
		.max(100),
});
