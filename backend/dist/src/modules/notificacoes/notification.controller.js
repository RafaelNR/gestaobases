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
exports.NotificacoesController = void 0;
const common_1 = require("@nestjs/common");
const notification_repository_1 = require("./repository/notification.repository");
const auth_guard_1 = require("../../infra/auth/auth.guard");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const BaseController_1 = require("../../common/bases/BaseController");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
let NotificacoesController = class NotificacoesController extends BaseController_1.BaseController {
    repository;
    constructor(repository) {
        super();
        this.repository = repository;
    }
    async findAll(user) {
        const notificacoes = await this.repository.findByUser(user.id);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: notificacoes,
        });
    }
};
exports.NotificacoesController = NotificacoesController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificacoesController.prototype, "findAll", null);
exports.NotificacoesController = NotificacoesController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('notificacoes'),
    __metadata("design:paramtypes", [notification_repository_1.NotificacoesRepository])
], NotificacoesController);
//# sourceMappingURL=notification.controller.js.map