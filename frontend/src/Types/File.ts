import { TypeOf } from "zod";
import {
	fileRequiredSchema,
	fileSchema,
	filesArraySchema,
} from "@/Schemas/File.schemas";

export type FileSchemaInput = TypeOf<typeof fileSchema>;
export type FileRequiredSchemaInput = TypeOf<typeof fileRequiredSchema>;
export type FilesArraySchemaInput = TypeOf<typeof filesArraySchema>;
