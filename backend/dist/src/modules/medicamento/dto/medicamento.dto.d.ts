declare const CreateMedicamentoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    nome: import("zod").ZodString;
    codigo: import("zod").ZodNumber;
    especificacao: import("zod").ZodString;
    categoria: import("zod").ZodString;
    descricao: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
}, import("zod/v4/core").$strip>>;
export declare class CreateMedicamentoRequestDto extends CreateMedicamentoRequestDto_base {
}
declare const UpdateMedicamentoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    id: import("zod").ZodString;
    nome: import("zod").ZodString;
    codigo: import("zod").ZodNumber;
    especificacao: import("zod").ZodString;
    categoria: import("zod").ZodString;
    descricao: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
    active: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateMedicamentoRequestDto extends UpdateMedicamentoRequestDto_base {
}
export {};
