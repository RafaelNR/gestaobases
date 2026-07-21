"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BaseController", {
    enumerable: true,
    get: function() {
        return BaseController;
    }
});
const _common = require("@nestjs/common");
const _zodpipe = require("../pipe/zod.pipe");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let BaseController = class BaseController {
    constructor(){}
    handleSuccessResponse({ code, message, response }) {
        if (message && !response) {
            return {
                status: code,
                success: true,
                message: message
            };
        }
        if (!message && response) {
            return {
                status: code,
                success: true,
                response: response
            };
        }
        if (message && response) {
            return {
                status: code,
                success: true,
                message: message,
                response: response
            };
        }
        return {
            status: code,
            success: true
        };
    }
};
BaseController = _ts_decorate([
    (0, _common.UsePipes)(_zodpipe.ZodValidationPipe),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [])
], BaseController);

//# sourceMappingURL=BaseController.js.map