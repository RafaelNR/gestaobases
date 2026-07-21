"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MedicoController", {
    enumerable: true,
    get: function() {
        return MedicoController;
    }
});
const _common = require("@nestjs/common");
const _medicodto = require("./dto/medico.dto");
const _medicorepository = require("./repository/medico.repository");
const _BaseController = require("../../common/bases/BaseController");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
const _userdecorator = require("../../common/decorator/user.decorator");
const _logrepository = require("../../infra/logger/repository/log.repository");
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
let MedicoController = class MedicoController extends _BaseController.BaseController {
    constructor(service, logService){
        super(), this.service = service, this.logService = logService;
    }
    // ----- GET (/medicos) - Administrador/Farmacia ----
    async findAll() {
        const medicos = await this.service.findAll();
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: medicos
        });
    }
    // ----- GET (/medicos/:id) - Administrador/Farmacia ----
    async findOne(id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const medico = await this.service.findOne(id);
        if (!medico) throw new _common.HttpException('Médico não existe.', _common.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: medico
        });
    }
    // ----- POST (/medicos) - Administrador/Farmacia ----
    async create(user, dto) {
        const existsNome = await this.service.count({
            nome: dto.nome
        });
        if (existsNome > 0) throw new _common.HttpException('Já existe um médico com este nome.', _common.HttpStatus.CONFLICT);
        const existsCrm = await this.service.count({
            crm: dto.crm
        });
        if (existsCrm > 0) throw new _common.HttpException('Já existe um médico com este CRM.', _common.HttpStatus.CONFLICT);
        const medico = await this.service.create({
            nome: dto.nome,
            crm: dto.crm,
            telefone: dto.telefone ?? null,
            email: dto.email ?? null,
            userId: user.id
        });
        this.logService.created({
            mensagem: `Médico "${medico.nome}" criado pelo usuário ${user.nome}`,
            artefato: medico.id,
            modulo: 'Medico',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: medico
        });
    }
    // ----- PUT (/medicos/:id) - Administrador/Farmacia ----
    async update(user, id, dto) {
        if (!id || id !== dto.id) throw new _common.HttpException('Dados não são válidos.', _common.HttpStatus.FORBIDDEN);
        const medico = await this.service.findOne(id);
        if (!medico) throw new _common.HttpException('Médico não existe.', _common.HttpStatus.NOT_FOUND);
        const updated = await this.service.update(id, {
            nome: dto.nome,
            crm: dto.crm,
            telefone: dto.telefone ?? null,
            email: dto.email ?? null
        });
        this.logService.updated({
            mensagem: `Médico "${updated.nome}" atualizado pelo usuário ${user.nome}`,
            artefato: updated.id,
            modulo: 'Medico',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: updated
        });
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], MedicoController.prototype, "findAll", null);
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
], MedicoController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _medicodto.CreateMedicoRequestDto === "undefined" ? Object : _medicodto.CreateMedicoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], MedicoController.prototype, "create", null);
_ts_decorate([
    (0, _common.Put)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Farmacia
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_param(2, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String,
        typeof _medicodto.UpdateMedicoRequestDto === "undefined" ? Object : _medicodto.UpdateMedicoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], MedicoController.prototype, "update", null);
MedicoController = _ts_decorate([
    (0, _common.Controller)('medicos'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _medicorepository.MedicoRepository === "undefined" ? Object : _medicorepository.MedicoRepository,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], MedicoController);

//# sourceMappingURL=medico.controller.js.map