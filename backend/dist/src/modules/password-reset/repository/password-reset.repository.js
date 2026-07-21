"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PasswordResetRepository", {
    enumerable: true,
    get: function() {
        return PasswordResetRepository;
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
let PasswordResetRepository = class PasswordResetRepository {
    constructor(prisma){
        this.prisma = prisma;
    }
    async findUserByUserName(username) {
        return this.prisma.user.findUnique({
            where: {
                username
            }
        });
    }
    async invalidatePendingTokens(userId) {
        // Invalida tokens anteriores não usados
        return this.prisma.passwordResetToken.updateMany({
            where: {
                userId,
                usedAt: null
            },
            data: {
                usedAt: new Date()
            }
        });
    }
    async createToken(data) {
        return this.prisma.passwordResetToken.create({
            data
        });
    }
    async findAllPendingByUser(userId) {
        return this.prisma.passwordResetToken.findMany({
            where: {
                userId,
                usedAt: null,
                expiresAt: {
                    gt: new Date()
                }
            }
        });
    }
    async markUsed(id) {
        return this.prisma.passwordResetToken.update({
            where: {
                id
            },
            data: {
                usedAt: new Date()
            }
        });
    }
    async updatePasswordHash(accountId, passwordHash) {
        return this.prisma.user.update({
            where: {
                id: accountId
            },
            data: {
                password: passwordHash
            }
        });
    }
};
PasswordResetRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], PasswordResetRepository);

//# sourceMappingURL=password-reset.repository.js.map