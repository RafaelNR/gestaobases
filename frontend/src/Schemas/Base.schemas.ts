import { z } from "zod";

export const baseInsertSchema = z.object({
	nome: z.string().min(2, "Mínimo 2 caracteres").max(100),
	tipo_ambulancias: z.enum(["USA", "USB", "USA_USB"]),
});

export const baseUpdateSchema = z.object({
	id: z.uuid(),
	nome: z.string().min(2, "Mínimo 2 caracteres").max(100),
	tipo_ambulancias: z.enum(["USA", "USB", "USA_USB"]),
});
