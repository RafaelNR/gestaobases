declare const CreateMedicoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    nome: import("zod").ZodString;
    crm: import("zod").ZodString;
    telefone: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
    email: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
}, import("zod/v4/core").$strip>>;
export declare class CreateMedicoRequestDto extends CreateMedicoRequestDto_base {
}
declare const UpdateMedicoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    id: import("zod").ZodString;
    nome: import("zod").ZodString;
    crm: import("zod").ZodString;
    telefone: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
    email: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateMedicoRequestDto extends UpdateMedicoRequestDto_base {
}
export {};
