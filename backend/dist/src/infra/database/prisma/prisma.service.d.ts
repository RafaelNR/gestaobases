import 'dotenv/config';
import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from "../../../../generated/prisma/client";
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { EnvironmentVariables } from '@src/common/types/env';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private readonly configService;
    readonly adapter: PrismaMariaDb;
    readonly logger: Logger;
    constructor(configService: ConfigService<EnvironmentVariables>);
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
