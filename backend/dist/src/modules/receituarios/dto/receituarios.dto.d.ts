declare const CreateReceituarioRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    data: import("zod").ZodString;
    data_ocorrencia: import("zod").ZodString;
    ocorrencia: import("zod").ZodNumber;
    medicoId: import("zod").ZodString;
    base: import("zod").ZodString;
    ambulancia: import("zod").ZodString;
    requerimento: import("zod").ZodOptional<import("zod").ZodString>;
    obs: import("zod").ZodOptional<import("zod").ZodString>;
    medicamentos: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
        medicamento: import("zod").ZodString;
        qnt: import("zod").ZodNumber;
        unidade: import("zod").ZodEnum<{
            ampolas: "ampolas";
            ml: "ml";
        }>;
        administracao: import("zod").ZodEnum<{
            EV: "EV";
            IM: "IM";
            SC: "SC";
            IN: "IN";
            IR: "IR";
            IO: "IO";
        }>;
        diluente: import("zod").ZodOptional<import("zod").ZodEnum<{
            agua_destilada: "agua_destilada";
            nacl09: "nacl09";
        }>>;
        qnt_diluente: import("zod").ZodOptional<import("zod").ZodNumber>;
        qnt_tempo: import("zod").ZodOptional<import("zod").ZodNumber>;
        obs: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod/v4/core").$strip>>>>;
}, import("zod/v4/core").$strip>>;
export declare class CreateReceituarioRequestDto extends CreateReceituarioRequestDto_base {
}
declare const UpdateReceituarioRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    data: import("zod").ZodOptional<import("zod").ZodString>;
    data_ocorrencia: import("zod").ZodOptional<import("zod").ZodString>;
    ocorrencia: import("zod").ZodOptional<import("zod").ZodNumber>;
    medicoId: import("zod").ZodOptional<import("zod").ZodString>;
    base: import("zod").ZodOptional<import("zod").ZodString>;
    ambulancia: import("zod").ZodOptional<import("zod").ZodString>;
    requerimento: import("zod").ZodOptional<import("zod").ZodString>;
    obs: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateReceituarioRequestDto extends UpdateReceituarioRequestDto_base {
}
declare const AddMedicamentoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    medicamento: import("zod").ZodString;
    qnt: import("zod").ZodNumber;
    unidade: import("zod").ZodEnum<{
        ampolas: "ampolas";
        ml: "ml";
    }>;
    administracao: import("zod").ZodEnum<{
        EV: "EV";
        IM: "IM";
        SC: "SC";
        IN: "IN";
        IR: "IR";
        IO: "IO";
    }>;
    diluente: import("zod").ZodOptional<import("zod").ZodEnum<{
        agua_destilada: "agua_destilada";
        nacl09: "nacl09";
    }>>;
    qnt_diluente: import("zod").ZodOptional<import("zod").ZodNumber>;
    qnt_tempo: import("zod").ZodOptional<import("zod").ZodNumber>;
    obs: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>>;
export declare class AddMedicamentoRequestDto extends AddMedicamentoRequestDto_base {
}
declare const UpdateMedicamentoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    qnt: import("zod").ZodOptional<import("zod").ZodNumber>;
    unidade: import("zod").ZodOptional<import("zod").ZodEnum<{
        ampolas: "ampolas";
        ml: "ml";
    }>>;
    administracao: import("zod").ZodOptional<import("zod").ZodEnum<{
        EV: "EV";
        IM: "IM";
        SC: "SC";
        IN: "IN";
        IR: "IR";
        IO: "IO";
    }>>;
    diluente: import("zod").ZodOptional<import("zod").ZodEnum<{
        agua_destilada: "agua_destilada";
        nacl09: "nacl09";
    }>>;
    qnt_diluente: import("zod").ZodOptional<import("zod").ZodNumber>;
    qnt_tempo: import("zod").ZodOptional<import("zod").ZodNumber>;
    obs: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateMedicamentoRequestDto extends UpdateMedicamentoRequestDto_base {
}
declare const ChangeStatusReceituarioRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    status: import("zod").ZodEnum<{
        Finalizado: "Finalizado";
        Cancelado: "Cancelado";
        Aberto: "Aberto";
    }>;
}, import("zod/v4/core").$strip>>;
export declare class ChangeStatusReceituarioRequestDto extends ChangeStatusReceituarioRequestDto_base {
}
export {};
