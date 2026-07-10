import { CreateSetorRequestDto, UpdateSetorRequestDto } from './dto/setor.dto';
import { SetorService } from './repository/setor.repository';
import { BaseController, IResponse } from "../../common/bases/BaseController";
import { IUser } from "../../common/decorator/user.decorator";
import { LogService } from '../../infra/logger/repository/log.repository';
export declare class SetorController extends BaseController {
    private readonly setorService;
    private readonly logService;
    constructor(setorService: SetorService, logService: LogService);
    findAll(): Promise<IResponse<any>>;
    findOne(id: string): Promise<IResponse<any>>;
    create(user: IUser, createSetorRequestDto: CreateSetorRequestDto): Promise<IResponse<any>>;
    update(user: IUser, id: string, updateSetorRequestDto: UpdateSetorRequestDto): Promise<IResponse<any>>;
    remove(user: IUser, id: string): Promise<IResponse<any>>;
}
