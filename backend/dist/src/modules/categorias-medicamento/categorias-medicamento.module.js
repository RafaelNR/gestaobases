"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CategoriasMedicamentoModule", {
    enumerable: true,
    get: function() {
        return CategoriasMedicamentoModule;
    }
});
const _common = require("@nestjs/common");
const _categoriasmedicamentocontroller = require("./categorias-medicamento.controller");
const _categoriasmedicamentorepository = require("./repository/categorias-medicamento.repository");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let CategoriasMedicamentoModule = class CategoriasMedicamentoModule {
};
CategoriasMedicamentoModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _categoriasmedicamentocontroller.CategoriasMedicamentoController
        ],
        providers: [
            _categoriasmedicamentorepository.CategoriasMedicamentoRepository
        ],
        exports: [
            _categoriasmedicamentorepository.CategoriasMedicamentoRepository
        ]
    })
], CategoriasMedicamentoModule);

//# sourceMappingURL=categorias-medicamento.module.js.map