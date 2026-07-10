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
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const produto_dto_1 = require("./dto/produto.dto");
const produto_repository_1 = require("./repository/produto.repository");
const BaseController_1 = require("../../common/bases/BaseController");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
const client_1 = require("../../../generated/prisma/client");
let ProdutoController = class ProdutoController extends BaseController_1.BaseController {
    repository;
    logService;
    constructor(repository, logService) {
        super();
        this.repository = repository;
        this.logService = logService;
    }
    async findAll() {
        const produtos = await this.repository.findAll();
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: produtos,
        });
    }
    async findOne(id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const produto = await this.repository.findOne(id);
        if (!produto)
            throw new common_1.HttpException('Produto não existe.', common_1.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: produto,
        });
    }
    async create(user, createProdutoRequestDto) {
        const existsNome = await this.repository.count({
            nome: createProdutoRequestDto.nome,
        });
        if (existsNome > 0)
            throw new common_1.HttpException('Já existe um produto com este nome.', common_1.HttpStatus.CONFLICT);
        const existsCodigo = await this.repository.count({
            codigo: createProdutoRequestDto.codigo,
        });
        if (existsCodigo > 0)
            throw new common_1.HttpException('Já existe um produto com este código.', common_1.HttpStatus.CONFLICT);
        const newProduto = await this.repository.create({
            ...createProdutoRequestDto,
            userId: user.id,
        });
        this.logService.created({
            mensagem: `Produto "${newProduto.nome}" criado pelo usuário ${user.nome}`,
            artefato: newProduto.id,
            modulo: 'Produto',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: newProduto,
        });
    }
    async update(user, id, updateProdutoRequestDto) {
        if (!id || id !== updateProdutoRequestDto.id)
            throw new common_1.HttpException('Dados não são válidos.', common_1.HttpStatus.FORBIDDEN);
        const produto = await this.repository.findOne(id);
        if (!produto)
            throw new common_1.HttpException('Produto não existe.', common_1.HttpStatus.NOT_FOUND);
        const updatedProduto = await this.repository.update(id, {
            ...updateProdutoRequestDto,
            userId: user.id,
        });
        this.logService.updated({
            mensagem: `Produto "${updatedProduto.nome}" atualizado pelo usuário ${user.nome}`,
            artefato: updatedProduto.id,
            modulo: 'Produto',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: updatedProduto,
        });
    }
    async remove(user, id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const produto = await this.repository.findOne(id);
        if (!produto)
            throw new common_1.HttpException('Produto não existe.', common_1.HttpStatus.NOT_FOUND);
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
            mensagem: `Produto "${produto.nome}" excluído pelo usuário ${user.nome}`,
            artefato: produto.id,
            modulo: 'Produto',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
        });
    }
    async toggleActive(user, id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const produto = await this.repository.findOne(id);
        if (!produto)
            throw new common_1.HttpException('Produto não existe.', common_1.HttpStatus.NOT_FOUND);
        const updatedProduto = await this.repository.update(id, {
            active: !produto.active,
            userId: user.id,
        });
        this.logService.actived({
            mensagem: `Produto "${updatedProduto.nome}" ${updatedProduto.active ? 'ativado' : 'desativado'} pelo usuário ${user.nome}`,
            artefato: updatedProduto.id,
            modulo: 'Produto',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: updatedProduto,
        });
    }
};
exports.ProdutoController = ProdutoController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Autenticado)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Almoxarifado]),
    (0, roles_decorator_1.Cargo)([roles_decorator_1.TypeCargo.Almoxarifado, roles_decorator_1.TypeCargo.AuxAlmoxarifado]),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador]),
    (0, roles_decorator_1.Cargo)([roles_decorator_1.TypeCargo.Almoxarifado]),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, produto_dto_1.CreateProdutoRequestDto]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador]),
    (0, roles_decorator_1.Cargo)([roles_decorator_1.TypeCargo.Almoxarifado]),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, produto_dto_1.UpdateProdutoRequestDto]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador]),
    (0, roles_decorator_1.Cargo)([roles_decorator_1.TypeCargo.Almoxarifado]),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/toggle-active'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador]),
    (0, roles_decorator_1.Cargo)([roles_decorator_1.TypeCargo.Almoxarifado]),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "toggleActive", null);
exports.ProdutoController = ProdutoController = __decorate([
    (0, common_1.Controller)('produtos'),
    __metadata("design:paramtypes", [produto_repository_1.ProdutoRepository,
        log_repository_1.LogService])
], ProdutoController);
//# sourceMappingURL=produto.controller.js.map