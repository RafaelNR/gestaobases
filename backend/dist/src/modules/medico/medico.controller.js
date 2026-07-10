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
exports.MedicoController = void 0;
const common_1 = require("@nestjs/common");
const medico_dto_1 = require("./dto/medico.dto");
const medico_repository_1 = require("./repository/medico.repository");
const BaseController_1 = require("../../common/bases/BaseController");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
let MedicoController = class MedicoController extends BaseController_1.BaseController {
    service;
    logService;
    constructor(service, logService) {
        super();
        this.service = service;
        this.logService = logService;
    }
    async findAll() {
        const medicos = await this.service.findAll();
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: medicos,
        });
    }
    async findOne(id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const medico = await this.service.findOne(id);
        if (!medico)
            throw new common_1.HttpException('Médico não existe.', common_1.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: medico,
        });
    }
    async create(user, dto) {
        const existsNome = await this.service.count({ nome: dto.nome });
        if (existsNome > 0)
            throw new common_1.HttpException('Já existe um médico com este nome.', common_1.HttpStatus.CONFLICT);
        const existsCrm = await this.service.count({ crm: dto.crm });
        if (existsCrm > 0)
            throw new common_1.HttpException('Já existe um médico com este CRM.', common_1.HttpStatus.CONFLICT);
        const medico = await this.service.create({
            nome: dto.nome,
            crm: dto.crm,
            telefone: dto.telefone ?? null,
            email: dto.email ?? null,
            userId: user.id,
        });
        this.logService.created({
            mensagem: `Médico "${medico.nome}" criado pelo usuário ${user.nome}`,
            artefato: medico.id,
            modulo: 'Medico',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: medico,
        });
    }
    async update(user, id, dto) {
        if (!id || id !== dto.id)
            throw new common_1.HttpException('Dados não são válidos.', common_1.HttpStatus.FORBIDDEN);
        const medico = await this.service.findOne(id);
        if (!medico)
            throw new common_1.HttpException('Médico não existe.', common_1.HttpStatus.NOT_FOUND);
        const updated = await this.service.update(id, {
            nome: dto.nome,
            crm: dto.crm,
            telefone: dto.telefone ?? null,
            email: dto.email ?? null,
        });
        this.logService.updated({
            mensagem: `Médico "${updated.nome}" atualizado pelo usuário ${user.nome}`,
            artefato: updated.id,
            modulo: 'Medico',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: updated,
        });
    }
};
exports.MedicoController = MedicoController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, medico_dto_1.CreateMedicoRequestDto]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, medico_dto_1.UpdateMedicoRequestDto]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "update", null);
exports.MedicoController = MedicoController = __decorate([
    (0, common_1.Controller)('medicos'),
    __metadata("design:paramtypes", [medico_repository_1.MedicoRepository,
        log_repository_1.LogService])
], MedicoController);
//# sourceMappingURL=medico.controller.js.map