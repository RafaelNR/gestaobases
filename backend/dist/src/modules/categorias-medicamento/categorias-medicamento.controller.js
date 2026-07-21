"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CategoriasMedicamentoController", {
    enumerable: true,
    get: function() {
        return CategoriasMedicamentoController;
    }
});
const _common = require("@nestjs/common");
const _categoriasmedicamentodto = require("./dto/categorias-medicamento.dto");
const _categoriasmedicamentorepository = require("./repository/categorias-medicamento.repository");
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
let CategoriasMedicamentoController = class CategoriasMedicamentoController extends _BaseController.BaseController {
    constructor(repository, logService){
        super(), this.repository = repository, this.logService = logService;
    }
    // ----- GET (/categorias-medicamento) - Farmacia ---
    async findAll() {
        const categorias = await this.repository.findAll();
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: categorias
        });
    }
    // ----- GET (/categorias-medicamento/:id) - Farmacia ----
    async findOne(id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const categoria = await this.repository.findOne(id);
        if (!categoria) throw new _common.HttpException('Categoria de medicamento não existe.', _common.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: _common.HttpStatus.OK,
            response: categoria
        });
    }
    // ----- POST (/categorias-medicamento) - Farmacia ----
    async create(user, createCategoriasMedicamentoRequestDto) {
        const exists = await this.repository.count({
            nome: createCategoriasMedicamentoRequestDto.nome
        });
        if (exists > 0) throw new _common.HttpException('Já existe uma categoria com este nome.', _common.HttpStatus.CONFLICT);
        const newCategoria = await this.repository.create({
            nome: createCategoriasMedicamentoRequestDto.nome,
            userId: user.id
        });
        this.logService.created({
            mensagem: `Categoria de medicamento "${newCategoria.nome}" criada pelo usuário ${user.nome}`,
            artefato: newCategoria.id,
            modulo: 'CategoriasMedicamento',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.CREATED,
            response: newCategoria
        });
    }
    // ----- PUT (/categorias-medicamento/:id) - Farmacia ----
    async update(user, id, updateCategoriasMedicamentoRequestDto) {
        if (!id || id !== updateCategoriasMedicamentoRequestDto.id) throw new _common.HttpException('Dados não são válidos.', _common.HttpStatus.FORBIDDEN);
        const categoria = await this.repository.findOne(id);
        if (!categoria) throw new _common.HttpException('Categoria de medicamento não existe.', _common.HttpStatus.NOT_FOUND);
        const updatedCategoria = await this.repository.update(id, {
            nome: updateCategoriasMedicamentoRequestDto.nome,
            active: updateCategoriasMedicamentoRequestDto.active
        });
        this.logService.updated({
            mensagem: `Categoria de medicamento "${updatedCategoria.nome}" atualizada pelo usuário ${user.nome}`,
            artefato: updatedCategoria.id,
            modulo: 'CategoriasMedicamento',
            ip: user.ip,
            userId: user.id
        });
        return this.handleSuccessResponse({
            code: _common.HttpStatus.ACCEPTED,
            response: updatedCategoria
        });
    }
    // ----- DELETE (/categorias-medicamento/:id) - Farmacia ----
    async remove(user, id) {
        if (!id) throw new _common.HttpException('Id não foi enviado.', _common.HttpStatus.FORBIDDEN);
        const categoria = await this.repository.findOne(id);
        if (!categoria) throw new _common.HttpException('Categoria de medicamento não existe.', _common.HttpStatus.NOT_FOUND);
        try {
            await this.repository.remove(id);
        } catch (err) {
            if (err instanceof _client.Prisma.PrismaClientKnownRequestError && err.code === 'P2003') {
                throw new _common.HttpException('Não é possível excluir: existem registros vinculados.', _common.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Categoria de medicamento "${categoria.nome}" excluída pelo usuário ${user.nome}`,
            artefato: categoria.id,
            modulo: 'CategoriasMedicamento',
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
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Farmacia),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], CategoriasMedicamentoController.prototype, "findAll", null);
_ts_decorate([
    (0, _common.Get)(':id'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Farmacia),
    _ts_param(0, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CategoriasMedicamentoController.prototype, "findOne", null);
_ts_decorate([
    (0, _common.Post)(),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Farmacia),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        typeof _categoriasmedicamentodto.CreateCategoriasMedicamentoRequestDto === "undefined" ? Object : _categoriasmedicamentodto.CreateCategoriasMedicamentoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], CategoriasMedicamentoController.prototype, "create", null);
_ts_decorate([
    (0, _common.Put)(':id'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Farmacia),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_param(2, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String,
        typeof _categoriasmedicamentodto.UpdateCategoriasMedicamentoRequestDto === "undefined" ? Object : _categoriasmedicamentodto.UpdateCategoriasMedicamentoRequestDto
    ]),
    _ts_metadata("design:returntype", Promise)
], CategoriasMedicamentoController.prototype, "update", null);
_ts_decorate([
    (0, _common.Delete)(':id'),
    (0, _rolesdecorator.Setor)(_rolesdecorator.TypeSetor.Farmacia),
    _ts_param(0, (0, _userdecorator.User)()),
    _ts_param(1, (0, _common.Param)('id')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _userdecorator.IUser === "undefined" ? Object : _userdecorator.IUser,
        String
    ]),
    _ts_metadata("design:returntype", Promise)
], CategoriasMedicamentoController.prototype, "remove", null);
CategoriasMedicamentoController = _ts_decorate([
    (0, _common.Controller)('categorias-medicamento'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _categoriasmedicamentorepository.CategoriasMedicamentoRepository === "undefined" ? Object : _categoriasmedicamentorepository.CategoriasMedicamentoRepository,
        typeof _logrepository.LogService === "undefined" ? Object : _logrepository.LogService
    ])
], CategoriasMedicamentoController);

//# sourceMappingURL=categorias-medicamento.controller.js.map