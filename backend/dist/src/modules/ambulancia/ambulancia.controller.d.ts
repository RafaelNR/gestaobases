import { CreateAmbulanciaRequestDto, UpdateAmbulanciaRequestDto } from './dto/ambulancia.dto';
import { AmbulanciaRepository } from './repository/ambulancia.repository';
import { BaseController, IResponse } from "../../common/bases/BaseController";
import { IUser } from "../../common/decorator/user.decorator";
import { LogService } from '../../infra/logger/repository/log.repository';
export declare class AmbulanciaController extends BaseController {
    private readonly ambulanciaRepository;
    private readonly logService;
    constructor(ambulanciaRepository: AmbulanciaRepository, logService: LogService);
    findAll(): Promise<IResponse<any>>;
    findAllByBase(base: string): Promise<IResponse<any>>;
    findOne(id: string): Promise<IResponse<any>>;
    create(user: IUser, createAmbulanciaRequestDto: CreateAmbulanciaRequestDto): Promise<IResponse<any>>;
    update(user: IUser, id: string, updateAmbulanciaRequestDto: UpdateAmbulanciaRequestDto): Promise<IResponse<any>>;
    remove(user: IUser, id: string): Promise<IResponse<any>>;
}
