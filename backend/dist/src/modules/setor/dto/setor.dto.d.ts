declare const CreateSetorRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    nome: import("zod").ZodString;
    nomeVisivel: import("zod").ZodString;
}, import("zod/v4/core").$strip>>;
export declare class CreateSetorRequestDto extends CreateSetorRequestDto_base {
}
declare const UpdateSetorRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    id: import("zod").ZodString;
    nome: import("zod").ZodString;
    nomeVisivel: import("zod").ZodString;
}, import("zod/v4/core").$strip>>;
export declare class UpdateSetorRequestDto extends UpdateSetorRequestDto_base {
}
export {};
