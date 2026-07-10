import { ArgumentsHost, Catch, HttpStatus, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@generated/prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const logger = new Logger(PrismaClientExceptionFilter.name);
    logger.error(`Prisma Error [${exception.code}]: ${exception.message}`);

    const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'DEV';

    const send = (status: number, message: string) => {
      response.status(status).json({
        statusCode: status,
        message,
        success: false,
      });
    };

    switch (exception.code) {
      case 'P2000':
        return send(HttpStatus.BAD_REQUEST, 'Dados inválidos enviados.');

      case 'P2002':
        return send(
          HttpStatus.CONFLICT,
          'Já existe um registro com esses dados.'
        );

      case 'P2003':
        return send(
          HttpStatus.BAD_REQUEST,
          'Relacionamento inválido entre dados.'
        );

      case 'P2025':
        return send(HttpStatus.NOT_FOUND, 'Registro não encontrado.');

      case 'P2020':
        return send(HttpStatus.BAD_REQUEST, 'Erro ao processar dados.');

      default:
        return send(
          HttpStatus.INTERNAL_SERVER_ERROR,
          isDev
            ? exception.message // só em DEV
            : 'Erro interno no servidor.'
        );
    }
  }
}

@Catch(Prisma.PrismaClientInitializationError)
export class PrismaClientInitializationExceptionFilter extends BaseExceptionFilter {
  catch(
    exception: Prisma.PrismaClientInitializationError,
    host: ArgumentsHost
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'DEV';

    const status = HttpStatus.BAD_GATEWAY;
    response.status(status).json({
      statusCode: status,
      // Nunca expor mensagem bruta em produção — pode conter DATABASE_URL com senha
      message: isDev ? exception.message.replace(/\n/g, '') : 'Serviço temporariamente indisponível.',
      success: false,
    });
  }
}

@Catch(Prisma.PrismaClientUnknownRequestError)
export class PrismaClientUnknownRequestErrorExceptionFilter extends BaseExceptionFilter {
  catch(
    exception: Prisma.PrismaClientUnknownRequestError,
    host: ArgumentsHost
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    const status = HttpStatus.BAD_GATEWAY;
    response.status(status).json({
      statusCode: status,
      message:
        process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'DEV'
          ? message
          : 'Erro buscador dados, tente mais tarde.',
      success: false,
    });
  }
}
