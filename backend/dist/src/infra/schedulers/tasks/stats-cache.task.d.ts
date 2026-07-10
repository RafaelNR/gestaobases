import { PrismaService } from "../../database/prisma/prisma.service";
import { RedisService } from "../../cache/redis/redis.service";
export declare class StatsCacheTask {
    private readonly prisma;
    private readonly redis;
    private readonly logger;
    constructor(prisma: PrismaService, redis: RedisService);
}
