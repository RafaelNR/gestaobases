"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReceituariosService", {
    enumerable: true,
    get: function() {
        return ReceituariosService;
    }
});
const _common = require("@nestjs/common");
const _client = require("../../../../generated/prisma/client");
const _rolesdecorator = require("../../../infra/guard/roles.decorator");
const _receituariosrepository = require("../repository/receituarios.repository");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const TERMINAL_STATUSES = [
    _client.StatusReceituario.Cancelado
];
let ReceituariosService = class ReceituariosService {
    constructor(repository){
        this.repository = repository;
    }
    // ---------- helpers privados ----------
    assertFound(value, message = 'Registro não encontrado.') {
        if (value == null) throw new _common.NotFoundException(message);
    }
    assertPermission(condition, message = 'Ação não permitida.') {
        if (!condition) throw new _common.ForbiddenException(message);
    }
    assertCondition(condition, message) {
        if (!condition) throw new _common.BadRequestException(message);
    }
    // ---------- métodos públicos ----------
    async findAll(filters, user) {
        const isAdmin = user.setor === _rolesdecorator.TypeSetor.Administrador;
        const effectiveBase = isAdmin ? filters.base : user.baseId;
        return this.repository.findAll({
            base: effectiveBase,
            status: filters.status
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
        const isAdmin = user.setor === _rolesdecorator.TypeSetor.Administrador;
        if (rec.status !== _client.StatusReceituario.Aberto) {
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
        this.assertCondition(rec.status === _client.StatusReceituario.Aberto, 'Apenas receituários com status Aberto podem ser removidos.');
        await this.repository.remove(id);
    }
    async addMedicamento(receituarioId, dto, userId) {
        const rec = await this.repository.findRawById(receituarioId);
        this.assertFound(rec, 'Receituário não encontrado.');
        this.assertCondition(rec.status === _client.StatusReceituario.Aberto, 'Medicamentos só podem ser adicionados a receituários com status Aberto.');
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
ReceituariosService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _receituariosrepository.ReceituariosRepository === "undefined" ? Object : _receituariosrepository.ReceituariosRepository
    ])
], ReceituariosService);

//# sourceMappingURL=receituarios.service.js.map