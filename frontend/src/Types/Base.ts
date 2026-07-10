import { TypeOf } from "zod";
import { baseInsertSchema, baseUpdateSchema } from "@/Schemas/Base.schemas";
import { User } from "../../../backend/dist/generated/prisma/client";

export type BaseInsertInput = TypeOf<typeof baseInsertSchema>;
export type BaseUpdateInput = TypeOf<typeof baseUpdateSchema>;

export type TipoAmbulancia = "USA" | "USB" | "USA_USB";

export const TIPO_AMBULANCIA_LABELS: Record<TipoAmbulancia, string> = {
	USA: "USA",
	USB: "USB",
	USA_USB: "USA/USB",
};

export type Base = {
	id: string;
	nome: string;
	tipo_ambulancias: TipoAmbulancia;
	User: Pick<User, "nome">;
	created_at: string;
	updated_at: string;
};
