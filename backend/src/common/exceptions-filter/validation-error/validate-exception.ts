import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import ValidateError from '@src/common/errors/ValidateError';
import { Request, Response } from 'express';

@Catch(ValidateError)
export class ValidateFilter<T extends ValidateError>
  implements ExceptionFilter
{
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = 400;

    return response.status(status).json({
      statusCode: status,
      success: false,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
