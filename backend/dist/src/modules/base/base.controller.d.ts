import { CreateBaseRequestDto, UpdateBaseRequestDto } from './dto/base.dto';
import { BaseRepository } from './repository/base.repository';
import { BaseController, IResponse } from "../../common/bases/BaseController";
import { IUser } from "../../common/decorator/user.decorator";
import { LogService } from '../../infra/logger/repository/log.repository';
export declare class BasesController extends BaseController {
    private readonly baseRepository;
    private readonly logService;
    constructor(baseRepository: BaseRepository, logService: LogService);
    findAll(): Promise<IResponse<any>>;
    findOne(id: string): Promise<IResponse<any>>;
    create(user: IUser, createBaseRequestDto: CreateBaseRequestDto): Promise<IResponse<any>>;
    update(user: IUser, id: string, updateBaseRequestDto: UpdateBaseRequestDto): Promise<IResponse<any>>;
    remove(user: IUser, id: string): Promise<IResponse<any>>;
}
