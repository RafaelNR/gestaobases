import { Cargo, Prisma } from "../../../../generated/prisma/client";
import { PrismaService } from "../../../infra/database/prisma/prisma.service";
export declare class CargoRepository {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findAll(): Promise<Cargo[]>;
    findBySetor(setor: string): Promise<Cargo[]>;
    findBySetorId(setorId: string): Promise<Cargo[]>;
    findOne(id: string): Promise<Cargo | null>;
    create(data: {
        nome: string;
        nomeVisivel: string;
        setor: string;
    }): Promise<Cargo>;
    update(id: string, data: {
        nome: string;
        nomeVisivel: string;
        setor: string;
    }): Promise<Cargo>;
    remove(id: string): Promise<Cargo>;
    count(where: Prisma.CargoWhereInput): Promise<number>;
}
