import { z } from "zod";

export const usuarioInsertSchema = z.object({
	nome: z
		.string({
			error: "Nome é requerido.",
		})
		.min(5, "Nome deve conter pelo menos 5 caracteres.")
		.max(190, "Nome deve conter no max. 190 caracteres."),
	username: z
		.string({
			error: "Usuário é requerido.",
		})
		.min(3, "Usuário deve conter pelo menos 3 caracteres.")
		.max(20, "Usuário deve conter no max. 20 caracteres."),
	telefone: z.preprocess(
		(val: any) => (val === "" || !val ? undefined : val),
		z.string().optional(),
	),
	email: z.email().optional().nullable(),
	password: z
		.string({
			error: "Senha é requerida.",
		})
		.min(8, "Senha deve conter pelo menos 8 caracteres.")
		.max(32, "Senha deve ter no máximo 32 caracteres."),
	cargoId: z.uuid({
		error: "Cargo é requerido.",
	}),
	setorId: z.uuid({
		error: "Setor é requerido.",
	}),
	baseId: z.uuid({
		error: "Setor é requerido.",
	}),
});

export const usuarioUpdateSchema = usuarioInsertSchema.extend({
	id: z.uuid({
		error: "Identificador é requerido.",
	}),
});

export const perfilSchema = z.object({
	id: z.string({
		error: "Identificador é requerido.",
	}),
	nome: z
		.string({
			error: "Nome é requerido.",
		})
		.min(5, "Nome deve conter pelo menos 5 caracteres.")
		.max(190, "Nome deve conter no max. 190 caracteres."),
	telefone: z.preprocess(
		(val) => (val === "" ? null : val),
		z
			.string()
			.min(14, "Telefone deve conter no mínimo 14 caracteres.")
			.max(15, "Telefone deve conter no máximo 15 caracteres.")
			.nullable()
			.optional(),
	),
	email: z
		.email({
			error: "Email é requerido.",
		})
		.optional()
		.nullable(),
	password: z
		.string({
			error: "Senha é requerida.",
		})
		.min(8, "Senha deve conter pelo menos 8 caracteres.")
		.max(32, "Senha deve ter no máximo 32 caracteres."),
});
