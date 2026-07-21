"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthRepository", {
    enumerable: true,
    get: function() {
        return AuthRepository;
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
let AuthRepository = class AuthRepository {
    constructor(prisma){
        this.prisma = prisma;
    }
    async findUserByUsername(username) {
        return this.prisma.user.findUnique({
            where: {
                username
            },
            include: {
                Setor: {
                    select: {
                        nome: true
                    }
                },
                Cargo: {
                    select: {
                        nome: true
                    }
                },
                Base: {
                    select: {
                        nome: true
                    }
                }
            }
        });
    }
    async findUserById(id) {
        return this.prisma.user.findUnique({
            where: {
                id
            },
            include: {
                Setor: {
                    select: {
                        nome: true
                    }
                },
                Cargo: {
                    select: {
                        nome: true
                    }
                },
                Base: {
                    select: {
                        nome: true
                    }
                }
            }
        });
    }
    async findUserWithProfile(id) {
        return this.prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                nome: true,
                baseId: true,
                setorId: true,
                cargoId: true,
                Base: {
                    select: {
                        nome: true,
                        tipo_ambulancias: true
                    }
                },
                Setor: {
                    select: {
                        nome: true,
                        nomeVisivel: true
                    }
                },
                Cargo: {
                    select: {
                        nome: true,
                        nomeVisivel: true
                    }
                }
            }
        });
    }
    // Refresh Token
    async createRefreshToken(data) {
        return this.prisma.refreshToken.create({
            data
        });
    }
    async findRefreshTokenByHash(tokenHash) {
        return this.prisma.refreshToken.findUnique({
            where: {
                tokenHash
            }
        });
    }
    async revokeRefreshToken(id) {
        return this.prisma.refreshToken.update({
            where: {
                id
            },
            data: {
                revokedAt: new Date()
            }
        });
    }
    async revokeAllTokensByFamily(family) {
        return this.prisma.refreshToken.updateMany({
            where: {
                family,
                revokedAt: null
            },
            data: {
                revokedAt: new Date()
            }
        });
    }
    async revokeAllUserTokens(userId) {
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
    async findActiveRefreshTokensByUser(userId) {
        return this.prisma.refreshToken.findMany({
            where: {
                userId,
                revokedAt: null
            },
            orderBy: {
                expiresAt: 'desc'
            },
            select: {
                id: true,
                tokenHash: true,
                family: true,
                expiresAt: true
            }
        });
    }
};
AuthRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], AuthRepository);

//# sourceMappingURL=auth.repository.js.map