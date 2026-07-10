import { z } from "zod";
import {
	type TipoRequerimento,
	type RequerimentoStatus,
	STATUS_REQUERIMENTO_LABELS,
} from "@/Types/Requerimento";

const ItemSchema = z.object({
	id: z.string().optional(),
	quantidade: z
		.number({ error: "Quantidade é requerida." })
		.int()
		.positive("Quantidade deve ser positiva."),
});

const ItemAlmCMEFormSchema = z
	.object({
		produtoId: z.string("Produto é requerido"),
	})
	.extend(ItemSchema.shape);

const ItemFarmaciaSchema = z
	.object({
		ocorrencia: z
			.string({ error: "Ocorrência é obrigatória." })
			.min(1, "Ocorrência é obrigatória."),
		medicamentoId: z.string("Medicamento é requerido."),
	})
	.extend(ItemSchema.shape);

export const requerimentoDefaultFormSchema = z.object({
	setor: z.string("Setor é requerido.").min(1, "Setor é requerido."),
	base: z.string("Base é requerida.").min(1, "Base é requerida."),
	tipo: z.enum(["Almoxarifado", "Farmacia", "CME", "Administrativo"]),
	obs: z.string().optional().nullable(),
	itens: z
		.array(ItemAlmCMEFormSchema)
		.min(1, "O requerimento deve conter pelo menos 1 item")
		.max(1000, "O requerimento deve conter no máximo 1000 itens"),
});

export const requerimentoAlmCMEFormSchema = requerimentoDefaultFormSchema;

export const requerimentoFarmaciaFormSchema = z.object({
	setor: z.string("Setor é requerido.").min(1, "Setor é requerido."),
	base: z.string("Base é requerida.").min(1, "Base é requerida."),
	tipo: z.enum(["Almoxarifado", "Farmacia", "CME", "Administrativo"]),
	ambulancia: z.string("Ambulância é requerida."),
	obs: z.string().optional().nullable(),
	itens: z
		.array(ItemFarmaciaSchema)
		.min(1, "O requerimento deve conter pelo menos 1 item")
		.max(1000, "O requerimento deve conter no máximo 1000 itens"),
});

export const requerimentoFormSchema = requerimentoDefaultFormSchema;

export function getRequerimentoFormSchema(
	tipo: "Farmacia",
): typeof requerimentoFarmaciaFormSchema;
export function getRequerimentoFormSchema(
	tipo: "Almoxarifado" | "CME",
): typeof requerimentoDefaultFormSchema;
export function getRequerimentoFormSchema(tipo: TipoRequerimento) {
	if (tipo === "Farmacia") {
		return requerimentoFarmaciaFormSchema;
	}

	return requerimentoDefaultFormSchema;
}

export const requerimentoFiltroSchema = z.object({
	status: z.enum(STATUS_REQUERIMENTO_LABELS).optional(),
	base: z.string("Base é requerida.").min(1, "Base é requerida.").optional(),
	userId: z
		.string("Usuário é requerido.")
		.min(1, "Usuário é requerido.")
		.optional(),
	ambulanciaId: z
		.string("Ambulância é requerida.")
		.min(1, "Ambulância é requerida.")
		.optional(),
	data_inicial: z
		.string("Data inicial é requerida.")
		.min(1, "Data inicial é requerida.")
		.optional(),
	data_final: z
		.string("Data final é requerida.")
		.min(1, "Data final é requerida.")
		.optional(),
	numero: z
		.number("Número é requerido.")
		.int("Número deve ser inteiro.")
		.positive("Número deve ser positivo.")
		.optional(),
});
