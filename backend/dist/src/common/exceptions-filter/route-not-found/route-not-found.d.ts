import { ExceptionFilter, ArgumentsHost, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
export declare class NotFoundErrorFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost): Response<any, Record<string, any>>;
}
