"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RequerimentoRepository", {
    enumerable: true,
    get: function() {
        return RequerimentoRepository;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../../../infra/database/prisma/prisma.service");
const _requerimentotypes = require("../types/requerimento.types");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let RequerimentoRepository = class RequerimentoRepository {
    constructor(prisma){
        this.prisma = prisma;
    }
    async findAll(tipo, where) {
        return this.prisma.requerimento.findMany({
            take: 150,
            where: {
                tipo,
                ...where
            },
            include: {
                _count: {
                    select: {
                        RequerimentoItems: {
                            where: {
                                deleted_by: null
                            }
                        }
                    }
                },
                Ambulancia: {
                    select: {
                        id: true,
                        nome: true,
                        tipo: true
                    }
                },
                User: {
                    select: {
                        nome: true
                    }
                }
            },
            orderBy: {
                numero: 'desc'
            }
        });
    }
    async findById(id, tipo) {
        return this.prisma.requerimento.findFirst({
            where: {
                id,
                tipo
            },
            include: {
                RequerimentoItems: {
                    where: {
                        deleted_by: null
                    },
                    include: _requerimentotypes.REQUERIMENTO_ITEM_INCLUDE,
                    orderBy: [
                        {
                            Produto: {
                                ordem: {
                                    sort: 'asc',
                                    nulls: 'last'
                                }
                            }
                        },
                        {
                            Medicamento: {
                                nome: 'asc'
                            }
                        }
                    ]
                },
                RequerimentoStatus: {
                    orderBy: {
                        created_at: 'desc'
                    }
                },
                Ambulancia: {
                    select: {
                        id: true,
                        nome: true,
                        tipo: true
                    }
                },
                User: {
                    select: {
                        nome: true,
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
                        },
                        Base: {
                            select: {
                                nome: true,
                                tipo_ambulancias: true
                            }
                        }
                    }
                }
            }
        });
    }
    async findRawById(id, tipo) {
        return this.prisma.requerimento.findFirst({
            where: {
                id,
                tipo
            }
        });
    }
    async getNextNumero() {
        const last = await this.prisma.requerimento.findFirst({
            orderBy: {
                numero: 'desc'
            },
            select: {
                numero: true
            }
        });
        return (last?.numero ?? 0) + 1;
    }
    async countActiveItems(requerimentoId) {
        return this.prisma.requerimentoItem.count({
            where: {
                requerimentoId: requerimentoId,
                deleted_by: null
            }
        });
    }
    async create(data) {
        return this.prisma.requerimento.create({
            data
        });
    }
    async createItems(items) {
        await this.prisma.requerimentoItem.createMany({
            data: items
        });
    }
    async update(id, data) {
        return this.prisma.requerimento.update({
            where: {
                id
            },
            data
        });
    }
    async updateStatus(id, status, userId) {
        const [updated] = await this.prisma.$transaction([
            this.prisma.requerimento.update({
                where: {
                    id
                },
                data: {
                    status,
                    data_fim: [
                        'Finalizado',
                        'Cancelado'
                    ].includes(status) ? new Date() : null
                }
            }),
            this.prisma.requerimentoStatus.create({
                data: {
                    requerimentoId: id,
                    status,
                    userId
                }
            })
        ]);
        return updated;
    }
    async delete(id) {
        await this.prisma.requerimento.delete({
            where: {
                id
            }
        });
    }
    async findItem(itemId, requerimentoId) {
        return this.prisma.requerimentoItem.findFirst({
            where: {
                id: itemId,
                requerimentoId: requerimentoId,
                deleted_by: null
            }
        });
    }
    async findActiveItems(requerimentoId) {
        return this.prisma.requerimentoItem.findMany({
            where: {
                requerimentoId,
                deleted_by: null
            },
            orderBy: {
                created_at: 'asc'
            }
        });
    }
    async createItem(data) {
        return this.prisma.requerimentoItem.create({
            data,
            include: _requerimentotypes.REQUERIMENTO_ITEM_INCLUDE
        });
    }
    async updateItem(itemId, data) {
        return this.prisma.requerimentoItem.update({
            where: {
                id: itemId
            },
            data,
            include: _requerimentotypes.REQUERIMENTO_ITEM_INCLUDE
        });
    }
    async softDeleteItem(itemId, deletedById) {
        await this.prisma.requerimentoItem.update({
            where: {
                id: itemId
            },
            data: {
                deleted_by: deletedById
            }
        });
    }
};
RequerimentoRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], RequerimentoRepository);

//# sourceMappingURL=requerimento.repository.js.map