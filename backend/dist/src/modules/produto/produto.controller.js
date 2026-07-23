"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProdutoController", {
    enumerable: true,
    get: function() {
        return ProdutoController;
    }
});
const _common = require("@nestjs/common");
const _produtodto = require("./dto/produto.dto");
const _produtorepository = require("./repository/produto.repository");
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
let ProdutoController = class ProdutoController extends _BaseController.BaseController {
    constructor(repository, logService){
        super(), this.repository = repository, this.logService = logService;
    }
    // ----- GET (/produtos) - Administrador/Farmacia ----
    async findAll() {
        const produtos = await this.repository.findAll();
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: produtos
        });
    }
    // ----- GET (/produtos/:id) - Administrador/Almoxarifado ----
    async findOne(id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const produto = await this.repository.findOne(id);
        if (!produto) throw new _common.HttpException('Produto não existe.', _common.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: produto
        });
    }
    // ----- POST (/produtos) - Administrador/Almoxarifado ----
    async create(user, createProdutoRequestDto) {
        const existsNome = await this.repository.count({
            nome: createProdutoRequestDto.nome
        });
        if (existsNome > 0) throw new _common.HttpException('Já existe um produto com este nome.', _common.HttpStatus.CONFLICT);
        const existsCodigo = await this.repository.count({
            codigo: createProdutoRequestDto.codigo
        });
        if (existsCodigo > 0) throw new _common.HttpException('Já existe um produto com este código.', _common.HttpStatus.CONFLICT);
        const newProduto = await this.repository.create({
            ...createProdutoRequestDto,
            userId: user.id
        });
        this.logService.created({
            mensagem: `Produto "${newProduto.nome}" criado pelo usuário ${user.nome}`,
            artefato: newProduto.id,
            modulo: 'Produto',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: newProduto
        });
    }
    // ----- PUT (/produtos) - Administrador/Almoxarifado ----
    async update(user, id, updateProdutoRequestDto) {
        if (!id || id !== updateProdutoRequestDto.id) throw new _common.HttpException('Dados não são válidos.', _common.HttpStatus.FORBIDDEN);
        const produto = await this.repository.findOne(id);
        if (!produto) throw new _common.HttpException('Produto não existe.', _common.HttpStatus.NOT_FOUND);
        const updatedProduto = await this.repository.update(id, {
            ...updateProdutoRequestDto,
            userId: user.id
        });
        this.logService.updated({
            mensagem: `Produto "${updatedProduto.nome}" atualizado pelo usuário ${user.nome}`,
            artefato: updatedProduto.id,
            modulo: 'Produto',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: updatedProduto
        });
    }
    // ----- DELETE (/produtos) - Administrador/Almoxarifado ----
    async remove(user, id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const produto = await this.repository.findOne(id);
        if (!produto) throw new _common.HttpException('Produto não existe.', _common.HttpStatus.NOT_FOUND);
        try {
            await this.repository.remove(id);
        } catch (err) {
            if (err instanceof _client.Prisma.PrismaClientKnownRequestError && err.code === 'P2003') {
                throw new _common.HttpException('Não é possível excluir: existem registros vinculados.', _common.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Produto "${produto.nome}" excluído pelo usuário ${user.nome}`,
            artefato: produto.id,
            modulo: 'Produto',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED
        });
    }
    // ----- PUT (/produtos/:id/toggle-active) - Administrador/Almoxarifado ----
    async toggleActive(user, id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const produto = await this.repository.findOne(id);
        if (!produto) throw new _common.HttpException('Produto não existe.', _common.HttpStatus.NOT_FOUND);
        const updatedProduto = await this.repository.update(id, {
            active: !produto.active,
            userId: user.id
        });
        this.logService.actived({
            mensagem: `Produto "${updatedProduto.nome}" ${updatedProduto.active ? 'ativado' : 'desativado'} pelo usuário ${user.nome}`,
            artefato: updatedProduto.id,
            modulo: 'Produto',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: updatedProduto
        });
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _rolesdecorator.Autenticado)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], ProdutoController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador,
        _rolesdecorator.TypeSetor.Almoxarifado
    ]),
    (0, _rolesdecorator.Cargo)([
        _rolesdecorator.TypeCargo.Almoxarifado,
        _rolesdecorator.TypeCargo.AuxAlmoxarifado
    ]),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], ProdutoController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador
    ]),
    (0, _rolesdecorator.Cargo)([
        _rolesdecorator.TypeCargo.Almoxarifado,
        _rolesdecorator.TypeCargo.AuxAlmoxarifado
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _produtodto.CreateProdutoRequestDto === "undefined" ? Object : _produtodto.CreateProdutoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], ProdutoController.prototype, "create", null);
_ts_decorate([
    (0, _common.Put)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador
    ]),
    (0, _rolesdecorator.Cargo)([
        _rolesdecorator.TypeCargo.Almoxarifado,
        _rolesdecorator.TypeCargo.AuxAlmoxarifado
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_param(2, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String,
        typeof _produtodto.UpdateProdutoRequestDto === "undefined" ? Object : _produtodto.UpdateProdutoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], ProdutoController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador
    ]),
    (0, _rolesdecorator.Cargo)([
        _rolesdecorator.TypeCargo.Almoxarifado,
        _rolesdecorator.TypeCargo.AuxAlmoxarifado
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], ProdutoController.prototype, "remove", null);
_ts_decorate([
    (0, _common.Put)(':id/toggle-active'),
    (0, _rolesdecorator.Setor)([
        _rolesdecorator.TypeSetor.Administrador
    ]),
    (0, _rolesdecorator.Cargo)([
        _rolesdecorator.TypeCargo.Almoxarifado,
        _rolesdecorator.TypeCargo.AuxAlmoxarifado
    ]),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], ProdutoController.prototype, "toggleActive", null);
ProdutoController = _ts_decorate([
    (0, _common.Controller)('produtos'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _produtorepository.ProdutoRepository === "undefined" ? Object : _produtorepository.ProdutoRepository,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], ProdutoController);

//# sourceMappingURL=produto.controller.js.map