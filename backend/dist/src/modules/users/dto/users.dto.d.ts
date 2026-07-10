declare const CreateUserRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    username: import("zod").ZodString;
    nome: import("zod").ZodString;
    email: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEmail>>;
    telefone: import("zod").ZodPreprocess<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    baseId: import("zod").ZodUUID;
    cargoId: import("zod").ZodUUID;
    setorId: import("zod").ZodUUID;
    password: import("zod").ZodString;
    active: import("zod").ZodDefault<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>>;
export declare class CreateUserRequestDto extends CreateUserRequestDto_base {
}
declare const UpdateUserRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    id: import("zod").ZodUUID;
    username: import("zod").ZodString;
    nome: import("zod").ZodString;
    email: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodEmail>>;
    telefone: import("zod").ZodPreprocess<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    baseId: import("zod").ZodUUID;
    cargoId: import("zod").ZodUUID;
    setorId: import("zod").ZodUUID;
    password: import("zod").ZodString;
    active: import("zod").ZodDefault<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateUserRequestDto extends UpdateUserRequestDto_base {
}
declare const UpdatePerfilRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    id: import("zod").ZodString;
    nome: import("zod").ZodString;
    email: import("zod").ZodOptional<import("zod").ZodEmail>;
    telefone: import("zod").ZodPreprocess<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    password: import("zod").ZodString;
}, import("zod/v4/core").$strip>>;
export declare class UpdatePerfilRequestDto extends UpdatePerfilRequestDto_base {
}
export {};
