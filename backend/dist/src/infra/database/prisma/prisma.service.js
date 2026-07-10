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
var PrismaService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
require("dotenv/config");
const common_1 = require("@nestjs/common");
const adapter_mariadb_1 = require("@prisma/adapter-mariadb");
const client_1 = require("../../../../generated/prisma/client");
const config_1 = require("@nestjs/config");
const common_2 = require("@nestjs/common");
function getPrismaAdapter(configService) {
    const adapter = new adapter_mariadb_1.PrismaMariaDb({
        host: configService.get('DB_HOST'),
        port: Number(configService.get('DB_PORT')),
        user: configService.get('MYSQL_USER'),
        password: configService.get('MYSQL_PASSWORD'),
        database: configService.get('MYSQL_DB'),
        connectionLimit: 15,
        acquireTimeout: 10000,
        connectTimeout: 5000,
        idleTimeout: 300,
    });
    return adapter;
}
let PrismaService = PrismaService_1 = class PrismaService extends client_1.PrismaClient {
    configService;
    adapter;
    logger;
    constructor(configService) {
        super({ adapter: getPrismaAdapter(configService) });
        this.configService = configService;
        this.logger = new common_2.Logger(PrismaService_1.name);
    }
    async onModuleInit() {
        try {
            this.logger.log('Inicializando conexão Prisma...');
            await this.$connect();
        }
        catch (error) {
            this.logger.error('Erro ao conectar no banco via PRIMA ❌', error);
            throw error;
        }
    }
    async onModuleDestroy() {
        this.logger.log('Encerrando conexão PRISMA...');
        await this.$disconnect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = PrismaService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.ConfigService)),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map