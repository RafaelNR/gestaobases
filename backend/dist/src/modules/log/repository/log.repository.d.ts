import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { Prisma } from "../../../../generated/prisma/client";
export declare class LogRepository {
    private readonly prisma;
    private database;
    constructor(prisma: PrismaService);
    findAll(params: {
        take: number;
        skip: number;
        where?: Prisma.LogWhereInput;
    }): Promise<{
        tipo: import("@generated/prisma/client").TipoLog;
        modulo: string;
        artefato: string | null;
        ip: string;
        mensagem: string;
        createdAt: Date;
        userId: string;
    }[]>;
}
