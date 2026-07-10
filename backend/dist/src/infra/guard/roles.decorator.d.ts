export declare enum TypeSetor {
    Administrador = "Administrador",
    Administrativo = "Administrativo",
    Almoxarifado = "Almoxarifado",
    Farmacia = "Farmacia",
    CME = "CME",
    Frota = "Frota",
    Base = "Base"
}
export declare enum TypeCargo {
    Administrador = "Administrador",
    Almoxarifado = "Coordena\u00E7\u00E3o de Almoxarifado",
    AuxAlmoxarifado = "Auxiliar de Almoxarifado",
    Separador = "Separador",
    Farmaceutica = "Farmac\u00EAutica",
    TecFarmacia = "T\u00E9cnico de Farm\u00E1cia",
    CME = "CME",
    Frota = "Coordena\u00E7\u00E3o Frota",
    ApoioBases = "Apoio Bases",
    Facilitador = "Facilitador",
    RH = "RH"
}
export declare const SetorCargos: Record<TypeSetor, TypeCargo[]>;
export declare const Autenticado: import("@nestjs/core").ReflectableDecorator<true, true>;
export declare const Cargo: import("@nestjs/core").ReflectableDecorator<TypeCargo | TypeCargo[], TypeCargo | TypeCargo[]>;
export declare const Setor: import("@nestjs/core").ReflectableDecorator<TypeSetor | TypeSetor[], TypeSetor | TypeSetor[]>;
