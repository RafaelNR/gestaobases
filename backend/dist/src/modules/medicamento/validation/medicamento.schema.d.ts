import { z } from 'zod';
export declare const CreateMedicamentoSchema: z.ZodObject<{
    nome: z.ZodString;
    codigo: z.ZodNumber;
    especificacao: z.ZodString;
    categoria: z.ZodString;
    descricao: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const UpdateMedicamentoSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    codigo: z.ZodNumber;
    especificacao: z.ZodString;
    categoria: z.ZodString;
    descricao: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    active: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
