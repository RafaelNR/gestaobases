import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { CategoriaProduto, Prisma } from "../../../../generated/prisma/client";
export declare class CategoriaProdutoRepository {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findAll(): Promise<CategoriaProduto[]>;
    findOne(id: string): Promise<CategoriaProduto | null>;
    create(data: {
        nome: string;
        userId: string;
    }): Promise<CategoriaProduto>;
    update(id: string, data: {
        nome: string;
    }): Promise<CategoriaProduto>;
    remove(id: string): Promise<CategoriaProduto>;
    count(where: Prisma.CategoriaProdutoWhereInput): Promise<number>;
}
