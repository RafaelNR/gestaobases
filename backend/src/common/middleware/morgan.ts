import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';

@Injectable()
export class MorganMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  private readonly middleware = morgan(
    process.env.NODE_ENV === 'development'
      ? ':method :url :status :response-time ms'
      : [
          ':remote-addr',
          ':method',
          ':url',
          ':status',
          ':response-time ms',
          ':res[content-length] bytes',
          '":user-agent"',
        ].join(' | '),
    {
      stream: {
        write: (message: string) => {
          this.logger.log(message.trim());
        },
      },

      skip: (req: Request) => {
        return req.originalUrl === '/health';
      },
    }
  );

  use(req: Request, res: Response, next: NextFunction): void {
    this.middleware(req, res, next);
  }
}
