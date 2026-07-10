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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma/prisma.service");
let LogService = class LogService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async log(tipo, dados) {
        await this.prisma.log.create({
            data: {
                ip: dados.ip,
                mensagem: dados.mensagem,
                artefato: dados.artefato,
                modulo: dados.modulo,
                tipo,
                User: {
                    connect: { id: dados.userId },
                },
            },
        });
    }
    async created(dados) {
        return this.log('created', dados);
    }
    async updated(dados) {
        return this.log('updated', dados);
    }
    async actived(dados) {
        return this.log('active', dados);
    }
    async deleted(dados) {
        return this.log('deleted', dados);
    }
    async disabled(dados) {
        return this.log('disable', dados);
    }
    async status(dados) {
        return this.log('status', dados);
    }
    async validation(dados) {
        return this.log('updated', dados);
    }
};
exports.LogService = LogService;
exports.LogService = LogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => prisma_service_1.PrismaService))),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LogService);
//# sourceMappingURL=log.repository.js.map