declare const CreateVisitaBaseRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    data: import("zod").ZodCoercedDate<unknown>;
    base: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
    outro_motivo: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
    descricao: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
}, import("zod/v4/core").$strip>>;
export declare class CreateVisitaBaseRequestDto extends CreateVisitaBaseRequestDto_base {
}
declare const UpdateVisitaBaseRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    data: import("zod").ZodCoercedDate<unknown>;
    base: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
    outro_motivo: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
    descricao: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodString>>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateVisitaBaseRequestDto extends UpdateVisitaBaseRequestDto_base {
}
export {};
