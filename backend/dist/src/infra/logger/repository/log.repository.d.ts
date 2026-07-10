import { Prisma } from "../../../../generated/prisma/client";
import { PrismaService } from "../../database/prisma/prisma.service";
type Dados = Omit<Prisma.LogCreateInput, 'tipo' | 'User'> & {
    userId: string;
};
export declare class LogService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private log;
    created(dados: Dados): Promise<void>;
    updated(dados: Dados): Promise<void>;
    actived(dados: Dados): Promise<void>;
    deleted(dados: Dados): Promise<void>;
    disabled(dados: Dados): Promise<void>;
    status(dados: Dados): Promise<void>;
    validation(dados: Dados): Promise<void>;
}
export {};
