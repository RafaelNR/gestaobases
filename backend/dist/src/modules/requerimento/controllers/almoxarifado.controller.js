"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AlmoxarifadoController", {
    enumerable: true,
    get: function() {
        return AlmoxarifadoController;
    }
});
const _common = require("@nestjs/common");
const _client = require("../../../../generated/prisma/client");
const _BaseController = require("../../../common/bases/BaseController");
const _userdecorator = require("../../../common/decorator/user.decorator");
const _rolesdecorator = require("../../../infra/guard/roles.decorator");
const _logrepository = require("../../../infra/logger/repository/log.repository");
const _requerimentodto = require("../dto/requerimento.dto");
const _requerimentoservice = require("../services/requerimento.service");
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
const TIPO = _client.TipoRequerimento.Almoxarifado;
const MODULO = 'RequerimentoAlmoxarifado';
let AlmoxarifadoController = class AlmoxarifadoController extends _BaseController.BaseController {
    constructor(service, logService){
        super(), this.service = service, this.logService = logService;
    }
    // ----- GET (/requerimentos/almoxarifado) - Autenticado ----
    async findAll(user) {
        const data = await this.service.findAll(TIPO, user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    async findByStatus(user) {
        const data = await this.service.findStatus(TIPO, user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    async findByFiltro(filtro, user) {
        const data = await this.service.findByFiltro(TIPO, filtro, user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    // ----- GET (/requerimentos/almoxarifado/:id) - Autenticado ----
    async findOne(id, user) {
        const data = await this.service.findOne(id, TIPO, user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    // ----- POST (/requerimentos/almoxarifado) - Autenticado ----
    async create(dto, user) {
        const data = await this.service.create(TIPO, dto, user);
        this.logService.created({
            mensagem: `Requerimento Almoxarifado #${data.numero} criado`,
            artefato: data.id,
            modulo: MODULO,
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: data
        });
    }
    // ----- PUT (/requerimentos/almoxarifado/:id) - Autenticado ----
    async update(id, dto, user) {
        const data = await this.service.update(id, TIPO, dto, user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    // ----- POST (/requerimentos/almoxarifado/:id/enviar) - Autenticado ----
    async enviar(id, user) {
        const data = await this.service.enviar(id, TIPO, user);
        this.logService.updated({
            mensagem: `Requerimento Almoxarifado #${data.numero} enviado`,
            artefato: id,
            modulo: MODULO,
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    // ----- POST (/requerimentos/almoxarifado/:id/status) - Almoxarifado ----
    async changeStatus(id, dto, user) {
        const data = await this.service.changeStatus(id, TIPO, dto, user);
        this.logService.updated({
            mensagem: `Status do Requerimento Almoxarifado alterado para ${dto.status}`,
            artefato: id,
            modulo: MODULO,
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    // ----- DELETE (/requerimentos/almoxarifado/:id) - Autenticado ----
    async delete(id, user) {
        await this.service.delete(id, TIPO, user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED
        });
    }
    // ----- POST (/requerimentos/almoxarifado/:id/itens) - Almoxarifado ----
    async addItem(id, dto, user) {
        const data = await this.service.addItem(id, TIPO, dto, user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: data
        });
    }
    // ----- POST (/requerimentos/almoxarifado/:id/itens) - Almoxarifado ----
    async updateItem(id, itemId, dto, user) {
        const data = await this.service.updateItem(id, itemId, TIPO, dto, user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    // ----- POST (/requerimentos/almoxarifado/:id/itens) - Almoxarifado ----
    async removeItem(id, itemId, user) {
        await this.service.removeItem(id, itemId, TIPO, user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED
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
], AlmoxarifadoController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)('/by/status'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "findByStatus", null);
_ts_decorate([
    (0, _common.Get)('filtro'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _common.Query)()),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof FiltroRequerimentos === "undefined" ? Object : FiltroRequerimentos,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "findByFiltro", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _requerimentodto.CreateRequerimentoAlmoxarifadoAndCMERequestDto === "undefined" ? Object : _requerimentodto.CreateRequerimentoAlmoxarifadoAndCMERequestDto,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "create", null);
_ts_decorate([
    (0, _common.Put)(':id'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_param(2, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _requerimentodto.UpdateRequerimentoAlmoxarifadoAndCMERequestDto === "undefined" ? Object : _requerimentodto.UpdateRequerimentoAlmoxarifadoAndCMERequestDto,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "update", null);
_ts_decorate([
    (0, _common.Post)(':id/enviar'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "enviar", null);
_ts_decorate([
    (0, _common.Put)(':id/status'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Almoxarifado
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_param(2, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _requerimentodto.ChangeStatusRequestDto === "undefined" ? Object : _requerimentodto.ChangeStatusRequestDto,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "changeStatus", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "delete", null);
_ts_decorate([
    (0, _common.Post)(':id/itens'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Almoxarifado),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_param(2, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _requerimentodto.AddItemRequestDto === "undefined" ? Object : _requerimentodto.AddItemRequestDto,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "addItem", null);
_ts_decorate([
    (0, _common.Put)(':id/itens/:itemId'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Almoxarifado),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Param)('itemId')),
    _ts_param(2, (0, _common.Body)()),
    _ts_param(3, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String,
        typeof _requerimentodto.UpdateItemRequestDto === "undefined" ? Object : _requerimentodto.UpdateItemRequestDto,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "updateItem", null);
_ts_decorate([
    (0, _common.Delete)(':id/itens/:itemId'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Almoxarifado),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Param)('itemId')),
    _ts_param(2, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "removeItem", null);
AlmoxarifadoController = _ts_decorate([
    (0, _common.Controller)('requerimentos/almoxarifado'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _requerimentoservice.RequerimentoService === "undefined" ? Object : _requerimentoservice.RequerimentoService,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], AlmoxarifadoController);

//# sourceMappingURL=almoxarifado.controller.js.map