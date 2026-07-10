import { z } from 'zod';
export declare const CreateUserRequestSchema: z.ZodObject<{
    username: z.ZodString;
    nome: z.ZodString;
    email: z.ZodNullable<z.ZodOptional<z.ZodEmail>>;
    telefone: z.ZodPreprocess<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    baseId: z.ZodUUID;
    cargoId: z.ZodUUID;
    setorId: z.ZodUUID;
    password: z.ZodString;
    active: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
