import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from "../../../../generated/prisma/client";
export declare class PrismaClientValidationFilter extends BaseExceptionFilter {
    catch(exception: Prisma.PrismaClientValidationError, host: ArgumentsHost): void;
}
