"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReceituariosModule", {
    enumerable: true,
    get: function() {
        return ReceituariosModule;
    }
});
const _common = require("@nestjs/common");
const _receituarioscontroller = require("./receituarios.controller");
const _receituariosrepository = require("./repository/receituarios.repository");
const _receituariosservice = require("./services/receituarios.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let ReceituariosModule = class ReceituariosModule {
};
ReceituariosModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _receituarioscontroller.ReceituariosController
        ],
        providers: [
            _receituariosrepository.ReceituariosRepository,
            _receituariosservice.ReceituariosService
        ],
        exports: [
            _receituariosservice.ReceituariosService
        ]
    })
], ReceituariosModule);

//# sourceMappingURL=receituarios.module.js.map