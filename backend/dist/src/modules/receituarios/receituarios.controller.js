"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReceituariosController", {
    enumerable: true,
    get: function() {
        return ReceituariosController;
    }
});
const _common = require("@nestjs/common");
const _BaseController = require("../../common/bases/BaseController");
const _userdecorator = require("../../common/decorator/user.decorator");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
const _logrepository = require("../../infra/logger/repository/log.repository");
const _receituariosdto = require("./dto/receituarios.dto");
const _receituariosservice = require("./services/receituarios.service");
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
let ReceituariosController = class ReceituariosController extends _BaseController.BaseController {
    constructor(service, logService){
        super(), this.service = service, this.logService = logService;
    }
    // ----- GET (/medicos) - Administrador/Farmacia ----
    async findAll(base, status, user) {
        const data = await this.service.findAll({
            base,
            status: status
        }, user);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    // ----- GET (/medicos/:id) - Administrador/Farmacia ----
    async findOne(id) {
        const data = await this.service.findOne(id);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    // ----- POST (/medicos) - Administrador/Farmacia ----
    async create(dto, user) {
        const data = await this.service.create(dto, user);
        this.logService.created({
            mensagem: `Receituário ${data.numero} criado`,
            artefato: data.id,
            modulo: 'Receituarios',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: data
        });
    }
    // ----- PUT (/medicos) - Administrador/Farmacia ----
    async update(id, dto, user) {
        const data = await this.service.update(id, dto, user);
        this.logService.updated({
            mensagem: `Receituário ${id} atualizado`,
            artefato: id,
            modulo: 'Receituarios',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    // ----- PUT (/medicos/:id/status) - Administrador/Farmacia ----
    async changeStatus(id, dto, user) {
        const data = await this.service.changeStatus(id, dto);
        this.logService.updated({
            mensagem: `Status do Receituário alterado para ${dto.status}`,
            artefato: id,
            modulo: 'Receituarios',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    // ----- DELETE (/medicos) - Administrador/Farmacia ----
    async remove(id, user) {
        await this.service.remove(id);
        this.logService.deleted({
            mensagem: `Receituário ${id} removido`,
            artefato: id,
            modulo: 'Receituarios',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED
        });
    }
    // ----- POST (/medicos) - Administrador/Farmacia ----
    async addMedicamento(id, dto, user) {
        const data = await this.service.addMedicamento(id, dto, user.id);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: data
        });
    }
    // ----- PUT (/medicos) - Administrador/Farmacia ----
    async updateMedicamento(id, medId, dto) {
        const data = await this.service.updateMedicamento(id, medId, dto);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    // ----- DELETE (/medicos) - Administrador/Farmacia ----
    async removeMedicamento(id, medId, user) {
        void user;
        await this.service.removeMedicamento(id, medId);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED
        });
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Query)('base')),
    _ts_param(1, (0, _common.Query)('status')),
    _ts_param(2, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], ReceituariosController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], ReceituariosController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _receituariosdto.CreateReceituarioRequestDto === "undefined" ? Object : _receituariosdto.CreateReceituarioRequestDto,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], ReceituariosController.prototype, "create", null);
_ts_decorate([
    (0, _common.Put)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_param(2, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _receituariosdto.UpdateReceituarioRequestDto === "undefined" ? Object : _receituariosdto.UpdateReceituarioRequestDto,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], ReceituariosController.prototype, "update", null);
_ts_decorate([
    (0, _common.Put)(':id/status'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_param(2, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _receituariosdto.ChangeStatusReceituarioRequestDto === "undefined" ? Object : _receituariosdto.ChangeStatusReceituarioRequestDto,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], ReceituariosController.prototype, "changeStatus", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], ReceituariosController.prototype, "remove", null);
_ts_decorate([
    (0, _common.Post)(':id/medicamentos'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_param(2, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _receituariosdto.AddMedicamentoRequestDto === "undefined" ? Object : _receituariosdto.AddMedicamentoRequestDto,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], ReceituariosController.prototype, "addMedicamento", null);
_ts_decorate([
    (0, _common.Put)(':id/medicamentos/:medId'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Param)('medId')),
    _ts_param(2, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String,
        typeof _receituariosdto.UpdateMedicamentoRequestDto === "undefined" ? Object : _receituariosdto.UpdateMedicamentoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], ReceituariosController.prototype, "updateMedicamento", null);
_ts_decorate([
    (0, _common.Delete)(':id/medicamentos/:medId'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Param)('medId')),
    _ts_param(2, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], ReceituariosController.prototype, "removeMedicamento", null);
ReceituariosController = _ts_decorate([
    (0, _common.Controller)('receituarios'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _receituariosservice.ReceituariosService === "undefined" ? Object : _receituariosservice.ReceituariosService,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], ReceituariosController);

//# sourceMappingURL=receituarios.controller.js.map