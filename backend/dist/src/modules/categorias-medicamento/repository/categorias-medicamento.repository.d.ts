import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { CategoriasMedicamento, Prisma } from "../../../../generated/prisma/client";
export declare class CategoriasMedicamentoRepository {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findAll(): Promise<CategoriasMedicamento[]>;
    findOne(id: string): Promise<CategoriasMedicamento | null>;
    create(data: {
        nome: string;
        userId: string;
    }): Promise<CategoriasMedicamento>;
    update(id: string, data: {
        nome: string;
        active?: boolean;
    }): Promise<CategoriasMedicamento>;
    remove(id: string): Promise<CategoriasMedicamento>;
    count(where: Prisma.CategoriasMedicamentoWhereInput): Promise<number>;
}
