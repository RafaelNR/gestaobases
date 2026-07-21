"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MedicamentoRepository", {
    enumerable: true,
    get: function() {
        return MedicamentoRepository;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../../../infra/database/prisma/prisma.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let MedicamentoRepository = class MedicamentoRepository {
    constructor(prisma){
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.medicamento.findMany({
            orderBy: {
                nome: 'asc'
            },
            include: {
                User: {
                    select: {
                        nome: true
                    }
                }
            }
        });
    }
    async findOne(id) {
        return this.prisma.medicamento.findUnique({
            where: {
                id
            },
            include: {
                User: {
                    select: {
                        nome: true
                    }
                }
            }
        });
    }
    async create(data) {
        return this.prisma.medicamento.create({
            data
        });
    }
    async update(id, data) {
        return this.prisma.medicamento.update({
            where: {
                id
            },
            data
        });
    }
    async remove(id) {
        return this.prisma.medicamento.delete({
            where: {
                id
            }
        });
    }
    async count(where) {
        return this.prisma.medicamento.count({
            where
        });
    }
};
MedicamentoRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], MedicamentoRepository);

//# sourceMappingURL=medicamento.repository.js.map