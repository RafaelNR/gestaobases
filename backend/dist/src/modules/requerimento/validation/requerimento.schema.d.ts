import { z } from 'zod';
export declare const CreateRequerimentoAlmoxarifadoAndCMESchema: z.ZodObject<{
    tipo: z.ZodEnum<{
        readonly CME: "CME";
        readonly Farmacia: "Farmacia";
        readonly Almoxarifado: "Almoxarifado";
        readonly Administrativo: "Administrativo";
    }>;
    setor: z.ZodString;
    base: z.ZodString;
    status: z.ZodEnum<{
        Rascunho: "Rascunho";
        Recebido: "Recebido";
    }>;
    obs: z.ZodOptional<z.ZodString>;
    itens: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        produtoId: z.ZodOptional<z.ZodString>;
        medicamentoId: z.ZodOptional<z.ZodString>;
        quantidade: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const CreateRequerimentoFarmaciaSchema: z.ZodObject<{
    tipo: z.ZodEnum<{
        readonly CME: "CME";
        readonly Farmacia: "Farmacia";
        readonly Almoxarifado: "Almoxarifado";
        readonly Administrativo: "Administrativo";
    }>;
    setor: z.ZodString;
    base: z.ZodString;
    ambulanciaId: z.ZodString;
    obs: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<{
        Rascunho: "Rascunho";
        Recebido: "Recebido";
    }>;
    itens: z.ZodArray<z.ZodObject<{
        ocorrencia: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
        produtoId: z.ZodOptional<z.ZodString>;
        medicamentoId: z.ZodOptional<z.ZodString>;
        quantidade: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const UpdateRequerimentoAlmoxarifadoAndCMESchema: z.ZodObject<{
    setor: z.ZodOptional<z.ZodString>;
    base: z.ZodOptional<z.ZodString>;
    obs: z.ZodOptional<z.ZodString>;
    itens: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        produtoId: z.ZodOptional<z.ZodString>;
        medicamentoId: z.ZodOptional<z.ZodString>;
        quantidade: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const UpdateRequerimentoFarmaciaSchema: z.ZodObject<{
    setor: z.ZodOptional<z.ZodString>;
    base: z.ZodOptional<z.ZodString>;
    ambulanciaId: z.ZodOptional<z.ZodString>;
    obs: z.ZodOptional<z.ZodString>;
    itens: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ocorrencia: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
        produtoId: z.ZodOptional<z.ZodString>;
        medicamentoId: z.ZodOptional<z.ZodString>;
        quantidade: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const AddItemSchema: z.ZodObject<{
    produtoId: z.ZodOptional<z.ZodString>;
    medicamentoId: z.ZodOptional<z.ZodString>;
    quantidade: z.ZodNumber;
    ocorrencia: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const UpdateItemSchema: z.ZodObject<{
    quantidade: z.ZodNumber;
    ocorrencia: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const ChangeStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        Recebido: "Recebido";
        Analise: "Analise";
        Separacao: "Separacao";
        Finalizado: "Finalizado";
        Cancelado: "Cancelado";
    }>;
}, z.core.$strip>;
