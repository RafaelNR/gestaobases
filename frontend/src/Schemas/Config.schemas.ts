import { z } from "zod";

const optionalNullableString = z.preprocess(
	(val) => (val === "" ? null : val),
	z.string().nullable().optional(),
);

export const configSchema = z.object({
	nome: z
		.string({ error: "Nome é requerido." })
		.min(3, "Nome deve conter pelo menos 3 caracteres.")
		.trim(),
	site: z
		.string({ error: "Site é requerido." })
		.min(3, "Site deve conter pelo menos 3 caracteres.")
		.trim(),
	email: z.email("Email inválido.").optional().nullable().or(z.literal("")),
	telefone_fixo: z
		.string()
		.optional()
		.nullable()
		.refine((val) => (!val ? true : val.length >= 12 && val.length <= 16), {
			message: "Telefone deve ter de 12 a 16 caracteres.",
		}),
	telefone_celular: z
		.string()
		.optional()
		.nullable()
		.refine((val) => (!val ? true : val.length >= 12 && val.length <= 16), {
			message: "Telefone deve ter de 12 a 16 caracteres.",
		}),
	cnpj: z.string().trim().nullable().optional(),
	estado: optionalNullableString,
	cidade: optionalNullableString,
	bairro: optionalNullableString,
	logradouro: optionalNullableString,
	numero: z.preprocess(
		(val) => (val === "" || !val ? null : Number(val)),
		z
			.number()
			.min(0, "Número deve ser no mínimo 0.")
			.max(99999, "Número deve ser no maximo 99999.")
			.nullable()
			.optional(),
	),
	complemento: optionalNullableString,
	cep: optionalNullableString,
});
