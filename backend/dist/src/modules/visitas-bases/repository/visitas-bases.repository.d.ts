import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { VisitasBases } from "../../../../generated/prisma/client";
import { CreateVisitaBaseRequestDto, UpdateVisitaBaseRequestDto } from '../dto/visitas-bases.dto';
export declare class VisitasBasesService {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findAll(filters?: {
        mes?: number;
        ano?: number;
    }): Promise<VisitasBases[]>;
    findOne(id: string): Promise<VisitasBases | null>;
    create(data: CreateVisitaBaseRequestDto & {
        userId: string;
    }): Promise<VisitasBases>;
    update(id: string, data: UpdateVisitaBaseRequestDto & {
        userId: string;
    }): Promise<VisitasBases>;
    remove(id: string): Promise<VisitasBases>;
}
