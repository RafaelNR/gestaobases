import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { Base, Prisma } from "../../../../generated/prisma/client";
import { CreateBaseRequestDto, UpdateBaseRequestDto } from '../dto/base.dto';
export declare class BaseRepository {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findAll(): Promise<Base[]>;
    findOne(id: string): Promise<Base | null>;
    create(data: CreateBaseRequestDto): Promise<Base>;
    update(id: string, data: UpdateBaseRequestDto): Promise<Base>;
    remove(id: string): Promise<Base>;
    count(where: Prisma.BaseWhereInput): Promise<number>;
}
