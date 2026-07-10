import { Logger, Provider } from '@nestjs/common';
import Redis from 'ioredis';

const logger = new Logger('RedisProvider');

export const RedisProvider: Provider = {
  provide: 'REDIS',
  useFactory: () => {
    const client = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD || undefined,
      db: Number(process.env.REDIS_DB) || 0,
      maxRetriesPerRequest: 3,
      enableReadyCheck: true,
      lazyConnect: false,
      retryStrategy: (times) => {
        const delay = Math.min(times * 500, 5000);
        if (times > 10) {
          logger.error(`Redis: ${times} tentativas sem sucesso — desistindo ❌`);
          return null;
        }
        logger.warn(`Redis: reconectando em ${delay}ms (tentativa ${times}) ⚠️`);
        return delay;
      },
      reconnectOnError: (err) => {
        // Reconecta automaticamente em erros de READONLY (failover Redis Sentinel/Cluster)
        return err.message.includes('READONLY');
      },
    });

    client.on('connect',      () => logger.log('Redis: conectando...'));
    client.on('ready',        () => logger.log('Redis: pronto ✅'));
    client.on('error',  (err) => logger.error(`Redis: erro — ${err.message}`));
    client.on('close',        () => logger.warn('Redis: conexão fechada ⚠️'));
    client.on('reconnecting', () => logger.warn('Redis: reconectando...'));
    client.on('end',          () => logger.warn('Redis: conexão encerrada definitivamente'));

    return client;
  },
};
