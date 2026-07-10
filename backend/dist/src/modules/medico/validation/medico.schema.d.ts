import { z } from 'zod';
export declare const CreateMedicoSchema: z.ZodObject<{
    nome: z.ZodString;
    crm: z.ZodString;
    telefone: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const UpdateMedicoSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    crm: z.ZodString;
    telefone: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
