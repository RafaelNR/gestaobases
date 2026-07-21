"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SetorModule", {
    enumerable: true,
    get: function() {
        return SetorModule;
    }
});
const _common = require("@nestjs/common");
const _setorcontroller = require("./setor.controller");
const _setorrepository = require("./repository/setor.repository");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let SetorModule = class SetorModule {
};
SetorModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _setorcontroller.SetorController
        ],
        providers: [
            _setorrepository.SetorService
        ],
        exports: [
            _setorrepository.SetorService
        ]
    })
], SetorModule);

//# sourceMappingURL=setor.module.js.map