declare const CreateCategoriasMedicamentoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    nome: import("zod").ZodString;
}, import("zod/v4/core").$strip>>;
export declare class CreateCategoriasMedicamentoRequestDto extends CreateCategoriasMedicamentoRequestDto_base {
}
declare const UpdateCategoriasMedicamentoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    id: import("zod").ZodString;
    nome: import("zod").ZodString;
    active: import("zod").ZodOptional<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateCategoriasMedicamentoRequestDto extends UpdateCategoriasMedicamentoRequestDto_base {
}
export {};
