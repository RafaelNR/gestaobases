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
exports.VisitasBasesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma/prisma.service");
let VisitasBasesService = class VisitasBasesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(filters) {
        const where = {};
        if (filters?.mes && filters?.ano) {
            const start = new Date(filters.ano, filters.mes - 1, 1);
            const end = new Date(filters.ano, filters.mes, 0);
            where.data = { gte: start, lte: end };
        }
        return this.prisma.visitasBases.findMany({
            where,
            orderBy: { data: 'asc' },
            include: {
                User: {
                    select: {
                        nome: true,
                    },
                },
            },
        });
    }
    async findOne(id) {
        return this.prisma.visitasBases.findUnique({ where: { id } });
    }
    async create(data) {
        if (data.base) {
            const base = await this.prisma.base.findUnique({
                where: {
                    nome: data.base,
                },
            });
            if (!base) {
                throw new common_1.BadRequestException('Base não encontrada.');
            }
            const exist = await this.prisma.visitasBases.findFirst({
                where: {
                    base: data.base,
                    data: new Date(data.data),
                },
            });
            if (exist) {
                throw new common_1.BadRequestException('Visita já cadastrada para esta base nessa data.');
            }
        }
        if (data.outro_motivo) {
            const exist = await this.prisma.visitasBases.findFirst({
                where: {
                    outro_motivo: data.outro_motivo,
                    data: new Date(data.data),
                },
            });
            if (exist) {
                throw new common_1.BadRequestException('Visita já cadastrada para este motivo nessa data.');
            }
        }
        return this.prisma.visitasBases.create({
            data: {
                data: new Date(data.data),
                base: data.base || null,
                outro_motivo: data.outro_motivo || null,
                descricao: data.descricao || null,
                userId: data.userId,
            },
        });
    }
    async update(id, data) {
        const visitaExistente = await this.prisma.visitasBases.findUnique({
            where: { id },
        });
        if (!visitaExistente) {
            throw new common_1.BadRequestException('Visita não encontrada.');
        }
        if (data.base) {
            const base = await this.prisma.base.findUnique({
                where: {
                    nome: data.base,
                },
            });
            if (!base) {
                throw new common_1.BadRequestException('Base não encontrada.');
            }
            const exist = await this.prisma.visitasBases.findFirst({
                where: {
                    base: data.base,
                    data: new Date(data.data),
                },
            });
            if (exist && exist.id !== id) {
                throw new common_1.BadRequestException('Visita já cadastrada para esta base nessa data.');
            }
        }
        if (data.outro_motivo) {
            const exist = await this.prisma.visitasBases.findFirst({
                where: {
                    outro_motivo: data.outro_motivo,
                    data: new Date(data.data),
                },
            });
            if (exist && exist.id !== id) {
                throw new common_1.BadRequestException('Visita já cadastrada para este motivo nessa data.');
            }
        }
        return this.prisma.visitasBases.update({
            where: { id },
            data: {
                data: data.data ? new Date(data.data) : undefined,
                base: data.base ? data.base : undefined,
                outro_motivo: data.outro_motivo ? data.outro_motivo : undefined,
                descricao: data.descricao,
            },
        });
    }
    async remove(id) {
        const visitaExistente = await this.prisma.visitasBases.findUnique({
            where: { id },
        });
        if (!visitaExistente) {
            throw new common_1.BadRequestException('Visita não encontrada.');
        }
        return this.prisma.visitasBases.delete({ where: { id } });
    }
};
exports.VisitasBasesService = VisitasBasesService;
exports.VisitasBasesService = VisitasBasesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VisitasBasesService);
//# sourceMappingURL=visitas-bases.repository.js.map