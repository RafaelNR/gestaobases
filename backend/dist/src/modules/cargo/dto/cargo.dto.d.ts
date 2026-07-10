declare const CreateCargoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    nome: import("zod").ZodString;
    nomeVisivel: import("zod").ZodString;
    setor: import("zod").ZodString;
}, import("zod/v4/core").$strip>>;
export declare class CreateCargoRequestDto extends CreateCargoRequestDto_base {
}
declare const UpdateCargoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    nome: import("zod").ZodString;
    nomeVisivel: import("zod").ZodString;
    setor: import("zod").ZodString;
    id: import("zod").ZodString;
}, import("zod/v4/core").$strip>>;
export declare class UpdateCargoRequestDto extends UpdateCargoRequestDto_base {
}
export {};
