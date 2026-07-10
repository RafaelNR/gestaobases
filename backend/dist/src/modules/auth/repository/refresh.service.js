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
exports.RefreshTokenService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma/prisma.service");
let RefreshTokenService = class RefreshTokenService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.refreshToken.create({
            data: {
                tokenHash: data.tokenHash,
                family: data.family,
                userId: data.userId,
                ip: data.ip,
                userAgent: data.userAgent,
                expiresAt: data.expiresAt,
            },
        });
    }
    async findByHash(tokenHash) {
        return this.prisma.refreshToken.findUnique({ where: { tokenHash } });
    }
    async revoke(id) {
        return this.prisma.refreshToken.update({
            where: { id },
            data: { revokedAt: new Date() },
        });
    }
    async revokeFamily(familyId) {
        return this.prisma.refreshToken.updateMany({
            where: { family: familyId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
    async revokeAllForUser(userId) {
        return this.prisma.refreshToken.updateMany({
            where: { userId, revokedAt: null },
            data: { revokedAt: new Date() },
        });
    }
};
exports.RefreshTokenService = RefreshTokenService;
exports.RefreshTokenService = RefreshTokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RefreshTokenService);
//# sourceMappingURL=refresh.service.js.map