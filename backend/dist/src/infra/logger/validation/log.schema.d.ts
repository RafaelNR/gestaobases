import z from 'zod';
export declare const logCreateSchema: z.ZodObject<{
    modulo: z.ZodString;
    moduloId: z.ZodNumber;
    tipo: z.ZodEnum<{
        readonly created: "created";
        readonly updated: "updated";
        readonly deleted: "deleted";
        readonly status: "status";
        readonly active: "active";
        readonly disable: "disable";
        readonly view: "view";
    }>;
    mensagem: z.ZodString;
    userUUID: z.ZodString;
}, z.core.$strip>;
