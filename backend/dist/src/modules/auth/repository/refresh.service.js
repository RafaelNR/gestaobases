"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RefreshTokenService", {
    enumerable: true,
    get: function() {
        return RefreshTokenService;
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
let RefreshTokenService = class RefreshTokenService {
    constructor(prisma){
        this.prisma = prisma;
    }
    async create(data) {
        // await this.prisma.refreshToken.deleteMany({
        //   where: {
        //     family: data.family,
        //     userId: data.userId,
        //   },
        // });
        return this.prisma.refreshToken.create({
            data: {
                tokenHash: data.tokenHash,
                family: data.family,
                userId: data.userId,
                ip: data.ip,
                userAgent: data.userAgent,
                expiresAt: data.expiresAt
            }
        });
    }
    async findByHash(tokenHash) {
        return this.prisma.refreshToken.findUnique({
            where: {
                tokenHash
            }
        });
    }
    async revoke(id) {
        return this.prisma.refreshToken.update({
            where: {
                id
            },
            data: {
                revokedAt: new Date()
            }
        });
    }
    async revokeFamily(familyId) {
        return this.prisma.refreshToken.updateMany({
            where: {
                family: familyId,
                revokedAt: null
            },
            data: {
                revokedAt: new Date()
            }
        });
    }
    async revokeAllForUser(userId) {
        return this.prisma.refreshToken.updateMany({
            where: {
                userId,
                revokedAt: null
            },
            data: {
                revokedAt: new Date()
            }
        });
    }
};
RefreshTokenService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], RefreshTokenService);

//# sourceMappingURL=refresh.service.js.map