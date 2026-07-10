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
exports.VisitasBasesController = void 0;
const common_1 = require("@nestjs/common");
const BaseController_1 = require("../../common/bases/BaseController");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
const visitas_bases_dto_1 = require("./dto/visitas-bases.dto");
const visitas_bases_repository_1 = require("./repository/visitas-bases.repository");
let VisitasBasesController = class VisitasBasesController extends BaseController_1.BaseController {
    service;
    logService;
    constructor(service, logService) {
        super();
        this.service = service;
        this.logService = logService;
    }
    async findAll(mes, ano) {
        const data = await this.service.findAll({
            mes: mes ? Number(mes) : undefined,
            ano: ano ? Number(ano) : undefined,
        });
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async findOne(id) {
        const data = await this.service.findOne(id);
        if (!data)
            throw new common_1.HttpException('Visita não encontrada.', common_1.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async create(dto, user) {
        const data = await this.service.create({ ...dto, userId: user.id });
        this.logService.created({
            mensagem: `Visita à base "${data.base}" registrada para ${data.data}`,
            artefato: data.id,
            modulo: 'VisitasBases',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: data,
        });
    }
    async update(id, dto, user) {
        const data = await this.service.update(id, { ...dto, userId: user.id });
        this.logService.updated({
            mensagem: `Visita à base "${data.base}" atualizada`,
            artefato: id,
            modulo: 'VisitasBases',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({ code: common_1.HttpStatus.OK, response: data });
    }
    async remove(id, user) {
        const visita = await this.service.findOne(id);
        if (!visita)
            throw new common_1.HttpException('Visita não encontrada.', common_1.HttpStatus.NOT_FOUND);
        await this.service.remove(id);
        this.logService.deleted({
            mensagem: `Visita à base "${visita.base}" removida`,
            artefato: id,
            modulo: 'VisitasBases',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({ code: common_1.HttpStatus.ACCEPTED });
    }
};
exports.VisitasBasesController = VisitasBasesController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, common_1.Query)('mes')),
    __param(1, (0, common_1.Query)('ano')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VisitasBasesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Autenticado)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VisitasBasesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Frota]),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [visitas_bases_dto_1.CreateVisitaBaseRequestDto, Object]),
    __metadata("design:returntype", Promise)
], VisitasBasesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Frota]),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, visitas_bases_dto_1.UpdateVisitaBaseRequestDto, Object]),
    __metadata("design:returntype", Promise)
], VisitasBasesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Frota]),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VisitasBasesController.prototype, "remove", null);
exports.VisitasBasesController = VisitasBasesController = __decorate([
    (0, common_1.Controller)('visitas-bases'),
    __metadata("design:paramtypes", [visitas_bases_repository_1.VisitasBasesService,
        log_repository_1.LogService])
], VisitasBasesController);
//# sourceMappingURL=visitas-bases.controller.js.map