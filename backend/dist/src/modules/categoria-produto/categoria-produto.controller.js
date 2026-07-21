"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CategoriaProdutoController", {
    enumerable: true,
    get: function() {
        return CategoriaProdutoController;
    }
});
const _common = require("@nestjs/common");
const _categoriaprodutodto = require("./dto/categoria-produto.dto");
const _categoriaprodutorepository = require("./repository/categoria-produto.repository");
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
let CategoriaProdutoController = class CategoriaProdutoController extends _BaseController.BaseController {
    constructor(repository, logService){
        super(), this.repository = repository, this.logService = logService;
    }
    // ----- GET (/categorias-produto) - Autenticado ---
    async findAll() {
        const categorias = await this.repository.findAll();
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: categorias
        });
    }
    // ----- GET (/categorias-produto/:id) - Administrador ----
    async findOne(id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const categoria = await this.repository.findOne(id);
        if (!categoria) throw new _common.HttpException('Categoria de produto não existe.', _common.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: categoria
        });
    }
    // ----- POST (/categorias-produto) - Administrador ----
    async create(user, createCategoriaProdutoRequestDto) {
        const exists = await this.repository.count({
            nome: createCategoriaProdutoRequestDto.nome
        });
        if (exists > 0) throw new _common.HttpException('Já existe uma categoria com este nome.', _common.HttpStatus.CONFLICT);
        const newCategoria = await this.repository.create({
            nome: createCategoriaProdutoRequestDto.nome,
            userId: user.id
        });
        this.logService.created({
            mensagem: `Categoria de produto "${newCategoria.nome}" criada pelo usuário ${user.nome}`,
            artefato: newCategoria.id,
            modulo: 'CategoriaProduto',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: newCategoria
        });
    }
    // ----- PUT (/categorias-produto/:id) - Administrador ----
    async update(user, id, updateCategoriaProdutoRequestDto) {
        if (!id || id !== updateCategoriaProdutoRequestDto.id) throw new _common.HttpException('Dados não são válidos.', _common.HttpStatus.FORBIDDEN);
        const categoria = await this.repository.findOne(id);
        if (!categoria) throw new _common.HttpException('Categoria de produto não existe.', _common.HttpStatus.NOT_FOUND);
        const updatedCategoria = await this.repository.update(id, {
            nome: updateCategoriaProdutoRequestDto.nome
        });
        this.logService.updated({
            mensagem: `Categoria de produto "${updatedCategoria.nome}" atualizada pelo usuário ${user.nome}`,
            artefato: updatedCategoria.id,
            modulo: 'CategoriaProduto',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: updatedCategoria
        });
    }
    // ----- DELETE (/categorias-produto/:id) - Administrador ----
    async remove(user, id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const categoria = await this.repository.findOne(id);
        if (!categoria) throw new _common.HttpException('Categoria de produto não existe.', _common.HttpStatus.NOT_FOUND);
        try {
            await this.repository.remove(id);
        } catch (err) {
            if (err instanceof _client.Prisma.PrismaClientKnownRequestError && err.code === 'P2003') {
                throw new _common.HttpException('Não é possível excluir: existem registros vinculados.', _common.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Categoria de produto "${categoria.nome}" excluída pelo usuário ${user.nome}`,
            artefato: categoria.id,
            modulo: 'CategoriaProduto',
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
], CategoriaProdutoController.prototype, "findAll", null);
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
], CategoriaProdutoController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Administrador),
    (0, _rolesdecorator.Cargo)(_rolesdecorator.TypeCargo.Almoxarifado),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _categoriaprodutodto.CreateCategoriaProdutoRequestDto === "undefined" ? Object : _categoriaprodutodto.CreateCategoriaProdutoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], CategoriaProdutoController.prototype, "create", null);
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
        typeof _categoriaprodutodto.UpdateCategoriaProdutoRequestDto === "undefined" ? Object : _categoriaprodutodto.UpdateCategoriaProdutoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], CategoriaProdutoController.prototype, "update", null);
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
], CategoriaProdutoController.prototype, "remove", null);
CategoriaProdutoController = _ts_decorate([
    (0, _common.Controller)('categorias-produto'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _categoriaprodutorepository.CategoriaProdutoRepository === "undefined" ? Object : _categoriaprodutorepository.CategoriaProdutoRepository,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], CategoriaProdutoController);

//# sourceMappingURL=categoria-produto.controller.js.map