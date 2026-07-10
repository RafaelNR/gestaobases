import Redis from 'ioredis';
export declare class RedisService {
    private redis;
    constructor(redis: Redis);
    set(key: string, value: any, ttl?: number): Promise<void>;
    get<T>(key: string): Promise<T | null>;
    del(key: string): Promise<void>;
    exists(key: string): Promise<boolean>;
    expire(key: string, ttl: number): Promise<void>;
    increment(key: string, ttl?: number): Promise<number>;
    decrement(key: string): Promise<number>;
    getOrSet<T>(key: string, factory: () => Promise<T>, ttl?: number): Promise<T>;
    zadd(key: string, score: number, member: string): Promise<void>;
    zrem(key: string, member: string): Promise<void>;
    zscore(key: string, member: string): Promise<number | null>;
    zcard(key: string): Promise<number>;
    zremrangebyscore(key: string, min: number | string, max: number | string): Promise<void>;
    zpopmin(key: string, count?: number): Promise<string[]>;
}
