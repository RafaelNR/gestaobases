"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NotificacoesRepository", {
    enumerable: true,
    get: function() {
        return NotificacoesRepository;
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
let NotificacoesRepository = class NotificacoesRepository {
    constructor(prisma){
        this.prisma = prisma;
    }
    async createManyForUsers(userIds, data) {
        if (!userIds.length) return;
        await this.prisma.notificacao.createMany({
            data: userIds.map((userId)=>({
                    ...data,
                    userId
                }))
        });
    }
    async findByUser(userId) {
        return this.prisma.notificacao.findMany({
            where: {
                userId,
                removida: false
            },
            orderBy: {
                created_at: 'desc'
            },
            take: 50
        });
    }
    async countUnread(userId) {
        return this.prisma.notificacao.count({
            where: {
                userId,
                lida: false,
                removida: false
            }
        });
    }
    async markAsRead(id, userId) {
        await this.prisma.notificacao.updateMany({
            where: {
                id,
                userId
            },
            data: {
                lida: true
            }
        });
    }
    async markAllAsRead(userId) {
        await this.prisma.notificacao.updateMany({
            where: {
                userId,
                lida: false
            },
            data: {
                lida: true
            }
        });
    }
    async remove(id, userId) {
        await this.prisma.notificacao.updateMany({
            where: {
                id,
                userId
            },
            data: {
                removida: true
            }
        });
    }
    async removeAll(userId) {
        await this.prisma.notificacao.updateMany({
            where: {
                userId
            },
            data: {
                removida: true
            }
        });
    }
};
NotificacoesRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], NotificacoesRepository);

//# sourceMappingURL=notification.repository.js.map