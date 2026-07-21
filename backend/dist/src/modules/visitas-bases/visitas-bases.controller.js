"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VisitasBasesController", {
    enumerable: true,
    get: function() {
        return VisitasBasesController;
    }
});
const _common = require("@nestjs/common");
const _BaseController = require("../../common/bases/BaseController");
const _userdecorator = require("../../common/decorator/user.decorator");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
const _logrepository = require("../../infra/logger/repository/log.repository");
const _visitasbasesdto = require("./dto/visitas-bases.dto");
const _visitasbasesrepository = require("./repository/visitas-bases.repository");
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
let VisitasBasesController = class VisitasBasesController extends _BaseController.BaseController {
    constructor(service, logService){
        super(), this.service = service, this.logService = logService;
    }
    async findAll(mes, ano) {
        const data = await this.service.findAll({
            mes: mes ? Number(mes) : undefined,
            ano: ano ? Number(ano) : undefined
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    async findOne(id) {
        const data = await this.service.findOne(id);
        if (!data) throw new _common.HttpException('Visita não encontrada.', _common.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    async create(dto, user) {
        const data = await this.service.create({
            ...dto,
            userId: user.id
        });
        this.logService.created({
            mensagem: `Visita à base "${data.base}" registrada para ${data.data}`,
            artefato: data.id,
            modulo: 'VisitasBases',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: data
        });
    }
    async update(id, dto, user) {
        const data = await this.service.update(id, {
            ...dto,
            userId: user.id
        });
        this.logService.updated({
            mensagem: `Visita à base "${data.base}" atualizada`,
            artefato: id,
            modulo: 'VisitasBases',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: data
        });
    }
    async remove(id, user) {
        const visita = await this.service.findOne(id);
        if (!visita) throw new _common.HttpException('Visita não encontrada.', _common.HttpStatus.NOT_FOUND);
        await this.service.remove(id);
        this.logService.deleted({
            mensagem: `Visita à base "${visita.base}" removida`,
            artefato: id,
            modulo: 'VisitasBases',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED
        });
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _common.Query)('mes')),
    _ts_param(1, (0, _common.Query)('ano')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], VisitasBasesController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], VisitasBasesController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Frota
    ]),
    _ts_param(0, (0, _common.Body)()),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _visitasbasesdto.CreateVisitaBaseRequestDto === "undefined" ? Object : _visitasbasesdto.CreateVisitaBaseRequestDto,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], VisitasBasesController.prototype, "create", null);
_ts_decorate([
    (0, _common.Put)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Frota
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _common.Body)()),
    _ts_param(2, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _visitasbasesdto.UpdateVisitaBaseRequestDto === "undefined" ? Object : _visitasbasesdto.UpdateVisitaBaseRequestDto,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], VisitasBasesController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Frota
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_param(1, (0, _userdecorator.User)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String,
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser
    ]),
    _ts_metadata("design:returntype", Promise)
], VisitasBasesController.prototype, "remove", null);
VisitasBasesController = _ts_decorate([
    (0, _common.Controller)('visitas-bases'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _visitasbasesrepository.VisitasBasesService === "undefined" ? Object : _visitasbasesrepository.VisitasBasesService,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], VisitasBasesController);

//# sourceMappingURL=visitas-bases.controller.js.map