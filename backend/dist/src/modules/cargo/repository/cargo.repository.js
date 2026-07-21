"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CargoRepository", {
    enumerable: true,
    get: function() {
        return CargoRepository;
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
let CargoRepository = class CargoRepository {
    constructor(prisma){
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.cargo.findMany({
            orderBy: {
                nomeVisivel: 'asc'
            },
            include: {
                Setor: {
                    select: {
                        nomeVisivel: true
                    }
                }
            }
        });
    }
    async findBySetor(setor) {
        return this.prisma.cargo.findMany({
            where: {
                setor
            },
            orderBy: {
                nomeVisivel: 'asc'
            },
            include: {
                Setor: {
                    select: {
                        nomeVisivel: true
                    }
                }
            }
        });
    }
    async findBySetorId(setorId) {
        return this.prisma.cargo.findMany({
            where: {
                Setor: {
                    id: setorId
                }
            },
            orderBy: {
                nomeVisivel: 'asc'
            },
            include: {
                Setor: {
                    select: {
                        nomeVisivel: true
                    }
                }
            }
        });
    }
    async findOne(id) {
        return this.prisma.cargo.findUnique({
            where: {
                id
            },
            include: {
                Setor: {
                    select: {
                        nomeVisivel: true
                    }
                }
            }
        });
    }
    async create(data) {
        return this.prisma.cargo.create({
            data
        });
    }
    async update(id, data) {
        return this.prisma.cargo.update({
            where: {
                id
            },
            data
        });
    }
    async remove(id) {
        return this.prisma.cargo.delete({
            where: {
                id
            }
        });
    }
    async count(where) {
        return this.prisma.cargo.count({
            where
        });
    }
};
CargoRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], CargoRepository);

//# sourceMappingURL=cargo.repository.js.map