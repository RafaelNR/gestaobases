declare const CreateBaseRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    nome: import("zod").ZodString;
    tipo_ambulancias: import("zod").ZodEnum<{
        readonly USA: "USA";
        readonly USB: "USB";
        readonly USA_USB: "USA_USB";
    }>;
}, import("zod/v4/core").$strip>>;
export declare class CreateBaseRequestDto extends CreateBaseRequestDto_base {
}
declare const UpdateBaseRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    id: import("zod").ZodString;
    nome: import("zod").ZodString;
    tipo_ambulancias: import("zod").ZodEnum<{
        readonly USA: "USA";
        readonly USB: "USB";
        readonly USA_USB: "USA_USB";
    }>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateBaseRequestDto extends UpdateBaseRequestDto_base {
}
export {};
