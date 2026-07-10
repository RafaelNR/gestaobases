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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const prisma_service_1 = require("../../infra/database/prisma/prisma.service");
const auth_decorator_1 = require("../../infra/auth/auth.decorator");
const config_1 = require("@nestjs/config");
let HealthController = class HealthController {
    health;
    prismaHealth;
    memory;
    disk;
    http;
    prisma;
    configService;
    frontendUrl;
    constructor(health, prismaHealth, memory, disk, http, prisma, configService) {
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
            () => this.prismaHealth.pingCheck('database', this.prisma),
            () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
            () => this.memory.checkRSS('memory_rss', 300 * 1024 * 1024),
            () => this.disk.checkStorage('storage', {
                path: process.cwd(),
                thresholdPercent: 0.9,
            }),
            () => this.http.pingCheck('api-externa', this.frontendUrl),
        ]);
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)(),
    (0, auth_decorator_1.Public)(),
    (0, terminus_1.HealthCheck)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "check", null);
exports.HealthController = HealthController = __decorate([
    (0, common_1.Controller)('online'),
    __metadata("design:paramtypes", [terminus_1.HealthCheckService,
        terminus_1.PrismaHealthIndicator,
        terminus_1.MemoryHealthIndicator,
        terminus_1.DiskHealthIndicator,
        terminus_1.HttpHealthIndicator,
        prisma_service_1.PrismaService,
        config_1.ConfigService])
], HealthController);
//# sourceMappingURL=health.controller.js.map