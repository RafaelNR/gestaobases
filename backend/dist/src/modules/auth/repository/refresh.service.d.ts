import { PrismaService } from "../../../infra/database/prisma/prisma.service";
export declare class RefreshTokenService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: {
        tokenHash: string;
        family: string;
        userId: string;
        ip: string;
        userAgent?: string;
        expiresAt: Date;
    }): Promise<{
        id: string;
        ip: string | null;
        userId: string;
        tokenHash: string;
        family: string;
        expiresAt: Date;
        revokedAt: Date | null;
        userAgent: string | null;
    }>;
    findByHash(tokenHash: string): Promise<{
        id: string;
        ip: string | null;
        userId: string;
        tokenHash: string;
        family: string;
        expiresAt: Date;
        revokedAt: Date | null;
        userAgent: string | null;
    } | null>;
    revoke(id: string): Promise<{
        id: string;
        ip: string | null;
        userId: string;
        tokenHash: string;
        family: string;
        expiresAt: Date;
        revokedAt: Date | null;
        userAgent: string | null;
    }>;
    revokeFamily(familyId: string): Promise<import("../../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    revokeAllForUser(userId: string): Promise<import("../../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
