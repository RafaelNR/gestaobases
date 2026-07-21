"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LogController", {
    enumerable: true,
    get: function() {
        return LogController;
    }
});
const _common = require("@nestjs/common");
const _BaseController = require("../../common/bases/BaseController");
const _logrepository = require("./repository/log.repository");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let LogController = class LogController extends _BaseController.BaseController {
    constructor(service){
        super(), this.service = service;
    }
};
LogController = _ts_decorate([
    (0, _common.Controller)('logs'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _logrepository.LogRepository === "undefined" ? Object : _logrepository.LogRepository
    ])
], LogController);

//# sourceMappingURL=log.controller.js.map