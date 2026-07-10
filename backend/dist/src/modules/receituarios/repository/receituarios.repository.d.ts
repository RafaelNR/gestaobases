import { PrismaService } from "../../../infra/database/prisma/prisma.service";
import { StatusReceituario } from "../../../../generated/prisma/client";
import { ReceituarioMedicamentoResult, ReceituarioResult } from '../types/receituarios.types';
import { CreateReceituarioRequestDto } from '../dto/receituarios.dto';
import { UpdateReceituarioRequestDto } from '../dto/receituarios.dto';
import { AddMedicamentoRequestDto } from '../dto/receituarios.dto';
import { UpdateMedicamentoRequestDto } from '../dto/receituarios.dto';
export declare class ReceituariosRepository {
    prisma: PrismaService;
    constructor(prisma: PrismaService);
    findAll(filters?: {
        base?: string;
        status?: StatusReceituario;
    }): Promise<ReceituarioResult[]>;
    findById(id: string): Promise<ReceituarioResult | null>;
    findRawById(id: string): Promise<{
        id: string;
        status: StatusReceituario;
        data: Date;
        userId: string;
        baseId: string;
        created_at: Date;
        updated_at: Date;
        numero: string;
        ambulanciaId: string;
        obs: string | null;
        requerimentoId: string | null;
        ocorrencia: number;
        data_ocorrencia: Date;
        medicoId: string;
    } | null>;
    getNextNumero(): Promise<string>;
    create(data: CreateReceituarioRequestDto, userId: string): Promise<ReceituarioResult>;
    update(id: string, data: UpdateReceituarioRequestDto): Promise<ReceituarioResult>;
    updateStatus(id: string, status: StatusReceituario): Promise<ReceituarioResult>;
    remove(id: string): Promise<void>;
    findMedicamento(medId: string): Promise<ReceituarioMedicamentoResult | null>;
    addMedicamento(receituarioId: string, data: AddMedicamentoRequestDto, userId: string): Promise<ReceituarioMedicamentoResult>;
    updateMedicamento(medId: string, data: UpdateMedicamentoRequestDto): Promise<ReceituarioMedicamentoResult>;
    removeMedicamento(medId: string): Promise<void>;
}
