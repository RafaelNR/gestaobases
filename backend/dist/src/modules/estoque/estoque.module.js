"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EstoqueModule", {
    enumerable: true,
    get: function() {
        return EstoqueModule;
    }
});
const _common = require("@nestjs/common");
const _estoquecontroller = require("./estoque.controller");
const _estoquerepository = require("./repository/estoque.repository");
const _estoqueservice = require("./services/estoque.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let EstoqueModule = class EstoqueModule {
};
EstoqueModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _estoquecontroller.EstoqueController
        ],
        providers: [
            _estoquerepository.EstoqueRepository,
            _estoqueservice.EstoqueService
        ],
        exports: [
            _estoqueservice.EstoqueService
        ]
    })
], EstoqueModule);

//# sourceMappingURL=estoque.module.js.map