"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BaseRepository", {
    enumerable: true,
    get: function() {
        return BaseRepository;
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
let BaseRepository = class BaseRepository {
    constructor(prisma){
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.base.findMany({
            orderBy: {
                nome: 'asc'
            }
        });
    }
    async findOne(id) {
        return this.prisma.base.findUnique({
            where: {
                id
            }
        });
    }
    async create(data) {
        return this.prisma.base.create({
            data
        });
    }
    async update(id, data) {
        return this.prisma.base.update({
            where: {
                id
            },
            data
        });
    }
    async remove(id) {
        return this.prisma.base.delete({
            where: {
                id
            }
        });
    }
    async count(where) {
        return this.prisma.base.count({
            where
        });
    }
};
BaseRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], BaseRepository);

//# sourceMappingURL=base.repository.js.map