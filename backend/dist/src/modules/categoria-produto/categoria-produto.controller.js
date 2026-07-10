"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaProdutoController = void 0;
const common_1 = require("@nestjs/common");
const categoria_produto_dto_1 = require("./dto/categoria-produto.dto");
const categoria_produto_repository_1 = require("./repository/categoria-produto.repository");
const BaseController_1 = require("../../common/bases/BaseController");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
const client_1 = require("../../../generated/prisma/client");
let CategoriaProdutoController = class CategoriaProdutoController extends BaseController_1.BaseController {
    repository;
    logService;
    constructor(repository, logService) {
        super();
        this.repository = repository;
        this.logService = logService;
    }
    async findAll() {
        const categorias = await this.repository.findAll();
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: categorias,
        });
    }
    async findOne(id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const categoria = await this.repository.findOne(id);
        if (!categoria)
            throw new common_1.HttpException('Categoria de produto não existe.', common_1.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: categoria,
        });
    }
    async create(user, createCategoriaProdutoRequestDto) {
        const exists = await this.repository.count({
            nome: createCategoriaProdutoRequestDto.nome,
        });
        if (exists > 0)
            throw new common_1.HttpException('Já existe uma categoria com este nome.', common_1.HttpStatus.CONFLICT);
        const newCategoria = await this.repository.create({
            nome: createCategoriaProdutoRequestDto.nome,
            userId: user.id,
        });
        this.logService.created({
            mensagem: `Categoria de produto "${newCategoria.nome}" criada pelo usuário ${user.nome}`,
            artefato: newCategoria.id,
            modulo: 'CategoriaProduto',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: newCategoria,
        });
    }
    async update(user, id, updateCategoriaProdutoRequestDto) {
        if (!id || id !== updateCategoriaProdutoRequestDto.id)
            throw new common_1.HttpException('Dados não são válidos.', common_1.HttpStatus.FORBIDDEN);
        const categoria = await this.repository.findOne(id);
        if (!categoria)
            throw new common_1.HttpException('Categoria de produto não existe.', common_1.HttpStatus.NOT_FOUND);
        const updatedCategoria = await this.repository.update(id, {
            nome: updateCategoriaProdutoRequestDto.nome,
        });
        this.logService.updated({
            mensagem: `Categoria de produto "${updatedCategoria.nome}" atualizada pelo usuário ${user.nome}`,
            artefato: updatedCategoria.id,
            modulo: 'CategoriaProduto',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: updatedCategoria,
        });
    }
    async remove(user, id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const categoria = await this.repository.findOne(id);
        if (!categoria)
            throw new common_1.HttpException('Categoria de produto não existe.', common_1.HttpStatus.NOT_FOUND);
        try {
            await this.repository.remove(id);
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                err.code === 'P2003') {
                throw new common_1.HttpException('Não é possível excluir: existem registros vinculados.', common_1.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Categoria de produto "${categoria.nome}" excluída pelo usuário ${user.nome}`,
            artefato: categoria.id,
            modulo: 'CategoriaProduto',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
        });
    }
};
exports.CategoriaProdutoController = CategoriaProdutoController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Autenticado)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriaProdutoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriaProdutoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, categoria_produto_dto_1.CreateCategoriaProdutoRequestDto]),
    __metadata("design:returntype", Promise)
], CategoriaProdutoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, categoria_produto_dto_1.UpdateCategoriaProdutoRequestDto]),
    __metadata("design:returntype", Promise)
], CategoriaProdutoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CategoriaProdutoController.prototype, "remove", null);
exports.CategoriaProdutoController = CategoriaProdutoController = __decorate([
    (0, common_1.Controller)('categorias-produto'),
    __metadata("design:paramtypes", [categoria_produto_repository_1.CategoriaProdutoRepository,
        log_repository_1.LogService])
], CategoriaProdutoController);
//# sourceMappingURL=categoria-produto.controller.js.map