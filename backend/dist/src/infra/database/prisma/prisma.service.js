"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PrismaService", {
    enumerable: true,
    get: function() {
        return PrismaService;
    }
});
require("dotenv/config");
const _common = require("@nestjs/common");
const _adaptermariadb = require("@prisma/adapter-mariadb");
const _client = require("../../../../generated/prisma/client");
const _config = require("@nestjs/config");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function getPrismaAdapter(configService) {
    const adapter = new _adaptermariadb.PrismaMariaDb({
        host: configService.get('DB_HOST'),
        port: Number(configService.get('DB_PORT')),
        user: configService.get('MYSQL_USER'),
        password: configService.get('MYSQL_PASSWORD'),
        database: configService.get('MYSQL_DB'),
        connectionLimit: 15,
        acquireTimeout: 10000,
        connectTimeout: 5000,
        idleTimeout: 300
    });
    return adapter;
}
let PrismaService = class PrismaService extends _client.PrismaClient {
    constructor(configService){
        super({
            adapter: getPrismaAdapter(configService)
        }), this.configService = configService;
        this.logger = new _common.Logger(PrismaService.name);
    }
    async onModuleInit() {
        try {
            this.logger.log('Inicializando conexão Prisma...');
            await this.$connect();
        } catch (error) {
            this.logger.error('Erro ao conectar no banco via PRIMA ❌', error);
            // this.logger.error('❌ Prisma connection error cause:', error?.cause);
            // this.logger.error(
            //   '❌ Prisma connection error deep cause:',
            //   error?.cause?.cause
            // );
            throw error;
        }
    }
    async onModuleDestroy() {
        this.logger.log('Encerrando conexão PRISMA...');
        await this.$disconnect();
    }
};
PrismaService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_config.ConfigService)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], PrismaService);

//# sourceMappingURL=prisma.service.js.map