import { z } from "zod";

export const medicoSchema = z.object({
	nome: z.string().min(2, "Mínimo 2 caracteres").max(100),
	crm: z.string().min(1, "CRM obrigatório").max(20),
	telefone: z.string().max(20).optional().or(z.literal("")),
	email: z.string().email("E-mail inválido").max(150).optional().or(z.literal("")),
});
