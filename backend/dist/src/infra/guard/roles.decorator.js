"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get Autenticado () {
        return Autenticado;
    },
    get Cargo () {
        return Cargo;
    },
    get Setor () {
        return Setor;
    },
    get SetorCargos () {
        return SetorCargos;
    },
    get TypeCargo () {
        return TypeCargo;
    },
    get TypeSetor () {
        return TypeSetor;
    }
});
const _core = require("@nestjs/core");
var TypeSetor = /*#__PURE__*/ function(TypeSetor) {
    TypeSetor["Administrador"] = "Administrador";
    TypeSetor["Administrativo"] = "Administrativo";
    TypeSetor["Almoxarifado"] = "Almoxarifado";
    TypeSetor["Farmacia"] = "Farmacia";
    TypeSetor["CME"] = "CME";
    TypeSetor["Frota"] = "Frota";
    TypeSetor["Enfermagem"] = "Enfermagem";
    TypeSetor["Base"] = "Base";
    return TypeSetor;
}({});
var TypeCargo = /*#__PURE__*/ function(TypeCargo) {
    TypeCargo["Administrador"] = "Administrador";
    TypeCargo["Almoxarifado"] = "Coordenação de Almoxarifado";
    TypeCargo["AuxAlmoxarifado"] = "Auxiliar de Almoxarifado";
    TypeCargo["Separador"] = "Separador";
    TypeCargo["Farmaceutica"] = "Farmacêutica";
    TypeCargo["TecFarmacia"] = "Técnico de Farmácia";
    TypeCargo["CME"] = "CME";
    TypeCargo["Frota"] = "Coordenação Frota";
    TypeCargo["ApoioBases"] = "Apoio Bases";
    TypeCargo["Facilitador"] = "Facilitador";
    TypeCargo["Colaborador"] = "Colaborador";
    TypeCargo["Enfermagem"] = "Coordenação de Enfermagem";
    TypeCargo["RH"] = "RH";
    return TypeCargo;
}({});
const SetorCargos = {
    ["Administrador"]: [
        "Administrador"
    ],
    ["Almoxarifado"]: [
        "Coordenação de Almoxarifado",
        "Auxiliar de Almoxarifado",
        "Separador"
    ],
    ["Farmacia"]: [
        "Farmacêutica",
        "Técnico de Farmácia"
    ],
    ["CME"]: [
        "CME"
    ],
    ["Frota"]: [
        "Coordenação Frota",
        "Apoio Bases"
    ],
    ["Enfermagem"]: [
        "Coordenação de Enfermagem"
    ],
    ["Base"]: [
        "Facilitador",
        "Colaborador"
    ],
    ["Administrativo"]: [
        "RH"
    ]
};
const Autenticado = _core.Reflector.createDecorator({
    key: 'autenticado_key'
});
const Cargo = _core.Reflector.createDecorator({
    key: 'cargo_key'
});
const Setor = _core.Reflector.createDecorator({
    key: 'setor_key'
});

//# sourceMappingURL=roles.decorator.js.map