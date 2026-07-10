import { z } from 'zod';
export declare const CreateCategoriaProdutoSchema: z.ZodObject<{
    nome: z.ZodString;
}, z.core.$strip>;
export declare const UpdateCategoriaProdutoSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
}, z.core.$strip>;
