import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { Setor, Prisma } from "../../../../generated/prisma/client";
export declare class SetorService {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findAll(): Promise<Setor[]>;
    findOne(id: string): Promise<Setor | null>;
    create(data: {
        nome: string;
        nomeVisivel: string;
    }): Promise<Setor>;
    update(id: string, data: {
        nome: string;
        nomeVisivel: string;
    }): Promise<Setor>;
    remove(id: string): Promise<Setor>;
    count(where: Prisma.SetorWhereInput): Promise<number>;
}
