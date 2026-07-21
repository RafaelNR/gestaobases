"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "StatsCacheTask", {
    enumerable: true,
    get: function() {
        return StatsCacheTask;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../../database/prisma/prisma.service");
const _redisservice = require("../../cache/redis/redis.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
const STATS_TTL = 65 * 60; // 65 min — garante sobreposição com o próximo ciclo horário
let StatsCacheTask = class StatsCacheTask {
    constructor(prisma, redis){
        this.prisma = prisma;
        this.redis = redis;
        this.logger = new _common.Logger(StatsCacheTask.name);
    }
};
StatsCacheTask = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService,
        typeof _redisservice.RedisService === "undefined" ? Object : _redisservice.RedisService
    ])
], StatsCacheTask);

//# sourceMappingURL=stats-cache.task.js.map