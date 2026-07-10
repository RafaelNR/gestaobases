import { TypeOf } from "zod";
import { novaSenhaSchema, recuperarSchema } from "@/Schemas/Registro.schemas";

export type IRecuperar = TypeOf<typeof recuperarSchema>;
export type INovaSenha = TypeOf<typeof novaSenhaSchema>;
