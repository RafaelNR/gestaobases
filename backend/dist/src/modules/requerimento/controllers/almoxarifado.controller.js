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
exports.AlmoxarifadoController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../../generated/prisma/client");
const BaseController_1 = require("../../../common/bases/BaseController");
const user_decorator_1 = require("../../../common/decorator/user.decorator");
const roles_decorator_1 = require("../../../infra/guard/roles.decorator");
const log_repository_1 = require("../../../infra/logger/repository/log.repository");
const requerimento_dto_1 = require("../dto/requerimento.dto");
const requerimento_service_1 = require("../services/requerimento.service");
const TIPO = client_1.TipoRequerimento.Almoxarifado;
const MODULO = 'RequerimentoAlmoxarifado';
let AlmoxarifadoController = class AlmoxarifadoController extends BaseController_1.BaseController {
    service;
    logService;
    constructor(service, logService) {
        super();
        this.service = service;
        this.logService = logService;
    }
    async findAll(user) {
        const data = await this.service.findAll(TIPO, user);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async findByStatus(user) {
        const data = await this.service.findStatus(TIPO, user);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async findByFiltro(filtro, user) {
        const data = await this.service.findByFiltro(TIPO, filtro, user);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async findOne(id, user) {
        const data = await this.service.findOne(id, TIPO, user);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async create(dto, user) {
        const data = await this.service.create(TIPO, dto, user);
        this.logService.created({
            mensagem: `Requerimento Almoxarifado #${data.numero} criado`,
            artefato: data.id,
            modulo: MODULO,
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: data,
        });
    }
    async update(id, dto, user) {
        const data = await this.service.update(id, TIPO, dto, user);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async enviar(id, user) {
        const data = await this.service.enviar(id, TIPO, user);
        this.logService.updated({
            mensagem: `Requerimento Almoxarifado #${data.numero} enviado`,
            artefato: id,
            modulo: MODULO,
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async changeStatus(id, dto, user) {
        const data = await this.service.changeStatus(id, TIPO, dto, user);
        this.logService.updated({
            mensagem: `Status do Requerimento Almoxarifado alterado para ${dto.status}`,
            artefato: id,
            modulo: MODULO,
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async delete(id, user) {
        await this.service.delete(id, TIPO, user);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.ACCEPTED });
    }
    async addItem(id, dto, user) {
        const data = await this.service.addItem(id, TIPO, dto, user);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: data,
        });
    }
    async updateItem(id, itemId, dto, user) {
        const data = await this.service.updateItem(id, itemId, TIPO, dto, user);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async removeItem(id, itemId, user) {
        await this.service.removeItem(id, itemId, TIPO, user);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.ACCEPTED });
    }
};
exports.AlmoxarifadoController = AlmoxarifadoController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/by/status'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "findByStatus", null);
__decorate([
    (0, common_1.Get)('filtro'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "findByFiltro", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [requerimento_dto_1.CreateRequerimentoAlmoxarifadoAndCMERequestDto, Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, requerimento_dto_1.UpdateRequerimentoAlmoxarifadoAndCMERequestDto, Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "update", null);
__decorate([
    (0, common_1.Post)(':id/enviar'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "enviar", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Almoxarifado]),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, requerimento_dto_1.ChangeStatusRequestDto, Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':id/itens'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Almoxarifado),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, requerimento_dto_1.AddItemRequestDto, Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "addItem", null);
__decorate([
    (0, common_1.Put)(':id/itens/:itemId'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Almoxarifado),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('itemId')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, requerimento_dto_1.UpdateItemRequestDto, Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "updateItem", null);
__decorate([
    (0, common_1.Delete)(':id/itens/:itemId'),
    (0, roles_decorator_1.Setor)(roles_decorator_1.TypeSetor.Almoxarifado),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('itemId')),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AlmoxarifadoController.prototype, "removeItem", null);
exports.AlmoxarifadoController = AlmoxarifadoController = __decorate([
    (0, common_1.Controller)('requerimentos/almoxarifado'),
    __metadata("design:paramtypes", [requerimento_service_1.RequerimentoService,
        log_repository_1.LogService])
], AlmoxarifadoController);
//# sourceMappingURL=almoxarifado.controller.js.map