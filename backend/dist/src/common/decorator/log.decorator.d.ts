import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { CustomLogger } from "../../infra/logger/customLogger.service";
import { Observable } from 'rxjs';
export declare class LogDecorator implements NestInterceptor {
    private readonly logger;
    constructor(logger: CustomLogger);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
