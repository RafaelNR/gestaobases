"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotificacoesController", {
    enumerable: true,
    get: function() {
        return NotificacoesController;
    }
});
const _common = require("@nestjs/common");
const _notificationrepository = require("./repository/notification.repository");
const _authguard = require("../../infra/auth/auth.guard");
const _userdecorator = require("../../common/decorator/user.decorator");
const _BaseController = require("../../common/bases/BaseController");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
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
let NotificacoesController = class NotificacoesController extends _BaseController.BaseController {
    constructor(repository){
        super(), this.repository = repository;
    }
    async findAll(user) {
        const notificacoes = await this.repository.findByUser(user.id);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: notificacoes
        });
    }
    async countUnread(user) {
        const total = await this.repository.countUnread(user.id);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: total
        });
    }
    async markAsRead(id, user) {
        await this.repository.markAsRead(id, user.id);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK
        });
    }
    async markAllAsRead(user) {
        await this.repository.markAllAsRead(user.id);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK
        });
    }
    async remove(id, user) {
        await this.repository.remove(id, user.id);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK
        });
    }
    async removeAll(user) {
        await this.repository.removeAll(user.id);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK
        });
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], NotificacoesController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)('unread/count'),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], NotificacoesController.prototype, "countUnread", null);
_ts_decorate([
    (0, _common.Put)(':id/lida'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], NotificacoesController.prototype, "markAsRead", null);
_ts_decorate([
    (0, _common.Put)('lida/todas'),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], NotificacoesController.prototype, "markAllAsRead", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], NotificacoesController.prototype, "remove", null);
_ts_decorate([
    (0, _common.Delete)('remover/all/my_user'),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], NotificacoesController.prototype, "removeAll", null);
NotificacoesController = _ts_decorate([
    (0, _common.UseGuards)(_authguard.AuthGuard),
    (0, _common.Controller)('notificacoes'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _notificationrepository.NotificacoesRepository === "undefined" ? Object : _notificationrepository.NotificacoesRepository
    ])
], NotificacoesController);

//# sourceMappingURL=notification.controller.js.map