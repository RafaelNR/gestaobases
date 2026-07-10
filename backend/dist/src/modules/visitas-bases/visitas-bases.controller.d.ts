import { BaseController, IResponse } from "../../common/bases/BaseController";
import { IUser } from "../../common/decorator/user.decorator";
import { LogService } from '../../infra/logger/repository/log.repository';
import { CreateVisitaBaseRequestDto, UpdateVisitaBaseRequestDto } from './dto/visitas-bases.dto';
import { VisitasBasesService } from './repository/visitas-bases.repository';
export declare class VisitasBasesController extends BaseController {
    private readonly service;
    private readonly logService;
    constructor(service: VisitasBasesService, logService: LogService);
    findAll(mes?: string, ano?: string): Promise<IResponse<any>>;
    findOne(id: string): Promise<IResponse<any>>;
    create(dto: CreateVisitaBaseRequestDto, user: IUser): Promise<IResponse<any>>;
    update(id: string, dto: UpdateVisitaBaseRequestDto, user: IUser): Promise<IResponse<any>>;
    remove(id: string, user: IUser): Promise<IResponse<any>>;
}
