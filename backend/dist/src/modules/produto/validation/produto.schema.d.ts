import { z } from 'zod';
export declare const CreateProdutoSchema: z.ZodObject<{
    nome: z.ZodString;
    codigo: z.ZodNumber;
    unidade: z.ZodEnum<{
        Unidade: "Unidade";
        Pacote: "Pacote";
        Kit: "Kit";
        Caixa: "Caixa";
    }>;
    categoria: z.ZodString;
    usa: z.ZodDefault<z.ZodBoolean>;
    cme: z.ZodDefault<z.ZodBoolean>;
    fora_alx: z.ZodDefault<z.ZodBoolean>;
    ordem: z.ZodNumber;
    descricao: z.ZodNullable<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    active: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export declare const UpdateProdutoSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    codigo: z.ZodNumber;
    unidade: z.ZodEnum<{
        Unidade: "Unidade";
        Pacote: "Pacote";
        Kit: "Kit";
        Caixa: "Caixa";
    }>;
    categoria: z.ZodString;
    usa: z.ZodDefault<z.ZodBoolean>;
    cme: z.ZodDefault<z.ZodBoolean>;
    fora_alx: z.ZodDefault<z.ZodBoolean>;
    ordem: z.ZodNumber;
    descricao: z.ZodNullable<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    active: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
