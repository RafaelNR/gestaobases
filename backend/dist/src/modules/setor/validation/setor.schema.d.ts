import { z } from 'zod';
export declare const CreateSetorSchema: z.ZodObject<{
    nome: z.ZodString;
    nomeVisivel: z.ZodString;
}, z.core.$strip>;
export declare const UpdateSetorSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    nomeVisivel: z.ZodString;
}, z.core.$strip>;
