import { z } from 'zod';
export declare const CreateBaseSchema: z.ZodObject<{
    nome: z.ZodString;
    tipo_ambulancias: z.ZodEnum<{
        readonly USA: "USA";
        readonly USB: "USB";
        readonly USA_USB: "USA_USB";
    }>;
}, z.core.$strip>;
export declare const UpdateBaseSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    tipo_ambulancias: z.ZodEnum<{
        readonly USA: "USA";
        readonly USB: "USB";
        readonly USA_USB: "USA_USB";
    }>;
}, z.core.$strip>;
