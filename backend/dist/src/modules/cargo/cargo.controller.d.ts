import { BaseController, IResponse } from "../../common/bases/BaseController";
import { IUser } from "../../common/decorator/user.decorator";
import { LogService } from '../../infra/logger/repository/log.repository';
import { CreateCargoRequestDto, UpdateCargoRequestDto } from './dto/cargo.dto';
import { CargoRepository } from './repository/cargo.repository';
export declare class CargoController extends BaseController {
    private readonly cargoRepository;
    private readonly logService;
    constructor(cargoRepository: CargoRepository, logService: LogService);
    findAll(): Promise<IResponse<any>>;
    findBySetor(setor: string): Promise<IResponse<any>>;
    findBySetorId(setorId: string): Promise<IResponse<any>>;
    findOne(id: string): Promise<IResponse<any>>;
    create(user: IUser, createCargoRequestDto: CreateCargoRequestDto): Promise<IResponse<any>>;
    update(user: IUser, id: string, updateCargoRequestDto: UpdateCargoRequestDto): Promise<IResponse<any>>;
    remove(user: IUser, id: string): Promise<IResponse<any>>;
}
