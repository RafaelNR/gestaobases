import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../infra/database/prisma/prisma.service';
import { Logger } from '@nestjs/common';
export declare class BootstrapService implements OnModuleInit {
    private prisma;
    readonly logger: Logger;
    constructor(prisma: PrismaService);
    onModuleInit(): Promise<void>;
    private waitForDatabasePrisma;
}
