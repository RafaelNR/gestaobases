import { z } from "zod";

export const loginSchema = z.object({
	username: z
		.string({ error: "Nome de usuário é requerido" })
		.min(3, "Nome de usuário deve conter pelo menos 3 caracteres.")
		.max(20, "Nome de usuário deve ter no máximo 20 caracteres."),
	password: z
		.string({
			error: "Senha é requerida.",
		})
		.min(8, "Senha deve ter pelo menos 8 caracteres.")
		.max(16, "Senha deve ter no maximo 16 caracteres."),
});
