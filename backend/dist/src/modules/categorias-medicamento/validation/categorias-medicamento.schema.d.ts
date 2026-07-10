import { z } from 'zod';
export declare const CreateCategoriasMedicamentoSchema: z.ZodObject<{
    nome: z.ZodString;
}, z.core.$strip>;
export declare const UpdateCategoriasMedicamentoSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    active: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
