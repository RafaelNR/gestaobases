import { z } from "zod";
import {
	tiposMovimentacaoEstoque,
	type TipoMovimentacaoEstoque,
} from "@/Types/Estoque";

export const estoqueCreateSchema = z
	.object({
		produtoId: z.string().optional().nullable(),
		medicamentoId: z.string().optional().nullable(),
		quantidadeMinima: z.number().min(0, "Quantidade mínima inválida"),
		baseId: z.string().min(1, "Selecione uma base"),
		kind: z.enum(["produto", "medicamento"]),
	})
	.superRefine((data, ctx) => {
		if (data.kind === "produto" && !data.produtoId) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Selecione um produto",
				path: ["produtoId"],
			});
		}
		if (data.kind === "medicamento" && !data.medicamentoId) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Selecione um medicamento",
				path: ["medicamentoId"],
			});
		}
		if (!data.medicamentoId && !data.produtoId) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Selecione um medicamento ou produto para adicionar ao estoque",
				path: ["kind"],
			});
		}
	});

export const loteCreateSchema = z.object({
	estoqueId: z.string("Selecione um estoque"),
	validade: z.coerce.date("Data de validade inválida").optional().nullable(),
	lote: z.string("Lote inválido").optional().nullable(),
	quantidade: z.preprocess(
		(value) => Number(value),
		z.number("Quantidade inválida").min(1, "Quantidade deve ser maior que 0"),
	),
});

export const movimentacaoCreatedSchema = z.object({
	loteId: z.string("Seleciona o lote"),
	tipo: z.enum(tiposMovimentacaoEstoque),
	observacao: z.string("Observação inválida").optional().nullable(),
	quantidade: z.preprocess(
		(value) => Number(value),
		z.number("Quantidade inválida").min(1, "Quantidade deve ser maior que 0"),
	),
});
