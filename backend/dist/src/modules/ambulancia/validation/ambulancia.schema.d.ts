import { z } from 'zod';
export declare const CreateAmbulanciaSchema: z.ZodObject<{
    nome: z.ZodString;
    tipo: z.ZodEnum<{
        USA: "USA";
        USB: "USB";
    }>;
    baseId: z.ZodString;
}, z.core.$strip>;
export declare const UpdateAmbulanciaSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    tipo: z.ZodEnum<{
        USA: "USA";
        USB: "USB";
    }>;
    baseId: z.ZodString;
}, z.core.$strip>;
