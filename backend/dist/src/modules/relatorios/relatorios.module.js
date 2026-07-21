"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RelatoriosModule", {
    enumerable: true,
    get: function() {
        return RelatoriosModule;
    }
});
const _common = require("@nestjs/common");
const _relatorioscontroller = require("./relatorios.controller");
const _relatoriosrepository = require("./repository/relatorios.repository");
const _relatoriosservice = require("./services/relatorios.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let RelatoriosModule = class RelatoriosModule {
};
RelatoriosModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _relatorioscontroller.RelatoriosController
        ],
        providers: [
            _relatoriosrepository.RelatoriosRepository,
            _relatoriosservice.RelatoriosService
        ]
    })
], RelatoriosModule);

//# sourceMappingURL=relatorios.module.js.map