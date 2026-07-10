import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import ValidateError from "../../errors/ValidateError";
import { Response } from 'express';
export declare class ValidateFilter<T extends ValidateError> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): Response<any, Record<string, any>>;
}
