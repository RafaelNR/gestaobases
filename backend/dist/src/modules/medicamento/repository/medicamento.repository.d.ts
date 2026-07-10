import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { Medicamento, Prisma } from "../../../../generated/prisma/client";
import { CreateMedicamentoRequestDto, UpdateMedicamentoRequestDto } from '../dto/medicamento.dto';
export declare class MedicamentoRepository {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findAll(): Promise<Medicamento[]>;
    findOne(id: string): Promise<Medicamento | null>;
    create(data: CreateMedicamentoRequestDto & {
        userId: string;
    }): Promise<Medicamento>;
    update(id: string, data: Omit<UpdateMedicamentoRequestDto, 'id'>): Promise<Medicamento>;
    remove(id: string): Promise<Medicamento>;
    count(where: Prisma.MedicamentoWhereInput): Promise<number>;
}
