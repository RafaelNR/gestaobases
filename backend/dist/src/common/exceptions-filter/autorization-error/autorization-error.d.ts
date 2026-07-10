import { ExceptionFilter, ArgumentsHost, ForbiddenException } from '@nestjs/common';
import { Response } from 'express';
export declare class ForbiddenExceptionFilter implements ExceptionFilter {
    catch(exception: ForbiddenException, host: ArgumentsHost): Response<any, Record<string, any>>;
}
