"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SetorService", {
    enumerable: true,
    get: function() {
        return SetorService;
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
let SetorService = class SetorService {
    constructor(prisma){
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.setor.findMany({
            orderBy: {
                nome: 'asc'
            }
        });
    }
    async findOne(id) {
        return this.prisma.setor.findUnique({
            where: {
                id
            }
        });
    }
    async create(data) {
        return this.prisma.setor.create({
            data
        });
    }
    async update(id, data) {
        return this.prisma.setor.update({
            where: {
                id
            },
            data
        });
    }
    async remove(id) {
        return this.prisma.setor.delete({
            where: {
                id
            }
        });
    }
    async count(where) {
        return this.prisma.setor.count({
            where
        });
    }
};
SetorService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], SetorService);

//# sourceMappingURL=setor.repository.js.map