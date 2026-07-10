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
exports.BasesController = void 0;
const common_1 = require("@nestjs/common");
const base_dto_1 = require("./dto/base.dto");
const base_repository_1 = require("./repository/base.repository");
const BaseController_1 = require("../../common/bases/BaseController");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
const client_1 = require("../../../generated/prisma/client");
let BasesController = class BasesController extends BaseController_1.BaseController {
    baseRepository;
    logService;
    constructor(baseRepository, logService) {
        super();
        this.baseRepository = baseRepository;
        this.logService = logService;
    }
    async findAll() {
        const bases = await this.baseRepository.findAll();
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: bases,
        });
    }
    async findOne(id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const base = await this.baseRepository.findOne(id);
        if (!base)
            throw new common_1.HttpException('Base não existe.', common_1.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: base,
        });
    }
    async create(user, createBaseRequestDto) {
        const exists = await this.baseRepository.count({
            nome: createBaseRequestDto.nome,
        });
        if (exists > 0)
            throw new common_1.HttpException('Já existe uma base com este nome.', common_1.HttpStatus.CONFLICT);
        const newBase = await this.baseRepository.create(createBaseRequestDto);
        this.logService.created({
            mensagem: `Base "${newBase.nome}" criada pelo usuário ${user.nome}`,
            artefato: newBase.id,
            modulo: 'Base',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: newBase,
        });
    }
    async update(user, id, updateBaseRequestDto) {
        if (!id || id !== updateBaseRequestDto.id)
            throw new common_1.HttpException('Dados não são válidos.', common_1.HttpStatus.FORBIDDEN);
        const base = await this.baseRepository.findOne(id);
        if (!base)
            throw new common_1.HttpException('Base não existe.', common_1.HttpStatus.NOT_FOUND);
        const updatedBase = await this.baseRepository.update(id, updateBaseRequestDto);
        this.logService.updated({
            mensagem: `Base "${updatedBase.nome}" atualizada pelo usuário ${user.nome}`,
            artefato: updatedBase.id,
            modulo: 'Base',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: updatedBase,
        });
    }
    async remove(user, id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const base = await this.baseRepository.findOne(id);
        if (!base)
            throw new common_1.HttpException('Base não existe.', common_1.HttpStatus.NOT_FOUND);
        try {
            await this.baseRepository.remove(id);
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                err.code === 'P2003') {
                throw new common_1.HttpException('Não é possível excluir: existem registros vinculados.', common_1.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Base "${base.nome}" excluída pelo usuário ${user.nome}`,
            artefato: base.id,
            modulo: 'Base',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
        });
    }
};
exports.BasesController = BasesController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Autenticado)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BasesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BasesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, base_dto_1.CreateBaseRequestDto]),
    __metadata("design:returntype", Promise)
], BasesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, base_dto_1.UpdateBaseRequestDto]),
    __metadata("design:returntype", Promise)
], BasesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BasesController.prototype, "remove", null);
exports.BasesController = BasesController = __decorate([
    (0, common_1.Controller)('bases'),
    __metadata("design:paramtypes", [base_repository_1.BaseRepository,
        log_repository_1.LogService])
], BasesController);
//# sourceMappingURL=base.controller.js.map