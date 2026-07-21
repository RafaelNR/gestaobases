"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedisService", {
    enumerable: true,
    get: function() {
        return RedisService;
    }
});
const _common = require("@nestjs/common");
const _ioredis = /*#__PURE__*/ _interop_require_default(require("ioredis"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
let RedisService = class RedisService {
    constructor(redis){
        this.redis = redis;
    }
    // ─── String operations ────────────────────────────────────────────────────
    async set(key, value, ttl = 60) {
        await this.redis.set(key, JSON.stringify(value), 'EX', ttl); // EX é o tempo de expiração em segundos
    }
    async get(key) {
        const data = await this.redis.get(key);
        return data ? JSON.parse(data) : null;
    }
    // Deletar chave
    async del(key) {
        await this.redis.del(key);
    }
    // Verificar se a chave existe
    async exists(key) {
        return await this.redis.exists(key) === 1;
    }
    // Verificar o tempo de expiração da chave
    async expire(key, ttl) {
        await this.redis.expire(key, ttl);
    }
    // Incrementar chave
    async increment(key, ttl) {
        const count = await this.redis.incr(key);
        if (ttl && count === 1) await this.redis.expire(key, ttl);
        return count;
    }
    // Decrementar chave
    async decrement(key) {
        return this.redis.decr(key);
    }
    // Get ou set (cache-aside): retorna o valor em cache ou chama a função factory, armazena o resultado e retorna.
    async getOrSet(key, factory, ttl = 60) {
        const cached = await this.get(key);
        if (cached !== null) return cached;
        const value = await factory();
        await this.set(key, value, ttl);
        return value;
    }
    // ─── Sorted set operations (session tracking) ─────────────────────────────
    // Adicionar membro ao sorted set
    async zadd(key, score, member) {
        await this.redis.zadd(key, score, member);
    }
    // Remover membro do sorted set
    async zrem(key, member) {
        await this.redis.zrem(key, member);
    }
    // Obter a pontuação de um membro no sorted set
    async zscore(key, member) {
        const score = await this.redis.zscore(key, member);
        return score !== null ? parseFloat(score) : null;
    }
    // Obter o número de membros no sorted set
    async zcard(key) {
        return this.redis.zcard(key);
    }
    // Remover membros do sorted set dentro de um intervalo de pontuação
    async zremrangebyscore(key, min, max) {
        await this.redis.zremrangebyscore(key, min, max);
    }
    // Remover os membros com menor pontuação do sorted set
    async zpopmin(key, count = 1) {
        return this.redis.zpopmin(key, count);
    }
};
RedisService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)('REDIS')),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _ioredis.default === "undefined" ? Object : _ioredis.default
    ])
], RedisService);

//# sourceMappingURL=redis.service.js.map