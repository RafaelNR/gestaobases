declare const CreateCategoriaProdutoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    nome: import("zod").ZodString;
}, import("zod/v4/core").$strip>>;
export declare class CreateCategoriaProdutoRequestDto extends CreateCategoriaProdutoRequestDto_base {
}
declare const UpdateCategoriaProdutoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    id: import("zod").ZodString;
    nome: import("zod").ZodString;
}, import("zod/v4/core").$strip>>;
export declare class UpdateCategoriaProdutoRequestDto extends UpdateCategoriaProdutoRequestDto_base {
}
export {};
