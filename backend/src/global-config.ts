import { INestApplication } from '@nestjs/common';
import { json, urlencoded } from 'express';

// Exception
import { HttpExceptionFilter } from './common/exceptions-filter/http-exception/http-exception';
import { ForbiddenExceptionFilter } from './common/exceptions-filter/autorization-error/autorization-error';
import { NotFoundErrorFilter } from './common/exceptions-filter/route-not-found/route-not-found';
import {
  PrismaClientExceptionFilter,
  PrismaClientInitializationExceptionFilter,
  PrismaClientUnknownRequestErrorExceptionFilter,
} from './common/exceptions-filter/prisma-error/prisma-client-exception.filter';
import { PrismaClientValidationFilter } from './common/exceptions-filter/prisma-error/prisma-client-validation.filter';
import { ValidateFilter } from './common/exceptions-filter/validation-error/validate-exception';
import { ZodFilter } from './common/exceptions-filter/validation-error/zod-exception';
import { DeleteFileOnErrorFilter } from './common/exceptions-filter/file-error/File-error.filter';
import { NotFoundExceptionFilter } from './common/errors/NotFound';

//* MIDDLEWARES
import { HelmetMiddleware } from './common/middleware/helmet';
import cookieParser from 'cookie-parser';
import { MulterExceptionFilter } from './common/exceptions-filter/multer-error/multer-error';
import { allowedOrigins } from './origins';

export function applyGlobalConfig(app: INestApplication) {
  app.useGlobalFilters(
    new HttpExceptionFilter(),
    new PrismaClientExceptionFilter(),
    new PrismaClientInitializationExceptionFilter(),
    new PrismaClientValidationFilter(),
    new PrismaClientUnknownRequestErrorExceptionFilter(),
    new ForbiddenExceptionFilter(),
    new NotFoundErrorFilter(),
    new ZodFilter(),
    new ValidateFilter(),
    new NotFoundExceptionFilter(),
    new DeleteFileOnErrorFilter(),
    new MulterExceptionFilter()
  );
  app.use(HelmetMiddleware);
  app.use(cookieParser());
  app.enableCors({
    origin: (origin, callback) => {
      // Permite chamadas sem Origin (ambiente dev)
      if (!origin && process.env.NODE_ENV === 'DEV')
        return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error('Not allowed by CORS, origin: ' + origin),
        false
      );
    },
    credentials: true,
    methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  });
  app.use(json({ limit: '1mb' }));
  app.use(urlencoded({ extended: true, limit: '1mb' }));
}
