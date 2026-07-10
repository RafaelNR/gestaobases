import 'dotenv/config';
import {
  Injectable,
  Inject,
  INestApplication,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '@generated/prisma/client';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { EnvironmentVariables } from '@src/common/types/env';

function getPrismaAdapter(configService: ConfigService<EnvironmentVariables>) {
  const adapter = new PrismaMariaDb({
    host: configService.get('DB_HOST'),
    port: Number(configService.get('DB_PORT')),
    user: configService.get('MYSQL_USER'),
    password: configService.get('MYSQL_PASSWORD'),
    database: configService.get('MYSQL_DB'),
    connectionLimit: 15, // pool size
    acquireTimeout: 10000, // wait up to 10s for a connection
    connectTimeout: 5000, // 5s connect timeout (similar to v6)
    idleTimeout: 300, // 300s idle timeout (seconds)a
    //logger: {
    // network: (info) => console.log('PrismaAdapterNetwork', info),
    // query: (info) => console.log('PrismaAdapterQuery', info),
    // error: (err) => console.error('PrismaAdapterError', err),
    // warning: (info) => console.warn('PrismaAdapterWarning', info),
    //},
  });
  return adapter;
}

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  public readonly adapter!: PrismaMariaDb;
  public readonly logger: Logger;

  constructor(@Inject(ConfigService) private readonly configService: ConfigService<EnvironmentVariables>) {
    super({ adapter: getPrismaAdapter(configService) });
    this.logger = new Logger(PrismaService.name);
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

  // async enableShutdownHooks(app: INestApplication) {
  //   process.on('beforeExit', async () => {
  //     console.log('PRISMA DISCONNECT...!');
  //     await this.$disconnect();
  //     await app.close();
  //   });
  // }
}
