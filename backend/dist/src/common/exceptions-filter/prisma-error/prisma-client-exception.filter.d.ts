import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from "../../../../generated/prisma/client";
export declare class PrismaClientExceptionFilter extends BaseExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): void;
}
export declare class PrismaClientInitializationExceptionFilter extends BaseExceptionFilter {
    catch(exception: Prisma.PrismaClientInitializationError, host: ArgumentsHost): void;
}
export declare class PrismaClientUnknownRequestErrorExceptionFilter extends BaseExceptionFilter {
    catch(exception: Prisma.PrismaClientUnknownRequestError, host: ArgumentsHost): void;
}
