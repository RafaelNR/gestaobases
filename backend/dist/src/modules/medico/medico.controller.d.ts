import { CreateMedicoRequestDto, UpdateMedicoRequestDto } from './dto/medico.dto';
import { MedicoRepository } from './repository/medico.repository';
import { BaseController, IResponse } from "../../common/bases/BaseController";
import { IUser } from "../../common/decorator/user.decorator";
import { LogService } from '../../infra/logger/repository/log.repository';
export declare class MedicoController extends BaseController {
    private readonly service;
    private readonly logService;
    constructor(service: MedicoRepository, logService: LogService);
    findAll(): Promise<IResponse<any>>;
    findOne(id: string): Promise<IResponse<any>>;
    create(user: IUser, dto: CreateMedicoRequestDto): Promise<IResponse<any>>;
    update(user: IUser, id: string, dto: UpdateMedicoRequestDto): Promise<IResponse<any>>;
}
