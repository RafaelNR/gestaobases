import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class CustomLogger extends PinoLogger {
  constructor() {
    super({});
  }

  log(message: string, context?: string) {
    super.info({ context, message });
  }

  error(message: string, trace?: string, context?: string) {
    super.error({ context, message, trace });
  }

  warn(message: string, context?: string) {
    super.warn({ context, message });
  }

  debug(message: string, context?: string) {
    super.debug({ context, message });
  }
}
