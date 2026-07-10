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
exports.CategoriasMedicamentoRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma/prisma.service");
let CategoriasMedicamentoRepository = class CategoriasMedicamentoRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.categoriasMedicamento.findMany({
            orderBy: { nome: 'asc' },
            include: { User: { select: { nome: true } } },
        });
    }
    async findOne(id) {
        return this.prisma.categoriasMedicamento.findUnique({
            where: { id },
            include: { User: { select: { nome: true } } },
        });
    }
    async create(data) {
        return this.prisma.categoriasMedicamento.create({ data });
    }
    async update(id, data) {
        return this.prisma.categoriasMedicamento.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.categoriasMedicamento.delete({
            where: { id },
        });
    }
    async count(where) {
        return this.prisma.categoriasMedicamento.count({ where });
    }
};
exports.CategoriasMedicamentoRepository = CategoriasMedicamentoRepository;
exports.CategoriasMedicamentoRepository = CategoriasMedicamentoRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriasMedicamentoRepository);
//# sourceMappingURL=categorias-medicamento.repository.js.map