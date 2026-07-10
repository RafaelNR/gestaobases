import { Status, TipoRequerimento } from "../../../../generated/prisma/client";
import { IUser } from "../../../common/decorator/user.decorator";
import { AddItemRequestDto, ChangeStatusRequestDto, CreateRequerimentoAlmoxarifadoAndCMERequestDto, CreateRequerimentoFarmaciaRequestDto, UpdateItemRequestDto, UpdateRequerimentoAlmoxarifadoAndCMERequestDto, UpdateRequerimentoFarmaciaRequestDto } from '../dto/requerimento.dto';
import { RequerimentoRepository } from '../repository/requerimento.repository';
import { RequerimentoItemResult, RequerimentoResult } from '../types/requerimento.types';
export type FiltroRequerimentos = {
    status?: Status;
    base?: string;
    userId?: string;
    ambulanciaId?: string;
    data_inicial?: Date | string;
    data_final?: Date | string;
    numero?: number | string;
};
export declare class RequerimentoService {
    private readonly repo;
    constructor(repo: RequerimentoRepository);
    private isGetAll;
    private buildFiltroWhere;
    private validateItemProduct;
    private syncItems;
    findAll(tipo: TipoRequerimento, user: IUser): Promise<RequerimentoResult[]>;
    findByFiltro(tipo: TipoRequerimento, filtro: FiltroRequerimentos, user: IUser): Promise<RequerimentoResult[]>;
    findStatus(tipo: TipoRequerimento, user: IUser): Promise<RequerimentoResult[]>;
    findOne(id: string, tipo: TipoRequerimento, user: IUser): Promise<RequerimentoResult>;
    create(tipo: TipoRequerimento, dto: CreateRequerimentoAlmoxarifadoAndCMERequestDto | CreateRequerimentoFarmaciaRequestDto, user: IUser): Promise<RequerimentoResult>;
    update(id: string, tipo: TipoRequerimento, dto: UpdateRequerimentoAlmoxarifadoAndCMERequestDto | UpdateRequerimentoFarmaciaRequestDto, user: IUser): Promise<RequerimentoResult>;
    enviar(id: string, tipo: TipoRequerimento, user: IUser): Promise<RequerimentoResult>;
    changeStatus(id: string, tipo: TipoRequerimento, dto: ChangeStatusRequestDto, user: IUser): Promise<RequerimentoResult>;
    delete(id: string, tipo: TipoRequerimento, user: IUser): Promise<void>;
    addItem(id: string, tipo: TipoRequerimento, dto: AddItemRequestDto, user: IUser): Promise<RequerimentoItemResult>;
    updateItem(requerimentoId: string, itemId: string, tipo: TipoRequerimento, dto: UpdateItemRequestDto, user: IUser): Promise<RequerimentoItemResult>;
    removeItem(requerimentoId: string, itemId: string, tipo: TipoRequerimento, user: IUser): Promise<void>;
    private orderItems;
}
