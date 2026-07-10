declare const CreateAmbulanciaRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    nome: import("zod").ZodString;
    tipo: import("zod").ZodEnum<{
        USA: "USA";
        USB: "USB";
    }>;
    baseId: import("zod").ZodString;
}, import("zod/v4/core").$strip>>;
export declare class CreateAmbulanciaRequestDto extends CreateAmbulanciaRequestDto_base {
}
declare const UpdateAmbulanciaRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    id: import("zod").ZodString;
    nome: import("zod").ZodString;
    tipo: import("zod").ZodEnum<{
        USA: "USA";
        USB: "USB";
    }>;
    baseId: import("zod").ZodString;
}, import("zod/v4/core").$strip>>;
export declare class UpdateAmbulanciaRequestDto extends UpdateAmbulanciaRequestDto_base {
}
export {};
