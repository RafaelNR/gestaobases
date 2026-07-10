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
exports.PasswordResetRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma/prisma.service");
let PasswordResetRepository = class PasswordResetRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findUserByUserName(username) {
        return this.prisma.user.findUnique({ where: { username } });
    }
    async invalidatePendingTokens(userId) {
        return this.prisma.passwordResetToken.updateMany({
            where: { userId, usedAt: null },
            data: { usedAt: new Date() },
        });
    }
    async createToken(data) {
        return this.prisma.passwordResetToken.create({ data });
    }
    async findAllPendingByUser(userId) {
        return this.prisma.passwordResetToken.findMany({
            where: { userId, usedAt: null, expiresAt: { gt: new Date() } },
        });
    }
    async markUsed(id) {
        return this.prisma.passwordResetToken.update({
            where: { id },
            data: { usedAt: new Date() },
        });
    }
    async updatePasswordHash(accountId, passwordHash) {
        return this.prisma.user.update({
            where: { id: accountId },
            data: { password: passwordHash },
        });
    }
};
exports.PasswordResetRepository = PasswordResetRepository;
exports.PasswordResetRepository = PasswordResetRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PasswordResetRepository);
//# sourceMappingURL=password-reset.repository.js.map