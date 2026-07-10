import { BaseController, IResponse } from "../../common/bases/BaseController";
import { IUser } from "../../common/decorator/user.decorator";
import { LogService } from '../../infra/logger/repository/log.repository';
import { AddMedicamentoRequestDto, ChangeStatusReceituarioRequestDto, CreateReceituarioRequestDto, UpdateMedicamentoRequestDto, UpdateReceituarioRequestDto } from './dto/receituarios.dto';
import { ReceituariosService } from './services/receituarios.service';
import { ReceituarioMedicamentoResult, ReceituarioResult } from './types/receituarios.types';
export declare class ReceituariosController extends BaseController {
    private readonly service;
    private readonly logService;
    constructor(service: ReceituariosService, logService: LogService);
    findAll(base?: string, status?: string, user?: IUser): Promise<IResponse<ReceituarioResult[]>>;
    findOne(id: string): Promise<IResponse<ReceituarioResult>>;
    create(dto: CreateReceituarioRequestDto, user: IUser): Promise<IResponse<ReceituarioResult>>;
    update(id: string, dto: UpdateReceituarioRequestDto, user: IUser): Promise<IResponse<ReceituarioResult>>;
    changeStatus(id: string, dto: ChangeStatusReceituarioRequestDto, user: IUser): Promise<IResponse<ReceituarioResult>>;
    remove(id: string, user: IUser): Promise<IResponse<void>>;
    addMedicamento(id: string, dto: AddMedicamentoRequestDto, user: IUser): Promise<IResponse<ReceituarioMedicamentoResult>>;
    updateMedicamento(id: string, medId: string, dto: UpdateMedicamentoRequestDto): Promise<IResponse<ReceituarioMedicamentoResult>>;
    removeMedicamento(id: string, medId: string, user: IUser): Promise<IResponse<void>>;
}
