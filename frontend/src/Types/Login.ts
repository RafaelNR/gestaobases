import { TypeOf } from "zod";
import { loginSchema } from "@/Schemas/Login.schemas";

export type ILogin = TypeOf<typeof loginSchema>;
