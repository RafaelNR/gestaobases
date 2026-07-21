"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DashboardController", {
    enumerable: true,
    get: function() {
        return DashboardController;
    }
});
const _common = require("@nestjs/common");
const _dashboardservice = require("./dashboard.service");
const _BaseController = require("../../common/bases/BaseController");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
const _enums = require("../../../generated/prisma/enums");
const _userdecorator = require("../../common/decorator/user.decorator");
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
let DashboardController = class DashboardController extends _BaseController.BaseController {
    constructor(service){
        super(), this.service = service;
    }
    // ─── GET /dashboard/stats — público ──────────────────────────────────────────
    async findAllRequerimentosCounts(user) {
        const data = await this.service.countRequerimentos(user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    async findStats(user, tipo) {
        const data = await this.service.countRequerimentos(user, tipo);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    async findProximasVisitas(user, dias) {
        const periodoDias = Number(dias);
        const data = await this.service.findProximasVisitas(user, Number.isInteger(periodoDias) ? periodoDias : undefined);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    async findLotesProximosVencimento(user, dias) {
        const periodoDias = Number(dias);
        const data = await this.service.findLotesProximosVencimento(user, Number.isInteger(periodoDias) ? periodoDias : undefined);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    async findUltimasMovimentacoes(user) {
        const data = await this.service.findUltimasMovimentacoes(user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
};
_ts_decorate([
    (0, _common.Get)('requerimentos/count'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Base
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], DashboardController.prototype, "findAllRequerimentosCounts", null);
_ts_decorate([
    (0, _common.Get)('requerimentos/count/:tipo'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('tipo')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _enums.TipoRequerimento === "undefined" ? Object : _enums.TipoRequerimento
    ]),
    _ts_metadata("design:returntype", Promise)
], DashboardController.prototype, "findStats", null);
_ts_decorate([
    (0, _common.Get)('proximas-visitas'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Query)('dias')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], DashboardController.prototype, "findProximasVisitas", null);
_ts_decorate([
    (0, _common.Get)('estoque/lotes-proximos-vencimento'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Query)('dias')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], DashboardController.prototype, "findLotesProximosVencimento", null);
_ts_decorate([
    (0, _common.Get)('estoque/ultimas-movimentacoes'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], DashboardController.prototype, "findUltimasMovimentacoes", null);
DashboardController = _ts_decorate([
    (0, _common.Controller)('dashboard'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _dashboardservice.DashboardService === "undefined" ? Object : _dashboardservice.DashboardService
    ])
], DashboardController);

//# sourceMappingURL=dashboard.controller.js.map