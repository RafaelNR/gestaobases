import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { Ambulancia, Prisma, TipoUnidade } from "../../../../generated/prisma/client";
export declare class AmbulanciaRepository {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findAll(): Promise<Ambulancia[]>;
    findByBase(base: string): Promise<Ambulancia[]>;
    findOne(id: string): Promise<Ambulancia | null>;
    create(data: {
        nome: string;
        tipo: TipoUnidade;
        baseId: string;
    }, userId: string): Promise<Ambulancia>;
    update(id: string, data: {
        nome: string;
        tipo: TipoUnidade;
        baseId: string;
    }, userId: string): Promise<Ambulancia>;
    remove(id: string): Promise<Ambulancia>;
    count(where: Prisma.AmbulanciaWhereInput): Promise<number>;
}
