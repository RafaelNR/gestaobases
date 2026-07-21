"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BasesController", {
    enumerable: true,
    get: function() {
        return BasesController;
    }
});
const _common = require("@nestjs/common");
const _basedto = require("./dto/base.dto");
const _baserepository = require("./repository/base.repository");
const _BaseController = require("../../common/bases/BaseController");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
const _userdecorator = require("../../common/decorator/user.decorator");
const _logrepository = require("../../infra/logger/repository/log.repository");
const _client = require("../../../generated/prisma/client");
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
let BasesController = class BasesController extends _BaseController.BaseController {
    constructor(baseRepository, logService){
        super(), this.baseRepository = baseRepository, this.logService = logService;
    }
    // ----- GET (/bases) - Autenticado ---
    async findAll() {
        const bases = await this.baseRepository.findAll();
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: bases
        });
    }
    // ----- GET (/bases/:id) - Administrador ----
    async findOne(id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const base = await this.baseRepository.findOne(id);
        if (!base) throw new _common.HttpException('Base não existe.', _common.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: base
        });
    }
    // ----- POST (/bases) - Administrador ----
    async create(user, createBaseRequestDto) {
        const exists = await this.baseRepository.count({
            nome: createBaseRequestDto.nome
        });
        if (exists > 0) throw new _common.HttpException('Já existe uma base com este nome.', _common.HttpStatus.CONFLICT);
        const newBase = await this.baseRepository.create(createBaseRequestDto);
        this.logService.created({
            mensagem: `Base "${newBase.nome}" criada pelo usuário ${user.nome}`,
            artefato: newBase.id,
            modulo: 'Base',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: newBase
        });
    }
    // ----- PUT (/bases/:id) - Administrador ----
    async update(user, id, updateBaseRequestDto) {
        if (!id || id !== updateBaseRequestDto.id) throw new _common.HttpException('Dados não são válidos.', _common.HttpStatus.FORBIDDEN);
        const base = await this.baseRepository.findOne(id);
        if (!base) throw new _common.HttpException('Base não existe.', _common.HttpStatus.NOT_FOUND);
        const updatedBase = await this.baseRepository.update(id, updateBaseRequestDto);
        this.logService.updated({
            mensagem: `Base "${updatedBase.nome}" atualizada pelo usuário ${user.nome}`,
            artefato: updatedBase.id,
            modulo: 'Base',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: updatedBase
        });
    }
    // ----- DELETE (/bases/:id) - Administrador ----
    async remove(user, id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const base = await this.baseRepository.findOne(id);
        if (!base) throw new _common.HttpException('Base não existe.', _common.HttpStatus.NOT_FOUND);
        try {
            await this.baseRepository.remove(id);
        } catch (err) {
            if (err instanceof _client.Prisma.PrismaClientKnownRequestError && err.code === 'P2003') {
                throw new _common.HttpException('Não é possível excluir: existem registros vinculados.', _common.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Base "${base.nome}" excluída pelo usuário ${user.nome}`,
            artefato: base.id,
            modulo: 'Base',
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
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], BasesController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], BasesController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _basedto.CreateBaseRequestDto === "undefined" ? Object : _basedto.CreateBaseRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], BasesController.prototype, "create", null);
_ts_decorate([
    (0, _common.Put)(':id'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_param(2, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String,
        typeof _basedto.UpdateBaseRequestDto === "undefined" ? Object : _basedto.UpdateBaseRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], BasesController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], BasesController.prototype, "remove", null);
BasesController = _ts_decorate([
    (0, _common.Controller)('bases'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _baserepository.BaseRepository === "undefined" ? Object : _baserepository.BaseRepository,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], BasesController);

//# sourceMappingURL=base.controller.js.map