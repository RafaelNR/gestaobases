import { PrismaService } from "../../../infra/database/prisma/prisma.service";
export declare class AuthRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findUserByUsername(username: string): Promise<({
        Base: {
            nome: string;
        };
        Setor: {
            nome: string;
        };
        Cargo: {
            nome: string;
        };
    } & {
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
    }) | null>;
    findUserById(id: string): Promise<({
        Base: {
            nome: string;
        };
        Setor: {
            nome: string;
        };
        Cargo: {
            nome: string;
        };
    } & {
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
    }) | null>;
    findUserWithProfile(id: string): Promise<{
        Base: {
            nome: string;
            tipo_ambulancias: import("../../../../generated/prisma/enums").TipoAmbulancias;
        };
        id: string;
        username: string;
        nome: string;
        email: string | null;
        telefone: string | null;
        baseId: string;
        setorId: string;
        cargoId: string;
        Setor: {
            nome: string;
            nomeVisivel: string;
        };
        Cargo: {
            nome: string;
            nomeVisivel: string;
        };
    } | null>;
    createRefreshToken(data: {
        userId: string;
        tokenHash: string;
        family: string;
        expiresAt: Date;
        userAgent?: string;
        ip?: string;
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
    findRefreshTokenByHash(tokenHash: string): Promise<{
        id: string;
        ip: string | null;
        userId: string;
        tokenHash: string;
        family: string;
        expiresAt: Date;
        revokedAt: Date | null;
        userAgent: string | null;
    } | null>;
    revokeRefreshToken(id: string): Promise<{
        id: string;
        ip: string | null;
        userId: string;
        tokenHash: string;
        family: string;
        expiresAt: Date;
        revokedAt: Date | null;
        userAgent: string | null;
    }>;
    revokeAllTokensByFamily(family: string): Promise<import("../../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    revokeAllUserTokens(userId: string): Promise<import("../../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    findActiveRefreshTokensByUser(userId: string): Promise<{
        id: string;
        tokenHash: string;
        family: string;
        expiresAt: Date;
    }[]>;
}
