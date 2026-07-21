"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: function() {
        return UserService;
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
let UserService = class UserService {
    constructor(prisma){
        this.prisma = prisma;
    }
    async user(where, select) {
        return this.prisma.user.findUnique({
            where,
            include: {
                Setor: true,
                Base: true,
                Cargo: true
            }
        });
    }
    async users(params) {
        const { skip, take, cursor, where, orderBy, select } = params;
        const user = this.prisma.user.findMany({
            select,
            skip,
            take,
            cursor,
            where,
            orderBy
        });
        if (!user) {
            throw new _common.NotFoundException('User not found');
        }
        return user;
    }
    async createUser(data) {
        const user = await this.prisma.user.create({
            data
        });
        return user;
    }
    async updateUser(params) {
        const { where, data } = params;
        return this.prisma.user.update({
            data: {
                ...data
            },
            where: {
                id: where.id
            }
        });
    }
    async deleteUser(where) {
        return this.prisma.user.update({
            data: {
                active: false
            },
            where: {
                id: where.id
            }
        });
    }
    async countUserIsExiste(Dados) {
        return this.prisma.user.count({
            where: {
                username: Dados.username
            }
        });
    }
    async usersNotificationBySetor(setor) {
        return await this.prisma.user.findMany({
            select: {
                id: true,
                email: true
            },
            where: {
                active: true,
                Setor: {
                    nome: setor
                }
            }
        });
    }
    async usersNotificationBySetorAndBase(setor, base) {
        return await this.prisma.user.findMany({
            select: {
                id: true,
                email: true
            },
            where: {
                active: true,
                Setor: {
                    nome: setor
                },
                Base: {
                    nome: base
                }
            }
        });
    }
    async usersNotificationByIds(ids) {
        return await this.prisma.user.findMany({
            select: {
                id: true,
                email: true
            },
            where: {
                id: {
                    in: ids
                }
            }
        });
    }
};
UserService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], UserService);

//# sourceMappingURL=users.repository.js.map