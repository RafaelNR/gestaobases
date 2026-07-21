"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VisitasBasesModule", {
    enumerable: true,
    get: function() {
        return VisitasBasesModule;
    }
});
const _common = require("@nestjs/common");
const _visitasbasescontroller = require("./visitas-bases.controller");
const _visitasbasesrepository = require("./repository/visitas-bases.repository");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let VisitasBasesModule = class VisitasBasesModule {
};
VisitasBasesModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _visitasbasescontroller.VisitasBasesController
        ],
        providers: [
            _visitasbasesrepository.VisitasBasesService
        ],
        exports: [
            _visitasbasesrepository.VisitasBasesService
        ]
    })
], VisitasBasesModule);

//# sourceMappingURL=visitas-bases.module.js.map