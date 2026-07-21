"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BootstrapService", {
    enumerable: true,
    get: function() {
        return BootstrapService;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../infra/database/prisma/prisma.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const PLANS_TTL = 60 * 60; // 1 hora
let BootstrapService = class BootstrapService {
    constructor(prisma){
        this.prisma = prisma;
        this.logger = new _common.Logger(BootstrapService.name);
    }
    async onModuleInit() {
        await this.waitForDatabasePrisma();
    // await this.seedPlansCache();
    // await this.seedStatsCache();
    }
    async waitForDatabasePrisma(retries = 3) {
        for(let i = 1; i <= retries; i++){
            try {
                await this.prisma.$queryRaw`SELECT 1`;
                this.logger.log('Conexão com banco via PRISMA OK ✅');
                return;
            } catch  {
                this.logger.log(`Tentativa de executar a query de teste falou, Tentativa: ${i}  ⚠️`);
                await new Promise((r)=>setTimeout(r, 1000));
            }
        }
        throw new Error('Todas as tentativas de se conectar ao prima falham. ❌');
    }
};
BootstrapService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService
    ])
], BootstrapService);

//# sourceMappingURL=bootstrap.service.js.map