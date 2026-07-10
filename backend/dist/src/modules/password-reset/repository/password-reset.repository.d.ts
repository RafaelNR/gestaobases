import { PrismaService } from "../../../infra/database/prisma/prisma.service";
export declare class PasswordResetRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findUserByUserName(username: string): Promise<{
        password: string;
        id: string;
        active: boolean;
        username: string;
        nome: string;
        email: string | null;
        telefone: string | null;
        baseId: string;
        setorId: string;
        cargoId: string;
        created_at: Date;
        updated_at: Date;
    } | null>;
    invalidatePendingTokens(userId: string): Promise<import("../../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    createToken(data: {
        userId: string;
        tokenHash: string;
        expiresAt: Date;
    }): Promise<{
        id: string;
        userId: string;
        tokenHash: string;
        expiresAt: Date;
        usedAt: Date | null;
    }>;
    findAllPendingByUser(userId: string): Promise<{
        id: string;
        userId: string;
        tokenHash: string;
        expiresAt: Date;
        usedAt: Date | null;
    }[]>;
    markUsed(id: string): Promise<{
        id: string;
        userId: string;
        tokenHash: string;
        expiresAt: Date;
        usedAt: Date | null;
    }>;
    updatePasswordHash(accountId: string, passwordHash: string): Promise<{
        password: string;
        id: string;
        active: boolean;
        username: string;
        nome: string;
        email: string | null;
        telefone: string | null;
        baseId: string;
        setorId: string;
        cargoId: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
