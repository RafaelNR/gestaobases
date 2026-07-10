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
exports.RequerimentoRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma/prisma.service");
const requerimento_types_1 = require("../types/requerimento.types");
let RequerimentoRepository = class RequerimentoRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(tipo, where) {
        return this.prisma.requerimento.findMany({
            take: 150,
            where: { tipo, ...where },
            include: {
                _count: {
                    select: {
                        RequerimentoItems: {
                            where: {
                                deleted_by: null,
                            },
                        },
                    },
                },
                Ambulancia: { select: { id: true, nome: true, tipo: true } },
                User: {
                    select: {
                        nome: true,
                    },
                },
            },
            orderBy: { numero: 'desc' },
        });
    }
    async findById(id, tipo) {
        return this.prisma.requerimento.findFirst({
            where: { id, tipo },
            include: {
                RequerimentoItems: {
                    where: { deleted_by: null },
                    include: requerimento_types_1.REQUERIMENTO_ITEM_INCLUDE,
                    orderBy: [
                        {
                            Produto: {
                                ordem: {
                                    sort: 'asc',
                                    nulls: 'last',
                                },
                            },
                        },
                        { Medicamento: { nome: 'asc' } },
                    ],
                },
                RequerimentoStatus: { orderBy: { created_at: 'desc' } },
                Ambulancia: { select: { id: true, nome: true, tipo: true } },
                User: {
                    select: {
                        nome: true,
                        Setor: { select: { nome: true, nomeVisivel: true } },
                        Cargo: { select: { nome: true, nomeVisivel: true } },
                        Base: { select: { nome: true, tipo_ambulancias: true } },
                    },
                },
            },
        });
    }
    async findRawById(id, tipo) {
        return this.prisma.requerimento.findFirst({ where: { id, tipo } });
    }
    async getNextNumero() {
        const last = await this.prisma.requerimento.findFirst({
            orderBy: { numero: 'desc' },
            select: { numero: true },
        });
        return (last?.numero ?? 0) + 1;
    }
    async countActiveItems(requerimentoId) {
        return this.prisma.requerimentoItem.count({
            where: { requerimentoId: requerimentoId, deleted_by: null },
        });
    }
    async create(data) {
        return this.prisma.requerimento.create({ data });
    }
    async createItems(items) {
        await this.prisma.requerimentoItem.createMany({ data: items });
    }
    async update(id, data) {
        return this.prisma.requerimento.update({ where: { id }, data });
    }
    async updateStatus(id, status, userId) {
        const [updated] = await this.prisma.$transaction([
            this.prisma.requerimento.update({ where: { id }, data: { status } }),
            this.prisma.requerimentoStatus.create({
                data: { requerimentoId: id, status, userId },
            }),
        ]);
        return updated;
    }
    async delete(id) {
        await this.prisma.requerimento.delete({
            where: { id },
        });
    }
    async findItem(itemId, requerimentoId) {
        return this.prisma.requerimentoItem.findFirst({
            where: { id: itemId, requerimentoId: requerimentoId, deleted_by: null },
        });
    }
    async findActiveItems(requerimentoId) {
        return this.prisma.requerimentoItem.findMany({
            where: { requerimentoId, deleted_by: null },
            orderBy: { created_at: 'asc' },
        });
    }
    async createItem(data) {
        return this.prisma.requerimentoItem.create({
            data,
            include: requerimento_types_1.REQUERIMENTO_ITEM_INCLUDE,
        });
    }
    async updateItem(itemId, data) {
        return this.prisma.requerimentoItem.update({
            where: { id: itemId },
            data,
            include: requerimento_types_1.REQUERIMENTO_ITEM_INCLUDE,
        });
    }
    async softDeleteItem(itemId, deletedById) {
        await this.prisma.requerimentoItem.update({
            where: { id: itemId },
            data: { deleted_by: deletedById },
        });
    }
};
exports.RequerimentoRepository = RequerimentoRepository;
exports.RequerimentoRepository = RequerimentoRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RequerimentoRepository);
//# sourceMappingURL=requerimento.repository.js.map