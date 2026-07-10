import { PinoLogger } from 'nestjs-pino';
export declare class CustomLogger extends PinoLogger {
    constructor();
    log(message: string, context?: string): void;
    error(message: string, trace?: string, context?: string): void;
    warn(message: string, context?: string): void;
    debug(message: string, context?: string): void;
}
