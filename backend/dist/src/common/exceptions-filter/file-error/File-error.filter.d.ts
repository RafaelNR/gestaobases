import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import FileError from "../../errors/FileError";
export declare class DeleteFileOnErrorFilter implements ExceptionFilter {
    catch(exception: FileError, host: ArgumentsHost): Response<any, Record<string, any>>;
}
