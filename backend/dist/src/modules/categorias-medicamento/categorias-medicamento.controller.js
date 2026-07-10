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
exports.CategoriasMedicamentoController = void 0;
const common_1 = require("@nestjs/common");
const categorias_medicamento_dto_1 = require("./dto/categorias-medicamento.dto");
const categorias_medicamento_repository_1 = require("./repository/categorias-medicamento.repository");
const BaseController_1 = require("../../common/bases/BaseController");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
const client_1 = require("../../../generated/prisma/client");
let CategoriasMedicamentoController = class CategoriasMedicamentoController extends BaseController_1.BaseController {
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
            throw new common_1.HttpException('Categoria de medicamento não existe.', common_1.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: categoria,
        });
    }
    async create(user, createCategoriasMedicamentoRequestDto) {
        const exists = await this.repository.count({
            nome: createCategoriasMedicamentoRequestDto.nome,
        });
        if (exists > 0)
            throw new common_1.HttpException('Já existe uma categoria com este nome.', common_1.HttpStatus.CONFLICT);
        const newCategoria = await this.repository.create({
            nome: createCategoriasMedicamentoRequestDto.nome,
            userId: user.id,
        });
        this.logService.created({
            mensagem: `Categoria de medicamento "${newCategoria.nome}" criada pelo usuário ${user.nome}`,
            artefato: newCategoria.id,
            modulo: 'CategoriasMedicamento',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: newCategoria,
        });
    }
    async update(user, id, updateCategoriasMedicamentoRequestDto) {
        if (!id || id !== updateCategoriasMedicamentoRequestDto.id)
            throw new common_1.HttpException('Dados não são válidos.', common_1.HttpStatus.FORBIDDEN);
        const categoria = await this.repository.findOne(id);
        if (!categoria)
            throw new common_1.HttpException('Categoria de medicamento não existe.', common_1.HttpStatus.NOT_FOUND);
        const updatedCategoria = await this.repository.update(id, {
            nome: updateCategoriasMedicamentoRequestDto.nome,
            active: updateCategoriasMedicamentoRequestDto.active,
        });
        this.logService.updated({
            mensagem: `Categoria de medicamento "${updatedCategoria.nome}" atualizada pelo usuário ${user.nome}`,
            artefato: updatedCategoria.id,
            modulo: 'CategoriasMedicamento',
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
            throw new common_1.HttpException('Categoria de medicamento não existe.', common_1.HttpStatus.NOT_FOUND);
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
            mensagem: `Categoria de medicamento "${categoria.nome}" excluída pelo usuário ${user.nome}`,
            artefato: categoria.id,
            modulo: 'CategoriasMedicamento',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
        });
    }
};
exports.CategoriasMedicamentoController = CategoriasMedicamentoController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Farmacia),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriasMedicamentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Farmacia),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriasMedicamentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Farmacia),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, categorias_medicamento_dto_1.CreateCategoriasMedicamentoRequestDto]),
    __metadata("design:returntype", Promise)
], CategoriasMedicamentoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Farmacia),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, categorias_medicamento_dto_1.UpdateCategoriasMedicamentoRequestDto]),
    __metadata("design:returntype", Promise)
], CategoriasMedicamentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Farmacia),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CategoriasMedicamentoController.prototype, "remove", null);
exports.CategoriasMedicamentoController = CategoriasMedicamentoController = __decorate([
    (0, common_1.Controller)('categorias-medicamento'),
    __metadata("design:paramtypes", [categorias_medicamento_repository_1.CategoriasMedicamentoRepository,
        log_repository_1.LogService])
], CategoriasMedicamentoController);
//# sourceMappingURL=categorias-medicamento.controller.js.map