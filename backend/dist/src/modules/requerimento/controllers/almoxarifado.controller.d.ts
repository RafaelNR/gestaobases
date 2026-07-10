import { BaseController, IResponse } from "../../../common/bases/BaseController";
import { IUser } from "../../../common/decorator/user.decorator";
import { LogService } from '../../../infra/logger/repository/log.repository';
import { AddItemRequestDto, ChangeStatusRequestDto, CreateRequerimentoAlmoxarifadoAndCMERequestDto, UpdateItemRequestDto, UpdateRequerimentoAlmoxarifadoAndCMERequestDto } from '../dto/requerimento.dto';
import { RequerimentoService } from '../services/requerimento.service';
import type { FiltroRequerimentos } from '../services/requerimento.service';
import { RequerimentoItemResult, RequerimentoResult } from '../types/requerimento.types';
export declare class AlmoxarifadoController extends BaseController {
    private readonly service;
    private readonly logService;
    constructor(service: RequerimentoService, logService: LogService);
    findAll(user: IUser): Promise<IResponse<RequerimentoResult[]>>;
    findByStatus(user: IUser): Promise<IResponse<RequerimentoResult[]>>;
    findByFiltro(filtro: FiltroRequerimentos, user: IUser): Promise<IResponse<RequerimentoResult[]>>;
    findOne(id: string, user: IUser): Promise<IResponse<RequerimentoResult>>;
    create(dto: CreateRequerimentoAlmoxarifadoAndCMERequestDto, user: IUser): Promise<IResponse<RequerimentoResult>>;
    update(id: string, dto: UpdateRequerimentoAlmoxarifadoAndCMERequestDto, user: IUser): Promise<IResponse<RequerimentoResult>>;
    enviar(id: string, user: IUser): Promise<IResponse<RequerimentoResult>>;
    changeStatus(id: string, dto: ChangeStatusRequestDto, user: IUser): Promise<IResponse<RequerimentoResult>>;
    delete(id: string, user: IUser): Promise<IResponse<void>>;
    addItem(id: string, dto: AddItemRequestDto, user: IUser): Promise<IResponse<RequerimentoItemResult>>;
    updateItem(id: string, itemId: string, dto: UpdateItemRequestDto, user: IUser): Promise<IResponse<RequerimentoItemResult>>;
    removeItem(id: string, itemId: string, user: IUser): Promise<IResponse<void>>;
}
