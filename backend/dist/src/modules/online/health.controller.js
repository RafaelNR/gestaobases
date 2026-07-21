"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HealthController", {
    enumerable: true,
    get: function() {
        return HealthController;
    }
});
const _common = require("@nestjs/common");
const _terminus = require("@nestjs/terminus");
const _prismaservice = require("../../infra/database/prisma/prisma.service");
const _authdecorator = require("../../infra/auth/auth.decorator");
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
let HealthController = class HealthController {
    constructor(health, prismaHealth, memory, disk, http, prisma, configService){
        this.health = health;
        this.prismaHealth = prismaHealth;
        this.memory = memory;
        this.disk = disk;
        this.http = http;
        this.prisma = prisma;
        this.configService = configService;
        this.frontendUrl = this.configService.getOrThrow('FRONT_END');
    }
    check() {
        return this.health.check([
            // 1. Verifica se o banco de dados está respondendo
            ()=>this.prismaHealth.pingCheck('database', this.prisma),
            // 2. Verifica se o processo Node.js não está consumindo mais de 150MB de memória Heap
            // (ajuste os valores conforme o consumo normal da sua aplicação)
            ()=>this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
            // 3. Verifica se o total de memória RAM alocada pelo processo não ultrapassa 300MB
            ()=>this.memory.checkRSS('memory_rss', 300 * 1024 * 1024),
            // 4. Verifica se o disco não está com mais de 90% (0.9) de espaço de armazenamento cheio
            ()=>this.disk.checkStorage('storage', {
                    path: process.cwd(),
                    thresholdPercent: 0.9
                }),
            // 5. Verifica se uma API externa está respondendo (exemplo com o Google)
            // Substitua a URL pela API de pagamentos ou serviço real que você utiliza
            ()=>this.http.pingCheck('api-externa', this.frontendUrl)
        ]);
    }
};
_ts_decorate([
    (0, _common.Get)(),
    (0, _authdecorator.Public)(),
    (0, _terminus.HealthCheck)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", void 0)
], HealthController.prototype, "check", null);
HealthController = _ts_decorate([
    (0, _common.Controller)('online'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _terminus.HealthCheckService === "undefined" ? Object : _terminus.HealthCheckService,
        typeof _terminus.PrismaHealthIndicator === "undefined" ? Object : _terminus.PrismaHealthIndicator,
        typeof _terminus.MemoryHealthIndicator === "undefined" ? Object : _terminus.MemoryHealthIndicator,
        typeof _terminus.DiskHealthIndicator === "undefined" ? Object : _terminus.DiskHealthIndicator,
        typeof _terminus.HttpHealthIndicator === "undefined" ? Object : _terminus.HttpHealthIndicator,
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService,
        typeof _config.ConfigService === "undefined" ? Object : _config.ConfigService
    ])
], HealthController);

//# sourceMappingURL=health.controller.js.map