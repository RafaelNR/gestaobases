import { z } from "zod";
// bytes
const KB = 1024;
const MB = 1024 * KB;
const MAX_SIZE_25MB = 5 * 5 * MB;

const ACCEPTED_MIME = [
	"image/jpeg",
	"image/jpg",
	"image/webp",
	"image/png",
	"application/pdf",
	"audio/mpeg",
	"audio/wav",
	"video/mp4",
	"video/webm",
];

export const filesArraySchema = z
	.array(z.instanceof(File))
	.max(5, { message: "Máximo 5 arquivos." })
	.superRefine((files, ctx) => {
		for (const [i, file] of files.entries()) {
			if (!ACCEPTED_MIME.includes(file.type)) {
				ctx.addIssue({
					code: "custom",
					path: [i],
					message: `Tipo do arquivo ${file.name} não permitido.`,
				});
			}
			if (file.size > MAX_SIZE_25MB) {
				ctx.addIssue({
					code: "too_big",
					origin: "file",
					maximum: MAX_SIZE_25MB,
					path: [i],
					message: `Arquivo ${file.name} maior que ${MAX_SIZE_25MB / MB}MB.`,
				});
			}
		}
	});

export const fileSchema = z
	.any()
	.optional()
	.superRefine((file, ctx) => {
		if (!file) return;

		if (!(file instanceof File)) {
			ctx.addIssue({
				code: "custom",
				message: "O arquivo enviado é inválido.",
			});
			return;
		}

		if (file && !ACCEPTED_MIME.includes(file.type)) {
			ctx.addIssue({
				code: "custom",
				message: "Tipo de arquivo não permitido.",
			});
		}
		if (file && file.size > MAX_SIZE_25MB) {
			ctx.addIssue({
				code: "too_big",
				origin: "file",
				maximum: MAX_SIZE_25MB,
				message: `Máx ${MAX_SIZE_25MB / MB}MB`,
			});
		}
	});

export const fileRequiredSchema = z.any().superRefine((file, ctx) => {
	if (!file) return;

	if (!(file instanceof File)) {
		ctx.addIssue({
			code: "custom",
			message: "O arquivo enviado é inválido.",
		});
		return;
	}

	if (file && !ACCEPTED_MIME.includes(file.type)) {
		ctx.addIssue({
			code: "custom",
			message: "Tipo de arquivo não permitido.",
		});
	}
	if (file && file.size > MAX_SIZE_25MB) {
		ctx.addIssue({
			code: "too_big",
			origin: "file",
			maximum: MAX_SIZE_25MB,
			message: `Máx ${MAX_SIZE_25MB / MB}MB`,
		});
	}
});
