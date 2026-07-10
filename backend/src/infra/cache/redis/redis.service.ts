import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@Inject('REDIS') private redis: Redis) { }

  // ─── String operations ────────────────────────────────────────────────────

  async set(key: string, value: any, ttl = 60) {
    await this.redis.set(key, JSON.stringify(value), 'EX', ttl); // EX é o tempo de expiração em segundos
  }

  async get<T>(key: string): Promise<T | null> {
    const data = await this.redis.get(key);
    return data ? JSON.parse(data) : null;
  }


  // Deletar chave
  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }

  // Verificar se a chave existe
  async exists(key: string): Promise<boolean> {
    return (await this.redis.exists(key)) === 1;
  }

  // Verificar o tempo de expiração da chave
  async expire(key: string, ttl: number): Promise<void> {
    await this.redis.expire(key, ttl);
  }

  // Incrementar chave
  async increment(key: string, ttl?: number): Promise<number> {
    const count = await this.redis.incr(key);
    if (ttl && count === 1) await this.redis.expire(key, ttl);
    return count;
  }

  // Decrementar chave
  async decrement(key: string): Promise<number> {
    return this.redis.decr(key);
  }

  // Get ou set (cache-aside): retorna o valor em cache ou chama a função factory, armazena o resultado e retorna.
  async getOrSet<T>(key: string, factory: () => Promise<T>, ttl = 60): Promise<T> {
    const cached = await this.get<T>(key);
    if (cached !== null) return cached;
    const value = await factory();
    await this.set(key, value, ttl);
    return value;
  }

  // ─── Sorted set operations (session tracking) ─────────────────────────────

  // Adicionar membro ao sorted set
  async zadd(key: string, score: number, member: string): Promise<void> {
    await this.redis.zadd(key, score, member);
  }

  // Remover membro do sorted set
  async zrem(key: string, member: string): Promise<void> {
    await this.redis.zrem(key, member);
  }

  // Obter a pontuação de um membro no sorted set
  async zscore(key: string, member: string): Promise<number | null> {
    const score = await this.redis.zscore(key, member);
    return score !== null ? parseFloat(score) : null;
  }

  // Obter o número de membros no sorted set
  async zcard(key: string): Promise<number> {
    return this.redis.zcard(key);
  }

  // Remover membros do sorted set dentro de um intervalo de pontuação
  async zremrangebyscore(key: string, min: number | string, max: number | string): Promise<void> {
    await this.redis.zremrangebyscore(key, min, max);
  }

  // Remover os membros com menor pontuação do sorted set
  async zpopmin(key: string, count = 1): Promise<string[]> {
    return this.redis.zpopmin(key, count);
  }
}