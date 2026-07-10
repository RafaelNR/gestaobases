import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { MulterError } from 'multer';

@Catch(MulterError)
export class MulterExceptionFilter implements ExceptionFilter {
  catch(exception: MulterError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    console.log('aqui');
    console.log(exception);

    if (exception.code === 'LIMIT_FILE_SIZE') {
      return response.status(400).json({
        message: 'Arquivo excede o tamanho máximo.',
      });
    }

    if (exception.message) {
      return response.status(400).json({
        message: exception.message,
      });
    }

    return response.status(400).json({
      message: exception.message,
    });
  }
}
