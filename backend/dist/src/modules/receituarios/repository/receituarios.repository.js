"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReceituariosRepository", {
    enumerable: true,
    get: function() {
        return ReceituariosRepository;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../../../infra/database/prisma/prisma.service");
const _client = require("../../../../generated/prisma/client");
const _receituariostypes = require("../types/receituarios.types");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let ReceituariosRepository = class ReceituariosRepository {
    constructor(prisma){
        this.prisma = prisma;
    }
    async findAll(filters) {
        return this.prisma.receituario.findMany({
            where: filters?.base ? {
                baseId: filters.base,
                status: filters.status
            } : {
                status: filters?.status
            },
            include: _receituariostypes.RECEITUARIO_INCLUDE,
            orderBy: {
                numero: 'desc'
            }
        });
    }
    async findById(id) {
        return this.prisma.receituario.findUnique({
            where: {
                id
            },
            include: _receituariostypes.RECEITUARIO_INCLUDE
        });
    }
    async findRawById(id) {
        return this.prisma.receituario.findUnique({
            where: {
                id
            }
        });
    }
    async getNextNumero() {
        const year = new Date().getFullYear();
        const last = await this.prisma.receituario.findFirst({
            where: {
                numero: {
                    startsWith: `REC-${year}-`
                }
            },
            orderBy: {
                numero: 'desc'
            },
            select: {
                numero: true
            }
        });
        if (!last) return `REC-${year}-00001`;
        const seq = parseInt(last.numero.split('-').pop() || '0', 10);
        return `REC-${year}-${String(seq + 1).padStart(5, '0')}`;
    }
    async create(data, userId) {
        const { medicamentos = [], ...rest } = data;
        const numero = await this.getNextNumero();
        const receituario = await this.prisma.receituario.create({
            data: {
                numero,
                status: _client.StatusReceituario.Aberto,
                data: new Date(rest.data),
                data_ocorrencia: new Date(rest.data_ocorrencia),
                ocorrencia: rest.ocorrencia,
                baseId: rest.base,
                ambulanciaId: rest.ambulancia,
                requerimento: rest.requerimento ?? null,
                obs: rest.obs ?? null,
                userId,
                medicoId: rest.medicoId
            }
        });
        if (medicamentos.length > 0) {
            await this.prisma.receituarioMedicamentos.createMany({
                data: medicamentos.map((m)=>({
                        receituarioId: receituario.id,
                        medicamentoId: m.medicamento,
                        qnt: m.qnt,
                        unidade: m.unidade,
                        administracao: m.administracao,
                        diluente: m.diluente ?? null,
                        qnt_diluente: m.qnt_diluente ?? null,
                        qnt_tempo: m.qnt_tempo ?? null,
                        obs: m.obs ?? null,
                        userId
                    }))
            });
        }
        return this.findById(receituario.id);
    }
    async update(id, data) {
        return this.prisma.receituario.update({
            where: {
                id
            },
            data: {
                data: data.data ? new Date(data.data) : undefined,
                data_ocorrencia: data.data_ocorrencia ? new Date(data.data_ocorrencia) : undefined,
                ocorrencia: data.ocorrencia,
                medicoId: data.medicoId,
                baseId: data.base,
                ambulanciaId: data.ambulancia,
                requerimento: data.requerimento,
                obs: data.obs
            },
            include: _receituariostypes.RECEITUARIO_INCLUDE
        });
    }
    async updateStatus(id, status) {
        return this.prisma.receituario.update({
            where: {
                id
            },
            data: {
                status
            },
            include: _receituariostypes.RECEITUARIO_INCLUDE
        });
    }
    async remove(id) {
        await this.prisma.receituario.delete({
            where: {
                id
            }
        });
    }
    async findMedicamento(medId) {
        return this.prisma.receituarioMedicamentos.findUnique({
            where: {
                id: medId
            },
            include: _receituariostypes.RECEITUARIO_MEDICAMENTO_INCLUDE
        });
    }
    async addMedicamento(receituarioId, data, userId) {
        return this.prisma.receituarioMedicamentos.create({
            data: {
                receituarioId,
                medicamentoId: data.medicamento,
                qnt: data.qnt,
                unidade: data.unidade,
                administracao: data.administracao,
                diluente: data.diluente ?? null,
                qnt_diluente: data.qnt_diluente ?? null,
                qnt_tempo: data.qnt_tempo ?? null,
                obs: data.obs ?? null,
                userId
            },
            include: _receituariostypes.RECEITUARIO_MEDICAMENTO_INCLUDE
        });
    }
    async updateMedicamento(medId, data) {
        return this.prisma.receituarioMedicamentos.update({
            where: {
                id: medId
            },
            data: {
                qnt: data.qnt,
                unidade: data.unidade,
                administracao: data.administracao,
                diluente: data.diluente,
                qnt_diluente: data.qnt_diluente,
                qnt_tempo: data.qnt_tempo,
                obs: data.obs
            },
            include: _receituariostypes.RECEITUARIO_MEDICAMENTO_INCLUDE
        });
    }
    async removeMedicamento(medId) {
        await this.prisma.receituarioMedicamentos.delete({
            where: {
                id: medId
            }
        });
    }
};
ReceituariosRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], ReceituariosRepository);

//# sourceMappingURL=receituarios.repository.js.map