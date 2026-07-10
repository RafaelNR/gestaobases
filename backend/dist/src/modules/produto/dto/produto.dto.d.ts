declare const CreateProdutoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    nome: import("zod").ZodString;
    codigo: import("zod").ZodNumber;
    unidade: import("zod").ZodEnum<{
        Unidade: "Unidade";
        Pacote: "Pacote";
        Kit: "Kit";
        Caixa: "Caixa";
    }>;
    categoria: import("zod").ZodString;
    usa: import("zod").ZodDefault<import("zod").ZodBoolean>;
    cme: import("zod").ZodDefault<import("zod").ZodBoolean>;
    fora_alx: import("zod").ZodDefault<import("zod").ZodBoolean>;
    ordem: import("zod").ZodNumber;
    descricao: import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodOptional<import("zod").ZodString>, import("zod").ZodLiteral<"">]>>;
    active: import("zod").ZodDefault<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>>;
export declare class CreateProdutoRequestDto extends CreateProdutoRequestDto_base {
}
declare const UpdateProdutoRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    id: import("zod").ZodString;
    nome: import("zod").ZodString;
    codigo: import("zod").ZodNumber;
    unidade: import("zod").ZodEnum<{
        Unidade: "Unidade";
        Pacote: "Pacote";
        Kit: "Kit";
        Caixa: "Caixa";
    }>;
    categoria: import("zod").ZodString;
    usa: import("zod").ZodDefault<import("zod").ZodBoolean>;
    cme: import("zod").ZodDefault<import("zod").ZodBoolean>;
    fora_alx: import("zod").ZodDefault<import("zod").ZodBoolean>;
    ordem: import("zod").ZodNumber;
    descricao: import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodOptional<import("zod").ZodString>, import("zod").ZodLiteral<"">]>>;
    active: import("zod").ZodDefault<import("zod").ZodBoolean>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateProdutoRequestDto extends UpdateProdutoRequestDto_base {
}
export {};
