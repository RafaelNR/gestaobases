import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import morgan from 'morgan';

@Injectable()
export class MorganMiddleware implements NestMiddleware {
  private readonly logger = new Logger(MorganMiddleware.name);

  use(req: any, res: any, next: () => void) {
    morgan(process.env.NODE_ENV === 'DEV' ? 'dev' : 'production', {
      stream: {
        write: (message) => this.logger.log(message),
      },
    })(req, res, next);
  }
}
