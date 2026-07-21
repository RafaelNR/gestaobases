"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CargoController", {
    enumerable: true,
    get: function() {
        return CargoController;
    }
});
const _common = require("@nestjs/common");
const _client = require("../../../generated/prisma/client");
const _BaseController = require("../../common/bases/BaseController");
const _userdecorator = require("../../common/decorator/user.decorator");
const _logrepository = require("../../infra/logger/repository/log.repository");
const _rolesdecorator = require("../../infra/guard/roles.decorator");
const _cargodto = require("./dto/cargo.dto");
const _cargorepository = require("./repository/cargo.repository");
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
let CargoController = class CargoController extends _BaseController.BaseController {
    constructor(cargoRepository, logService){
        super(), this.cargoRepository = cargoRepository, this.logService = logService;
    }
    async findAll() {
        const cargos = await this.cargoRepository.findAll();
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: cargos
        });
    }
    async findBySetor(setor) {
        if (!setor) throw new _common.HttpException('Setor não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const cargos = await this.cargoRepository.findBySetor(setor);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: cargos
        });
    }
    async findBySetorId(setorId) {
        if (!setorId) throw new _common.HttpException('Setor não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const cargos = await this.cargoRepository.findBySetorId(setorId);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: cargos
        });
    }
    async findOne(id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const cargo = await this.cargoRepository.findOne(id);
        if (!cargo) throw new _common.HttpException('Cargo não existe.', _common.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: cargo
        });
    }
    async create(user, createCargoRequestDto) {
        const exists = await this.cargoRepository.count({
            OR: [
                {
                    nome: createCargoRequestDto.nome
                },
                {
                    nomeVisivel: createCargoRequestDto.nomeVisivel
                }
            ]
        });
        if (exists > 0) throw new _common.HttpException('Já existe um cargo com este nome.', _common.HttpStatus.CONFLICT);
        const newCargo = await this.cargoRepository.create({
            nome: createCargoRequestDto.nome,
            nomeVisivel: createCargoRequestDto.nomeVisivel,
            setor: createCargoRequestDto.setor
        });
        this.logService.created({
            mensagem: `Cargo "${newCargo.nome}" criado pelo usuário ${user.nome}`,
            artefato: newCargo.id,
            modulo: 'Cargo',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: newCargo
        });
    }
    async update(user, id, updateCargoRequestDto) {
        if (!id || id !== updateCargoRequestDto.id) throw new _common.HttpException('Dados não são válidos.', _common.HttpStatus.FORBIDDEN);
        const cargo = await this.cargoRepository.findOne(id);
        if (!cargo) throw new _common.HttpException('Cargo não existe.', _common.HttpStatus.NOT_FOUND);
        const exists = await this.cargoRepository.count({
            id: {
                not: id
            },
            OR: [
                {
                    nome: updateCargoRequestDto.nome
                },
                {
                    nomeVisivel: updateCargoRequestDto.nomeVisivel
                }
            ]
        });
        if (exists > 0) throw new _common.HttpException('Já existe um cargo com este nome.', _common.HttpStatus.CONFLICT);
        const updatedCargo = await this.cargoRepository.update(id, {
            nome: updateCargoRequestDto.nome,
            nomeVisivel: updateCargoRequestDto.nomeVisivel,
            setor: updateCargoRequestDto.setor
        });
        this.logService.updated({
            mensagem: `Cargo "${updatedCargo.nome}" atualizado pelo usuário ${user.nome}`,
            artefato: updatedCargo.id,
            modulo: 'Cargo',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: updatedCargo
        });
    }
    async remove(user, id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const cargo = await this.cargoRepository.findOne(id);
        if (!cargo) throw new _common.HttpException('Cargo não existe.', _common.HttpStatus.NOT_FOUND);
        try {
            await this.cargoRepository.remove(id);
        } catch (err) {
            if (err instanceof _client.Prisma.PrismaClientKnownRequestError && err.code === 'P2003') {
                throw new _common.HttpException('Não é possível excluir: existem registros vinculados.', _common.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Cargo "${cargo.nome}" excluído pelo usuário ${user.nome}`,
            artefato: cargo.id,
            modulo: 'Cargo',
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
], CargoController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)('setor/:setor'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _common.Param)('setor')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CargoController.prototype, "findBySetor", null);
_ts_decorate([
    (0, _common.Get)('setorId/:setorId'),
    (0, _rolesdecorator.Autenticado)(),
    _ts_param(0, (0, _common.Param)('setorId')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CargoController.prototype, "findBySetorId", null);
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
], CargoController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _cargodto.CreateCargoRequestDto === "undefined" ? Object : _cargodto.CreateCargoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], CargoController.prototype, "create", null);
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
        typeof _cargodto.UpdateCargoRequestDto === "undefined" ? Object : _cargodto.UpdateCargoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], CargoController.prototype, "update", null);
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
], CargoController.prototype, "remove", null);
CargoController = _ts_decorate([
    (0, _common.Controller)('cargos'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _cargorepository.CargoRepository === "undefined" ? Object : _cargorepository.CargoRepository,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], CargoController);

//# sourceMappingURL=cargo.controller.js.map