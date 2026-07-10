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
exports.ReceituariosController = void 0;
const common_1 = require("@nestjs/common");
const BaseController_1 = require("../../common/bases/BaseController");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
const receituarios_dto_1 = require("./dto/receituarios.dto");
const receituarios_service_1 = require("./services/receituarios.service");
let ReceituariosController = class ReceituariosController extends BaseController_1.BaseController {
    service;
    logService;
    constructor(service, logService) {
        super();
        this.service = service;
        this.logService = logService;
    }
    async findAll(base, status, user) {
        const data = await this.service.findAll({ base, status: status }, user);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async findOne(id) {
        const data = await this.service.findOne(id);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async create(dto, user) {
        const data = await this.service.create(dto, user);
        this.logService.created({
            mensagem: `Receituário ${data.numero} criado`,
            artefato: data.id,
            modulo: 'Receituarios',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: data,
        });
    }
    async update(id, dto, user) {
        const data = await this.service.update(id, dto, user);
        this.logService.updated({
            mensagem: `Receituário ${id} atualizado`,
            artefato: id,
            modulo: 'Receituarios',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async changeStatus(id, dto, user) {
        const data = await this.service.changeStatus(id, dto);
        this.logService.updated({
            mensagem: `Status do Receituário alterado para ${dto.status}`,
            artefato: id,
            modulo: 'Receituarios',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async remove(id, user) {
        await this.service.remove(id);
        this.logService.deleted({
            mensagem: `Receituário ${id} removido`,
            artefato: id,
            modulo: 'Receituarios',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({ code: common_1.HttpStatus.ACCEPTED });
    }
    async addMedicamento(id, dto, user) {
        const data = await this.service.addMedicamento(id, dto, user.id);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: data,
        });
    }
    async updateMedicamento(id, medId, dto) {
        const data = await this.service.updateMedicamento(id, medId, dto);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async removeMedicamento(id, medId, user) {
        void user;
        await this.service.removeMedicamento(id, medId);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.ACCEPTED });
    }
};
exports.ReceituariosController = ReceituariosController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, common_1.Query)('base')),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ReceituariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReceituariosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [receituarios_dto_1.CreateReceituarioRequestDto, Object]),
    __metadata("design:returntype", Promise)
], ReceituariosController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, receituarios_dto_1.UpdateReceituarioRequestDto, Object]),
    __metadata("design:returntype", Promise)
], ReceituariosController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, receituarios_dto_1.ChangeStatusReceituarioRequestDto, Object]),
    __metadata("design:returntype", Promise)
], ReceituariosController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ReceituariosController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/medicamentos'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, receituarios_dto_1.AddMedicamentoRequestDto, Object]),
    __metadata("design:returntype", Promise)
], ReceituariosController.prototype, "addMedicamento", null);
__decorate([
    (0, common_1.Put)(':id/medicamentos/:medId'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('medId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, receituarios_dto_1.UpdateMedicamentoRequestDto]),
    __metadata("design:returntype", Promise)
], ReceituariosController.prototype, "updateMedicamento", null);
__decorate([
    (0, common_1.Delete)(':id/medicamentos/:medId'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('medId')),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ReceituariosController.prototype, "removeMedicamento", null);
exports.ReceituariosController = ReceituariosController = __decorate([
    (0, common_1.Controller)('receituarios'),
    __metadata("design:paramtypes", [receituarios_service_1.ReceituariosService,
        log_repository_1.LogService])
], ReceituariosController);
//# sourceMappingURL=receituarios.controller.js.map