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
exports.SetorController = void 0;
const common_1 = require("@nestjs/common");
const setor_dto_1 = require("./dto/setor.dto");
const setor_repository_1 = require("./repository/setor.repository");
const BaseController_1 = require("../../common/bases/BaseController");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
const client_1 = require("../../../generated/prisma/client");
let SetorController = class SetorController extends BaseController_1.BaseController {
    setorService;
    logService;
    constructor(setorService, logService) {
        super();
        this.setorService = setorService;
        this.logService = logService;
    }
    async findAll() {
        const setores = await this.setorService.findAll();
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: setores,
        });
    }
    async findOne(id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const setor = await this.setorService.findOne(id);
        if (!setor)
            throw new common_1.HttpException('Setor não existe.', common_1.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: setor,
        });
    }
    async create(user, createSetorRequestDto) {
        const exists = await this.setorService.count({
            nome: createSetorRequestDto.nome,
        });
        if (exists > 0)
            throw new common_1.HttpException('Já existe um setor com este nome.', common_1.HttpStatus.CONFLICT);
        const newSetor = await this.setorService.create({
            nome: createSetorRequestDto.nome,
            nomeVisivel: createSetorRequestDto.nomeVisivel,
        });
        this.logService.created({
            mensagem: `Setor "${newSetor.nome}" criado pelo usuário ${user.nome}`,
            artefato: newSetor.id,
            modulo: 'Setor',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: newSetor,
        });
    }
    async update(user, id, updateSetorRequestDto) {
        if (!id || id !== updateSetorRequestDto.id)
            throw new common_1.HttpException('Dados não são válidos.', common_1.HttpStatus.FORBIDDEN);
        const setor = await this.setorService.findOne(id);
        if (!setor)
            throw new common_1.HttpException('Setor não existe.', common_1.HttpStatus.NOT_FOUND);
        const updatedSetor = await this.setorService.update(id, {
            nome: updateSetorRequestDto.nome,
            nomeVisivel: updateSetorRequestDto.nomeVisivel,
        });
        this.logService.updated({
            mensagem: `Setor "${updatedSetor.nome}" atualizado pelo usuário ${user.nome}`,
            artefato: updatedSetor.id,
            modulo: 'Setor',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: updatedSetor,
        });
    }
    async remove(user, id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const setor = await this.setorService.findOne(id);
        if (!setor)
            throw new common_1.HttpException('Setor não existe.', common_1.HttpStatus.NOT_FOUND);
        try {
            await this.setorService.remove(id);
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                err.code === 'P2003') {
                throw new common_1.HttpException('Não é possível excluir: existem registros vinculados.', common_1.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Setor "${setor.nome}" excluído pelo usuário ${user.nome}`,
            artefato: setor.id,
            modulo: 'Setor',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
        });
    }
};
exports.SetorController = SetorController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SetorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SetorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, setor_dto_1.CreateSetorRequestDto]),
    __metadata("design:returntype", Promise)
], SetorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, setor_dto_1.UpdateSetorRequestDto]),
    __metadata("design:returntype", Promise)
], SetorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SetorController.prototype, "remove", null);
exports.SetorController = SetorController = __decorate([
    (0, common_1.Controller)('setores'),
    __metadata("design:paramtypes", [setor_repository_1.SetorService,
        log_repository_1.LogService])
], SetorController);
//# sourceMappingURL=setor.controller.js.map