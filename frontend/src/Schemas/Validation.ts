import { z } from "zod";

export function handleErroValidate(error: z.ZodError) {
	if (error instanceof z.ZodError) {
		const err = error.issues.map((e) => ({
			path: e.path[0],
			message: e.message,
		}));
		console.log("Erro de Validação.", err);
		// console.log(error);
		return err;
	}
}
