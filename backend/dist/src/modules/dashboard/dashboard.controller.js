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
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
const BaseController_1 = require("../../common/bases/BaseController");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const enums_1 = require("../../../generated/prisma/enums");
const user_decorator_1 = require("../../common/decorator/user.decorator");
let DashboardController = class DashboardController extends BaseController_1.BaseController {
    service;
    constructor(service) {
        super();
        this.service = service;
    }
    async findAllRequerimentosCounts(user) {
        const data = await this.service.countRequerimentos(user);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: data,
        });
    }
    async findStats(user, tipo) {
        const data = await this.service.countRequerimentos(user, tipo);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: data,
        });
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)('requerimentos/count'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Base]),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "findAllRequerimentosCounts", null);
__decorate([
    (0, common_1.Get)('requerimentos/count/:tipo'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "findStats", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.Controller)('dashboard'),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map