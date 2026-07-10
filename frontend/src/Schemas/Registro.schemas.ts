import { z } from "zod";
import { ValidacaoCPF } from "@/Utils/ValidacaoCPF";

export const recuperarSchema = z.object({
	email: z
		.email({ error: "Email é requerido." })
		.min(5, "Email deve conter pelo menos 5 caracteres.")
		.max(190, "Email deve conter no max. 190 caracteres."),
	cpf: z
		.string({ error: "CPF é requerido." })
		.min(10, "CPF deve conter pelo menos 10 caracteres.")
		.max(15, "CPF deve ter no máximo 15 caracteres.")
		.refine((value) => ValidacaoCPF(value), { message: "CPF não é valido." }),
	recaptcha: z.string().optional(),
});

export const novaSenhaSchema = z
	.object({
		token: z.string({ error: "Token é requerido." }).min(1, "Token é requerido."),
		password: z
			.string({ error: "Senha é requerida." })
			.min(8, "Senha deve conter pelo menos 8 caracteres.")
			.max(32, "Senha deve ter no máximo 32 caracteres."),
		confirma_password: z
			.string({ error: "Confirmação de senha é requerida." })
			.min(8, "Confirmação de senha deve conter pelo menos 8 caracteres.")
			.max(32, "Confirmação de senha deve ter no máximo 32 caracteres."),
		recaptcha: z.string().optional(),
	})
	.refine((data) => data.password === data.confirma_password, {
		path: ["confirma_password"],
		message: "As senhas não conferem.",
	});
