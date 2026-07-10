import { z } from "zod";

export const receituarioSchema = z.object({
	data: z.string().min(1, "Informe a data"),
	data_ocorrencia: z.string(),
	ocorrencia: z.string().min(1, "Informe o nº de ocorrência"),
	medico: z.string().min(1, "Selecione um médico"),
	base: z.string().min(1, "Selecione uma base"),
	ambulancia: z.string().min(1, "Selecione uma ambulância"),
	requerimento: z.string(),
	obs: z.string(),
});
