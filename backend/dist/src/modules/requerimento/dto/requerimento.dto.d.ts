declare const CreateRequerimentoAlmoxarifadoAndCMERequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    tipo: import("zod").ZodEnum<{
        readonly CME: "CME";
        readonly Farmacia: "Farmacia";
        readonly Almoxarifado: "Almoxarifado";
        readonly Administrativo: "Administrativo";
    }>;
    setor: import("zod").ZodString;
    base: import("zod").ZodString;
    status: import("zod").ZodEnum<{
        Rascunho: "Rascunho";
        Recebido: "Recebido";
    }>;
    obs: import("zod").ZodOptional<import("zod").ZodString>;
    itens: import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodString>;
        produtoId: import("zod").ZodOptional<import("zod").ZodString>;
        medicamentoId: import("zod").ZodOptional<import("zod").ZodString>;
        quantidade: import("zod").ZodNumber;
    }, import("zod/v4/core").$strip>>;
}, import("zod/v4/core").$strip>>;
export declare class CreateRequerimentoAlmoxarifadoAndCMERequestDto extends CreateRequerimentoAlmoxarifadoAndCMERequestDto_base {
}
declare const CreateRequerimentoFarmaciaRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    tipo: import("zod").ZodEnum<{
        readonly CME: "CME";
        readonly Farmacia: "Farmacia";
        readonly Almoxarifado: "Almoxarifado";
        readonly Administrativo: "Administrativo";
    }>;
    setor: import("zod").ZodString;
    base: import("zod").ZodString;
    ambulanciaId: import("zod").ZodString;
    obs: import("zod").ZodOptional<import("zod").ZodString>;
    status: import("zod").ZodEnum<{
        Rascunho: "Rascunho";
        Recebido: "Recebido";
    }>;
    itens: import("zod").ZodArray<import("zod").ZodObject<{
        ocorrencia: import("zod").ZodString;
        id: import("zod").ZodOptional<import("zod").ZodString>;
        produtoId: import("zod").ZodOptional<import("zod").ZodString>;
        medicamentoId: import("zod").ZodOptional<import("zod").ZodString>;
        quantidade: import("zod").ZodNumber;
    }, import("zod/v4/core").$strip>>;
}, import("zod/v4/core").$strip>>;
export declare class CreateRequerimentoFarmaciaRequestDto extends CreateRequerimentoFarmaciaRequestDto_base {
}
declare const UpdateRequerimentoAlmoxarifadoAndCMERequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    setor: import("zod").ZodOptional<import("zod").ZodString>;
    base: import("zod").ZodOptional<import("zod").ZodString>;
    obs: import("zod").ZodOptional<import("zod").ZodString>;
    itens: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
        id: import("zod").ZodOptional<import("zod").ZodString>;
        produtoId: import("zod").ZodOptional<import("zod").ZodString>;
        medicamentoId: import("zod").ZodOptional<import("zod").ZodString>;
        quantidade: import("zod").ZodNumber;
    }, import("zod/v4/core").$strip>>>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateRequerimentoAlmoxarifadoAndCMERequestDto extends UpdateRequerimentoAlmoxarifadoAndCMERequestDto_base {
}
declare const UpdateRequerimentoFarmaciaRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    setor: import("zod").ZodOptional<import("zod").ZodString>;
    base: import("zod").ZodOptional<import("zod").ZodString>;
    ambulanciaId: import("zod").ZodOptional<import("zod").ZodString>;
    obs: import("zod").ZodOptional<import("zod").ZodString>;
    itens: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
        ocorrencia: import("zod").ZodString;
        id: import("zod").ZodOptional<import("zod").ZodString>;
        produtoId: import("zod").ZodOptional<import("zod").ZodString>;
        medicamentoId: import("zod").ZodOptional<import("zod").ZodString>;
        quantidade: import("zod").ZodNumber;
    }, import("zod/v4/core").$strip>>>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateRequerimentoFarmaciaRequestDto extends UpdateRequerimentoFarmaciaRequestDto_base {
}
declare const AddItemRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    produtoId: import("zod").ZodOptional<import("zod").ZodString>;
    medicamentoId: import("zod").ZodOptional<import("zod").ZodString>;
    quantidade: import("zod").ZodNumber;
    ocorrencia: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>>;
export declare class AddItemRequestDto extends AddItemRequestDto_base {
}
declare const UpdateItemRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    quantidade: import("zod").ZodNumber;
    ocorrencia: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
}, import("zod/v4/core").$strip>>;
export declare class UpdateItemRequestDto extends UpdateItemRequestDto_base {
}
declare const ChangeStatusRequestDto_base: import("@anatine/zod-nestjs").ZodDtoStatic<import("zod").ZodObject<{
    status: import("zod").ZodEnum<{
        Recebido: "Recebido";
        Analise: "Analise";
        Separacao: "Separacao";
        Finalizado: "Finalizado";
        Cancelado: "Cancelado";
    }>;
}, import("zod/v4/core").$strip>>;
export declare class ChangeStatusRequestDto extends ChangeStatusRequestDto_base {
}
export {};
