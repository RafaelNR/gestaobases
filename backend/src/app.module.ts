import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

//* GUARD
import { RolesModule } from './infra/guard/roles.module';
import { AuthModule } from './infra/auth/auth.module';

//* LOG
import { LoggerModule } from 'nestjs-pino';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LogDecorator } from '@common/decorator/log.decorator';
import { CustomLogger } from './infra/logger/customLogger.service';
import { LogModule } from './infra/logger/log.module';
import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import { RequestIdMiddleware } from '@common/middleware/request-id.middleware';

import { ensureLogDir } from './infra/logger/create-log-dirs';

//* MODULES
import * as Modules from './modules/modules';
import { BootStrapModule } from './bootstrap/bootstrap.module';
import { HealthModule } from './modules/online/health.module';
import { validateEnv } from '@common/config/env.validation';
import { MorganMiddleware } from './common/middleware/morgan';
import { TasksModule } from './infra/schedulers/TaskModule';
const imports = Object.values(Modules).map((module) => module);

ensureLogDir('logs/app.log');
ensureLogDir('logs/error.log');

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      validate: validateEnv,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/images'),
      exclude: ['/{*splat}'],
      serveStaticOptions: {
        immutable: true,
      },
    }),
    ThrottlerModule.forRoot([
      {
        name: 'default',
        ttl: 60000,
        limit: 30,
      },
      {
        name: 'login',
        ttl: 60000,
        limit: 5,
      },
      {
        name: 'logout',
        ttl: 60000,
        limit: 5,
      },
    ]),
    AuthModule.forRoot(),
    RolesModule.forRoot(),
    LogModule.forRoot(),
    LoggerModule.forRoot({
      pinoHttp: {
        level: 'info',
        autoLogging: true,
        // customLevels: [],
        // useOnlyCustomLevels: true,
        customSuccessMessage: (req, res) => {
          const rawIp =
            req.headers['x-forwarded-for'] ||
            req.headers['x-real-ip'] ||
            req.socket?.remoteAddress ||
            '';

          const ip = Array.isArray(rawIp)
            ? rawIp[0]
            : rawIp.split(',')[0].trim();

          return `${req.method} ${req.url} ${res.statusCode} - ${ip}`;
        },
        customProps: (req) => ({
          ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress,
          userAgent: req.headers['user-agent'],
        }),
        transport: {
          targets: [
            {
              target: 'pino/file',
              options: { destination: 'logs/app.log', level: 'info' },
            },
            {
              target: 'pino/file',
              options: { destination: 'logs/error.log', level: 'error' },
            },
          ],
        },
      },
    }),
    BootStrapModule,
    HealthModule,
    TasksModule,
    ...imports,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LogDecorator,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    CustomLogger,
  ],
  exports: [CustomLogger],
})

// Configure
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('{*splat}');
    consumer.apply(MorganMiddleware).forRoutes('{*splat}');
  }
}
