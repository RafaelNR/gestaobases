import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger } from '@nestjs/common';
import { applyGlobalConfig } from './global-config';
import fs from 'fs';

export class ServerSetup {
  public app!: INestApplication;
  private readonly logger = new Logger('ServerSetup');

  public async init(): Promise<void> {
    const sslAvailable =
      process.env.SSL_KEY &&
      process.env.SSL_CERT &&
      fs.existsSync(process.env.SSL_KEY) &&
      fs.existsSync(process.env.SSL_CERT);

    if (sslAvailable) {
      const httpsOptions = {
        key: fs.readFileSync(process.env.SSL_KEY as string),
        cert: fs.readFileSync(process.env.SSL_CERT as string),
      };

      this.app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'verbose', 'log'],
        httpsOptions,
        rawBody: true,
      });
      this.logger.log('HTTPS mode: Certificados SSL carregados ✅');
    } else {
      this.logger.warn(
        'Certificados SSL não encontrados. Servidor não iniciado.'
      );
      return;
    }

    applyGlobalConfig(this.app);
  }

  public async close(): Promise<void> {
    if (this.app) {
      this.app?.close();
    }
  }

  public async start(): Promise<void> {
    try {
      await this.app.listen(process.env.PORT_HTTPS || 5000);
      this.logger.verbose('HTTPS SERVER RODANDO...');

      // this.logger.verbose('Test verbose message');
      // this.logger.debug('Test debug message');
      // this.logger.log('Test log message');
      // this.logger.warn('Test warn message');
      // this.logger.error('Test error message');
    } catch (error) {
      this.logger.error('ERROR INICIAR BACKEND.');
      console.error(error);
    }
  }

  public getApp(): INestApplication {
    return this.app;
  }
}
