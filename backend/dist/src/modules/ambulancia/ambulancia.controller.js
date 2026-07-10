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
exports.AmbulanciaController = void 0;
const common_1 = require("@nestjs/common");
const ambulancia_dto_1 = require("./dto/ambulancia.dto");
const ambulancia_repository_1 = require("./repository/ambulancia.repository");
const BaseController_1 = require("../../common/bases/BaseController");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
const client_1 = require("../../../generated/prisma/client");
let AmbulanciaController = class AmbulanciaController extends BaseController_1.BaseController {
    ambulanciaRepository;
    logService;
    constructor(ambulanciaRepository, logService) {
        super();
        this.ambulanciaRepository = ambulanciaRepository;
        this.logService = logService;
    }
    async findAll() {
        const ambulancias = await this.ambulanciaRepository.findAll();
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: ambulancias,
        });
    }
    async findAllByBase(base) {
        const ambulancias = await this.ambulanciaRepository.findByBase(base);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: ambulancias,
        });
    }
    async findOne(id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const ambulancia = await this.ambulanciaRepository.findOne(id);
        if (!ambulancia)
            throw new common_1.HttpException('Ambulância não existe.', common_1.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: ambulancia,
        });
    }
    async create(user, createAmbulanciaRequestDto) {
        const exists = await this.ambulanciaRepository.count({
            nome: createAmbulanciaRequestDto.nome,
            tipo: createAmbulanciaRequestDto.tipo,
            baseId: createAmbulanciaRequestDto.baseId,
        });
        if (exists > 0)
            throw new common_1.HttpException('Já existe uma ambulância com este dados: nome, base e tipo.', common_1.HttpStatus.CONFLICT);
        const newAmbulancia = await this.ambulanciaRepository.create({
            nome: createAmbulanciaRequestDto.nome,
            baseId: createAmbulanciaRequestDto.baseId,
            tipo: createAmbulanciaRequestDto.tipo,
        }, user.id);
        this.logService.created({
            mensagem: `Ambulância "${newAmbulancia.nome}" criada pelo usuário ${user.nome}`,
            artefato: newAmbulancia.id,
            modulo: 'Ambulancia',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: newAmbulancia,
        });
    }
    async update(user, id, updateAmbulanciaRequestDto) {
        if (!id || id !== updateAmbulanciaRequestDto.id)
            throw new common_1.HttpException('Dados não são válidos.', common_1.HttpStatus.FORBIDDEN);
        const ambulancia = await this.ambulanciaRepository.findOne(id);
        if (!ambulancia)
            throw new common_1.HttpException('Ambulância não existe.', common_1.HttpStatus.NOT_FOUND);
        const exists = await this.ambulanciaRepository.count({
            nome: updateAmbulanciaRequestDto.nome,
            baseId: updateAmbulanciaRequestDto.baseId,
            tipo: updateAmbulanciaRequestDto.tipo,
            id: { not: id },
        });
        if (exists > 0)
            throw new common_1.HttpException('Já existe uma ambulância com este dados: nome, base e tipo.', common_1.HttpStatus.CONFLICT);
        const updatedAmbulancia = await this.ambulanciaRepository.update(id, {
            nome: updateAmbulanciaRequestDto.nome,
            tipo: updateAmbulanciaRequestDto.tipo,
            baseId: updateAmbulanciaRequestDto.baseId,
        }, user.id);
        this.logService.updated({
            mensagem: `Ambulância "${updatedAmbulancia.nome}" atualizada pelo usuário ${user.nome}`,
            artefato: updatedAmbulancia.id,
            modulo: 'Ambulancia',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: updatedAmbulancia,
        });
    }
    async remove(user, id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const ambulancia = await this.ambulanciaRepository.findOne(id);
        if (!ambulancia)
            throw new common_1.HttpException('Ambulância não existe.', common_1.HttpStatus.NOT_FOUND);
        try {
            await this.ambulanciaRepository.remove(id);
        }
        catch (err) {
            if (err instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                err.code === 'P2003') {
                throw new common_1.HttpException('Não é possível excluir: existem registros vinculados.', common_1.HttpStatus.CONFLICT);
            }
            throw err;
        }
        this.logService.deleted({
            mensagem: `Ambulância "${ambulancia.nome}" excluída pelo usuário ${user.nome}`,
            artefato: ambulancia.id,
            modulo: 'Ambulancia',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
        });
    }
};
exports.AmbulanciaController = AmbulanciaController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Autenticado)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AmbulanciaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('base/:base'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, common_1.Param)('base')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AmbulanciaController.prototype, "findAllByBase", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AmbulanciaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ambulancia_dto_1.CreateAmbulanciaRequestDto]),
    __metadata("design:returntype", Promise)
], AmbulanciaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ambulancia_dto_1.UpdateAmbulanciaRequestDto]),
    __metadata("design:returntype", Promise)
], AmbulanciaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Administrador),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AmbulanciaController.prototype, "remove", null);
exports.AmbulanciaController = AmbulanciaController = __decorate([
    (0, common_1.Controller)('ambulancias'),
    __metadata("design:paramtypes", [ambulancia_repository_1.AmbulanciaRepository,
        log_repository_1.LogService])
], AmbulanciaController);
//# sourceMappingURL=ambulancia.controller.js.map