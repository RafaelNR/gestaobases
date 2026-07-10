import { z } from 'zod';
export declare const CreateReceituarioSchema: z.ZodObject<{
    data: z.ZodString;
    data_ocorrencia: z.ZodString;
    ocorrencia: z.ZodNumber;
    medicoId: z.ZodString;
    base: z.ZodString;
    ambulancia: z.ZodString;
    requerimento: z.ZodOptional<z.ZodString>;
    obs: z.ZodOptional<z.ZodString>;
    medicamentos: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        medicamento: z.ZodString;
        qnt: z.ZodNumber;
        unidade: z.ZodEnum<{
            ampolas: "ampolas";
            ml: "ml";
        }>;
        administracao: z.ZodEnum<{
            EV: "EV";
            IM: "IM";
            SC: "SC";
            IN: "IN";
            IR: "IR";
            IO: "IO";
        }>;
        diluente: z.ZodOptional<z.ZodEnum<{
            agua_destilada: "agua_destilada";
            nacl09: "nacl09";
        }>>;
        qnt_diluente: z.ZodOptional<z.ZodNumber>;
        qnt_tempo: z.ZodOptional<z.ZodNumber>;
        obs: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
export declare const UpdateReceituarioSchema: z.ZodObject<{
    data: z.ZodOptional<z.ZodString>;
    data_ocorrencia: z.ZodOptional<z.ZodString>;
    ocorrencia: z.ZodOptional<z.ZodNumber>;
    medicoId: z.ZodOptional<z.ZodString>;
    base: z.ZodOptional<z.ZodString>;
    ambulancia: z.ZodOptional<z.ZodString>;
    requerimento: z.ZodOptional<z.ZodString>;
    obs: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const AddMedicamentoSchema: z.ZodObject<{
    medicamento: z.ZodString;
    qnt: z.ZodNumber;
    unidade: z.ZodEnum<{
        ampolas: "ampolas";
        ml: "ml";
    }>;
    administracao: z.ZodEnum<{
        EV: "EV";
        IM: "IM";
        SC: "SC";
        IN: "IN";
        IR: "IR";
        IO: "IO";
    }>;
    diluente: z.ZodOptional<z.ZodEnum<{
        agua_destilada: "agua_destilada";
        nacl09: "nacl09";
    }>>;
    qnt_diluente: z.ZodOptional<z.ZodNumber>;
    qnt_tempo: z.ZodOptional<z.ZodNumber>;
    obs: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const UpdateMedicamentoSchema: z.ZodObject<{
    qnt: z.ZodOptional<z.ZodNumber>;
    unidade: z.ZodOptional<z.ZodEnum<{
        ampolas: "ampolas";
        ml: "ml";
    }>>;
    administracao: z.ZodOptional<z.ZodEnum<{
        EV: "EV";
        IM: "IM";
        SC: "SC";
        IN: "IN";
        IR: "IR";
        IO: "IO";
    }>>;
    diluente: z.ZodOptional<z.ZodEnum<{
        agua_destilada: "agua_destilada";
        nacl09: "nacl09";
    }>>;
    qnt_diluente: z.ZodOptional<z.ZodNumber>;
    qnt_tempo: z.ZodOptional<z.ZodNumber>;
    obs: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const ChangeStatusReceituarioSchema: z.ZodObject<{
    status: z.ZodEnum<{
        Finalizado: "Finalizado";
        Cancelado: "Cancelado";
        Aberto: "Aberto";
    }>;
}, z.core.$strip>;
