"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SetorController", {
    enumerable: true,
    get: function() {
        return SetorController;
    }
});
const _common = require("@nestjs/common");
const _setordto = require("./dto/setor.dto");
const _setorrepository = require("./repository/setor.repository");
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
let SetorController = class SetorController extends _BaseController.BaseController {
    constructor(setorService, logService){
        super(), this.setorService = setorService, this.logService = logService;
    }
    // ----- GET (/setor) - Administrador ----
    async findAll() {
        const setores = await this.setorService.findAll();
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: setores
        });
    }
    // ----- GET (/setor/:id) - Administrador ----
    async findOne(id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const setor = await this.setorService.findOne(id);
        if (!setor) throw new _common.HttpException('Setor não existe.', _common.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: setor
        });
    }
    // ----- POST (/setor) - Administrador ----
    async create(user, createSetorRequestDto) {
        const exists = await this.setorService.count({
            nome: createSetorRequestDto.nome
        });
        if (exists > 0) throw new _common.HttpException('Já existe um setor com este nome.', _common.HttpStatus.CONFLICT);
        const newSetor = await this.setorService.create({
            nome: createSetorRequestDto.nome,
            nomeVisivel: createSetorRequestDto.nomeVisivel
        });
        this.logService.created({
            mensagem: `Setor "${newSetor.nome}" criado pelo usuário ${user.nome}`,
            artefato: newSetor.id,
            modulo: 'Setor',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: newSetor
        });
    }
    // ----- PUT (/setor/:id) - Administrador ----
    async update(user, id, updateSetorRequestDto) {
        if (!id || id !== updateSetorRequestDto.id) throw new _common.HttpException('Dados não são válidos.', _common.HttpStatus.FORBIDDEN);
        const setor = await this.setorService.findOne(id);
        if (!setor) throw new _common.HttpException('Setor não existe.', _common.HttpStatus.NOT_FOUND);
        const updatedSetor = await this.setorService.update(id, {
            nome: updateSetorRequestDto.nome,
            nomeVisivel: updateSetorRequestDto.nomeVisivel
        });
        this.logService.updated({
            mensagem: `Setor "${updatedSetor.nome}" atualizado pelo usuário ${user.nome}`,
            artefato: updatedSetor.id,
            modulo: 'Setor',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: updatedSetor
        });
    }
    // ----- GET (/requerimentos/farmacia) - Farmacia ----
    async remove(user, id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const setor = await this.setorService.findOne(id);
        if (!setor) throw new _common.HttpException('Setor não existe.', _common.HttpStatus.NOT_FOUND);
        try {
            await this.setorService.remove(id);
        } catch (err) {
            if (err instanceof _client.Prisma.PrismaClientKnownRequestError && err.code === 'P2003') {
                throw new _common.HttpException('Não é possível excluir: existem registros vinculados.', _common.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Setor "${setor.nome}" excluído pelo usuário ${user.nome}`,
            artefato: setor.id,
            modulo: 'Setor',
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
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], SetorController.prototype, "findAll", null);
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
], SetorController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _setordto.CreateSetorRequestDto === "undefined" ? Object : _setordto.CreateSetorRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], SetorController.prototype, "create", null);
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
        typeof _setordto.UpdateSetorRequestDto === "undefined" ? Object : _setordto.UpdateSetorRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], SetorController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], SetorController.prototype, "remove", null);
SetorController = _ts_decorate([
    (0, _common.Controller)('setores'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _setorrepository.SetorService === "undefined" ? Object : _setorrepository.SetorService,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], SetorController);

//# sourceMappingURL=setor.controller.js.map