"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AmbulanciaController", {
    enumerable: true,
    get: function() {
        return AmbulanciaController;
    }
});
const _common = require("@nestjs/common");
const _ambulanciadto = require("./dto/ambulancia.dto");
const _ambulanciarepository = require("./repository/ambulancia.repository");
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
let AmbulanciaController = class AmbulanciaController extends _BaseController.BaseController {
    constructor(ambulanciaRepository, logService){
        super(), this.ambulanciaRepository = ambulanciaRepository, this.logService = logService;
    }
    // ----- GET (/ambulancias) - Administrador ---
    async findAll() {
        const ambulancias = await this.ambulanciaRepository.findAll();
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: ambulancias
        });
    }
    // ----- GET (/ambulancias/base/:base) - Autenticado ---
    async findAllByBase(base) {
        const ambulancias = await this.ambulanciaRepository.findByBase(base);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: ambulancias
        });
    }
    // ----- GET (/ambulancias/:id) - Administrador ----
    async findOne(id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const ambulancia = await this.ambulanciaRepository.findOne(id);
        if (!ambulancia) throw new _common.HttpException('Ambulância não existe.', _common.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: ambulancia
        });
    }
    // ----- POST (/ambulancias) - Administrador ----
    async create(user, createAmbulanciaRequestDto) {
        const exists = await this.ambulanciaRepository.count({
            nome: createAmbulanciaRequestDto.nome,
            tipo: createAmbulanciaRequestDto.tipo,
            baseId: createAmbulanciaRequestDto.baseId
        });
        if (exists > 0) throw new _common.HttpException('Já existe uma ambulância com este dados: nome, base e tipo.', _common.HttpStatus.CONFLICT);
        const newAmbulancia = await this.ambulanciaRepository.create({
            nome: createAmbulanciaRequestDto.nome,
            baseId: createAmbulanciaRequestDto.baseId,
            tipo: createAmbulanciaRequestDto.tipo
        }, user.id);
        this.logService.created({
            mensagem: `Ambulância "${newAmbulancia.nome}" criada pelo usuário ${user.nome}`,
            artefato: newAmbulancia.id,
            modulo: 'Ambulancia',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: newAmbulancia
        });
    }
    // ----- PUT (/ambulancias/:id) - Administrador ----
    async update(user, id, updateAmbulanciaRequestDto) {
        if (!id || id !== updateAmbulanciaRequestDto.id) throw new _common.HttpException('Dados não são válidos.', _common.HttpStatus.FORBIDDEN);
        const ambulancia = await this.ambulanciaRepository.findOne(id);
        if (!ambulancia) throw new _common.HttpException('Ambulância não existe.', _common.HttpStatus.NOT_FOUND);
        const exists = await this.ambulanciaRepository.count({
            nome: updateAmbulanciaRequestDto.nome,
            baseId: updateAmbulanciaRequestDto.baseId,
            tipo: updateAmbulanciaRequestDto.tipo,
            id: {
                not: id
            }
        });
        if (exists > 0) throw new _common.HttpException('Já existe uma ambulância com este dados: nome, base e tipo.', _common.HttpStatus.CONFLICT);
        const updatedAmbulancia = await this.ambulanciaRepository.update(id, {
            nome: updateAmbulanciaRequestDto.nome,
            tipo: updateAmbulanciaRequestDto.tipo,
            baseId: updateAmbulanciaRequestDto.baseId
        }, user.id);
        this.logService.updated({
            mensagem: `Ambulância "${updatedAmbulancia.nome}" atualizada pelo usuário ${user.nome}`,
            artefato: updatedAmbulancia.id,
            modulo: 'Ambulancia',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: updatedAmbulancia
        });
    }
    // ----- DELETE (/ambulancias/:id) - Administrador ----
    async remove(user, id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const ambulancia = await this.ambulanciaRepository.findOne(id);
        if (!ambulancia) throw new _common.HttpException('Ambulância não existe.', _common.HttpStatus.NOT_FOUND);
        try {
            await this.ambulanciaRepository.remove(id);
        } catch (err) {
            if (err instanceof _client.Prisma.PrismaClientKnownRequestError && err.code === 'P2003') {
                throw new _common.HttpException('Não é possível excluir: existem registros vinculados.', _common.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Ambulância "${ambulancia.nome}" excluída pelo usuário ${user.nome}`,
            artefato: ambulancia.id,
            modulo: 'Ambulancia',
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
], AmbulanciaController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)('base/:base'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _common.Param)('base')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], AmbulanciaController.prototype, "findAllByBase", null);
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
], AmbulanciaController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _ambulanciadto.CreateAmbulanciaRequestDto === "undefined" ? Object : _ambulanciadto.CreateAmbulanciaRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], AmbulanciaController.prototype, "create", null);
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
        typeof _ambulanciadto.UpdateAmbulanciaRequestDto === "undefined" ? Object : _ambulanciadto.UpdateAmbulanciaRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], AmbulanciaController.prototype, "update", null);
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
], AmbulanciaController.prototype, "remove", null);
AmbulanciaController = _ts_decorate([
    (0, _common.Controller)('ambulancias'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _ambulanciarepository.AmbulanciaRepository === "undefined" ? Object : _ambulanciarepository.AmbulanciaRepository,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], AmbulanciaController);

//# sourceMappingURL=ambulancia.controller.js.map