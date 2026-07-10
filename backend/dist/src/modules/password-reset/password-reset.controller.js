"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordResetController = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const password_reset_service_1 = require("./password-reset.service");
const request_reset_dto_1 = require("./dto/request-reset.dto");
const auth_decorator_1 = require("../../infra/auth/auth.decorator");
const BaseController_1 = require("../../common/bases/BaseController");
let PasswordResetController = class PasswordResetController extends BaseController_1.BaseController {
    service;
    constructor(service) {
        super();
        this.service = service;
    }
    async request(dto, ip) {
        const response = this.service.requestReset(dto, ip);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response,
            message: 'Instruções enviadas se o e-mail existir',
        });
    }
};
exports.PasswordResetController = PasswordResetController;
__decorate([
    (0, common_1.Post)('request'),
    (0, auth_decorator_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, throttler_1.Throttle)({ default: { ttl: 60000, limit: 3 } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_reset_dto_1.RequestResetDto, String]),
    __metadata("design:returntype", Promise)
], PasswordResetController.prototype, "request", null);
exports.PasswordResetController = PasswordResetController = __decorate([
    (0, common_1.Controller)('auth/password-reset'),
    __metadata("design:paramtypes", [password_reset_service_1.PasswordResetService])
], PasswordResetController);
//# sourceMappingURL=password-reset.controller.js.map