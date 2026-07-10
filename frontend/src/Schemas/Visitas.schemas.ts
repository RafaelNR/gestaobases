import { z } from "zod";

export const visitaCreateSchema = z
	.object({
		data: z.coerce.date("Data é requerida"),
		base: z.string().optional(),
		outro_motivo: z.string().optional(),
		descricao: z.string().optional(),
	})
	.superRefine(({ base, outro_motivo }, ctx) => {
		if (!base && !outro_motivo) {
			ctx.addIssue({
				code: "custom",
				message: "Deve informar uma base ou um outro motivo.",
				path: ["base"],
			});
			return;
		}

		if (base && outro_motivo) {
			ctx.addIssue({
				code: "custom",
				message: "Não pode informar uma base e um outro motivo.",
				path: ["base"],
			});
			return;
		}
	});

export const visitaUpdateSchema = z
	.object({
		id: z.string("ID é requerido"),
		data: z.coerce.date("Data é requerida"),
		base: z.string().optional(),
		outro_motivo: z.string().optional(),
		descricao: z.string().optional(),
	})
	.superRefine(({ base, outro_motivo }, ctx) => {
		if (!base && !outro_motivo) {
			ctx.addIssue({
				code: "custom",
				message: "Deve informar uma base ou um outro motivo.",
				path: ["base"],
			});
			return;
		}

		if (base && outro_motivo) {
			ctx.addIssue({
				code: "custom",
				message: "Não pode informar uma base e um outro motivo.",
				path: ["base"],
			});
			return;
		}
	});
