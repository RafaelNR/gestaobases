import { HealthCheckService, PrismaHealthIndicator, MemoryHealthIndicator, DiskHealthIndicator, HttpHealthIndicator } from '@nestjs/terminus';
import { PrismaService } from "../../infra/database/prisma/prisma.service";
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@src/common/types/env';
export declare class HealthController {
    private health;
    private prismaHealth;
    private memory;
    private disk;
    private http;
    private prisma;
    private readonly configService;
    private frontendUrl;
    constructor(health: HealthCheckService, prismaHealth: PrismaHealthIndicator, memory: MemoryHealthIndicator, disk: DiskHealthIndicator, http: HttpHealthIndicator, prisma: PrismaService, configService: ConfigService<EnvironmentVariables>);
    check(): Promise<import("@nestjs/terminus").HealthCheckResult<import("@nestjs/terminus").HealthIndicatorResult<string, import("@nestjs/terminus").HealthIndicatorStatus, Record<string, any>> & import("@nestjs/terminus").HealthIndicatorResult<"api-externa"> & import("@nestjs/terminus").HealthIndicatorResult<"storage"> & import("@nestjs/terminus").HealthIndicatorResult<"memory_rss"> & import("@nestjs/terminus").HealthIndicatorResult<"memory_heap"> & import("@nestjs/terminus").HealthIndicatorResult<"database">, Partial<import("@nestjs/terminus").HealthIndicatorResult<string, import("@nestjs/terminus").HealthIndicatorStatus, Record<string, any>> & import("@nestjs/terminus").HealthIndicatorResult<"api-externa"> & import("@nestjs/terminus").HealthIndicatorResult<"storage"> & import("@nestjs/terminus").HealthIndicatorResult<"memory_rss"> & import("@nestjs/terminus").HealthIndicatorResult<"memory_heap"> & import("@nestjs/terminus").HealthIndicatorResult<"database">> | undefined, Partial<import("@nestjs/terminus").HealthIndicatorResult<string, import("@nestjs/terminus").HealthIndicatorStatus, Record<string, any>> & import("@nestjs/terminus").HealthIndicatorResult<"api-externa"> & import("@nestjs/terminus").HealthIndicatorResult<"storage"> & import("@nestjs/terminus").HealthIndicatorResult<"memory_rss"> & import("@nestjs/terminus").HealthIndicatorResult<"memory_heap"> & import("@nestjs/terminus").HealthIndicatorResult<"database">> | undefined>>;
}
