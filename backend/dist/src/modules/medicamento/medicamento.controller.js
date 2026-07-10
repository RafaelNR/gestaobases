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
exports.MedicamentoController = void 0;
const common_1 = require("@nestjs/common");
const medicamento_dto_1 = require("./dto/medicamento.dto");
const medicamento_repository_1 = require("./repository/medicamento.repository");
const BaseController_1 = require("../../common/bases/BaseController");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
const user_decorator_1 = require("../../common/decorator/user.decorator");
const log_repository_1 = require("../../infra/logger/repository/log.repository");
const client_1 = require("../../../generated/prisma/client");
let MedicamentoController = class MedicamentoController extends BaseController_1.BaseController {
    repository;
    logService;
    constructor(repository, logService) {
        super();
        this.repository = repository;
        this.logService = logService;
    }
    async findAll() {
        const medicamentos = await this.repository.findAll();
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: medicamentos,
        });
    }
    async findOne(id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const medicamento = await this.repository.findOne(id);
        if (!medicamento)
            throw new common_1.HttpException('Medicamento não existe.', common_1.HttpStatus.NOT_FOUND);
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.OK,
            response: medicamento,
        });
    }
    async create(user, createMedicamentoRequestDto) {
        const existsNome = await this.repository.count({
            nome: createMedicamentoRequestDto.nome,
        });
        if (existsNome > 0)
            throw new common_1.HttpException('Já existe um medicamento com este nome.', common_1.HttpStatus.CONFLICT);
        const existsCodigo = await this.repository.count({
            codigo: createMedicamentoRequestDto.codigo,
        });
        if (existsCodigo > 0)
            throw new common_1.HttpException('Já existe um medicamento com este código.', common_1.HttpStatus.CONFLICT);
        const newMedicamento = await this.repository.create({
            nome: createMedicamentoRequestDto.nome,
            codigo: createMedicamentoRequestDto.codigo,
            especificacao: createMedicamentoRequestDto.especificacao,
            categoria: createMedicamentoRequestDto.categoria,
            descricao: createMedicamentoRequestDto.descricao,
            userId: user.id,
        });
        this.logService.created({
            mensagem: `Medicamento "${newMedicamento.nome}" criado pelo usuário ${user.nome}`,
            artefato: newMedicamento.id,
            modulo: 'Medicamento',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.CREATED,
            response: newMedicamento,
        });
    }
    async update(user, id, updateMedicamentoRequestDto) {
        if (!id || id !== updateMedicamentoRequestDto.id)
            throw new common_1.HttpException('Dados não são válidos.', common_1.HttpStatus.FORBIDDEN);
        const medicamento = await this.repository.findOne(id);
        if (!medicamento)
            throw new common_1.HttpException('Medicamento não existe.', common_1.HttpStatus.NOT_FOUND);
        const updatedMedicamento = await this.repository.update(id, {
            nome: updateMedicamentoRequestDto.nome,
            codigo: updateMedicamentoRequestDto.codigo,
            especificacao: updateMedicamentoRequestDto.especificacao,
            categoria: updateMedicamentoRequestDto.categoria,
            descricao: updateMedicamentoRequestDto.descricao,
            active: updateMedicamentoRequestDto.active,
        });
        this.logService.updated({
            mensagem: `Medicamento "${updatedMedicamento.nome}" atualizado pelo usuário ${user.nome}`,
            artefato: updatedMedicamento.id,
            modulo: 'Medicamento',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: updatedMedicamento,
        });
    }
    async remove(user, id) {
        if (!id)
            throw new common_1.HttpException('Id não foi enviado.', common_1.HttpStatus.FORBIDDEN);
        const medicamento = await this.repository.findOne(id);
        if (!medicamento)
            throw new common_1.HttpException('Medicamento não existe.', common_1.HttpStatus.NOT_FOUND);
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
            mensagem: `Medicamento "${medicamento.nome}" excluído pelo usuário ${user.nome}`,
            artefato: medicamento.id,
            modulo: 'Medicamento',
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
        const medicamento = await this.repository.findOne(id);
        if (!medicamento)
            throw new common_1.HttpException('Medicamento não existe.', common_1.HttpStatus.NOT_FOUND);
        const updatedMedicamento = await this.repository.update(id, {
            nome: medicamento.nome,
            codigo: medicamento.codigo,
            especificacao: medicamento.especificacao,
            categoria: medicamento.categoria,
            descricao: medicamento.descricao ?? undefined,
            active: !medicamento.active,
        });
        this.logService.actived({
            mensagem: `Medicamento "${updatedMedicamento.nome}" ${updatedMedicamento.active ? 'ativado' : 'desativado'} pelo usuário ${user.nome}`,
            artefato: updatedMedicamento.id,
            modulo: 'Medicamento',
            ip: user.ip,
            userId: user.id,
        });
        return this.handleSuccessResponse({
            code: common_1.HttpStatus.ACCEPTED,
            response: updatedMedicamento,
        });
    }
};
exports.MedicamentoController = MedicamentoController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Autenticado)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicamentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicamentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, medicamento_dto_1.CreateMedicamentoRequestDto]),
    __metadata("design:returntype", Promise)
], MedicamentoController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, medicamento_dto_1.UpdateMedicamentoRequestDto]),
    __metadata("design:returntype", Promise)
], MedicamentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MedicamentoController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/toggle-active'),
    (0, roles_decorator_1.Setor)([roles_decorator_1.TypeSetor.Administrador, roles_decorator_1.TypeSetor.Farmacia]),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MedicamentoController.prototype, "toggleActive", null);
exports.MedicamentoController = MedicamentoController = __decorate([
    (0, common_1.Controller)('medicamentos'),
    __metadata("design:paramtypes", [medicamento_repository_1.MedicamentoRepository,
        log_repository_1.LogService])
], MedicamentoController);
//# sourceMappingURL=medicamento.controller.js.map