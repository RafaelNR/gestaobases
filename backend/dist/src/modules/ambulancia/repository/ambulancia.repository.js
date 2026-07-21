"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AmbulanciaRepository", {
    enumerable: true,
    get: function() {
        return AmbulanciaRepository;
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
let AmbulanciaRepository = class AmbulanciaRepository {
    constructor(prisma){
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.ambulancia.findMany({
            orderBy: {
                nome: 'asc'
            },
            include: {
                Base: {
                    select: {
                        nome: true
                    }
                },
                User: {
                    select: {
                        nome: true
                    }
                }
            }
        });
    }
    async findByBase(base) {
        return this.prisma.ambulancia.findMany({
            where: {
                Base: {
                    nome: base
                }
            },
            orderBy: {
                nome: 'asc'
            },
            include: {
                Base: {
                    select: {
                        nome: true
                    }
                },
                User: {
                    select: {
                        nome: true
                    }
                }
            }
        });
    }
    async findOne(id) {
        return this.prisma.ambulancia.findUnique({
            where: {
                id
            },
            include: {
                Base: {
                    select: {
                        nome: true
                    }
                },
                User: {
                    select: {
                        nome: true
                    }
                }
            }
        });
    }
    async create(data, userId) {
        return this.prisma.ambulancia.create({
            data: {
                nome: data.nome,
                tipo: data.tipo,
                Base: {
                    connect: {
                        id: data.baseId
                    }
                },
                User: {
                    connect: {
                        id: userId
                    }
                }
            }
        });
    }
    async update(id, data, userId) {
        return this.prisma.ambulancia.update({
            where: {
                id
            },
            data: {
                nome: data.nome,
                tipo: data.tipo,
                Base: {
                    connect: {
                        id: data.baseId
                    }
                },
                User: {
                    connect: {
                        id: userId
                    }
                }
            }
        });
    }
    async remove(id) {
        return this.prisma.ambulancia.delete({
            where: {
                id
            }
        });
    }
    async count(where) {
        return this.prisma.ambulancia.count({
            where
        });
    }
};
AmbulanciaRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], AmbulanciaRepository);

//# sourceMappingURL=ambulancia.repository.js.map