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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma/prisma.service");
let UserService = class UserService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async user(where, select) {
        return this.prisma.user.findUnique({
            where,
            include: {
                Setor: true,
                Base: true,
                Cargo: true,
            },
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
            orderBy,
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async createUser(data) {
        const user = await this.prisma.user.create({
            data,
        });
        return user;
    }
    async updateUser(params) {
        const { where, data } = params;
        return this.prisma.user.update({
            data: {
                ...data,
            },
            where: {
                id: where.id,
            },
        });
    }
    async deleteUser(where) {
        return this.prisma.user.update({
            data: {
                active: false,
            },
            where: {
                id: where.id,
            },
        });
    }
    async countUserIsExiste(Dados) {
        return this.prisma.user.count({
            where: {
                username: Dados.username,
            },
        });
    }
    async usersNotificationBySetor(setor) {
        return await this.prisma.user.findMany({
            select: {
                id: true,
                email: true,
            },
            where: {
                Setor: {
                    nome: setor,
                },
            },
        });
    }
    async usersNotificationByIds(ids) {
        return await this.prisma.user.findMany({
            select: {
                id: true,
                email: true,
            },
            where: {
                id: {
                    in: ids,
                },
            },
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=users.repository.js.map