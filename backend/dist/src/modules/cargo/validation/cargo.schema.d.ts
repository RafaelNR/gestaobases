import { z } from 'zod';
export declare const CreateCargoSchema: z.ZodObject<{
    nome: z.ZodString;
    nomeVisivel: z.ZodString;
    setor: z.ZodString;
}, z.core.$strip>;
export declare const UpdateCargoSchema: z.ZodObject<{
    nome: z.ZodString;
    nomeVisivel: z.ZodString;
    setor: z.ZodString;
    id: z.ZodString;
}, z.core.$strip>;
