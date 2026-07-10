import { TypeOf } from "zod";
import { configSchema } from "@/Schemas/Config.schemas";

export type ConfigSchemaInput = TypeOf<typeof configSchema>;
