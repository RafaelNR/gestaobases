"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PasswordResetController", {
    enumerable: true,
    get: function() {
        return PasswordResetController;
    }
});
const _common = require("@nestjs/common");
const _throttler = require("@nestjs/throttler");
const _passwordresetservice = require("./password-reset.service");
const _requestresetdto = require("./dto/request-reset.dto");
const _authdecorator = require("../../infra/auth/auth.decorator");
const _BaseController = require("../../common/bases/BaseController");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let PasswordResetController = class PasswordResetController extends _BaseController.BaseController {
    constructor(service){
        super(), this.service = service;
    }
    async request(dto, ip) {
        const response = this.service.requestReset(dto, ip);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response,
            message: 'Instruções enviadas se o e-mail existir'
        });
    }
};
_ts_decorate([
    (0, _common.Post)('request'),
    (0, _authdecorator.Public)(),
    (0, _common.HttpCode)(_common.HttpStatus.OK),
    (0, _throttler.Throttle)({
        default: {
            ttl: 60000,
            limit: 3
        }
    }),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _common.Ip)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _requestresetdto.RequestResetDto === "undefined" ? Object : _requestresetdto.RequestResetDto,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], PasswordResetController.prototype, "request", null);
PasswordResetController = _ts_decorate([
    (0, _common.Controller)('auth/password-reset'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _passwordresetservice.PasswordResetService === "undefined" ? Object : _passwordresetservice.PasswordResetService
    ])
], PasswordResetController);

//# sourceMappingURL=password-reset.controller.js.map