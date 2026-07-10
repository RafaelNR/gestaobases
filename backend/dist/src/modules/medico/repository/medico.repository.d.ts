import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { Medico, Prisma } from "../../../../generated/prisma/client";
export declare class MedicoRepository {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findAll(): Promise<Medico[]>;
    findOne(id: string): Promise<Medico | null>;
    create(data: {
        nome: string;
        crm: string;
        telefone?: string | null;
        email?: string | null;
        userId: string;
    }): Promise<Medico>;
    update(id: string, data: {
        nome: string;
        crm: string;
        telefone?: string | null;
        email?: string | null;
    }): Promise<Medico>;
    remove(id: string): Promise<Medico>;
    count(where: Prisma.MedicoWhereInput): Promise<number>;
}
