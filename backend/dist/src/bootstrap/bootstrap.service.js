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
var BootstrapService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../infra/database/prisma/prisma.service");
const common_2 = require("@nestjs/common");
const PLANS_TTL = 60 * 60;
let BootstrapService = BootstrapService_1 = class BootstrapService {
    prisma;
    logger;
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_2.Logger(BootstrapService_1.name);
    }
    async onModuleInit() {
        await this.waitForDatabasePrisma();
    }
    async waitForDatabasePrisma(retries = 3) {
        for (let i = 1; i <= retries; i++) {
            try {
                await this.prisma.$queryRaw `SELECT 1`;
                this.logger.log('Conexão com banco via PRISMA OK ✅');
                return;
            }
            catch {
                this.logger.log(`Tentativa de executar a query de teste falou, Tentativa: ${i}  ⚠️`);
                await new Promise((r) => setTimeout(r, 1000));
            }
        }
        throw new Error('Todas as tentativas de se conectar ao prima falham. ❌');
    }
};
exports.BootstrapService = BootstrapService;
exports.BootstrapService = BootstrapService = BootstrapService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BootstrapService);
//# sourceMappingURL=bootstrap.service.js.map