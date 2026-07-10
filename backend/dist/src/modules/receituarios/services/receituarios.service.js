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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceituariosService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../../../generated/prisma/client");
const roles_decorator_1 = require("../../../infra/guard/roles.decorator");
const receituarios_repository_1 = require("../repository/receituarios.repository");
const TERMINAL_STATUSES = [client_1.StatusReceituario.Cancelado];
let ReceituariosService = class ReceituariosService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    assertFound(value, message = 'Registro não encontrado.') {
        if (value == null)
            throw new common_1.NotFoundException(message);
    }
    assertPermission(condition, message = 'Ação não permitida.') {
        if (!condition)
            throw new common_1.ForbiddenException(message);
    }
    assertCondition(condition, message) {
        if (!condition)
            throw new common_1.BadRequestException(message);
    }
    async findAll(filters, user) {
        const isAdmin = user.setor === roles_decorator_1.TypeSetor.Administrador;
        const effectiveBase = isAdmin ? filters.base : user.baseId;
        return this.repository.findAll({
            base: effectiveBase,
            status: filters.status,
        });
    }
    async findOne(id) {
        const data = await this.repository.findById(id);
        this.assertFound(data, 'Receituário não encontrado.');
        return data;
    }
    async create(dto, user) {
        if (dto.data && dto.data_ocorrencia) {
            this.assertCondition(new Date(dto.data) <= new Date(dto.data_ocorrencia), 'A data do receituário não pode ser posterior à data da ocorrência.');
        }
        return this.repository.create(dto, user.id);
    }
    async update(id, dto, user) {
        const rec = await this.repository.findRawById(id);
        this.assertFound(rec, 'Receituário não encontrado.');
        const isAdmin = user.setor === roles_decorator_1.TypeSetor.Administrador;
        if (rec.status !== client_1.StatusReceituario.Aberto) {
            this.assertPermission(isAdmin, 'Apenas administradores podem editar receituários que não estão Abertos.');
        }
        return this.repository.update(id, dto);
    }
    async changeStatus(id, dto) {
        const rec = await this.repository.findRawById(id);
        this.assertFound(rec, 'Receituário não encontrado.');
        this.assertCondition(!TERMINAL_STATUSES.includes(rec.status), `Não é possível alterar o status de um receituário ${rec.status}.`);
        return this.repository.updateStatus(id, dto.status);
    }
    async remove(id) {
        const rec = await this.repository.findRawById(id);
        this.assertFound(rec, 'Receituário não encontrado.');
        this.assertCondition(rec.status === client_1.StatusReceituario.Aberto, 'Apenas receituários com status Aberto podem ser removidos.');
        await this.repository.remove(id);
    }
    async addMedicamento(receituarioId, dto, userId) {
        const rec = await this.repository.findRawById(receituarioId);
        this.assertFound(rec, 'Receituário não encontrado.');
        this.assertCondition(rec.status === client_1.StatusReceituario.Aberto, 'Medicamentos só podem ser adicionados a receituários com status Aberto.');
        return this.repository.addMedicamento(receituarioId, dto, userId);
    }
    async updateMedicamento(receituarioId, medId, dto) {
        const med = await this.repository.findMedicamento(medId);
        this.assertFound(med, 'Medicamento não encontrado.');
        this.assertCondition(med.receituarioId === receituarioId, 'Medicamento não pertence ao receituário informado.');
        return this.repository.updateMedicamento(medId, dto);
    }
    async removeMedicamento(receituarioId, medId) {
        const med = await this.repository.findMedicamento(medId);
        this.assertFound(med, 'Medicamento não encontrado.');
        this.assertCondition(med.receituarioId === receituarioId, 'Medicamento não pertence ao receituário informado.');
        await this.repository.removeMedicamento(medId);
    }
};
exports.ReceituariosService = ReceituariosService;
exports.ReceituariosService = ReceituariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [receituarios_repository_1.ReceituariosRepository])
], ReceituariosService);
//# sourceMappingURL=receituarios.service.js.map