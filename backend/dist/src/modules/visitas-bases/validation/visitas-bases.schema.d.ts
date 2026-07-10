import { z } from 'zod';
export declare const CreateVisitaBaseSchema: z.ZodObject<{
    data: z.ZodCoercedDate<unknown>;
    base: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    outro_motivo: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    descricao: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const UpdateVisitaBaseSchema: z.ZodObject<{
    data: z.ZodCoercedDate<unknown>;
    base: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    outro_motivo: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    descricao: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
