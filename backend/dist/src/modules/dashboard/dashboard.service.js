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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infra/database/prisma/prisma.service");
const enums_1 = require("../../../generated/prisma/enums");
const roles_decorator_1 = require("../../infra/guard/roles.decorator");
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async countByStatus(query) {
        const { tipo, setor, base, cargo } = query;
        return this.prisma.requerimento.groupBy({
            by: ['status'],
            where: {
                ...(tipo ? { tipo } : {}),
                ...(setor ? { setor } : {}),
                ...(base ? { base } : {}),
                ...(cargo ? { cargo } : {}),
                status: {
                    notIn: ['Rascunho', 'Cancelado', 'Analise'],
                },
            },
            _count: {
                status: true,
            },
        });
    }
    async countRequerimentos(user, tipo) {
        if (user.setor === roles_decorator_1.TypeSetor.Administrador) {
            return await this.countByStatus({ tipo });
        }
        let setor = undefined;
        let base = undefined;
        let cargo = undefined;
        if (user?.setor === 'Almoxarifado') {
            tipo = enums_1.TipoRequerimento.Almoxarifado;
        }
        if (user?.setor === 'CME') {
            tipo = enums_1.TipoRequerimento.CME;
        }
        if (user?.setor === 'Farmacia') {
            tipo = enums_1.TipoRequerimento.Farmacia;
        }
        if (user?.setor === 'Base') {
            setor = user?.setor;
            base = user?.base;
        }
        if (user?.setor === 'Administrativo') {
            setor = user?.setor;
            base = user?.base;
            cargo = user?.cargo;
        }
        return await this.countByStatus({
            tipo,
            setor,
            base,
            cargo,
        });
    }
    buildSerie(raw, inicio, fim) {
        const mapa = new Map();
        for (const row of raw) {
            const dia = row.createdAt.toISOString().slice(0, 10);
            mapa.set(dia, (mapa.get(dia) ?? 0) + row._count.uuid);
        }
        const serie = [];
        const cursor = new Date(inicio);
        while (cursor <= fim) {
            const chave = cursor.toISOString().slice(0, 10);
            serie.push(mapa.get(chave) ?? 0);
            cursor.setDate(cursor.getDate() + 1);
        }
        return serie;
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map