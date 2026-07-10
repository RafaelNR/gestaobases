import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { Produto, Prisma } from "../../../../generated/prisma/client";
import { CreateProdutoRequestDto, UpdateProdutoRequestDto } from '../dto/produto.dto';
export declare class ProdutoRepository {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findAll(): Promise<Produto[]>;
    findOne(id: string): Promise<Produto | null>;
    create(data: CreateProdutoRequestDto & {
        userId: string;
    }): Promise<Produto>;
    update(id: string, data: Partial<UpdateProdutoRequestDto & {
        userId: string;
    }>): Promise<Produto>;
    remove(id: string): Promise<Produto>;
    count(where: Prisma.ProdutoWhereInput): Promise<number>;
}
