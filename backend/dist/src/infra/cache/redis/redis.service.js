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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = __importDefault(require("ioredis"));
let RedisService = class RedisService {
    redis;
    constructor(redis) {
        this.redis = redis;
    }
    async set(key, value, ttl = 60) {
        await this.redis.set(key, JSON.stringify(value), 'EX', ttl);
    }
    async get(key) {
        const data = await this.redis.get(key);
        return data ? JSON.parse(data) : null;
    }
    async del(key) {
        await this.redis.del(key);
    }
    async exists(key) {
        return (await this.redis.exists(key)) === 1;
    }
    async expire(key, ttl) {
        await this.redis.expire(key, ttl);
    }
    async increment(key, ttl) {
        const count = await this.redis.incr(key);
        if (ttl && count === 1)
            await this.redis.expire(key, ttl);
        return count;
    }
    async decrement(key) {
        return this.redis.decr(key);
    }
    async getOrSet(key, factory, ttl = 60) {
        const cached = await this.get(key);
        if (cached !== null)
            return cached;
        const value = await factory();
        await this.set(key, value, ttl);
        return value;
    }
    async zadd(key, score, member) {
        await this.redis.zadd(key, score, member);
    }
    async zrem(key, member) {
        await this.redis.zrem(key, member);
    }
    async zscore(key, member) {
        const score = await this.redis.zscore(key, member);
        return score !== null ? parseFloat(score) : null;
    }
    async zcard(key) {
        return this.redis.zcard(key);
    }
    async zremrangebyscore(key, min, max) {
        await this.redis.zremrangebyscore(key, min, max);
    }
    async zpopmin(key, count = 1) {
        return this.redis.zpopmin(key, count);
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REDIS')),
    __metadata("design:paramtypes", [ioredis_1.default])
], RedisService);
//# sourceMappingURL=redis.service.js.map