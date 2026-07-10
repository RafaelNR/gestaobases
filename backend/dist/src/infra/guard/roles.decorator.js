"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setor = exports.Cargo = exports.Autenticado = exports.SetorCargos = exports.TypeCargo = exports.TypeSetor = void 0;
const core_1 = require("@nestjs/core");
var TypeSetor;
(function (TypeSetor) {
    TypeSetor["Administrador"] = "Administrador";
    TypeSetor["Administrativo"] = "Administrativo";
    TypeSetor["Almoxarifado"] = "Almoxarifado";
    TypeSetor["Farmacia"] = "Farmacia";
    TypeSetor["CME"] = "CME";
    TypeSetor["Frota"] = "Frota";
    TypeSetor["Base"] = "Base";
})(TypeSetor || (exports.TypeSetor = TypeSetor = {}));
var TypeCargo;
(function (TypeCargo) {
    TypeCargo["Administrador"] = "Administrador";
    TypeCargo["Almoxarifado"] = "Coordena\u00E7\u00E3o de Almoxarifado";
    TypeCargo["AuxAlmoxarifado"] = "Auxiliar de Almoxarifado";
    TypeCargo["Separador"] = "Separador";
    TypeCargo["Farmaceutica"] = "Farmac\u00EAutica";
    TypeCargo["TecFarmacia"] = "T\u00E9cnico de Farm\u00E1cia";
    TypeCargo["CME"] = "CME";
    TypeCargo["Frota"] = "Coordena\u00E7\u00E3o Frota";
    TypeCargo["ApoioBases"] = "Apoio Bases";
    TypeCargo["Facilitador"] = "Facilitador";
    TypeCargo["RH"] = "RH";
})(TypeCargo || (exports.TypeCargo = TypeCargo = {}));
exports.SetorCargos = {
    [TypeSetor.Administrador]: [TypeCargo.Administrador],
    [TypeSetor.Almoxarifado]: [
        TypeCargo.Almoxarifado,
        TypeCargo.AuxAlmoxarifado,
        TypeCargo.Separador,
    ],
    [TypeSetor.Farmacia]: [
        TypeCargo.Farmaceutica,
        TypeCargo.TecFarmacia,
        TypeCargo.ApoioBases,
    ],
    [TypeSetor.CME]: [TypeCargo.CME, TypeCargo.ApoioBases],
    [TypeSetor.Frota]: [TypeCargo.Frota, TypeCargo.Facilitador],
    [TypeSetor.Base]: [TypeCargo.ApoioBases, TypeCargo.Facilitador],
    [TypeSetor.Administrativo]: [TypeCargo.RH],
};
exports.Autenticado = core_1.Reflector.createDecorator({
    key: 'autenticado_key',
});
exports.Cargo = core_1.Reflector.createDecorator({
    key: 'cargo_key',
});
exports.Setor = core_1.Reflector.createDecorator({
    key: 'setor_key',
});
//# sourceMappingURL=roles.decorator.js.map