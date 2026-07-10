import { StatusReceituario } from "../../../../generated/prisma/client";
import { IUser } from "../../../common/decorator/user.decorator";
import { ReceituariosRepository } from '../repository/receituarios.repository';
import { ReceituarioMedicamentoResult, ReceituarioResult } from '../types/receituarios.types';
import { AddMedicamentoRequestDto, ChangeStatusReceituarioRequestDto, CreateReceituarioRequestDto, UpdateMedicamentoRequestDto, UpdateReceituarioRequestDto } from '../dto/receituarios.dto';
export declare class ReceituariosService {
    private readonly repository;
    constructor(repository: ReceituariosRepository);
    private assertFound;
    private assertPermission;
    private assertCondition;
    findAll(filters: {
        base?: string;
        status?: StatusReceituario;
    }, user: IUser): Promise<ReceituarioResult[]>;
    findOne(id: string): Promise<ReceituarioResult>;
    create(dto: CreateReceituarioRequestDto, user: IUser): Promise<ReceituarioResult>;
    update(id: string, dto: UpdateReceituarioRequestDto, user: IUser): Promise<ReceituarioResult>;
    changeStatus(id: string, dto: ChangeStatusReceituarioRequestDto): Promise<ReceituarioResult>;
    remove(id: string): Promise<void>;
    addMedicamento(receituarioId: string, dto: AddMedicamentoRequestDto, userId: string): Promise<ReceituarioMedicamentoResult>;
    updateMedicamento(receituarioId: string, medId: string, dto: UpdateMedicamentoRequestDto): Promise<ReceituarioMedicamentoResult>;
    removeMedicamento(receituarioId: string, medId: string): Promise<void>;
}
